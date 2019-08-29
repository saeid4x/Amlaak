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

export default function Header(){
       
    const [anchor,setAnchor]=useState(null);
    const [openDrawer,setOpenDrawer]=useState(false);

    
   var  handleMenuClick=(e)=>{
       setAnchor( 
           e.target
         )
        
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
                      <h3 onClick={toggleDrawer(true)}>سایت املاک</h3>
                      <DeleteIcon></DeleteIcon>


                <section className="left-sec">
                     <Link to=''>
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

            
                     
                     </section>
                            {/* menu avatar */}
                            <h3 onClick={ handleMenuClick} className="left-sec-avatarInfo"><InboxIcon/></h3>

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
            >
              <Drawer
                anchor='right'
                className={classes.drawer}
                variant="permanent"
                classes={{
                        paper: classes.drawerPaper,
                        }}
              >
        <div className={classes.toolbar} />
         
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <section className="avatar-sec">

        <img src="/img/1.jpg" alt="" />
        <p className="avatar-username">saeid4x</p>
        <p className="avatar-typeUser">کاربر عادی</p>
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

        <Link to="/admin/sendAds">
        <ListItem button style={{borderBottom:'1px solid cyan'}}>          
          <ListItemText primary="ارسال آگهی " className={classes.listItemText}/>     
          
          <ListItemIcon className={classes.listItemIcon}><InboxIcon/></ListItemIcon>           
        </ListItem>
        </Link>

        <Link to="/admin/manageAds">
        <ListItem button style={{borderBottom:'1px solid cyan'}}>          
          <ListItemText primary="مدیریت آگهی " className={classes.listItemText}/>     
          
          <ListItemIcon className={classes.listItemIcon}><MailIcon/></ListItemIcon>           
        </ListItem>
        </Link>

        <Link to="/admin/messages">
        <ListItem button style={{borderBottom:'1px solid cyan'}}>          
          <ListItemText primary="پیام ها" className={classes.listItemText}/>     
          
          <ListItemIcon className={classes.listItemIcon}><InboxIcon/></ListItemIcon>           
        </ListItem>
        </Link>

        <Link to="/admin/reports">
        <ListItem button style={{borderBottom:'1px solid cyan'}}>          
          <ListItemText primary="گزارش ها" className={classes.listItemText}/>     
          
          <ListItemIcon className={classes.listItemIcon}><MailIcon/></ListItemIcon>           
        </ListItem>
        </Link>

        <Link to="/admin/favorites">
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
 
 