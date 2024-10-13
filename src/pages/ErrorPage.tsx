import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <NavBar />
      <Box padding={6}>
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesn't exist."
            : "An Unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
