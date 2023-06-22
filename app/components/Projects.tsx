import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcEmptyTrash,
  FcPhoneAndroid,
  FcHighPriority,
  FcCurrencyExchange,
} from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button
          variant={"link"}
          onClick={() => window.open(href, "_blank")}
          colorScheme={"blue"}
          size={"sm"}
        >
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function Projects() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          My Projects
        </Heading>
        {/* <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
          </Text> */}
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Bin Finder App"}
            icon={<Icon as={FcEmptyTrash} w={10} h={10} />}
            description={
              "App which maps out recycling bins around UK / Denmark. Build using React, Amplify, Mapbox and DynamoDB."
            }
            href={"https://bin-finder.com"}
          />
          <Card
            heading={"Crypto Dashboard"}
            icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
            description={
              "App which keeps track of crypto prices and progress towards targets. Build using React, Graphql and AntDesign."
            }
            href={"https://crypto-dash.bradleyleftley.co.uk"}
          />
          <Card
            heading={"Covid 19 Dashboard"}
            icon={<Icon as={FcHighPriority} w={10} h={10} />}
            description={
              "Covid 19 dashboard built during pandemic to keep track of numbers of cases. (No longer live)"
            }
            href={""}
          />
          <Card
            heading={"Fish tank monitoring"}
            icon={<Icon as={FcPhoneAndroid} w={10} h={10} />}
            description={
              "Tank monitoring system which uses a raspberry PI and temp sensors to report dasily tempatures to slack."
            }
            href={""}
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
        </Flex>
        <Divider mt={12} mb={12} />
      </Container>
    </Box>
  );
}
