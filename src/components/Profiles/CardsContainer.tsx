import { Box } from "@mui/material";
import { Characters } from "../../__generated__/graphql";
import CardCharacter from "./CardCharacter";

type ContainerCardsProps = {
  characters: Characters;
};

const CardsContainer = ({ characters }: ContainerCardsProps) => {
  const allCharacters = characters?.results;
  return (
    <Box className="cards-container">
      {allCharacters?.map((char) => (
        <CardCharacter character={char!} key={char?.name} />
      ))}
    </Box>
  );
};

export default CardsContainer;
