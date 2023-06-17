
//CSS
import styles from '../../styles/history.module.scss'

function History(){
    return(
        <article className={styles.bigAligner}>
            <div className={styles.banner}>
                <h1>Nosso começo</h1>
                <p>Lorem Ipsum is simply dummy text</p>
            </div>
            <div className={styles.text}>
                <div style={{marginLeft: '1rem', marginRight: '1rem'}} className={styles.textAligner}>
                    <div className={styles.textGrid}>
                        <div>
                        <img style={{width: '2rem', height: '2rem', marginBottom: '1.6rem', display: 'inline'}} src="./logo/anchor.svg" alt="âncora posdo" loading='lazy' />

                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 
                            1500s, when an unknown printer took a <strong>galley of type</strong> and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 
                            1500s, when an <strong>unknown printer</strong> took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        </div>
                        
                        <img style={{marginRight: '1rem'}} src="./services/haircut-two.jpg" alt="" loading='lazy' />
                        
                    </div>
                </div>
            </div>
        </article>
    )
}

export default History;