import styles from '../../styles/contact.module.scss';

function Contact(){
    
    const handleForm = (e) => {
        e.preventDefault();
    }
    
    return(
        <article className={styles.bigAligner}>
            <div className={styles.banner}>
                <h1>Entre em contato!</h1>

                <form className={styles.formBox} action={handleForm}>
                    <input type="text" name="name" placeholder="Seu Nome" />
                    <input type="text" name="email" placeholder="E-mail" />
                    <textarea style={{minHeight: '5rem', minWidth: '25rem'}} name="mensagem" value="aaa"></textarea>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </article>
    )
}

export default Contact;