import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { basicDetails } from './config'

export const FormDialog = (props) => {
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        props.setBasicValues({
            ...props.basicValues,
            [name]: value,
        });
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                {basicDetails.dialogName}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{basicDetails.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {basicDetails.subtitle}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                        // change for each property 
                        value={props.basicValues.taskName}
                        type="text"
                        name="taskName"
                        label="Task Name"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                        // change for each property 
                        value={props.basicValues.description}
                        type="text"
                        name="description"
                        label="Task Description"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
