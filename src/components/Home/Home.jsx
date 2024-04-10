// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { filterByPrice } from "../../features/products/productsSlice";

// import Banner from "../Banner/Banner";
// import Categories from "../Categories/Categories";
// import Poster from "../Poster/Poster";
// import Products from "../Products/Products";

// const Home = () => {
//   const dispatch = useDispatch();
//   const {
//     products: { list, filtered },
//     categories,
//   } = useSelector((state) => state);

//   useEffect(() => {
//     if (!list.length) return;

//     dispatch(filterByPrice(100));
//   }, [dispatch, list.length]);

//   return (
//     <>
//       <Poster />
//       <Products products={list} amount={5} title="Trending" />
//       <Categories products={categories.list} amount={5} title="Worth seeing" />
//       <Banner />
//       <Products products={filtered} amount={5} title="Less than 100$" />
//     </>
//   );
// };

// export default Home;



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByPrice } from "../../features/products/productsSlice";

import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.list);
  const filteredProducts = useSelector((state) => state.products.filtered);
  const categoryList = useSelector((state) => state.categories.list);

  useEffect(() => {
    if (!productList.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, productList.length]);

  return (
    <>
      <Poster />
      <Products products={productList} amount={10} title="Trending" />
      <Categories products={categoryList} amount={6} title="Worth seeing" />
      <Banner />
      <Products products={filteredProducts} amount={5} title="Less than 100$" />
    </>
  );
};

export default Home;
