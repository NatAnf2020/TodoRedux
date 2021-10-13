import React from "react";
import "./App.css";
import FormInputs from "./components/formInputs/FormInputs";
import List from "./components/list/List";
import Footer from "./components/footer/Footer";
import { connect } from "react-redux";

function App() {
  return (
    <main>
      <h1>WEVENTURE Coding Challenge</h1>
      <FormInputs />
      <List />
      <Footer/>    
    </main>
  );
}
export default connect()(App);

