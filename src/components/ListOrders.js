import React, { useState, useEffect, Fragment } from "react";
import { Dropdown, Selection } from 'react-dropdown-now';
import './ListOrders.css';

const ListOrders = (props)  =>{

    const {contents} = props;

    function listOrder (idUser) {
        return(
            <div>
                {contents.map((content) =>{
                    //if(content.user.id == idUser) return(
                        <li key={content.id}>
                        <div>
                        <span className="Component-Title"><b className="Component-Attribute">Nombre cliente :</b><b>{content.user.name}</b></span>
                        <br />
                        <span className="Component-Title"><b className="Component-Attribute">Nombre plato :</b><b>{content.dish.name}</b></span>
                        <br />
                        <span className="Component-Title"><b className="Component-Attribute">Descripcion plato :</b><b>{content.dish.description}</b></span>
                        <br />
                        <span className="Component-Title"><b className="Component-Attribute">Precio :</b><b>{content.dish.price}</b></span>
                        </div>
                        </li>
                    //)
                })}
            </div>
        )
    }

    const users = [1,2,3,4,5,6,7];

    return (
        <div class="flexbox-container">
            <h1>Lista de pedidos</h1>
            <div>
            <Dropdown
                placeholder="Seleccione una opción"
                className="my-className"
                options={users}
                //value="one"
                onChange={(value) => console.log('change!', value)}
                onSelect={(value) => listOrder(value)} 
                onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                onOpen={() => console.log('open!')}
            />
            <button type="submit">Entregado</button>
            <button type="submit">Deshacer</button>
            listOrder(value);
            </div>
        </div>
        
    );
    
}
export default ListOrders;