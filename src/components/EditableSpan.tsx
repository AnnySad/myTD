import React, {ChangeEvent, FC, useState} from 'react';
import {TextField} from "@material-ui/core";

type EditableSpanType = {
    title: string
    changeTitle:(nextTitle:string)=>void
}

export const EditableSpan = (props:EditableSpanType) => {
    let [userText, setUserText] = useState(props.title)
    const [editMode, setEditMode] = useState<boolean>(false)
    const onChangeHandlerText = (e: ChangeEvent<HTMLInputElement>) => {
        setUserText(e.currentTarget.value)
    }

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
       props.changeTitle(userText)
    }

    return (
        editMode
            ? <TextField
                id="outlined-secondary"
                variant="outlined"
                color="primary"
                autoFocus={true}
                value={userText}
                onChange={onChangeHandlerText}
                onBlur={offEditMode}
            />
            : <span onDoubleClick={onEditMode}>{props.title}</span>
    );
};
