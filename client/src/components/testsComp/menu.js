import React, { Component,useState } from 'react'
import { Menu,MenuItem, DialogContent, Divider, Button } from '@material-ui/core';

export default function SimpleMenu(){
    const [anchorEl,setAnchorE1]=useState(null)
    function handleClick(e){
        setAnchorE1(e.currentTarget);
        console.log(e.currentTarget);

    }
    function handleClose(e){
        setAnchorE1(null)
    }



    return(
        <div style={{margin:'50px 0 0 200px'}}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                Open Menu
            </Button>

            <Menu
                anchorEl={anchorEl}
                id="simple-menu"
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>profile </MenuItem>
                    <MenuItem onClick={handleClose}>MyAccount </MenuItem>
                    <MenuItem onClick={handleClose}>Logout </MenuItem>


                </Menu>
        </div>
    )
}