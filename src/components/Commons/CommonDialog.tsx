import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  PaperProps,
  Typography,
} from "@mui/material";
import Draggable from "react-draggable";
import { Character } from "../../__generated__/graphql";
import { Circle } from "@mui/icons-material";
import { ReactNode } from "react";

type CommonDialogProps = {
  data: Character;
  open: boolean;
  handleClose: () => void;
};

const CommonDialog = ({ data, open, handleClose }: CommonDialogProps) => {
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

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      className="dialog"
    >
      <DialogTitle style={{ cursor: "move" }} id="dialog-title">
        <Grid container spacing={5}>
          <Grid item>
            <Typography variant="h4" component="div" className="dialog__title">
              {data.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" component="div" className="dialog__title">
              {data !== undefined && getStatus(data?.status)}
            </Typography>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img src={data?.image as string} alt={data?.name as string} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="div" className="dialog__info">
              Specie:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="div" className="dialog__info">
              {data?.species}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="div" className="dialog__info">
              Gender:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="div" className="dialog__info">
              {data?.gender}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="div" className="dialog__title">
              Origin
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" component="div" className="dialog__info">
              Name:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" component="div" className="dialog__info">
              {data?.origin?.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" component="div" className="dialog__info">
              Dimension:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" component="div" className="dialog__info">
              {data?.origin?.dimension}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="div" className="dialog__title">
              Location
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" component="div" className="dialog__info">
              Name:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" component="div" className="dialog__info">
              {data?.location?.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" component="div" className="dialog__info">
              Dimension:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="h5"
              component="div"
              className="dialog__location"
            >
              {data?.location?.dimension}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" component="div" className="dialog__info">
              Residents:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="h5"
              component="div"
              className="dialog__location"
            >
              {data?.location?.residents.length}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="div" className="dialog__title">
              Episode
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="div" className="dialog__info">
              {data?.episode?.map((x, index) => (
                <span key={`episode_${index}`}>
                  {(index ? ", " : "") + x?.name}
                </span>
              ))}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
