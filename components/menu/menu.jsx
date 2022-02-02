import styles from './menu.module.scss';

export default function Menu(){
    return(
        <>
            <div className={styles.menu}>  
                <div className={styles.menuAligner}>
                    <div style={{marginLeft: '1rem'}}>
                        <img className={styles.Logo} src="./logo/TradicionalCinza.svg" alt="Posdo WebApp" />
                    </div>
                    
                    <div style={{marginRight: '1rem'}}>
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