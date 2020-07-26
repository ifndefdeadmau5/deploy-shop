import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const GET_SAVED_LIST = gql`
  {
    savedList @client {
      name
      price
      lmgUrl
    }
  }
`;

export default function ButtonAppBar() {
  const classes = useStyles();
  const { data, loading, error }: any = useQuery(GET_SAVED_LIST, {
    onError: (e) => {
      console.log(e);
    },
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error</div>;

  console.log("savedList");
  console.log(data?.savedList);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Link to="/cart">
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
