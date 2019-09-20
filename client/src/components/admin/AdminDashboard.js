import React,{Component} from 'react'
import AdminLayout from '../layouts/adminLayout'
import axios from 'axios';
import keys from '../../config/keys'
export default class extends Component{

    
    state={
        userID:localStorage.getItem('userID'),
        userInfo:null,
        
    }
    componentWillMount(){

        //--- check if user neither do login or not
        let userID=localStorage.getItem('userID');
        let token=localStorage.getItem('token');
        if(!userID || !token){
            this.props.history.push('/signin')
        }
        //--- 


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
            console.log('@100',this.state.userInfo)
             
            
            
        });

    }
    render(){
        return(
            <section style={{marginTop:80}}>
                <AdminLayout />

                <h1> Admin Dashboard</h1>
 
            </section>
        )
    }
}