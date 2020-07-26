import React from "react";
import Grid from "@material-ui/core/Grid";
import { useApolloClient } from "@apollo/react-hooks";
import ProductThumbnail from "../components/ProductThumbnail";

const products = [
  {
    name: "고구마",
    price: "1000",
    imgUrl:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2361853557BEA99F17",
  },
  {
    name: "고구마",
    price: "1000",
    imgUrl:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2361853557BEA99F17",
  },
  {
    name: "고구마",
    price: "1000",
    imgUrl:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2361853557BEA99F17",
  },
  {
    name: "고구마",
    price: "1000",
    imgUrl:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2361853557BEA99F17",
  },
];

interface Props {
  products?: any[];
}

export default ({}: Props) => {
  const client = useApolloClient();
  const handleProductClick = (props: any) => () => {
    console.log("on click");
    // @ts-ignore
    client.writeData({
      data: {
        savedList: [
          {
            ...props,
            __typename: "Product",
          },
        ],
      },
    });
  };

  return (
    <Grid container spacing={6}>
      {products.map((props) => (
        <Grid item xs={4}>
          <ProductThumbnail onClick={handleProductClick(props)} {...props} />
        </Grid>
      ))}
    </Grid>
  );
};
