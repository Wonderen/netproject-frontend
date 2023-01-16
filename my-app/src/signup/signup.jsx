import React from 'react';
import './style.css';

function Signup() {
    const signupUser = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw= JSON.stringify({
            "user_name": document.getElementById("name").value,
            "student_number": document.getElementById("snumber").value,
            "phone_number": document.getElementById("pnumber").value,
            "password": document.getElementById("password").value
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };


        await fetch("http://127.0.0.1:8000/signup/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      };
    return (
     <div class="form-container">
     <form onSubmit={signupUser}>
        <h3>Sign up now</h3>
        <input type="text" id="name" name="name" placeholder="enter your name"/>
        <input type="snumber" id="snumber" name="snumber" placeholder="enter your student number"/>
        <input type="pnumber" id="pnumber" name="pnumber" placeholder="enter your phone number"/>
        <input type="password" id="password" name="password" placeholder="enter your password"/>
        <input type="password" id="cpassword" name="cpassword" placeholder="confirm your password"/>
        {/* <!-- <input type="submit" name="submit" value="Signup" class="form-btn"> --> */}
        {/* <a onClick={}> */}
        <a>
            <button>Signup</button>
          </a>
        <p>already have an account? <a href="/login">login here</a></p>
    </form>
</div>
    );
}

export default Signup;