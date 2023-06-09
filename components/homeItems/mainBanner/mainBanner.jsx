import Image from 'next/image'

import styles from '../../../styles/home.module.scss';


export default function MainBanner(){
    return (
        <article className={styles.banner}>
          <div className={styles.bannerText}>
            <h1>Lorem Ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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