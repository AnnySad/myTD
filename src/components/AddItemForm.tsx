import React, {KeyboardEvent, ChangeEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFormType = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: AddItemFormType) => {
    console.log('AddItemForm')
    let [title, setTitle] = useState('')
    const [error, setError] = useState<boolean>(false)
    const addItem = () => {
        if (title.trim() !== '') {
            props.addItem(title);
            setTitle('')
        } else {
            setError(true)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addItem()
        }
    }

    return (
        <div>
            <TextField
                id="outlined-secondary"
                variant="outlined"
                color="primary"
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                error={error}
                label='Title'
                helperText={error  ? 'Title is required' : ''}
            />
            {/* <button onClick={addItem}>+</button>*/}
           {/* <Button onClick={addItem} variant="contained" color="primary">+</Button>*/}
            <IconButton
                color="primary"
                onClick={addItem}>
                <AddBox/>
            </IconButton>

        </div>
    );
};
