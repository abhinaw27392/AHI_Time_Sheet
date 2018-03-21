//import react
import React, { Component } from 'react'

//import redux
import { connect } from 'react-redux'

//import third-party
import { Alert, Button, Col, Form, FormControl, FormGroup, Table } from 'react-bootstrap'

//import local
import { getPropsMap } from './employeeReducer'
import { empSubmit } from './employeeAction'

//import css
import './employee.css'

class Employee extends React.Component {


    render() {
        const { handleSubmit, errorMessage } = this.props;
        let empNameInput, joiningDateInput, projectAssignedInput, supervisorInput
            , resourceTypeInput, workLocationInput, terminationDateInput, deptInput;
        return (
            <div>
                <h1>Employee</h1><br />
                <FormGroup >
                    {errorMessage ? (<Alert bsStyle="danger"><strong>Error!</strong> {errorMessage}</Alert>) : null}
                </FormGroup>

                <Form onSubmit={(e) => {
                    e.preventDefault();
                    let datas = {
                        ename: empNameInput.value, joiningDate: joiningDateInput.value, projectAssigned: projectAssignedInput.value,
                        supervisor: supervisorInput.value, resourceType: resourceTypeInput.value, workLocation: workLocationInput.value,
                        terminationDate: terminationDateInput.value, dept: deptInput.value
                    };
                    handleSubmit(datas);
                }
                }>
                    <Table responsive bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Joining date</th>
                                <th>Projects Assigned</th>
                                <th>Supervisor</th>
                                <th>Resource Type</th>
                                <th>Work Location</th>
                                <th>Termination Date</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <FormGroup controlId="formControlsSelect" className="ahi-project-ename">
                                        <FormControl componentClass="select" placeholder="select" inputRef={
                                            (ref) => { empNameInput = ref }
                                        }>
                                            <option value="select" >select</option>
                                            <option value="Abhinaw">Abhinaw</option>
                                            <option value="Saurav">Saurav</option>
                                            <option value="sumit">sumit</option>
                                        </FormControl>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup>
                                        <FormControl type="string" placeholder="DD-MM-YY"
                                            inputRef={(ref) => {
                                                joiningDateInput = ref
                                            }}
                                        />
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="formControlsSelect" className="ahi-project-assigned">
                                        <FormControl componentClass="select" placeholder="select" inputRef={
                                            (ref) => { projectAssignedInput = ref }
                                        }>
                                            <option value="select" >select</option>
                                            <option value="type 1">type 1</option>
                                            <option value="type 2">type 2</option>
                                            <option value="type 3">type 3</option>
                                        </FormControl>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="formControlsSelect" className="ahi-project-supervisor">
                                        <FormControl componentClass="select" placeholder="select" inputRef={
                                            (ref) => { supervisorInput = ref }
                                        }>
                                            <option value="select" >select</option>
                                            <option value="supervisor 1">supervisor 1</option>
                                            <option value="supervisor 2">supervisor 2</option>
                                            <option value="supervisor 3">supervisor 3</option>
                                        </FormControl>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="formControlsSelect" className="ahi-project-resourceType">
                                        <FormControl componentClass="select" placeholder="select" inputRef={
                                            (ref) => { resourceTypeInput = ref }
                                        }>
                                            <option value="select" >select</option>
                                            <option value="Full Time">Full Time</option>
                                            <option value="Half Time">Half Time</option>
                                        </FormControl>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="formControlsSelect" className="ahi-project-workLocation">
                                        <FormControl componentClass="select" placeholder="select" inputRef={
                                            (ref) => { workLocationInput = ref }
                                        }>
                                            <option value="select" >select</option>
                                            <option value="Bangalore">Bangalore</option>
                                            <option value="USA">USA</option>
                                        </FormControl>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup>
                                        <FormControl type="string" placeholder="DD-MM-YY"
                                            inputRef={(ref) => {
                                                terminationDateInput = ref
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
                                            <option value="dept 1">dept 1</option>
                                            <option value="dept 2">dept 2</option>
                                            <option value="dept 3">dept 3</option>
                                        </FormControl>
                                    </FormGroup>
                                </td>
                            </tr>
                        </tbody>
                    </Table><br />
                    <FormGroup>
                        <button type="submit" className="btn btn-primary submitbtn" >Submit</button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return getPropsMap(state, 'employee');
}
const EmployeeHome = connect(mapStateToProps, { handleSubmit: empSubmit })(Employee);
export default EmployeeHome;
