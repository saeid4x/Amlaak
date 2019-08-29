import React,{Component } from 'react';
import { connect } from 'react-redux';
import {setCurrentUser} from './Redux/user/user.action';

class MyComponent extends Component{
    componentDidMount(){
        /*
        this.setState({
           currentUser:'mina',
           name:'alirza',
           username:'ali4x'
        })
        */
       this.props.setCurrentUser({          
           currentUser:'mina',
           name:'alirza',
           username:'ali4x'
       })      
 
    }
    render(){
        return(
            <section>
                <h3>new user is :{this.props.currentUser.currentUser} </h3>    {/*  ali4x   */}
            </section>
        )
    }
}

//read state from store
const mapDispatchToProp=(dispatch)=>({
    setCurrentUser:(user)=>dispatch(setCurrentUser(user))
})

//update store with new data 
const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser
})
export default connect(mapStateToProps,mapDispatchToProp)(MyComponent)