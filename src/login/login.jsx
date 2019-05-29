import React, {Component} from 'react';
import {FormControl } from 'react-bootstrap'
import './login.css'
import LoginUser from '../hotlogin/hotlogin';





class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            code: "",
            showAlert: false,
            contentMain:true,
            emaiLValid:false,

        };

    }

   

    validateForm = () => {
        if(this.state.email.length > 0 && this.state.password.length > 0){
           this.setState({
            emaiLValid:true,
            contentMain:false,
           })
        }else{
            alert('error en el formulario')
        }
    }
    validateFormCod = () => {
        if(this.state.code.length > 0 ){
           this.setState({
            showAlert:true,
            contentMain:false,
            emaiLValid:false
           })
        }else{
            alert('ingrese el codigo')
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    render() {
        return <div className="contnet-main">
            {
                this.state.contentMain?
          <div id="content" className="col-md-4 Login"><h4 className="title">Login</h4><img className="image" src={require('../images/fuego.png')}/>
            <form>
          
                <div  controlId="email" bsSize="large">
                  
                    <FormControl  id="email" autoFocus type="email"
                        value={
                            this.state.email
                        }
                        onChange={
                            this.handleChange
                        }
                        placeholder="email"
                     
                    /> </div>
                <div controlId="password"
                       bsSize="large" >
               
                    <FormControl  id="password" value={
                        this.state.password
                    }
                        onChange={
                           this.handleChange
                        }
                        placeholder="password"
                        type="password" />
                </div> 
                <button id="button" type="button" class="btn btn-primary" onClick={(e)=>this.validateForm(e)}>Login</button>
            </form> 
            <p className="text"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
               <div className="content-img">
                 <img src={require('../images/shape.png')}/>
               </div>
              </div>
              :null
            }
               {
                   this.state.showAlert?
                   <div className="loginaExito"> Succesful Loged 
                   <img className="image" src={require('../images/exito.png')}/>
                   </div>
                   :null
               }
                {
                   this.state.emaiLValid?
                   <div className="content-code"><h4 className="title-code">Login</h4>
                   <p className="texcodet">Two seep autentication required for this login for this user login</p>
                   <div  controlId="code" bsSize="large">
                <img className="image-code" src={require('../images/fuego.png')}/>
                       <FormControl  id="code" autoFocus type="email"
                      value={
                         this.state.code
                           }
                           onChange={
                            this.handleChange
                           }
                           placeholder="Enter two step auth code"
              /> </div> 
                   <div id="bottoncode" onClick={()=>this.validateFormCod()}>continue</div>
                 </div> 
                   :null
               }
              </div>
        ;
    }
}

export default Login;