import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className="h-100 pt-5" style={ { backgroundColor: '#1C75BACC' } }>
            <div className="text-center">
                <h2><FontAwesomeIcon icon={ faUser } /></h2>
                <h4>Sabbir Ahmed</h4>
            </div>
            <div className=" mt-5 container">
                <ul className="list-unstyled">
                    <Link to="/blog" className="text-dark text-decoration-none" ><li>Blog</li></Link>
                    <hr className="text-white" />
                    <Link to="/myStock" className="text-dark text-decoration-none" ><li className="text-white fw-bold" >My Stocks</li></Link>
                    <hr className="text-white" />
                    <Link to="/referFriend" className="text-dark text-decoration-none"><li>Refer A Friend</li></Link>
                    <hr className="text-white" />
                    <Link to="/subscriptionStatus" className="text-dark text-decoration-none"><li>Subscription Status</li></Link>
                    <hr className="text-white" />
                    <Link to="/logout" className="text-dark text-decoration-none"><li>Logout</li></Link>
                    <hr className="text-white" />
                </ul>
            </div>
        </div>
    );
};

export default SideBar;