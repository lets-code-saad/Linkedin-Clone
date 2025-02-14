import React from 'react';
import SigninHead from './Header/SigninHead';
import "./Css/SigninMain/Signin.css"
import SigninFooter from './Footer/SigninFooter';
import SigninModal from './SigninModal/SigninModal';

const Signin = ()=>{
    return (
<div className='signinPage'>
<SigninHead/>
<SigninModal/>
<SigninFooter/>
</div>
    )
}

export default Signin;