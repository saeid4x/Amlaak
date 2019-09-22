import React, { Component } from 'react';
import Header from '../partials/_Header';
import axios from 'axios';
import keys from '../../config/keys'
 



export default class extends Component{

   
    state={
        userID:localStorage.getItem('userID'),
        userInfo:null
    }

    componentDidMount(){
        
        axios.get(keys.backendUrl+'/api/users/'+this.state.userID)
        .then((data)=>{
            if(data){
                this.setState({
                    userInfo:data.data
                })
                 
            }
        }).then(()=>{
            // console.log('@100',this.state.userInfo)
        });

    }
    render(){
        let username = this.state.userInfo ?  this.state.userInfo.username:'null'
        return(
            <section className="adminLayout">

                <h3> </h3>
                <Header  userInfo={username} display={this.props.display}/>

                
                <span></span>
                




            </section>
        )
    }
}