import React from 'react';
import { Button as ButtonMUI } from "@mui/material";

export const Button = ({lable, onSave}) => 
    <ButtonMUI fullWidth variant="contained" onClick={onSave}>{lable}</ButtonMUI>
