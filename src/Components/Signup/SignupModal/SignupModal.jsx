import { Button, FormControl, TextField, OutlinedInput, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import "./SignupModal.css"
import { Link, useNavigate } from 'react-router-dom'

const SignupModal = () => {

    // USENAVIGATE
    const navigate = useNavigate()

    // FORM HANDLING
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = (data) => {
        // SETTING THE EMAIL AND PASSWORD TO LOCAL STORAGE
        localStorage.setItem("email", data.email)
        localStorage.setItem("password", data.password)

        if (data.email && data.password) {
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
            <div className='signupModal p-4 border-0 rounded-3'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* EMAIL INPUT */}

                    <Controller
                        name='email'
                        control={control}
                        rules={{ required: "Please enter your email", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address" } }}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <label className="fw-medium fs-6 mb-2">Email</label>
                                <OutlinedInput
                                    {...field}
                                    type='email'
                                    error={errors.email}
                                    size="small"
                                    color='black'
                                    sx={{
                                        borderRadius: "5px", height: "32px",
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover': {
                                                cursor: 'pointer', // Pointer cursor on hover
                                            }
                                        },
                                        border: "1px solid #666666", '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none', // Removes the outline
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            border: 'none', cursor: "pointer"// Removes outline on hover
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            // Removes outline when focused
                                        },
                                    }}
                                />
                            </FormControl>
                        )}
                    />
                    {errors.email && <span className='text-danger fs-12'>{errors.email.message}</span>}
                    {/* Passord Input */}

                    <Controller
                        name='password'
                        control={control}
                        rules={{ required: "Please enter your password", minLength: { value: 7, message: "Password must be 6 characters or more." } }}
                        render={({ field }) => (
                            <FormControl className="mt-3" fullWidth>
                                <label className="fw-medium fs-6 mb-2">Password</label>
                                <OutlinedInput
                                    {...field}
                                    type={showPassword ? "text" : "password"}
                                    size="small"
                                    color="black"
                                    error={errors.password}

                                    sx={{borderRadius: "5px", height: "32px",
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover': {
                                                cursor: 'pointer', // Pointer cursor on hover
                                            }
                                        },
                                        border: "1px solid #666666", '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none', // Removes the outline
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            border: 'none', cursor: "pointer"// Removes outline on hover
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                             // Removes outline when focused
                                        },
                                    }
                                    }
                                    endAdornment={
                                        <Button onClick={passwordToggler} className='fw-bold fs-7 text-capitalize text-website' edge="end">
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    }
                                />
                            </FormControl>
                        )}
                    />
                    {errors.password && <span className='text-danger fs-12'>{errors.password.message}</span>}

                    {/* Remember Me CHECKBOX */}
                    <div className='d-flex gap-2 mt-3'>
                        <input id='rememberChk' className='rememberChk fs-1' type="checkbox" />
                        <label>Remember Me</label>
                    </div>


                    {/* Terms And Services Text */}
                    <Typography sx={{ marginTop: "15px", fontSize: "12px", textAlign: "center", color: "#666666" }}>By clicking Agree & Join or Continue, you agree to the LinkedIn <span className='text-website fw-bold'>User Agreement</span>, <span className='text-website fw-bold'>Privacy Policy</span>, and <span className='text-website fw-bold'>Cookie Policy</span>.</Typography>


                    {/* Agree Button */}
                    <Button sx={{ ":hover": { backgroundColor: "#004182!important" } }}
                        fullWidth
                        size='large'
                        type='submit'
                        className='btn-bg-website text-white border-0 rounded-pill text-capitalize fw-medium fs-6 mt-3'>
                        Agree & Join
                    </Button>


                    {/* Existing User Page */}
                    <Typography sx={{ color: "#373637", fontSize: "15px", marginTop: "20px", justifyContent: "center", textDecoration: "none", display: "flex", gap: "4px" }}>Already on LinkedIn?
                        <Link className='text-decoration-none' to="/signin">
                            <span className='signin_text text-website fw-medium'>Sign in</span>
                        </Link>

                    </Typography>

                </form>
            </div>
        </div>
    )
}

export default SignupModal
