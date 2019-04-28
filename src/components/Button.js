import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: "red",
    display: "inline"
  },
  input: {
    display: "none"
  }
});

function Buttons(props) {
  const { classes } = props;

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Details
      </Button>
    </div>
  );
}

export default withStyles(styles)(Buttons);
