import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://mezha.media/wp-content/uploads/2021/12/Netflix.jpg',
    altText: 'Netflix ',
    caption: 'NETFLIX @₹199',
    key: 1,
    
  },
  {
    src: 'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/4/3/original/disney.jpg?w=400&dpr=2.6',
    altText: 'Slide 2',
    caption: 'DISNEY+HOTSTAR @₹199',
    key: 2,

  },
  {
    src: 'https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png',
    altText: 'Slide 3',
    caption: 'PRIME-VIDEO @₹199',
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        
      >
        <img src={item.src} alt={item.altText} style={{ height:800 }} />
        <CarouselCaption
          // captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div style={{}}>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
      </Carousel>
      </div>
  );
}

export default Example;