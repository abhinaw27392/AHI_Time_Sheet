//import react
import React, {Component} from 'react'

//import redux
import { connect } from 'react-redux'

//import third-party
import { Alert, Button, Col, Form, FormControl, FormGroup, Table } from 'react-bootstrap'

//import local

//import css
import './employee.css'

class Employee extends React.Component {
    

    render() {
        const {handleSubmit, errorMessage} =this.props;

        return(
            <h1>Employee page is coming soon!</h1>
        );
    }
}
export default Employee;
