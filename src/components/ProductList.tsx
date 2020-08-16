import React from "react";
import { Grid } from "@material-ui/core";
import isEqual from "lodash/isEqual";
import { Link } from "react-router-dom";
import ProductThumbnail from "./ProductThumbnail";
import { ProductsQuery } from "../types";

function areEqual(prev: any, next: any) {
  return isEqual(prev, next);
}

interface Props {
  data: ProductsQuery["products"];
}

export default React.memo(({ data, ...rest }: Props) => {
  // export default ({ data, ...rest }: Props) => {
  console.log(data);
  console.log(rest);
  return (
    <Grid container spacing={6}>
      {[...Array(100)].map(() =>
        data?.map((props, i: number) => (
          <Grid item xs={4} key={i}>
            <Link
              to={{ pathname: "/product", state: { productId: props?.id } }}
            >
              <ProductThumbnail {...props} />
            </Link>
          </Grid>
        ))
      )}
    </Grid>
  );
  // };
}, areEqual);
