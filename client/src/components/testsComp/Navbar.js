import React, { Component } from 'react'
import { ThemeContext } from '../Contexts/themeContext';
export default class extends Component{

    static contextType=ThemeContext;

    render(){
        console.log(this.context)
        
        var {isLightTheme,light,dark}=this.context;
        var theme = isLightTheme ? light:dark
        return(
            <section style={{background:theme.ui,color:theme.syntax}}>
                <h1>this is navbar component</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, earum voluptatibus. Temporibus recusandae delectus debitis deserunt ullam corporis nesciunt quos architecto eum velit minus magni tenetur esse voluptatum, veritatis </p>

            </section>
        )
    }
}