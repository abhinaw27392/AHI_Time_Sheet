//import react
import React, { Component } from 'react'

//import redux
import { connect } from 'react-redux'

//import third-party
import { Alert, Button, Col, Form, FormControl, FormGroup, Table, Nav, NavItem, Navbar, ModalDialog, Radio } from 'react-bootstrap'
import { DropdownButton, MenuItem, ButtonToolbar, ControlLabel } from "react-bootstrap";
// import DatePicker from 'react-date-picker';
// import Datetime from 'react-datetime'

//import local
import { getPropsMap } from './projectReducer'
import { projectSubmit } from './projectAction'

//import css
import './project.css'

class Project extends React.Component {


    render() {
        const { handleSubmit, errorMessage } = this.props;
        let nameInput, descInput, headed_byInput, deptInput, isCompleted, startDateInput;

        function setRadioButton(e) {
            isCompleted = e.currentTarget.value;
        }

        // function setDate(e) {
        //     startDate = e._d;
        //     console.log("##################################");
        //     console.log(startDate);
        // }

        return (
            <div>
                <h1>Project</h1><br />
                <FormGroup >
                    {errorMessage ? (<Alert bsStyle="danger"><strong>Error!</strong> {errorMessage}</Alert>) : null}
                </FormGroup>

                <Form onSubmit={(e) => {
                    e.preventDefault();
                    let datas = { name: nameInput.value, desc: descInput.value, dept: deptInput.value, headed_by: headed_byInput.value, isCompleted: isCompleted,startDate: startDateInput.value }
                    handleSubmit(datas);
                }
                }>
                    <Table responsive bordered condensed hover>
                        <thead>
                            <tr>
                                <th><ControlLabel>Project Name</ControlLabel></th>
                                <th><ControlLabel>Description</ControlLabel></th>
                                <th><ControlLabel>Start Date</ControlLabel></th>
                                <th><ControlLabel>Department</ControlLabel></th>
                                <th><ControlLabel>Headed By</ControlLabel></th>
                                <th><ControlLabel>Is Completed</ControlLabel></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <FormGroup controlId="formControlsSelect" className="ahi-project-name">
                                        <FormControl componentClass="select" placeholder="select" inputRef={
                                            (ref) => { nameInput = ref }
                                        }>
                                            <option value="select" >select</option>
                                            <option value="HR">type 1</option>
                                            <option value="IT">type 2</option>
                                            <option value="Finance">type 3</option>
                                        </FormControl>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup className="ahi-project-desc">
                                        <FormControl type="string" placeholder="enter description"
                                            inputRef={(ref) => {
                                                descInput = ref
                                            }}
                                        />
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup>
                                        {/* <Datetime dateFormat="DD-MMM-YY" name="date picker" onChange={setDate} /> */}
                                        <FormControl type="string" placeholder="DD-MM-YY"
                                            inputRef={(ref) => {
                                                startDateInput = ref
                                            }}
                                        />
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="formControlsSelect" className="ahi-project-dept">
                                        <FormControl componentClass="select" placeholder="select" inputRef={
                                            (ref) => { deptInput = ref }
                                        }>
                                            <option value="select" >select</option>
                                            <option value="HR">dept 1</option>
                                            <option value="IT">dept 2</option>
                                            <option value="Finance">dept 3</option>
                                        </FormControl>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="formControlsSelect" className="ahi-project-headed-by">
                                        <FormControl componentClass="select" placeholder="select" inputRef={
                                            (ref) => { headed_byInput = ref }
                                        }>
                                            <option value="select" >select</option>
                                            <option value="Abhinaw">Abhinaw</option>
                                            <option value="saurabh">saurav</option>
                                            <option value="sumit">sumit</option>
                                        </FormControl>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup className="ahi-project-is-completed" >
                                        <Radio name="buttonGroup" value="yes" inline onChange={setRadioButton}>Yes</Radio><br />
                                        <Radio name="buttonGroup" value="no" inline onChange={setRadioButton}>No</Radio>
                                    </FormGroup>
                                </td>
                            </tr>
                        </tbody>
                    </Table><br />
                    <FormGroup>
                        <button type="submit" className="btn btn-primary submitbtn" >Submit</button>
                    </FormGroup>
                </Form>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return getPropsMap(state, 'project');
}
const ProjectHome = connect(mapStateToProps, { handleSubmit: projectSubmit })(Project);
export default ProjectHome;
