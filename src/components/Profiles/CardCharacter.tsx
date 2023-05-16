import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Character } from "../../__generated__/graphql";
import { Circle } from "@mui/icons-material";
import { ReactNode, useState } from "react";
import CommonDialog from "../Commons/CommonDialog";

type CardCharacterProps = {
  character: Character;
};

const CardCharacter = ({ character }: CardCharacterProps) => {
  const [open, setOpen] = useState(false);

  const getStatus = (status: any) => {
    let element: ReactNode;
    switch (status) {
      case "Alive":
        element = (
          <Typography variant="h5" className="card__status">
            <Circle
              color="success"
              fontSize="small"
              className="card__status--circle"
            />{" "}
            Alive
          </Typography>
        );
        break;
      case "Dead":
        element = (
          <Typography variant="h5" className="card__status">
            <Circle
              color="error"
              fontSize="small"
              className="card__status--circle"
            />
            Dead
          </Typography>
        );
        break;
      case "unknown":
        element = (
          <Typography variant="h5" className="card__status">
            <Circle
              color="warning"
              fontSize="small"
              className="card__status--circle"
            />
            Unknow
          </Typography>
        );
        break;
    }
    return element;
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            image={character?.image as string}
            alt="green iguana"
          />
          <CardContent>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" component="div" className="card__name">
                  {character?.name}
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography
                  variant="body2"
                  component="div"
                  className="card__species"
                >
                  {character?.species}
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography
                  variant="body2"
                  component="div"
                  className="card__species"
                >
                  {character !== undefined && getStatus(character?.status)}
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h5"
                  component="div"
                  className="card__location"
                >
                  {character?.location?.name}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions className="card__action">
          <Button size="small" color="secondary" onClick={() => setOpen(true)}>
            More
          </Button>
        </CardActions>
      </Card>
      <CommonDialog open={open} handleClose={handleClose} data={character} />
    </>
  );
};
export default CardCharacter;
