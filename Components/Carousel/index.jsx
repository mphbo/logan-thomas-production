import React from "react";
import { Box, Carousel, Image } from "grommet";

function CustomCarousel({ images }) {
  const imageItems = images.map((image, i) => {
    return <Image key={i} style={{ width: "100%" }} fit="cover" src={image} />;
  });
  return (
    <Box width="large" overflow="hidden">
      <Carousel play={2000} controls={false} fill>
        {imageItems}
      </Carousel>
    </Box>
  );
}

export default CustomCarousel;
