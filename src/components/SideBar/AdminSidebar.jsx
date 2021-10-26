import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../image/logo.png';

const AdminSidebar = () => {
    return (
        <div id="sidebar" className="h-100 pt-5" style={{backgroundColor: "#1C75BACC"}} >
            <div className="text-center mb-5">
                <img src={ logo } alt="logo" className="img-fluid" style={ { width: '10rem' } } />
            </div>
            <div className="text-center mb-5">
                <h4 className="fw-bold">Admin</h4>
            </div>
            <div className=" mt-5 container">
                <ul className="list-unstyled">
                    <Link to="/admindashboard" className="mouse-click text-dark text-decoration-none active"><li>Dashboard</li></Link>
                    <hr className="text-white" />
                    <Link to="/adminpending" className="mouse-click text-dark text-decoration-none"><li>Pending</li></Link>
                    <hr className="text-white" />
                    <Link to="/adminreferral" className="mouse-click text-dark text-decoration-none"><li>Referral</li></Link>
                    <hr className="text-white" />
                    <Link to="/adminblog" className="mouse-click text-dark text-decoration-none"><li>Blog</li></Link>
                    <hr className="text-white" />
                    <Link to="/activetraders" className="mouse-click text-dark text-decoration-none"><li>Active Traders</li></Link>
                    <hr className="text-white" />
                    <Link to="/deactivetraders" className="mouse-click text-dark text-decoration-none"><li>Deactive Traders</li></Link>
                    <hr className="text-white" />
                    <Link to="/deletetraders" className="mouse-click text-dark text-decoration-none"><li>Delete Traders</li></Link>
                    <hr className="text-white" />
                    <Link to="/addstock" className="mouse-click text-dark text-decoration-none"><li>Add Stock</li></Link>
                    <hr className="text-white" />
                    <Link to="/logout" className="mouse-click text-dark text-decoration-none"><li>Logout</li></Link>
                    <hr className="text-white" />
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar;