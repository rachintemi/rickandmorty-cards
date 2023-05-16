import { Box, Skeleton, Stack } from "@mui/material";
import { Character } from "../../__generated__/graphql";
import CardCharacter from "./CardCharacter";

type ContainerCardsProps = {
  characters: Character[];
  loading: boolean;
};

const CardsContainer = ({ characters, loading }: ContainerCardsProps) => {
  return (
    <Box className="cards-container">
      <Box className="cards">
        {loading ? (
          <Stack spacing={1}>
            <Skeleton
              variant="rectangular"
              width={240}
              height={480}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width={240}
              height={480}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width={240}
              height={480}
              animation="wave"
            />
            n{" "}
            <Skeleton
              variant="rectangular"
              width={240}
              height={480}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width={240}
              height={480}
              animation="wave"
            />
          </Stack>
        ) : (
          characters?.map((char) => (
            <CardCharacter character={char!} key={char?.id} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default CardsContainer;
