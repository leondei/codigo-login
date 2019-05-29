import React, {Component} from 'react';


class LoginUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
           code: "",
          };

    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
 
 render(){

return(
<div  controlId="code" bsSize="large">
    <img className="image" src={require('../images/fuego.png')}/>
             <input  id="code" autoFocus type="email"
                value={
                         this.state.code
                           }
                           onChange={
                            this.handleChange
                           }
                           placeholder="Enter two step auth code"
              /> </div> 
           )

}
}
export default LoginUser;