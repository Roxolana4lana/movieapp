import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import toRenderProps from "recompose/toRenderProps";
import withState from "recompose/withState";
import { StoreContext } from "./Store";

const WithState = toRenderProps(withState("anchorEl", "updateAnchorEl", null));

export default function Selector(props) {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(StoreContext);
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };
        const handlePopularity = () => {
          dispatch({
            type: "sortExtend"
          });
        };

        const handleVotes = () => {
          dispatch({
            type: "sortNormal"
          });
        };
        return (
          <React.Fragment>
            <Button
              aria-owns={open ? "render-props-menu" : undefined}
              aria-haspopup="true"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
              className="mButton "
            >
              Sort by
            </Button>
            <Menu
              id="render-props-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {props.extended && (
                <MenuItem onClick={handlePopularity}>{props.extended}</MenuItem>
              )}
              {props.normal && (
                <MenuItem onClick={handleVotes}>{props.normal}</MenuItem>
              )}
              {props.action && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "action"
                    })
                  }
                >
                  {props.action}
                </MenuItem>
              )}
              {props.adventure && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "adventure"
                    })
                  }
                >
                  {props.adventure}
                </MenuItem>
              )}
              {props.animation && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "animation"
                    })
                  }
                >
                  {props.animation}
                </MenuItem>
              )}
              {props.comedy && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "comedy"
                    })
                  }
                >
                  {props.comedy}
                </MenuItem>
              )}
              {props.crime && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "crime"
                    })
                  }
                >
                  {props.crime}
                </MenuItem>
              )}
              {props.documentary && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "documentary"
                    })
                  }
                >
                  {props.documentary}
                </MenuItem>
              )}
              {props.drama && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "drama"
                    })
                  }
                >
                  {props.drama}
                </MenuItem>
              )}
              {props.family && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "family"
                    })
                  }
                >
                  {props.family}
                </MenuItem>
              )}
              {props.fantasy && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "fantasy"
                    })
                  }
                >
                  {props.fantasy}
                </MenuItem>
              )}
              {props.history && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "history"
                    })
                  }
                >
                  {props.history}
                </MenuItem>
              )}
              {props.horror && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "horror"
                    })
                  }
                >
                  {props.horror}
                </MenuItem>
              )}
              {props.music && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "music"
                    })
                  }
                >
                  {props.music}
                </MenuItem>
              )}
              {props.mystery && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "mystery"
                    })
                  }
                >
                  {props.mystery}
                </MenuItem>
              )}
              {props.romance && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "romance"
                    })
                  }
                >
                  {props.romance}
                </MenuItem>
              )}
              {props.thriller && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "thriller"
                    })
                  }
                >
                  {props.thriller}
                </MenuItem>
              )}
              {props.western && (
                <MenuItem
                  onClick={() =>
                    dispatch({
                      type: "western"
                    })
                  }
                >
                  {props.western}
                </MenuItem>
              )}
            </Menu>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}
