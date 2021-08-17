import FavoritesPortfolioView from "../favorites-portfolio-component/favorites-view";

export default function PublicPortfoliosView(props){

    return (
  
        <div style={{backgroundColor:"#B9B9BA"}}>
            
            <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="row">
                    <h2>Public Portfolios</h2>

                    <div className="row py-3" style={{width: "80rem", borderStyle: "solid"}}>
                        
                            {props.portfolioList ?
                            props.portfolioList.map((portfolio) => {
                                    return(                 
                                        <FavoritesPortfolioView
                                        portfolio={portfolio} 
                                        username={portfolio.username}/>
                                    )
                            }):<></>}

                    </div>
                </div>
            </div>
        </div>
    )

}