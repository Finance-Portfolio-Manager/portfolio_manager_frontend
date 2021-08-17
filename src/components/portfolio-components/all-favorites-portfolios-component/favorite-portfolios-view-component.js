import PublicPortfoliosView from "../all-public-portfolios-component/public-portfolios-view-component";


export default function FavoritePortfoliosView(props){
    return (
  
        <div style={{backgroundColor:"#B9B9BA"}}>
            
            <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="row">
                    <h2>Favourite Portfolios</h2>

                    <div className="row py-3" style={{width: "80rem", borderStyle: "solid"}}>
                        
                            {props.favoriteList ?
                            props.favoriteList.map((portfolio) => {
                                    return(                 
                                        <PublicPortfoliosView
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