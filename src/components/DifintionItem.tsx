import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DifintionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="lg" color="gray.600">
        <Text>{term}</Text>
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DifintionItem;
