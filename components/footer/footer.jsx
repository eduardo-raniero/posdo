import styles from './footer.module.scss';

export default function Footer(){
    const year = new Date().getFullYear();

    return(
        <>
            <div className={styles.footer}>
                <div className={styles.footerAligner}>
                    <div style={{marginLeft: '0', maxWidth: '25rem'}}>
                        <span>Todos os direitos reservados Posdo {`${year}`} 31.178.616/0001-80</span>
                    </div>
                    
                    <div style={{marginRight: '0'}}>
                        <button>Sobre</button>
                        <button>História</button>
                        <button>Contato</button>
                        <button>Agendar</button>
                    </div>
                </div>
            </div>
        </>
    )
}