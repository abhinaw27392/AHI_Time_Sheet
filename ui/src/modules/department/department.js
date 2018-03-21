//import react
import React, { Component } from 'react'

//import redux
import { connect } from 'react-redux'

//import third-party
import { Alert, Button, Col, Form, FormControl, FormGroup, Table, Nav, NavItem, Navbar, ModalDialog } from 'react-bootstrap'
import { DropdownButton, MenuItem, ButtonToolbar, ControlLabel } from "react-bootstrap";

// import Dialog from 'react-bootstrap-dialog'
import { Switch, Route, Link } from 'react-router-dom'
import Dialog from 'react-dialog'

//import local
import { getPropsMap } from './departmentReducer'
import { departmentSubmit, addNewDept } from './departmentAction'

//import css
import './department.css'



class Department extends React.Component {
    constructor() { 
        super();
        this.state = {
            isDialogOpen: false,
            isShowPage: true
        }
    }

    openDialog = () => this.setState({ isDialogOpen: true, isShowPage: false })

    handleClose = () => this.setState({ isDialogOpen: false, isShowPage: true })

    render() {

        const { handleSubmit, errorMessage, match } = this.props;
        let nameInput, descInput, headed_byInput;
        return (

            <div>
                {this.state.isShowPage && <h1>Department</h1>}

                <div className="container">
                    {this.state.isShowPage && <button type="button" onClick={this.openDialog} className="btn btn-primary addBtn" >Add New</button>}
                    {
                        this.state.isDialogOpen &&
                        <Dialog
                            title=""
                            bordered
                            modal={true}
                            onClose={this.handleClose}
                        >
                            <div>
                                <h1>Add New Department</h1>
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

                                    <FormGroup>
                                        <button className="btn btn-primary closeBtn display" onClick={this.handleClose} >Back</button>
                                        <button type="submit" className="btn btn-primary  display" >Submit</button>
                                    </FormGroup>
                                </Form>

                            </div >
                        </Dialog>
                    }
                </div>
                {
                    this.state.isShowPage &&
                    <Table responsive bordered condensed hover>
                        <thead>
                            <tr>
                                <th><ControlLabel>Dept Name</ControlLabel></th>
                                <th><ControlLabel>Description</ControlLabel></th>
                                <th><ControlLabel>Headed By</ControlLabel></th>
                                <th><ControlLabel>Edit</ControlLabel></th>
                                <th><ControlLabel>Delete</ControlLabel></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>IT</td>
                                <td>human resource</td>
                                <td>Abhinaw</td>
                                <td>
                                    <Link to={`${match.url}/editDepartment`}><button type="submit" className="btn btn-primary " >Edit</button></Link>
                                </td>
                                <td>
                                    <Link to={`${match.url}/delDepartment`}><button type="submit" className="btn btn-primary danger" >Del</button></Link>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                }
                <br />
            </div>

        );
    }
}
const mapStateToProps = state => {
    return getPropsMap(state, 'department');
}
const DepartmentHome = connect(mapStateToProps, { handleSubmit: departmentSubmit })(Department);
export default DepartmentHome;
