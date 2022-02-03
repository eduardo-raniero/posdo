export default function validateInfo(values){
    let errors = {}

    if(!values.Nome.trim()){
        errors.Nome = "Nome é obrigatório*"
    } else if(values.Nome.length < 3) {
        errors.Nome = "Nome muito curto"
    } else if(values.Nome.length > 2) {
        errors.Nome = ""
    }

    //Email
    if(!values.Email){
        errors.Email = "Email é obrigatório*"
    } else if(!/\S+@\S+\.\S+/.test(values.Email)) {
        errors.Email = "Email inválido"
    } else if (/\S+@\S+\.\S+/.test(values.Email)){
        errors.Email = ""
    }

    if(!values.Mensagem) {
        errors.Mensagem = "Mensagem é obrigatório*"
    } else if(values.Mensagem.length < 3) {
        errors.Mensagem = "Mensagem muito curta"
    } else if (values.Mensagem.length > 600) {
        errors.Mensagem = "Mensagem com mais de 600 caracteres!"
    } else if (values.Mensagem.length > 3 && values.Mensagem.length < 600) {
        errors.Mensagem = ""
    }

    return errors;
}