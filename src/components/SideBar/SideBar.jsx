import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';



const SideBar = () => {
    const { authUser, logout } = useAuth()
    
    return (
        <div className="h-100 pt-5" style={ { backgroundColor: '#1C75BACC' } }>
            <div className="text-center">
                <h2><FontAwesomeIcon icon={ faUser } /></h2>
                <h4>{authUser?.firstName + " " + authUser?.lastName}</h4>
            </div>
            <div className=" mt-5 container">
                <ul className="list-unstyled">
                    <Link to="/blog" className="text-dark text-decoration-none" ><li className=" custom-style">Blog</li></Link>
                    <hr className="text-white" />
                    <Link to="/myStock" className="text-dark custom-style text-decoration-none" ><li className=" custom-style" >My Stocks</li></Link>
                    <hr className="text-white" />
                    <Link to="/referral" className="text-dark text-decoration-none custom-style"><li className=" custom-style">Refer A Friend</li></Link>
                    <hr className="text-white" />
                    <Link to="/subscriptionStatus" className="text-dark text-decoration-none custom-style"><li className=" custom-style">Subscription Status</li></Link>
                    <hr className="text-white" />
                    <div onClick={logout} className=" custom-style">Logout</div>
                    <hr className="text-white" />
                </ul>
            </div>
        </div>
    );
};

export default SideBar;