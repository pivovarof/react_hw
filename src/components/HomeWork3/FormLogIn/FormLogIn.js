import React from 'react';
import { Formik } from "formik";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Button } from "@mui/material";
import * as yup from 'yup';






const FormLogIn = () => {

    const validation = yup.object().shape({
        name: yup.string().typeError('Must be a string').required('necessarily'),
        password: yup.string().typeError('Must be a string').required('necessarily'),
        

    })

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    password: ''
                    
                }}
                validateOnBlur
                onSubmit={(value) => { console.log(value) }}
                validationSchema={validation}
            >
                {({ values, errors,  handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
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
                            


                            <Button variant="contained"
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type={'submit'}
                            >Sign Up</Button>
                        </div>

                    </Box>
                    
                )}

            </Formik>
        </div>
    )
}

export default FormLogIn;