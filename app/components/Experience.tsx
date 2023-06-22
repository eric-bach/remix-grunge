import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Image,
  Heading,
  Stack,
  Link,
  Container,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Experience() {
  return (
    <>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Experience
        </Heading>
      </Stack>
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        {/* <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
  obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
</Text> */}

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Technical Lead
              </chakra.h2>
              <chakra.h3 fontSize="2xl" fontWeight="300">
                Smart Pension
              </chakra.h3>
              <chakra.h3 fontSize="sm" fontWeight="300">
                Aug 2022 - present
              </chakra.h3>

              {/* <Button colorScheme="green" size="md">
      Call To Action
    </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                Tech Lead for the Client Analytics team, which involves leading
                a team of frontend and backend developers to build an extensive
                application using React, Remix, Graphql, Lambda, Node.js,
                Cube.js and Snowflake to enable 9000+ advisers & 77,000+
                companies to conduct their own analytics on company KPIs,
                contributions, investments & members, as well as enable
                charting, table & download functionalities.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>

        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Senior Front End Engineer
              </chakra.h2>
              <chakra.h3 fontSize="2xl" fontWeight="300">
                Smart Pension
              </chakra.h3>
              <chakra.h3 fontSize="sm" fontWeight="300">
                Sept 2021 - Aug 2022
              </chakra.h3>

              {/* <Button colorScheme="green" size="md">
      Call To Action
    </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                Senior Front End developer working within Smart Pensions
                transitional project rebuilding our Ember Application into React
                using new tools such as React, Graphql and Remix.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Front End Engineer
              </chakra.h2>
              <chakra.h3 fontSize="2xl" fontWeight="300">
                Smart Pension
              </chakra.h3>
              <chakra.h3 fontSize="sm" fontWeight="300">
                Jan 2021 - Sept 2021
              </chakra.h3>

              {/* <Button colorScheme="green" size="md">
      Call To Action
    </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                Front End developer working within Smart Pensions core Ember
                application. This role involved mentoring trainee developers and
                leading on numerious project implementations.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Front End Developer
              </chakra.h2>
              <chakra.h3 fontSize="2xl" fontWeight="300">
                Linkfire
              </chakra.h3>
              <chakra.h3 fontSize="sm" fontWeight="300">
                Oct 2017 - Dec 2020
              </chakra.h3>

              {/* <Button colorScheme="green" size="md">
      Call To Action
    </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                Worked inside Core / Insights team, working on Link Creation
                application and insights portion of the app. This role included
                leading the front end insights application, developing core
                features such as Apple Music insights and writing unit /
                intergraiton tests.
              </chakra.p>
            </Flex>
            <Link
              target="_blank"
              href="https://help.linkfire.com/hc/en-us/articles/360002185214-Link-Insights-and-Reports-explained"
            >
              Checkout insights here
            </Link>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Front End Developer
              </chakra.h2>
              <chakra.h3 fontSize="2xl" fontWeight="300">
                PA Consulting Group
              </chakra.h3>
              <chakra.h3 fontSize="sm" fontWeight="300">
                Oct 2017 - Oct 2018
              </chakra.h3>

              {/* <Button colorScheme="green" size="md">
      Call To Action
    </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                I lead a project involving onboarding new partners into the
                company. This project was built using Ember. I also worked on
                number of other applications such as event tooling written in
                Anjular.js.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Front End Developer
              </chakra.h2>
              <chakra.h3 fontSize="2xl" fontWeight="300">
                Daemon Solutions
              </chakra.h3>
              <chakra.h3 fontSize="sm" fontWeight="300">
                2016 - 2017
              </chakra.h3>

              {/* <Button colorScheme="green" size="md">
      Call To Action
    </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                At daemon solutions I worked on Retail reporting applications
                for a high street retailer. This application was built using
                Ember. This role also involves working with UX designer /
                backend engineers.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                IOS Developer
              </chakra.h2>
              <chakra.h3 fontSize="2xl" fontWeight="300">
                Daemon Solutions
              </chakra.h3>
              <chakra.h3 fontSize="sm" fontWeight="300">
                2015 - 2016
              </chakra.h3>

              {/* <Button colorScheme="green" size="md">
      Call To Action
    </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                As part of a summer placement and during my final year at
                university I worked on an IOS application called Facereel. This
                app transformed photos into a Timelapse reels showing aging,
                hair growth and other fun transformations.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
      </Box>
    </>
  );
}
