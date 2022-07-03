import React from "react"
//import '../App.css'
import Form from 'react-bootstrap/Form'




function Input(props){
    const {label,type,name,placeholder,register} = props
    return(
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type || "text"} name={name} placeholder={placeholder || ""} {...register} />
        </Form.Group>  )
}
export default Input