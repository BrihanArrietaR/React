import React, {useState, useEffect} from "react";
import { getFetch } from "./FetchMethods";
import Order from "./ListOrders";
import './Login.css';

const Login = (props) =>{
    const {users} = props;
    const [appStateObject, setAppStateObject] = useState("");

    const [errorMessages, setErrorMessages] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    

    const otherComponent = () =>{
      getFetch("orders").then(val => setAppStateObject(val));
      return <Order />
    }
    
    const validateUser = async (e) =>{
        e.preventDefault();
      
        try {
          /*if(users == null){

          }*/
          {users.map((user) =>{
            if (user.name == userName && user.email == password) {
              console.log("SI SE ENCONTRÓ EL USUARIO");
              this.otherComponent();
              setIsSubmitted(true);
            }else{
              setErrorMessages({ name: "pass", message: errors.pass });
            }
          })}
        } catch (err){
            console.log(err)
        }
        var { uname, pass } = document.forms[0];
        
    };

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    return (
        <div className="div-img">
            <form onSubmit={validateUser} className="formu">
                <h1>Módulo de cocina</h1>
                    <label className="label">Nombre usuario </label>
                    <input 
                      type="text" 
                      className="form-input" 
                      onChange={event => setUserName(event.target.value)} 
                      name="uname" />
                    {renderErrorMessage("uname")}
                    <label className="label">Contraseña </label>
                    <input 
                      type="password" 
                      className="form-input" 
                      name="pass" 
                      onChange ={event => setPassword(event.target.value)}  />
                    {renderErrorMessage("pass")}
                <button type="submit" className="form-button">Login</button>
            </form>
        </div>
    );

}

export default Login;
