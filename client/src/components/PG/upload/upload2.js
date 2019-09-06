import React ,{Component} from 'react'
import {TextField,Switch,Select,


            
            } from '@material-ui/core'


export default class extends Component{

    state={
        name:null,
        title:null,
        category:null,
        nearMetro:null,
        hoomeCity:null
    }
    handleChanges2=(e)=>{
        alert(e.target.checked)
    }
    handleChanges=(name)=>event=>{
        this.setState({
            [name]:event.target.value,
            [name]:event.target.checked
        })
        
  
        
       
        
    }

    handleSubmit=(e)=>{
        e.preventDefault();
      
        
        console.log(this.state)

  
    }
    render(){


        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                            <span>hoome city</span>
                            <Switch
                               
                                onChange={this.handleChanges('hoomeCity')}
                                
                                
                                
                            />
                    </div>
                    <br/>
                    <div>
                            <span>near metro</span>
                            <Switch
                                
                                onChange={this.handleChanges('nearMetro')}
                               
                                
                                
                            />
                    </div>

                  
                        
                        <input type="submit" value="send"/>
</form>
            </div>
        )
    }
}

 
