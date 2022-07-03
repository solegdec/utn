import React,{useState} from "react"
import {Link} from "react-router-dom"
//import '../App.css';

import {Card,Button,Col} from 'react-bootstrap'


const style = {
    card:{ width: '18rem' }
}
function Producto(props){
    const {data,id} = props
    console.log(data)
    const [mensaje,setMensaje] = useState('')
    const handleClick = ()=>{
        console.log("Id producto",data.id)
        setMensaje("Gracias por su compra")
    } 
    return(
        <Col>
            <Card style={style.card}>
                <Card.Img variant="top" src={data.thumbnail} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        $ {data.price}
                    </Card.Text>
                    <Button as={Link} to={'/producto/'+ data.id} variant="dark">Ver Detalle</Button>
                    <Button as={Link} to={'/productos/modificar/'+data.id} variant="dark">Modificar</Button>
                    <div>{mensaje}</div>
                </Card.Body>
            </Card>
        </Col>
            
    )
}
export default Producto
