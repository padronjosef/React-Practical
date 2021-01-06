import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

import useInitialState from "../hooks/useInitialState";

import "../assets/styles/App.scss";

const API = "http://localhost:3000/initialState";

const App = () => {
  const [videos, categories] = useInitialState(API);

  return (
    <div>
      <Header />
      <Search />

      {categories.map((category) => (
        videos[category].length > 0 && (
            <Categories title={category} key={category}>
              <Carousel>
                {videos[category].map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
      )))}

      <Footer />
    </div>
  );
};

export default App;