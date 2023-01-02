import React, { useState } from 'react';
import "./Signupform.css"
import "../../../styles/globalstyles.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    username: '',
    password: '',
    password2: '',
  });

  const [loginMsg, setLoginMsg] = useState(''); 

  const navigate = useNavigate();

  const { name, age, email, username, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginMsg('');
    if (password !== password2) {
    //   console.error('Passwords do not match');
      message.warning('Passwords do not match');
      setLoginMsg('Passwords do not match');
    } else {
      try {
        const response = await axios.post('http://localhost:9000/api/users/createuser', {
          name,
          age,
          email,
          username,
          password,
        });
        console.log(response.data.message);
        message.success(response.data.message);
        setLoginMsg(response.data.message);
        localStorage.setItem('moments_token', response.data.token);
        navigate('/profile');
        clearForm();
      } catch (error) {
        console.error(error);
        setLoginMsg(error.response.data.message);
        message.error('Something went wrong');
      }
    }
  };

    const clearForm = () => {
        setFormData({
            name: '',
            age: '',
            email: '',
            username: '',
            password: '',
            password2: '',
        });
    };


  return (
    <div className='signup_container'>
      <h2 className='signup_h2'>Signup</h2>

      <div>
        {loginMsg && (
            <div className='alert_msg' role='alert'>
               ! {loginMsg}
            </div>
        )}
      </div>
      <form className='signup_form' onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            placeholder='John Doe'
            className='signup_input'
        />
        <input
            type="number"
            name="age"
            value={age}
            onChange={handleChange}
            required
            placeholder='18 +'
            className='signup_input'
        />
        <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder='jaonedpe@mail.com'
            className='signup_input'
        />
        <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            required
            placeholder='JohnDoe4456'
            className='signup_input'
        />
        <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            placeholder='*************'
            className='signup_input'
        />
        <input
            type="password"
            name="password2"
            value={password2}
            onChange={handleChange}
            required
            placeholder='*************'
            className='signup_input'
        />
        <button type="submit" className='signup_button primary__btn' >Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default Signup;
