import React, {ChangeEvent, FC, useState} from 'react';
import {TextField} from "@material-ui/core";

type EditableSpanType = {
    title: string
    onChange:(nextTitle:string)=>void
}

export const EditableSpan =React.memo( (props:EditableSpanType) => {
    let [userText, setUserText] = useState(props.title)
    const [editMode, setEditMode] = useState<boolean>(false)
    const onChangeHandlerText = (e: ChangeEvent<HTMLInputElement>) => {
        setUserText(e.currentTarget.value)
    }

    const onEditMode = () => {
        console.log('blabla')
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
       props.onChange(userText)
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
});
