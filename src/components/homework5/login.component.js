import React, { useState } from "react";

const users = [
  {username: 'today', password: '123456'},
  {username: 'tomorrow', password: '111111'},
  {username: 'yesterday', password: '666666'}
];

const Login = () => {

  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [login, setLogin] = useState({
    message: '',
    isLogin: false
  });

  const handleChangeValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSummit = (e) => {
    e.preventDefault();
    setLogin({
      message: 'wrong username or password',
      isLogin: false
    });
    users.map(eachUser => {
      if (eachUser.username === user.username)
        if (eachUser.password === user.password)
          setLogin({
            message: 'Login success',
            isLogin: true
          });
    });
  };

  return (
    <>
      <div>{login.message}</div>
      {login.isLogin ?
        <button onClick={() =>{
          setLogin({
            message: '',
            isLogin: false
          });
          setUser({
            username: '',
            password: ''
          })
        }
        }>Logout</button>
        : (
          <form onSubmit={handleSummit}>
            Username: <input type='text' name='username' onChange={handleChangeValue}/>
            Password: <input type='password' name='password' onChange={handleChangeValue}/>
            <button>Submit</button>
          </form>
        )}

    </>
  );
};

export default Login;