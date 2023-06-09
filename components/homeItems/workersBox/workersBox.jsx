import Image from 'next/image'
import LazyLoad from 'react-lazyload';

import styles from '../../../styles/home.module.scss';

export default function WorkersBox(){
    return (
        <article className={styles.workers}>
        <div className={styles.workersAligner}>
          <h1>Nossos Almirantes</h1>

          <div style={{marginLeft: '1rem', marginRight: '1rem'}} className={styles.workersContainer}>
            <div style={{marginTop: '4rem'}} className={styles.workerBox}>
              <LazyLoad offset={120}>
                <Image 
                  width={64} 
                  height={64} 
                  src="/workers/fernando-two.png" 
                  alt="aa" 
                  loading='lazy' 
                />
              </LazyLoad>
              <br />
              <strong>Fernando Martins</strong>
              <p>Almirante com 2 anos de Posdo, ama viajar pelo país e exterior.</p>
            </div>
            <div style={{marginTop: '2rem'}} className={styles.workerBox}>
            <LazyLoad offset={120}>
                <Image 
                  width={64} 
                  height={64} 
                  src="/workers/rodrigo-two.png" 
                  alt="aa" 
                  loading='lazy' 
                />
              </LazyLoad>
              <br />
              <strong>Rodrigo Antunes</strong>
              <p>Almirante com 5 anos de Posdo, entusiasta de Sherlock Holmes.</p>
            </div>
            <div className={styles.workerBox}>
            <LazyLoad offset={120}>
                <Image 
                  width={64} 
                  height={64} 
                  src="/workers/antonio-two.png" 
                  alt="aa" 
                  loading='lazy' 
                />
              </LazyLoad>
              <br />
              <strong>Antônio Carlos</strong>
              <p>Almirante com 7 anos de Posdo, amante de motos “custom”.</p>
            </div>
          </div>
        </div>
      </article>
    )
}