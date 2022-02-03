import useForm from '../../utils/useForm';
import validateInfos from '../../utils/validateInfos';

import styles from '../../styles/contact.module.scss';

function Contact(){
  const { handleChange, values, handleSubmit, errors, isDisabled } = useForm(validateInfos);

    return(
        <article className={styles.bigAligner}>
            <div className={styles.banner}>
                <h1>Entre em contato!</h1>

                <form method='POST' className={styles.formBox} onSubmit={handleSubmit}>
                    <input onChange={handleChange} onMouseEnter={handleChange} onBlur={handleChange} value={values.Nome} type="text" name="Nome" placeholder="Seu Nome" />
                    {errors.Nome && <small> {errors.Nome} </small>}

                    <input onChange={handleChange} onMouseEnter={handleChange} onBlur={handleChange} value={values.Email} type="text" name="Email" placeholder="E-mail" />
                    {errors.Email && <small> {errors.Email} </small>}
                    
                    <textarea onChange={handleChange} onMouseEnter={handleChange} onBlur={handleChange} value={values.Mensagem} style={{minHeight: '5rem', minWidth: '25rem'}} name="Mensagem" placeholder="A sua mensagem"></textarea>
                    {errors.Mensagem && <small> {errors.Mensagem} </small>}

                    <button type='submit' onClick={handleChange} disabled={isDisabled}>Enviar</button>
                </form>
            </div>
        </article>
    )
}

export default Contact;