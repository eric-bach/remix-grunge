import { useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { Box, Spinner, Heading } from "@chakra-ui/react";
import MyImage from "~/components/MyImage";
import Nav from "~/components/Nav";

export const loader = async () => {
  const key = process.env.REACT_APP_API_KEY;

  const response = await fetch(
    "https://api.unsplash.com/users/b_leftley/photos?per_page=30",
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        Authorization: `Client-ID ${key}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url // body data type must match "Content-Type" header
    }
  ).catch((error) => {
    console.log(error);
    throw error;
  });

  return response.json();

  // return defer(await response.json());
};

export default function Photos() {
  const photos = useLoaderData<typeof loader>();

  return (
    <>
      <Nav />
      <Suspense fallback={<Spinner />}>
        <Heading
          as="h2"
          bg="gray.500"
          color="white"
          textAlign="center"
          padding="5"
          size="2xl"
        >
          My Unsplash Photos
        </Heading>
        <Box
          padding={4}
          w="100%"
          mx="auto"
          bg="gray.500"
          sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
        >
          {photos.map((photo) => (
            <>
              <MyImage src={photo.urls["raw"] || ""} />
            </>
          ))}
          {/* {photos && photos.urls.map((src) => <MyImage src={src} />)} */}
        </Box>
      </Suspense>
    </>
  );
}
