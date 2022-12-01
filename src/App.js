import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer greeting={"Productos"} />
    </>
  );
}

export default App;
