import React,{Component} from 'react';
import {connect} from 'react-redux'

class Test extends Component{

    render(){
        return(
            <section>
                <h1>Current User is = {this.props.currentUser}</h1>
            </section>
        )
    }
}
const mapStateToProp=(state)=> ({
    currentUser:state.user.currentUser
})
    

export default connect(mapStateToProp)(Test);