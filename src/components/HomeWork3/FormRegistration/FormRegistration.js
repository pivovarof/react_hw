import React from 'react';
import { Formik } from "formik";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import * as yup from 'yup';

import './FormRegistration.css'

const validation = yup.object().shape({
    name: yup.string().typeError('Must be a string').required('Required'),
    password: yup.string().typeError('Must be a string').required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password mismatch').required('Required'),
    email: yup.string().email('Wrong email address').required('Required'),

})


const FormRegistration = () => {

    
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                    confirmPassword: '',
                    email: ''
                }}
                validateOnBlur
                onSubmit={(value) => { console.log(value) }}
                validationSchema={validation}
                
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 2, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >                        
                        <div className="wrapInputs">
                            
                            <TextField
                                id="inputName"
                                className='input'
                                label={ errors.name ? errors.name : 'Name'}
                                placeholder="Name"
                                multiline
                                type={'text'}
                                name={'name'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                error={errors.name ? true : false}                                
                            />
                            
                            <TextField
                                id="inputEmail"
                                className="input"
                                label={ errors.email ? errors.email : 'email'}
                                placeholder="email"
                                multiline
                                type={'email'}
                                name={'email'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                error={errors.email ? true : false} 
                            />
                            
                            <TextField
                                id="standard-password-input"
                                className="input"
                                label={errors.password ? errors.password : 'Password'}
                                placeholder="Password"                                
                                type={'password'}
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                error={errors.password ? true : false}
                            />
                            
                            <TextField
                                id="confirmPassword"
                                className="input"
                                label={errors.confirmPassword ? errors.confirmPassword : 'Confirm Password'}
                                placeholder="Confirm Password"                                
                                type={'password'}
                                name={'confirmPassword'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                error={errors.confirmPassword ? true : false}
                            />


                            <Button variant="contained"
                                disabled={!isValid && dirty }
                                onClick={handleSubmit}
                                type={'submit'}
                            >Create Account</Button>
                        </div>

                    </Box>

                )}

            </Formik>
        </div>
    )
}

export default FormRegistration;