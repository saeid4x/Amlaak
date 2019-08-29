import React from 'react';
import {connect} from 'react-redux';

function Counter(props){
    return(
        <section className="counter" >
            <center>
                <h1>i am a Counter </h1>
                <p>count: {props.count}</p>
                <button onClick={props.onIncrementClick}>increment </button>
            </center>

        </section>
    )
}
function mapStateToProps(state){
    console.log("mapStateToProps",state)
    return{
        count:state.count
    }
}
function mapDispatchToProps(dispatch){
    return{
        onIncrementClick:()=>{
            console.log('clicked');
            const action ={type:'INCREMENT'};
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Counter);