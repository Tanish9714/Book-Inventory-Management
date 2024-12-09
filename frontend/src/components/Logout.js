import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { LogOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        LogOut().then(()=>{
            alert("Logout successfully")
            navigate('/login', {replace: true});
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    };
  return (
    <div className="h-screen bg-teal-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Are you sure you want to log out?</h1>
      <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-red-400" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
