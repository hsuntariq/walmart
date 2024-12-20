import React from "react";
import Header from "../../components/home/Header";
import GridLayout from "../../components/home/GridLayout";
import Products from "../../components/home/Products";

const Home = () => {
  return (
    <>
      <Header />
      <GridLayout />
      <Products />
    </>
  );
};

export default Home;
