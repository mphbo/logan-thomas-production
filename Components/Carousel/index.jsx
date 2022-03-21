import React from "react";
import { Box, Carousel, Image } from "grommet";

function CustomCarousel({ images }) {
  const imageItems = images.map((image) => {
    return <Image style={{ width: "100%" }} fit="cover" src={image} />;
  });
  return (
    <Box width="large" overflow="hidden">
      <Carousel fill>{imageItems}</Carousel>
    </Box>
  );
}

export default CustomCarousel;
