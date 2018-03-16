//import react
import React, { Component } from 'react'

//import redux
import { connect } from 'react-redux'

//import third-party
import { Alert, Button, Col, Form, FormControl, FormGroup, Table, Nav, NavItem, Navbar, ModalDialog } from 'react-bootstrap'
import { DropdownButton, MenuItem, ButtonToolbar, ControlLabel } from "react-bootstrap";
import Dialog from 'react-bootstrap-dialog'

//import local
import { getPropsMap } from './departmentReducer'
import { departmentSubmit } from './departmentAction'

//import css
import './department.css'

class NewDepartment extends React.Component {



    render() {

        const { handleSubmit, errorMessage } = this.props;
        let nameInput, descInput, headed_byInput;

        return (
            <div>
                <Form className="ahi-department-form" onSubmit={(e) => {
                    e.preventDefault();
                    let datas = { name: nameInput.value, desc: descInput.value, headed_by: headed_byInput.value }
                    handleSubmit(datas);
                }
                }>
                    <FormGroup >
                        {errorMessage ? (<Alert bsStyle="danger"><strong>Error!</strong> {errorMessage}</Alert>) : null}
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect" className="ahi-department-name">
                        <ControlLabel>Dept Name</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" inputRef={
                            (ref) => { nameInput = ref }
                        }>
                            <option value="select" >select</option>
                            <option value="HR">HR</option>
                            <option value="IT">IT</option>
                            <option value="Finance">Finance</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className="ahi-department-desc">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl type="string" placeholder="enter description"
                            inputRef={(ref) => {
                                descInput = ref
                            }}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect" className="ahi-department-headed-by">
                        <ControlLabel>Headed By</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" inputRef={
                            (ref) => { headed_byInput = ref }
                        }>
                            <option value="select" >select</option>
                            <option value="Abhinaw">Abhinaw</option>
                            <option value="saurabh">saurav</option>
                            <option value="sumit">sumit</option>
                        </FormControl>
                    </FormGroup>
                    <br />
                    {/* <table className="submitbtn">
                        <tr>
                            <td>
                                <FormGroup>
                                    <button type="submit" className="btn btn-primary " >Submit</button>
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup>
                                    <button className="btn btn-primary " >Cancel</button>
                                </FormGroup>
                            </td>
                        </tr>
                    </table> */}
                    <FormGroup>
                        <button type="submit" className="btn btn-primary submitbtn" >Submit</button>
                    </FormGroup>



                </Form>

            </div >
        );
    }
}
const mapStateToProps = state => {
    return getPropsMap(state, 'department');
}
const NewDepartmentHome = connect(mapStateToProps, { handleSubmit: departmentSubmit })(NewDepartment);
export default NewDepartmentHome;
