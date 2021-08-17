
import { useState, useEffect } from "react";
import axios from "axios";
export default function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
            .get("http://23.22.140.95:8082/news/get-news")
            .then((response) => {
                setNews(response.data);
            })
            .catch((error) => console.log(`Error ${error}`));
    }, []);

    return (
        <div className="container-fluid ">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {news.map((newsItem, index) =>
                        <div key={newsItem.urlToImage} className={"carousel-item " + (index == 1 && "active")}>
                            <div className="d-flex flex-column align-items-center">
                                <span className="h3 mb-5">{newsItem.title}</span>
                                <div className="w-50">
                                    <img src={newsItem.urlToImage} className="img-fluid newsimage rounded float-end mx-2" alt="news item" />
                                    <span>{newsItem.description}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}


