import { Component } from "react";
import"./Header.css"
export class Header extends Component {
    state={};
    render(){
        return<>
            <div className="header">
                <div className="container header-content">
                    <h1 className="logo">logo</h1>
                    <ul className="nav">
                        <li><a href="#">link1</a></li>
                        <li><a href="#">link2</a></li>
                        <li><a href="#">link3</a></li>
                    </ul>
                </div>
            </div>
        </>
    }
}