// import react
import React from 'react'
import { Redirect } from 'react-router-dom'

// import redux
import { connect } from 'react-redux'

// import third-party
import { Alert, Button, Col, Form, FormControl, FormGroup } from 'react-bootstrap'

// import local
import { HeaderComponent } from '../../header/Header'
import { loginUser } from './loginAction'
import { getPropsMap } from '../authenticationReducer'
// import css
import './Login.css';
import Background from './login_bg.png';
/*
 * 
 */

class LoginComponent extends React.Component {

    

    render() {
        let usernameInput, passwordInput;
        const { errorMessage, onLogin, isAuthenticated, location } = this.props;
        const backgroundStyle ={
                                backgroundImage: `url(${Background})`
                           };

        if(isAuthenticated){
            
            if(location.state && location.state.referrer){
                
               return <Redirect to={location.state.referrer.pathname} push />
            }else{
               return <Redirect to="/app" push />
            }
        }
        
        return  (
          
            
            <div style={backgroundStyle} className='ahi-login-center-view-container'>
                <HeaderComponent />
                            
                <Col lg={4} lgOffset={4} sm={12} xs={12}>
                    <Col lg={10} lgOffset={2} sm={4} smOffset={4}>
                        <Form className="ahi-login-box" onSubmit={(e)=> {
                                                            e.preventDefault();
                                                            let creds = {username: usernameInput.value, password: passwordInput.value};
                                                            onLogin(creds);                                            
                                                        }
                                                    }>
                                        
                                <span className='text-center ahi-login-title-text'><h4>User Login</h4></span>
                            
                            <FormGroup >                    
                                {errorMessage ? (<Alert bsStyle="danger"><strong>Error!</strong> {errorMessage}</Alert>) : null }
                            </FormGroup>

                            <FormGroup controlId="formHorizontalUsername">                    
                                <FormControl type="username" placeholder="Username" bsStyle="form-rounded"
                                    inputRef={(ref) => {usernameInput = ref}}
                                />                
                                <FormControl.Feedback>
                                    <span className="fa fa-user-o ahi-login-input-feedback-span"></span>
                                </FormControl.Feedback>            
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">                   
                                <FormControl type="password" placeholder="Password" 
                                    inputRef={(ref) => {passwordInput = ref}}/>                                   
                                <FormControl.Feedback>
                                    <span className="fa fa-lock ahi-login-input-feedback-span"></span>
                                </FormControl.Feedback>
                            </FormGroup>

                            <FormGroup>              
                                <Button type="submit" block >Login</Button>              
                            </FormGroup>
                            
                        </Form>
                    </Col>
                </Col>
            </div>
          
        );
    }
}

const mapStateToProps = state => {
  return getPropsMap(state, 'login');
}
const Login = connect( mapStateToProps,  { onLogin: loginUser })(LoginComponent);
export default Login;
