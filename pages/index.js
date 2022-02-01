import HomeStyle from '../styles/home';

export default function Home() {
  return (
    <>
      <HomeStyle />
      <div className="home-aligner">
        <article className="banner">
          <div className="banner-text">
            <h1>Lorem Ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="old-man">
            <img className="bubbles" src="./banner/bubbles.svg" alt="Posdo WebApp Agendar" />
            <img className="old-man-img" src="./banner/old-man-pipe.png" alt="Posdo Website" />
          </div>
        </article>

        <article className="services">
          <div className="services-aligner">
            <div className="services-box">
              <div className="services-big-img">
                <img src="./services/beard-haircut.jpg" alt="Serviços Posdo Corte" />
              </div>
              <div className="details-box">
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
