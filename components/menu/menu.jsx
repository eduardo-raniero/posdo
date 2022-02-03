import { useRouter } from 'next/router';
import styles from './menu.module.scss';

export default function Menu(){
    const router = useRouter();
    return(
        <>
            <div className={styles.menu}>  
                <div className={styles.menuAligner}>
                    <div style={{marginLeft: '1rem'}}>
                       <a href="/"> 
                        <img className={styles.Logo} src="./logo/TradicionalCinza.svg" alt="Posdo WebApp" />
                       </a>
                    </div>
                    
                    <div style={{marginRight: '1rem'}}>
                        <button onClick={() => router.push('/historia')}>História</button>
                        <button onClick={() => router.push('/contato')}>Contato</button>
                        <button onClick={() => router.push('/agendar')}>Agendar</button>
                    </div>
                </div>
            </div>
        </>

    )
}