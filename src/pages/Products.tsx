import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Add from "@material-ui/icons/Add";
import { useApolloClient } from "@apollo/react-hooks";
import ProductThumbnail from "../components/ProductThumbnail";
import CreateProductDialog from "../components/CreateProductDialog";
import { useProductsQuery } from "../types";
import { Fab, makeStyles, Theme } from "@material-ui/core";

interface Props {
  products?: any[];
}

const useStlyes = makeStyles((theme: Theme) => ({
  fab: {
    position: "fixed",
    bottom: 16,
    right: 16,
  },
}));

export default () => {
  const [open, setOpen] = useState(false);
  const classes = useStlyes();
  const { data, loading, error } = useProductsQuery({
    onError: (e) => {
      console.log(e);
    },
  });

  const client = useApolloClient();

  if (loading) return <CircularProgress />;
  if (error) return <div>error</div>;

  const handleProductClick = (e: any) => {};

  return (
    <>
      <Grid container spacing={6}>
        {data?.products?.map((props, i: number) => (
          <Grid item xs={4} key={i}>
            <ProductThumbnail onClick={handleProductClick} {...props} />
          </Grid>
        ))}
      </Grid>
      <CreateProductDialog open={open} onClose={() => setOpen(false)} />
      <Fab className={classes.fab} onClick={() => setOpen(true)}>
        <Add />
      </Fab>
    </>
  );
};
