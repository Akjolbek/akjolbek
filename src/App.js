import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Routing from "./Routing";

import "antd/dist/antd.css";
import "./App.css";
import NewsContextProvider from "./contexts/newsContext";
import FavContextProvider from "./contexts/favContext";
import LikeContextProvider from "./contexts/likeContext";
import CommentContextProvider from "./contexts/commentsContext";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <CommentContextProvider>
        <FavContextProvider>
          <LikeContextProvider>
          <ProductsContextProvider>
            <NewsContextProvider>
              <BrowserRouter>
                <Header />
                <Routing />
                <Footer />
              </BrowserRouter>
            </NewsContextProvider>
          </ProductsContextProvider>
        </LikeContextProvider>
        </FavContextProvider>
        </CommentContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
