import { Component } from "react";
import imageMain from"./5911100787713492549.jpg"
import "./Main.css"
export class Main extends Component {
    state={};
    render(){
        return<>
        <div className="main">
            <div className="main_content"> 
                <h3>Hello </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut illo vel officiis eius! Ipsam explicabo voluptatum...</p>
            </div>
            <div>
                <img src={imageMain} alt="" />
            </div>
        </div>
        </>
    }
}