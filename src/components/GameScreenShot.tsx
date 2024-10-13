import { Image, SimpleGrid } from "@chakra-ui/react";
import useGameScreenShot from "../hooks/useGameScreenShot";

interface Props {
  gameId: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameScreenShot(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShot;
