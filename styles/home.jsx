export default function HomeStyle(){
    return(
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
          
          .home-aligner {
            margin-top: 8.75rem;
            margin-bottom: 2rem;
          }
  
          .banner {
            display: flex;
            height: 31.25rem;
            max-width: 1200px;
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
  
          h2 {
            font-size: 2rem;
          }
  
          @keyframes old-man {
            from {margin-right: 30rem; opacity: 0}
            to {margin-right: 0; opacity: 1}
          }
  
          .old-man .old-man-img {
            width: 22rem;
            position: absolute;
            margin: -5.1rem 0 0 -5.5rem;
            animation-name: old-man;
            animation-duration: 1.25s;
          }
  
          .old-man .bubbles {
            position: relative;
            margin-left: 12rem;
            margin-bottom: -5.8rem;
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
  
          .services {
            border-top: 1px solid #ccc;
            min-width: 100%;
            box-shadow: 0px -4px 21px 0px rgba(0,0,0,0.25);
            height: 34rem;
          }
  
          .services-aligner {
            max-width: 1200px;
            margin-top: 3.125rem;
          }
  
          .services-aligner .services-box {
            display: grid;
            grid-template-columns: 61.8% 38.2%;
            height: 31.25rem;
            border-radius: .1rem;
            background: #011728;
          }
  
          .services-big-img img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
  
          .details-box {
            padding: 3rem 1rem;
          }
        `}
      </style>
    )
  }