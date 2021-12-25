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
import CommentContextProvider from "./contexts/commentsContext";
import DoorsContextProvider from "./contexts/doorsContext";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <CommentContextProvider>
        <FavContextProvider>
          <ProductsContextProvider>
            <DoorsContextProvider>
            <NewsContextProvider>
              <BrowserRouter>
                <Header />
                <Routing />
                <Footer />
              </BrowserRouter>
            </NewsContextProvider>
            </DoorsContextProvider>
          </ProductsContextProvider>
        </FavContextProvider>
        </CommentContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
