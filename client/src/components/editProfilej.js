import React,{Component} from 'react';
import Axios from 'axios';
import keys from '../config/keys';

export default class extends Component{

    handleSubmit=(e)=>{
        e.preventDefault();
        let formData={
            userID:'user3',
            name:this.name.value,
            family:this.family.value,
            age:this.age.value,
            gender:this.gender.value,
            avatar:this.avatar.value,
            aboutme:this.aboutme.value
        }
        let userID='user3'

        Axios.put(keys.backendUrl+'/api/users/modifyProfile/'+userID,formData)
            .then((data)=>{
                if(data){
                    console.log('edited profile:',data.data)
                }
            })
    }
   render(){
       return(
           <section className="editProfile">
               <h2>Edit profile </h2>
               <form onSubmit={this.handleSubmit}>
               name: <input type="text" ref={(val)=>{this.name=val}}/>
               <br/>
               family: <input type="text" ref={(val)=>{this.family=val}}/>
               <br/>
               age: <input type="text" ref={(val)=>{this.age=val}}/>
               <br/>
               gender : <select name="" id="" ref={(val)=>{this.gender=val}}>
                   <option value="male">مرد</option>
                   <option value="female">زن</option>
               </select>
               <br/>
               avatar: <input type="text" ref={(val)=>{this.avatar=val}}/>
               <br/>
               about me! : <textarea name="" id="" cols="30" rows="10" ref={(val)=>{this.aboutme=val}}></textarea>
               <br/><br/>
               <button className="btn btn-primary">send  </button>
               </form>


           </section>
       )
   }
}