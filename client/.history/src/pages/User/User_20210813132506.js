import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function User() {
  return (
    <>


<ProSidebar>
  <Menu iconShape="square">
    <MenuItem >Dashboard</MenuItem>
    <Men title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>;


    </>
  )}

export default User;
