import { Box, Grid, Container, Image, Text } from "@chakra-ui/react";
import { Key } from "react";

const MyImage = ({ src }: { src: string }) => {
  return (
    <>
      <Image
        key={src}
        w="100%"
        borderRadius="xl"
        mb={2}
        display="inline-block"
        src={src}
        alt="Alt"
        onMouseEnter={() => {
          console.log("Entering");
        }}
        onMouseOut={() => {}}
      />
    </>
  );
};

export default MyImage;
