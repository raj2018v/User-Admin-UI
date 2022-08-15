import React from "react"
import {
        List, 
        Datagrid, 
        TextField, 
        EditButton, 
        EmailField, 
        DeleteButton,
        Edit, 
        SimpleForm, 
        Create,
        TextInput
    } from "react-admin"

export const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="name"/>
                <EmailField source="email"/>
                <TextField source="role"/>
                <EditButton source="Action" basePath="/posts"/>
                <DeleteButton basePath="/posts"/>
            </Datagrid>
        </List>
    )
}
export const UserEdit = (props) => {
    return (
        <Edit title='Edit User' {...props}>
            <SimpleForm>
            <TextInput source="id"/>
                <TextInput source="name"/>
                <TextInput source="email"/>
                <TextInput source="role"/>
            </SimpleForm>
        </Edit>
    )
}
export const UserCreate = (props) => {
    return (
        <Create title='Create User' {...props}>
            <SimpleForm>
            <TextInput source="id"/>
                <TextInput source="name"/>
                <TextInput source="email"/>
                <TextInput source="role"/>
            </SimpleForm>
        </Create>
    )
}
