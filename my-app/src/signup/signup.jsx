import React from 'react';
import './style.css';

function Signup() {
    return (
        <div class="form-container">
    <form action="" method="post">
        <h3>Sign up now</h3>
        <input type="text" name="name" placeholder="enter your name"/>
        <input type="snumber" name="snumber" placeholder="enter your student number"/>
        <input type="pnumber" name="pnumber" placeholder="enter your phone number"/>
        <input type="password" name="password" placeholder="enter your password"/>
        <input type="password" name="cpassword" placeholder="confirm your password"/>
        {/* <!-- <input type="submit" name="submit" value="Signup" class="form-btn"> --> */}
        <a href="login_form.html">
            <button>Signup</button>
          </a>
        <p>already have an account? <a href="login_form.html">login here</a></p>
    </form>
</div>
    );
}

export default Signup;