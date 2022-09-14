import React, {KeyboardEvent, ChangeEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFormType = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: AddItemFormType) => {
    let [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
    const addItem = () => {
        if (title.trim() !== '') {
            props.addItem(title);
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
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
                error={!!error}
                label='Title'
                helperText={error}
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
