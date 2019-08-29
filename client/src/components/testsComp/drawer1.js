import React ,{useState} from 'react';
import { Button,Drawer } from '@material-ui/core';
 
 
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


export default function MyDrawer(){
    const [state,setState]=useState( {left:false});

 const   toggleDrawer=(status)=>event=>{
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //     return;
    //   }
        setState({left:status})
    }


    const sideList = side => (
        <div
          
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text}  secondary="saeid imani"/>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

    return (
        <div>
        <Button onClick={toggleDrawer(true)} >click Me!</Button>
        <Drawer open={state.left} onClose={toggleDrawer(false)} >
             {sideList('left')}
        </Drawer>
        </div>
    )
}