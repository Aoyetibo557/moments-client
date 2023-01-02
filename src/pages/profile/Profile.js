import React from 'react'
import { useNavigate } from 'react-router-dom';
import RequireAuth from '../../components/_protectedroute/RequireAuth';


function Profile() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('moments_token');
        navigate('/',{replace: true})
    }

  return (
    <RequireAuth 
        redirectTo="/login"
    >
        <h3>
            Welcome to Profile Page, You Must be authenticated to see this page
        </h3>
        <button 
            onClick={logout}

        >Logout</button>
    </RequireAuth>
  )
}

export default Profile