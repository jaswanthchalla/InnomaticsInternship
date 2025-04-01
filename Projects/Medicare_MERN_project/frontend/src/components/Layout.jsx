import React, { useState } from 'react';
import '../layout.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {Badge, Avatar} from 'antd';


function Layout(props) {
    const [collapsed, setCollapsed] = useState(false);
    const {user} = useSelector((state) => state.user);
    const navigate = useNavigate();
    const location = useLocation();

    const userMenu = [
        {
            name: 'Home',
            path: '/',
            icon : 'ri-home-4-line',
        },
        {
            name: 'Appointments',
            path: '/appointments',
            icon : 'ri-file-list-3-line',
        },
        {
            name: 'Register as Doctor',
            path: '/apply-doctor',
            icon : 'ri-hospital-line',
        },
        {
            name: 'Profile',
            path: '/profile',
            icon : 'ri-user-line',
        },
    ];

    const adminMenu = [
        {
            name: 'Home',
            path: '/',
            icon : 'ri-home-4-line',
        },
        {
            name: 'Users',
            path: '/users',
            icon : 'ri-user-line',
        },
        {
            name: 'Doctors',
            path: '/doctors',
            icon: 'ri-hospital-line'
        },
        {
            name: 'Profile',
            path: '/profile',
            icon : 'ri-user-line',
        },
    ];

    let menuToBeRendered = userMenu;
    if(user?.isAdmin){
        menuToBeRendered = adminMenu;
    }
    return (
        <div className='main p-2'>
            <div className='d-flex layout'>
                <div className='sidebar'>
                    <div className="sidebar-header">
                        <h1 className='logo'>MC</h1>
                    </div>
                    <div className="menu">
                        {menuToBeRendered.map((menu) => {
                            const isActive = location.pathname === menu.path;
                            return <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                                <i className={menu.icon}></i>
                                {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                            </div>
                        })}
                        <div className={`d-flex menu-item`} onClick={()=>{
                            localStorage.clear();
                            navigate('/login');
                        }}>
                            <i className='ri-logout-circle-r-line'></i>
                            {!collapsed && <Link to='/login'>Logout</Link>}
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div className="header">
                        {collapsed ? (<i class="ri-menu-line header-action-icon" onClick={()=>setCollapsed(false)}></i>) : (<i className="ri-close-circle-line header-action-icon" onClick={()=>setCollapsed(true)}></i>)}

                        <div className='d-flex align-items-center px-4'>
                            <Badge count={user?.unseenNotifications.length} onClick={()=>navigate('/notifications')}><i className="ri-notification-3-line header-action-icon px-3"></i></Badge>   
                            <Link className='anchor mx-3' to='/profile'>{user?.name}</Link>
                        </div>
                    
                    </div>
                    <div className="body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout