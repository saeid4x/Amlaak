import { Button, Menu, MenuItem } from "@material-ui/core";
import React,{useState, Component} from 'react';


export default class extends Component{
    state={
        anchorE1:null,
        anchorE12:null
    }
    // const [anchorE1,setAnchorE1]=useState(null);
    // const [anchorE12,setAnchorE12]=useState(null)
     handleClick=(e)=>{
        //  setAnchorE1(e.currentTarget);
         this.setState({
             anchorE1:e.target
         })
        console.log(e.target)
     }
       handleClose(){
        //  setAnchorE1(null)
     }
       handleClick2(e){
        //  setAnchorE12(e.currentTarget)
     }
      handleClose2(){
        //  setAnchorE12(null)
     }
     

     render(){
        return(
            <div>
                <Button onClick={this.handleClick}>
                    Open Menu
                </Button>
                <Menu
                anchorEl={this.state.anchorE1}
                open={Boolean(this.state.anchorE1)}
    
                
                >
                    <MenuItem onClick={this.handleClose}>profile 2 </MenuItem>
                    <MenuItem onClick={this.handleClose}>profile 3 </MenuItem>
                    <MenuItem onClick={this.handleClose}>profile 4 </MenuItem>
                </Menu>
    
    
            <h1 onClick={this.handleClick2}>saeid imani</h1>
            <Menu
            anchorEl={this.state.anchorE12}
            open={Boolean(this.state.sanchorE12)}
            >
                <MenuItem onClick={this.handleClose2}> saeid </MenuItem>
                <MenuItem onClick={this.handleClose2}> ali </MenuItem>
                <MenuItem onClick={this.handleClose2}> sara </MenuItem>
                <MenuItem onClick={this.handleClose2}> mina </MenuItem>
    
            </Menu>
             </div>
        )
     }

    

   
}