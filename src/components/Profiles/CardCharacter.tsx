import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Character } from "../../__generated__/graphql";
import { Circle } from "@mui/icons-material";
import { ReactNode } from "react";

type CardCharacterProps = {
  character: Character;
};

const CardCharacter = ({ character }: CardCharacterProps) => {
  const getStatus = (status: any) => {
    let element: ReactNode;
    switch (status) {
      case "Alive":
        element = (
          <Typography variant="h5" className="card__status">
            <Circle color="success" fontSize="small" /> Alive
          </Typography>
        );
        break;
      case "Dead":
        element = (
          <Typography variant="h5">
            <Circle color="error" fontSize="small" className="card__status" />{" "}
            Dead
          </Typography>
        );
        break;
      case "unknown":
        element = (
          <Typography variant="h5">
            <Circle color="warning" fontSize="small" className="card__status" />{" "}
            Unknow
          </Typography>
        );
        break;
    }
    return element;
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          image={character?.image as string}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div" className="card__name">
            {character?.name}
          </Typography>
          <Typography variant="h5" component="div" className="card__species">
            {character?.species}
          </Typography>
          <Typography variant="h5" component="div" className="card__location">
            {character?.location?.name}
          </Typography>
          {character !== undefined && getStatus(character?.status)}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          More
        </Button>
      </CardActions>
    </Card>
  );
};
export default CardCharacter;
