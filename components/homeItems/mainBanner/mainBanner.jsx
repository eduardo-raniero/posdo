import Image from 'next/image'

import styles from '../../../styles/home.module.scss';


export default function MainBanner(){
    return (
        <article className={styles.banner}>
          <div className={styles.bannerText}>
            <h1>Barba, Cabelo & Tradição</h1>
            <p>Posdo Barbearia, onde tradição e família são os pilares de nossa operação.</p>
          </div>
          <div style={{marginRight: '1rem'}} className={styles.oldMan}>
              <Image 
                width={"64"} 
                height={"64"} 
                className={styles.bubbles} 
                src="./banner/bubbles.svg" 
                alt="Posdo WebApp Agendar" 
                loading='lazy' 
              />

              <Image 
                width={'352'} 
                height={'633'} 
                className={styles.oldManImg} 
                src="/banner/old-man-pipe-two.png" 
                alt="Posdo Website" 
                loading='lazy' 
              />
          </div>
        </article>
    )
}