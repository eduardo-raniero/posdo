import { useRouter } from 'next/router';

import styles from '../../../styles/home.module.scss';

export default function CtaBox(){
  const router = useRouter();
    
    return (
        <article className={styles.cta}>
            <div className={styles.ctaAligner}>
            <h1>What is Lorem Ipsum?</h1>
            <button onClick={() => router.push('/agendar')}>Agendar</button>
            </div>
        </article>
    )
}