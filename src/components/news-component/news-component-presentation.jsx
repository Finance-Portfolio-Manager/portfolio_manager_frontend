import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardText
} from 'reactstrap';
import { isNonNullExpression } from 'typescript';

function News() {
    const items =  [
        {
          src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80',
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: 'https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          altText: 'Slide 3',
          caption: 'Slide 3'
        },
        {
          src: 'https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          altText: 'Slide 4',
          caption: 'Slide 4'
        },
        {
          src: 'https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          altText: 'Slide 5',
          caption: 'Slide 5'
        }
      ];
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3004/news").then(response => setNews(response.data));
    },[]);

    console.log(news);


    const NewsCard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === news.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? news.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = news.map((item) => {
        console.log(item);
        return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.urlToImage}
        >
            
            <Card >
                <CardHeader>
                    <a href={item.url} target="_blank"><img className="w-100" style={{height: 400}} src={item.urlToImage} alt="image" /></a>
                </CardHeader>
                <CardBody className="text-center">
                    <CardTitle className=" border-bottom border-2 border-dark">
                    <a href={item.url} target="_blank" style={{textDecoration: "none", color: "black"}}><h3>{item.title}</h3></a>
                    </CardTitle>
                    <CardText >
                        <p>{item.description}</p>
                    </CardText>
                </CardBody>
            </Card>
            <CarouselCaption />
        </CarouselItem>
        );
    });

    return (
        <Card className="w-20 border border-0 " style={{color: 'black'}}>
            {/* <CardBody className="w-100"> */}
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                {slides}
                <CarouselControl directionText direction="prev" onClickHandler={previous} />
                <CarouselControl directionText direction="next" onClickHandler={next} />
                <CarouselIndicators items={news} activeIndex={activeIndex} onClickHandler={goToIndex} />
                </Carousel>
            {/* /* </CardBody>       */}
        </Card>
    );
    }
    return (
        <NewsCard />
    );
}



export default News;