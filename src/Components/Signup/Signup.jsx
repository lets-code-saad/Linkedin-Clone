import React from 'react';
import SignupHead from './Header/SignupHead';
import "./Css/SignupMain/Signup.css"
import SignupFooter from './Footer/SignupFooter';
import SignupModal from './SignupModal/SignupModal';

const Signup = ()=>{
    return (
<div className='signupPage'>
<SignupHead/>
<SignupModal/>
<SignupFooter/>
</div>
    )
}

export default Signup;