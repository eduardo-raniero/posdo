function MenuStyle(){
    return(
        <style>
            {`
                .menu{
                    padding: 2.5rem 0;
                    border-bottom: 1px solid #ccc;
                }

                .menu-aligner {
                    display: flex;
                    justify-content: space-between;
                    max-width: 1200px;
                }

                button {
                    width: 6.25rem;
                    background-color: #E6A500;
                    margin-left: 1.3rem;
                    padding: .5rem 1rem;
                    color: #022640;
                    font-size: 1rem;
                    font-weight: 600;
                    font-family: Merriweather;  
                    border: 2px solid #E6A500;
                  }

                button:hover{
                    color: #E6A500;
                    background: rgba(0, 0, 0, 0)
                }

                  img {
                    width: 9.25rem;    
                  }
            `}
        </style>
    )
}

export default function Menu(){
    return(
        <>
            <MenuStyle />
            <div className="menu">  
                <div className="menu-aligner">
                    <div style={{margin: '0'}}>
                        <img src="./logo/TradicionalCinza.svg" alt="Posdo WebApp" />
                    </div>
                    
                    <div style={{marginRight: '0'}}>
                        <button>Sobre</button>
                        <button>História</button>
                        <button>Contato</button>
                        <button>Agendar</button>
                    </div>
                </div>
            </div>
        </>

    )
}