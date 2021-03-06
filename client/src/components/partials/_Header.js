import React, { useState } from 'react';
import AppBar from "@material-ui/core/AppBar"
import "../../css/partials/_header.css";
import { Toolbar,Tooltip,Menu,MenuItem, Divider, Drawer,List,ListItem,ListItemIcon,ListItemText } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
 
import {Link} from "react-router-dom";



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
     
       
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    listItemText:{
      color:'purple',
      paddingRight:10,
      textAlign:'right',
     
       
    },
    listItemIcon:{
      marginRight:-40
    },
    
    toolbar: theme.mixins.toolbar,

  }));

export default function Header(props){
       
    const [anchor,setAnchor]=useState(null);
    const [openDrawer,setOpenDrawer]=useState(false);

    
   var  handleMenuClick=(e)=>{
       setAnchor( 
           e.target
         )
        
    }
    var handleSignout=(e)=>{
      // alert('sign out ')
      localStorage.clear()
      window.location.reload();
    }
  var  handleMenuClose=(e)=>{
         setAnchor(null)
        console.log(e.target)
    }
   var toggleDrawer=(status)=>event=>{

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
         
       setOpenDrawer(  status)
    }
    
      const classes = useStyles();
        return(
            <section className="_header">
             <AppBar color="primary" className={classes.appBar}>
                 <Toolbar className="_header-toolbar">
                 <DeleteIcon></DeleteIcon>
                   <h3 onClick={toggleDrawer(true)}>سایت املاک</h3>

       
                
                <section className="left-sec"> 
                 {/* === handle next version of amlaak === */}              
                     {/* <Link to=''>
                         <span className="chat-icon">
                         <Tooltip title="چت">
                         <DeleteIcon></DeleteIcon>
                         </Tooltip>
                         </span>
                     </Link>
                     <Link to=''>
                         <span className="messageIcon">
                         <Tooltip title="پیام ها ">
                         <DeleteIcon></DeleteIcon>
                         </Tooltip>
                         </span>
                     </Link>
                     <Link >
                         <span className="messageIcon">
                         <Tooltip title=" خروج ">
                         <DeleteIcon onClick={handleSignout}></DeleteIcon>
                         </Tooltip>
                         </span>
                     </Link> */}

            
                     
                     </section>
                            {/* menu avatar */}
                            <h3 onClick={handleSignout} className="left-sec-avatarInfo"><InboxIcon/></h3>

<Menu 
 anchorE1={anchor}
   open={Boolean(anchor)}
  
  >
      <MenuItem onClick={ handleMenuClose}> 
      <div>
           <DeleteIcon></DeleteIcon>
           saeid4x  
       </div>
     
       </MenuItem>
      <Divider />
      <MenuItem onClick={ handleMenuClose}> مشاهده پروفایل </MenuItem>
      <MenuItem onClick={ handleMenuClose}>   ویرایش پروفایل  </MenuItem>
      <MenuItem onClick={ handleMenuClose}>   ارسال آگهی   </MenuItem>
      <MenuItem onClick={ handleMenuClose}>     مدیریت آگهی </MenuItem>
      <Divider/>

      <MenuItem onClick={ handleMenuClose}>   خروج از حساب   </MenuItem>

  </Menu>

{/* end menu item */}


                     

                      
                 </Toolbar>

             </AppBar>

            <div
                onClick={ toggleDrawer(false)}
                style={{display:`${props.display}`}}
              
            >
              <Drawer
                anchor='right'
                className={classes.drawer}
                variant="permanent"
                classes={{
                        paper: classes.drawerPaper,
                        }}
                      
              >
        <div className={classes.toolbar}/>
         
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <section className="avatar-sec" >

        <img src="/img/1.PNG" alt="" />
        <p className="avatar-username"> 
          {props.userInfo}
         </p>
      
        <div className="avatar-profile-icon">
          <Tooltip title="ویرایش پروفایل" >
            <Link to="">
            <InboxIcon className="avatar-editProfile"/>
            </Link>
          </Tooltip>
        
        <Tooltip title="نمایش پروفایل">
          <Link to="">
          <MailIcon className="avatar-showProfile"/>
          </Link>
        </Tooltip>
        </div>

        </section>
        <Divider />
        <List>

        <Link to="/user/sendAds">
        <ListItem button style={{borderBottom:'1px solid cyan'}}>          
          <ListItemText primary="ارسال آگهی " className={classes.listItemText}/>     
          
          <ListItemIcon className={classes.listItemIcon}><InboxIcon/></ListItemIcon>           
        </ListItem>
        </Link>

        <Link to="/user/manageAds">
        <ListItem button style={{borderBottom:'1px solid cyan'}}>          
          <ListItemText primary="مدیریت آگهی " className={classes.listItemText}/>     
          
          <ListItemIcon className={classes.listItemIcon}><MailIcon/></ListItemIcon>           
        </ListItem>
        </Link>

        <Link to="/user/messages">
        <ListItem button style={{borderBottom:'1px solid cyan'}}>          
          <ListItemText primary="پیام ها" className={classes.listItemText}/>     
          
          <ListItemIcon className={classes.listItemIcon}><InboxIcon/></ListItemIcon>           
        </ListItem>
        </Link>

        <Link to="/user/reports">
        <ListItem button style={{borderBottom:'1px solid cyan'}}>          
          <ListItemText primary="گزارش ها" className={classes.listItemText}/>     
          
          <ListItemIcon className={classes.listItemIcon}><MailIcon/></ListItemIcon>           
        </ListItem>
        </Link>

        <Link to="/user/favorites">
        <ListItem button style={{borderBottom:'1px solid cyan'}}>          
          <ListItemText className={classes.listItemText}>علاقه مندی </ListItemText>    
          
          <ListItemIcon className={classes.listItemIcon}><InboxIcon/></ListItemIcon>           
        </ListItem>
        </Link>


          {/* {['ارسال آگهی', 'مدیریت آگهی', 'پیام ها','گزارش ها','علاقه مندی'].map((text, index) => (

             
            <ListItem button key={text} style={{borderBottom:'1px solid cyan'}}>
              
             
              <ListItemText primary={text} className={classes.listItemText}/>
               
              <ListItemIcon className={classes.listItemIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            </ListItem>
          ))} */}
        </List>
      </Drawer>
            </div>
         


                
            </section>
        )
    }
 
 