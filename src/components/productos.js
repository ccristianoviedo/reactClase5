import React, { useState } from 'react';
import './producto.css'

function ProductCard (props) {
    const [counter, setCounter] =useState(1) 
        ;
        
        const contar = () => {
            setCounter(counter + 1);
                  
        }
        const restar = () => {
            setCounter(counter - 1);      
            
        }
        const reset = () =>  {
            setCounter (0);
        }   
        if (counter>=1) {
            if (props.stock>0){
                return (
                    <div className='producto'>
                        <p>Producto: {props.producto}</p>
                        <p>Origen: {props.origen}</p>
                        <p>Caracteristicas : {props.caracteristicas}</p>
                        <p>Precio:{props.precio}</p>
                        <p>Stock:{props.stock}</p>
                        <input type="submit" min="1" value={counter} />
                        <button type='button' className=' btn btn-dark' onClick={contar}>COMPRAR</button>
                        <button type='button' className=' btn btn-dark' onClick={restar}>RESTAR</button>
                        <button type='button' className=' btn btn-dark' onClick={reset}>ANULAR</button>
                    </div>
                )
            }  
        }
        else if (counter<1){
            return (
                <div className='producto'>
                    <p>Producto: {props.producto}</p>
                    <p>Origen: {props.origen}</p>
                    <p>Caracteristicas : {props.caracteristicas}</p>
                    <p>Precio:{props.precio}</p>
                    <p>Stock:{props.stock}</p>        
                    <input type="submit" min="1" value={counter} />
                    <button type='button' className=' btn btn-dark' onClick={contar}>COMPRAR</button>     
                </div>     
            )
        }
        else (props.stock=0)
        return (
        <div className='producto'>
            <p>Producto: {props.producto}</p>
            <p>Origen: {props.origen}</p>
            <p>Caracteristicas : {props.caracteristicas}</p>
            <p>Precio:{props.precio}</p>
            <p>Stock:{props.stock} SIN STOCK</p>
        </div>
        )
                  
} 
export default ProductCard