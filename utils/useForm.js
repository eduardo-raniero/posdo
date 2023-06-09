import {useState} from 'react';

const useForm = validate => {
    const [values, setValues] = useState({
        Nome: '',
        Email: '',
        Mensagem: ''
    })
    const [errors, setErrors] = useState({})
    const [isDisabled, setIsDisabled] = useState(true)

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        setIsDisabled(true)
        setErrors(validate(values))

        if(errors.Nome != '' || errors.Email != '' || errors.Mensagem != ''){
            setIsDisabled(true)
        }
        
        if(errors.Nome === '' && errors.Email === '' && errors.Mensagem === ''){
            setIsDisabled(false)
        }
    };

    const handleSubmit = e => {
        const {Nome, Email, Mensagem} = values

        if((Nome == '' || errors.Nome != '') 
           || (Email == '' || errors.Email != '') 
           || (Mensagem == '' || errors.Mensagem != '')
        ){
            e.preventDefault()
        } 
        
        setErrors(validate(values))
    }

    return { handleChange, values, handleSubmit, errors, isDisabled }
};

export default useForm;