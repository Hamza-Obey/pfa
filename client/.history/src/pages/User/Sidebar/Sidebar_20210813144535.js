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
                         <NavLink exact to="/ressources-humaine" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">PERSONNELS</CDBSidebarMenuItem>
                        </NavLink> 
                        <NavLink exact to="/cars" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="article">ARTICLES</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/emplois" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Emplois</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/courses" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="book">Cours</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/exercices" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="pencil">Exercices</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/natifications" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="bell">
                                Notifications
                            </CDBSidebarMenuItem>
                        </NavLink>


                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                    </div>
                    
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>

    )
}