import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import { message } from 'antd';

function RequireAuth({ children, redirectTo}) {
    let isLoggedIn = localStorage.getItem('moments_token');
    let navigate = useNavigate();
   
    useEffect(() => {
        if(isLoggedIn.length > 0) {
            console.log("Logged IN");
            // message.info("User Already Logged In");
        }else{
            console.log("Not Logged IN");
            message.error("User Not Logged In");
            navigate(redirectTo,{replace: true})
        }
    },[isLoggedIn, redirectTo, navigate])
    return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
export default RequireAuth

RequireAuth.propTypes = {
    children: PropTypes.array.isRequired,
};
