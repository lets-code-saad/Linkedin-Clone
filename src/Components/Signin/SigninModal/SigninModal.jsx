import { Box, Button, Card, FormControl, FormHelperText, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import "./SigninModal.css"
import { Link, useNavigate } from 'react-router-dom'

const SigninModal = () => {

    // USING THE NAVAIGATE FUNCTION FROM REACT ROUTER DOM
    const navigate = useNavigate()

    // FORM HANDLING
    const { control, handleSubmit, trigger, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });


    // CREATING STATE FOR UPDATING THE ERROR WHEN BOTH ARE INCORRECT
    const [wrongBoth, setwrongBoth] = useState("")


    const onSubmit = (data) => {
        // GETTING THE STORED EMAIL AND PASSWORD IN LOCAL STORAGE
        const storedEmail = localStorage.getItem("email")
        const storedPass = localStorage.getItem("password")
        const enteredEmail = data.email;
        const enteredPass = data.password;

        // VALIDATING THE EMAIL AND PASSWORD
        if (enteredEmail == storedEmail && enteredPass == storedPass) {
            setwrongBoth("")
            navigate("/home")
        }
        else {
            setwrongBoth("Wrong email or password. Try again or")
            navigate("/signin")
        }
    };

    // CREATING STATE TO CREATE THE HIDE AND SEEK FUNCTION FOR PASSWORD

    const [showPassword, setShowPassword] = useState(false)

    const passwordToggler = () => {
        setShowPassword(!showPassword) //to switch between true and false
    }

    return (
        <div className='d-flex justify-content-center'>
            <Card className='signinModal p-4 border-0 rounded-3 d-flex flex-column gap-3'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* SIGNIN HEADING */}
                    <div>
                        <h3>Sign in</h3>
                        <Typography>Stay updated on your professional world.</Typography>
                    </div>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "35px" }}>
                        {/* EMAIL INPUT */}

                        <Controller
                            name='email'
                            control={control}
                            rules={{ required: "Please enter an email address or phone number.", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address" } }}
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <TextField
                                        {...field}
                                        type='email'
                                        label="Email or phone"
                                        error={errors.email}
                                        size="medium"
                                        color='primary'
                                        sx={{ borderRadius: "5px", height: "32px", marginTop: "20px", fontWeight: "500" }}
                                    />
                                </FormControl>
                            )}
                        />
                        {!wrongBoth ?
                            errors.email && <h6 className='text-danger mt-2'>{errors.email.message}</h6> : ""}

                        {/* Passord Input */}

                        <Controller
                            name='password'
                            control={control}
                            rules={{ required: "Please enter your password", minLength: { value: 7, message: "Password must be 6 characters or more." } }}
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <TextField
                                        {...field}
                                        type={showPassword ? "text" : "password"}
                                        size="medium"
                                        label="Password"
                                        color="primary"
                                        error={errors.password}
                                        sx={{ borderRadius: "5px", height: "32px", fontWeight: "500", marginTop: "auto" }}
                                        InputProps={{
                                            endAdornment: (
                                              <InputAdornment position="end">
                                                <Button
                                                  onClick={passwordToggler}
                                                  className="fw-bold fs-7 text-capitalize text-website"
                                                >
                                                  {showPassword ? "Hide" : "Show"}
                                                </Button>
                                              </InputAdornment>
                                            ),
                                          }}
                                    />
                                </FormControl>
                            )}
                        />
                        {wrongBoth ?
                            <h6 className='text-danger mt-2'>{wrongBoth}
                                <Link className='text-underlined text-danger' to="/signup">
                                    <span className='fs-6 cp'> create an account</span>
                                </Link>
                            </h6> :

                            errors.password && <h6 className='text-danger mt-2'>{errors.password.message}</h6>
                        }
                    </Box>

                    {/* FORGOT PASSWORD */}
                    <div className='d-flex gap-2'>
                        <Button sx={{ ":hover": { textDecoration: "underline", backgroundColor: "#D0E8FF", borderRadius: "23px" }, marginTop: "35px" }} className='text-website cp text-capitalize fw-semibold'>Forgot Password?</Button>
                    </div>


                    {/* Remember Me CHECKBOX */}
                    <Box sx={{ marginTop: "auto" }} className='d-flex gap-2'>
                        <input id='rememberChk' className='rememberChk fs-1' type="checkbox" />
                        <label>Keep me logged in</label>
                    </Box>


                    {/* Terms And Services Text */}
                    <Typography sx={{ marginTop: "15px", fontSize: "12px", textAlign: "center", color: "#666666" }}>By clicking Continue, you agree to LinkedIn’s <span className='text-website fw-bold'>User Agreement</span>, <span className='text-website fw-bold'>Privacy Policy</span>, and <span className='text-website fw-bold'>Cookie Policy</span>.</Typography>


                    {/* Agree Button */}
                    <Button sx={{ ":hover": { backgroundColor: "#004182!important" } }}
                        fullWidth
                        size='large'
                        type='submit'
                        className='btn-bg-website text-white border-0 rounded-pill text-capitalize fw-medium fs-6 mt-3'>
                        Sign In
                    </Button>

                </form>
            </Card>
        </div>
    )
}

export default SigninModal
