import React ,{Component} from 'react';
import Axios from 'axios';
import keys from '../config/keys';

export default class extends Component{

    state={
        name:null,
        family:null,
        age:null,
        gender:null,
        avatar:null,
        aboutme:null
    }

    componentDidMount(){
        let userID='user3';
        Axios.get(keys.backendUrl+'/api/users/profile/'+userID)
            .then((data)=>{
                if(data){
                    console.log(data.data);
                    this.setState({
                        name:data.data.name,
                        family:data.data.family,
                        age:data.data.age,
                        gender:data.data.gender,
                        avatar:data.data.avatar,
                        aboutme:data.data.aboutme
                    })
                }
            })
    }
    render(){
    return(
        <section className="showProfile">
            <h1> نمایش پروفایل</h1>
            name:{this.state.name} <br/>
            age:{this.state.age}<br/>
            <br/>
            gender : {this.state.gender}
            <br/><br/>
            aboutme : {this.state.aboutme}


            </section>

    )
    }
}