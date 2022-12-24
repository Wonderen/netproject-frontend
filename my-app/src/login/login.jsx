import React from 'react';
import './loginStyle.css';
function LoginScreen() {

    const loginUser = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "user_name": document.getElementById("user_name").value,
        "password": document.getElementById("password").value 
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        var r;
        await fetch("http://127.0.0.1:8000/login/", requestOptions)
        .then(response => response.text())
        .then(result => {r = result});
        console.log(r);
        document.getElementById("msg").innerHTML = r;
      };

    return (
        <div class="form-container">
        <form action="" method="post">
            <h3>Login now</h3>
            <input type="snumber" name="snumber" placeholder="enter your student number"/>
            <input type="password" name="password" placeholder="enter your password"/>
            <select name="user_type">
                <option value="user">user</option>
                <option value="admin">admin</option>
            </select>
            {/* <!-- <input type="submit" name="submit" value="Login" class="form-btn"> --> */}
            <a href="questionnaire.html">
                <button>Login</button>
                </a>
            <p>don't have an account? <a href="signup_form.html">signup here</a></p>
        </form>
        </div>
    );
}

export default Login;