import React  from 'react'


import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
export default function Sidebar(props) {
   
    return (

        <div style={{ display: 'flex', height: '150vh', overflow: 'scroll initial' }}>

            <CDBSidebar textColor="#fff" backgroundColor="#3d3e42">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: 'inherit' }}>
                        COVID-END
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/utilisateurs" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">PATIENTS</CDBSidebarMenuItem>
                        </NavLink>
                         <NavLink exact to="/admin" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">PERSONNELS</CDBSidebarMenuItem>
                        </NavLink> 
                        <NavLink exact to="/cars" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="article">ARTICLES</CDBSidebarMenuItem>
                        </NavLink>
                       


                    </CDBSidebarMenu>
                </CDBSidebarContent>

                
            </CDBSidebar>
        </div>

    )
}