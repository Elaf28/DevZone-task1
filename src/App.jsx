import { Component } from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import"./App.css"
export default class App extends Component {
  state={};
  render(){
    return(<>
        <div className="All">
          <Header/>
          <Main/>
          <Footer/>
        </div>
    </>)
  }
}