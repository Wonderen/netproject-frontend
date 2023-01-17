import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGeneral } from "../components/general-context"

import './loginStyle.css';
function LoginScreen() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [statusCode, setStatus] = useState(' ');

    const loginUser = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "student_number": document.getElementById("user_name").value,
        "password": document.getElementById("password").value 
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        fetch("http://127.0.0.1:8000/login/", requestOptions)
        .then(res => {
          setStatus(res.status)
          setError(res.statusText)
          if (res.status != 200) {
            document.getElementById("errormsg").innerHTML = res.statusText;
          } else if (res.status == 200) {
            return navigate("/")
          }
        })
      };

    return (
        <div class="form-container">
        <form onSubmit={loginUser}>
            <h3>Login now</h3>
            <input type="snumber" id='user_name' required name="snumber" placeholder="enter your student number"/>
            <input type="password" id='password' required name="password" placeholder="enter your password"/>
            <select name="user_type">
                <option value="user">user</option>
                <option value="admin">admin</option>
            </select>
            {/* <!-- <input type="submit" name="submit" value="Login" class="form-btn"> --> */}
            {/* <a href="questionnaire.html"> */}
            <a>
              <div className="text-right">
                <button type="submit" className="btn mt-3">
                  LOGIN
                </button>
              </div>
            </a>
            <p>don't have an account? <a href="signup_form.html">signup here</a></p>
            <p id="errormsg"></p>
        </form>
        </div>
    );
}

export default LoginScreen;