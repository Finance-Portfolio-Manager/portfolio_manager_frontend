import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody
} from 'reactstrap';

const items = [
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

const NewsCard = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <a href="https://google.com"><img className="w-100" style={{height: 360}} src={item.src} alt={item.altText} /></a>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Card className="w-25">
        <CardBody className="w-100">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" onClickHandler={previous} />
            <CarouselControl direction="next" onClickHandler={next} />
            </Carousel>
        </CardBody>      
    </Card>
  );
}

export default NewsCard;