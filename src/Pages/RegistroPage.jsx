import React from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import {Button,Form} from 'react-bootstrap'
import firebase from "../Config/firebase"

function RegistroPage(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data)=>{
        console.log("data",data)
        try{
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
            console.log(responseUser.user.uid)
            if(responseUser?.user?.uid){
                console.log("responseUser")
                const document = await firebase.db.collection("usuarios")
                .add({
                    name:data.name,
                    lastname:data.lastname,
                    userId:responseUser?.user?.uid
                })
                
            }
        }catch(e){
            console.log(e)
        }
        
    }
   
    return(
        <div className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Nombre" name="name" register={{...register("name", { required: true, minLength:3 })}} />
                <div>
                    {errors.name?.type==="required" && <span>El campo es obligatorio</span>}
                    {errors.name?.type==="minLength" && <span>Debe introducir al menos 3 caracteres</span>}
                </div>
                <Input label="Apellido" name="lastname" register={{...register("lastname", { required: true})}} />
                <div>
                    {errors.lastname && <span>El campo es obligatorio</span>}
                </div>
                <Input label="Email" type="email" name="email" register={{...register("email", { required: true})}} />
                <Input label="Contraseña" type="password" name="password" register={{...register("password", { required: true})}} />
                <Button type="submit" variant="dark">Registro</Button>
            </Form>
        </div>
    )
} 

export default RegistroPage