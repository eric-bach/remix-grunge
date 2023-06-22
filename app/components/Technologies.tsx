import {
    Container,
    Grid,
    GridItem,
    Flex,
    Box,
    Text,
    Heading,
  } from '@chakra-ui/react';
  
  function Technologies() {
    return (
      <Container py={5} maxW={'container.lg'}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={6}>
                      <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'xl'} fontWeight={'bold'}>
              Web Frameworks
              </Text>
              <Box fontSize={'sm'}>
              React, Typescript, Ember.js, Node.js, Express.js, D3.js, Apollo GraphQL, Type Graphql
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'xl'} fontWeight={'bold'}>
              Langauges and tools
              </Text>
              <Box fontSize={'sm'}>
              HTML5, CSS3, SASS, JavaScript and Python.
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'xl'} fontWeight={'bold'}>
                Databases
              </Text>
              <Box fontSize={'sm'}>
              MySQL, PostgreSQL & DynamoDB
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'xl'} fontWeight={'bold'}>
                Design
              </Text>
              <Box fontSize={'sm'}>
              Figma, Sketch 3, Photoshop & Illustrator. Chakra UI & Ant Design.
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'xl'} fontWeight={'bold'}>
                Cloud
              </Text>
              <Box fontSize={'sm'}>
              Amazon Web Services.
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'xl'} fontWeight={'bold'}>
              CI / CD
              </Text>
              <Box fontSize={'sm'}>
              Github Actions, Teamcity, CircleCI and Docker.
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'xl'} fontWeight={'bold'}>
              Testing
              </Text>
              <Box fontSize={'sm'}>
              Cypress, React Testing Library and Chromatic.
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'xl'} fontWeight={'bold'}>
              Web Servers
              </Text>
              <Box fontSize={'sm'}>
              Nginx
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    );
  }
  
  export default Technologies;