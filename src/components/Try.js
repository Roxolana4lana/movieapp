import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  card: {
    maxWidth: 600
  },
  media: {
    paddingTop: "150.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

function Try(props) {
  const { classes, image, title, id } = props;

  return (
    <React.Fragment>
      {image && (
        <Card
          className={classes.card}
          style={{
            backgroundColor: "#2d3f70",
            margin: "2rem",
            width: "24rem",
            height: "44rem",
            padding: "2rem"
          }}
        >
          <CardMedia className={classes.media} image={image} title={title} />
          <CardContent>
            <Typography
              variant="h5"
              style={{ textAlign: "center", color: "white" }}
            >
              {title}
            </Typography>

            <button className="myButton">
              <a href={`https://www.themoviedb.org/movie/${id}`}>Watch</a>
            </button>
          </CardContent>
        </Card>
      )}
    </React.Fragment>
  );
}

Try.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Try);
