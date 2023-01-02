import React, { useState } from 'react';
import "./Loginform.css";
import "../../../styles/globalstyles.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Loginform() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/users/login', { username, password });
      console.log(response.data);
      localStorage.setItem('moments_token', response.data.token);
      navigate('/profile');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className='login_container'> 
      <h2 className='login_h2'>Login</h2>
      <form className='login_form' onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          required
          placeholder='jamesfrea453'
          className='login_input'
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          placeholder='************'
          className='login_input'
        />

        <button type='submit' className='login_btn primary__btn'>Login</button>
        </form>
        <p>
            Don't have an account? <Link to="/register">Register</Link>
        </p>
    </div>
    );
};

