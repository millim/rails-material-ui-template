import React from 'react';
import {ListItem, ListItemIcon, ListItemText, ListSubheader, Link} from '@material-ui/core';;
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const LinkItem = (props) =>{
  return (
    <Link color="inherit" underline="none" href={props.url}>
      <ListItem  selected={location.pathname === props.url} button>
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.title} />
      </ListItem>
    </Link>
  )
}



export const mainListItems = (
  <div>
    <ListSubheader inset>List</ListSubheader>
    <LinkItem url="/" icon={<DashboardIcon />} title="First Page"></LinkItem>
    <LinkItem url="/sessions" icon={<ShoppingCartIcon />} title="Second Page"></LinkItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Sc List</ListSubheader>
  </div>
);
