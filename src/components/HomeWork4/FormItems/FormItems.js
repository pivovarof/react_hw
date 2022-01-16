import React, { useState } from 'react';
import { Formik } from "formik";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ListItem from '../ListItems/ListItems';
import './FormItems.css'





const FormItems = () => {

    const validation = yup.object().shape({
        search: yup.string().typeError('Must be a string'),
        number: yup.string().typeError('Must be a string').required('Required'),
    })

    const [numbers, setNumbers] = useState([]);

    const onDelete = id => {
        setNumbers(numbers.filter(obj => id !== obj.id))
    }

    const onSearch = num => {
        if (toString(num) === 0) {
            return numbers
        }
        setNumbers(numbers.filter(obj => {

            return toString(obj.number).indexOf(num) > -1
        }
        ))

    }

    return (
        <div className='container'>
            <h1>CONTACTS LIST</h1>
            <Formik
                initialValues={{
                    number: '',
                    id: '',
                    search: ''
                }}
                validateOnBlur
                onSubmit={(value) => {
                    return setNumbers(prevState => {
                        prevState.map(obj => {
                            if(value.number === obj.number){
                                return toast(`Number ${value.number} already exist`);
                            }                           
                            return [...prevState, value]
                        })
                        value.id = uuidv4();
                        return [...prevState, value]
                    })
                }}

                validationSchema={validation}
            >
                {({ values, errors, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

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
                                label={errors.search ? errors.search : 'Search'}
                                placeholder="Search"
                                type={'number'}
                                name={'search'}
                                onChange={e => onSearch(e.target.value)}
                                onBlur={handleBlur}
                                // value={values.search}
                                error={errors.search ? true : false}
                            />

                            <TextField
                                id="standard-password-input"
                                className="input"
                                label={errors.number ? errors.number : 'Number'}
                                placeholder="Number"
                                type={'number'}
                                name={'number'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.number}
                                error={errors.number ? true : false}
                            />

                            <Button variant="contained"
                                disabled={isValid && dirty ? false : true}
                                onClick={handleSubmit}
                                type={'submit'}
                            >Save</Button>
                            <ToastContainer />
                        </div>
                        <div className='listItems'>
                            <ul >
                                {
                                    numbers && numbers.map(item => <ListItem key={item.id} item={item} onDelete={() => onDelete(item.id)} />)
                                }
                            </ul>
                        </div>
                    </Box>
                )}
            </Formik>
        </div>
    )
}

export default FormItems;