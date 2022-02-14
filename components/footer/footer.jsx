import { useRouter } from 'next/router';
import styles from './footer.module.scss';

export default function Footer(){
    const year = new Date().getFullYear();
    const router = useRouter();

    return(
        <>
            <div className={styles.footer}>
                <div className={styles.footerAligner}>
                    <div style={{marginLeft: '1rem', maxWidth: '25rem'}}>
                        <span>Todos os direitos reservados Posdo {`${year}`} 31.178.616/0001-80</span>
                    </div>
                    
                    <div style={{marginRight: '1rem'}}>
                        <button style={{marginBottom: '.5rem'}} onClick={() => router.push('/historia')}>História</button>
                        <button style={{marginBottom: '.5rem'}} onClick={() => router.push('/contato')}>Contato</button>
                        <button style={{marginBottom: '.5rem'}} onClick={() => router.push('/agendar')}>Agendar</button>
                    </div>
                </div>
            </div>
        </>
    )
}