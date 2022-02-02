import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.homeAligner}>
        <article className={styles.banner}>
          <div className={styles.bannerText}>
            <h1>Lorem Ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className={styles.oldMan}>
            <img className={styles.bubbles} src="./banner/bubbles.svg" alt="Posdo WebApp Agendar" />
            <img className={styles.oldManImg} src="./banner/old-man-pipe.png" alt="Posdo Website" />
          </div>
        </article>

        <article className={styles.services}>
          <div className={styles.servicesAligner}>
            <div className={styles.servicesBox}>
              <div className={styles.servicesBigImg}>
                <img src="./services/beard-haircut.jpg" alt="Serviços Posdo Corte" />
              </div>
              <div className={styles.detailsBox}>
                <h2>Cabelo & Barba</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                <div>
                  <img src="./favicon.ico" alt="" />
                  <img src="./favicon.ico" alt="" />
                </div>
                <button>Agendar</button>
              </div>
            </div>
          </div>
        </article>

        <article className="workers">
          
        </article>
      </div>
    </>
  )
}
