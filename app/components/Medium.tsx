import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://media.licdn.com/dms/image/D5603AQEaRKSKsH85IA/profile-displayphoto-shrink_800_800/0/1678555587112?e=1684368000&v=beta&t=SeNuZw_8ByERQ9qkE5GHx-TFZgFC3f-hA5G69C7OS9I"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Medium = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h2" marginTop="0">
        Medium Articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ptd-JKESN2cs6-qcY9uyaA.png"
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            {/* <BlogTags tags={["Mac", ""]} marginTop="3" /> */}
            <Heading fontSize="xl" marginTop="2">
              <Link
                target="_blank"
                href="https://medium.com/@b_leftley56/how-to-deploy-remix-grunge-stack-to-aws-b6255f04f346"
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                Remix Grunge Stack AWS Deployment
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Researching online and watching videos I found there was not a lot
              of documentation for deploying Remix to AWS, therefore I thought I
              would create a quick guide for getting started using the Grunge
              stack with AWS and how to get it linked up to cloud front and
              Route53 so your users can access the site!
            </Text>

            {/* <BlogAuthor
              name="Bradley Leftley"
              date={new Date("2021-04-06T19:01:27Z")}
            /> */}
          </Box>
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_P0K_4_8rt-gaaxQR_g0Rg.png"
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            {/* <BlogTags tags={["Mac", ""]} marginTop="3" /> */}
            <Heading fontSize="xl" marginTop="2">
              <Link
                target="_blank"
                href="https://medium.com/@b_leftley56/turn-your-mac-mini-into-a-vpn-server-with-pi-hole-as-the-dns-content-filter-c66a1c214075"
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                Turn your Mac Mini into a VPN server with PI hole as the DNS
                content filter.
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              I recently setup my own VPN on my mac mini, with PI hole running
              in a docker container finally allowing me to filter out ads and
              tracking on my iPhone on WIFI over 4G anywhere in the world. Also
              being able to access my Mac Mini’s storage and other applications.
            </Text>
            {/* <BlogAuthor
              name="Bradley Leftley"
              date={new Date("2021-04-06T19:01:27Z")}
            /> */}
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default Medium;
