function HomeStyle(){
  return(
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        
        .home-aligner {
          max-width: 1200px;
          margin-top: 8.75rem;
          margin-bottom: 2rem;
          display: flex;
        }

        .banner-text{
          margin: 0;
          max-width: 30rem;
          transition: 0.25s;
          animation-name: text-show;
          animation-duration: 1.25s;
        }

        @keyframes text-show {
          from {opacity: 0}
          to {opacity: 1}
        }

        p{
          font-size: 1.5rem;
          margin-top: .5rem;
          line-height: 2.25rem;
        }

        h1 {
          font-size: 4rem;
          font-family: Playfair Display;
        }

        @keyframes old-man {
          from {margin-right: 30rem; opacity: 0}
          to {margin-right: 0; opacity: 1}
        }

        .old-man .old-man-img {
          width: 21rem;
          position: absolute;
          margin: -5rem 0 0 -5rem;
          animation-name: old-man;
          animation-duration: 1.25s;
        }

        .old-man .bubbles {
          position: relative;
          margin-left: 15rem;
          margin-bottom: -5.5rem;
          width: 4rem;
          animation-name: old-man-bubble;
          animation-duration: 1.25s;
        }

        @keyframes old-man {
          from {opacity: 0}
          to {opacity: 1}
        }

        @keyframes old-man-bubble {
          from {opacity: 0}
          to {opacity: 1}
        }
      `}
    </style>
  )
}

export default function Home() {
  return (
    <>
      <HomeStyle />
      <div className="home-aligner">
        <div className="banner-text">
          <h1>Lorem Ipsum</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="old-man">
          <img className="bubbles" src="./banner/bubbles.svg" alt="Posdo WebApp Agendar" />
          <img className="old-man-img" src="./banner/old-man-pipe.png" alt="Posdo Website" />
        </div>
      </div>
    </>
  )
}
