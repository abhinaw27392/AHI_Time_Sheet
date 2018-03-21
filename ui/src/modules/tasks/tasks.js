//import react
import React, { Component } from 'react'

//import redux
import { connect } from 'react-redux'

//import third-party
import { Alert, Button, Col, Form, FormControl, FormGroup, Table, Nav, NavItem, Navbar, ModalDialog, Radio } from 'react-bootstrap'
import { DropdownButton, MenuItem, ButtonToolbar, ControlLabel } from "react-bootstrap";

//import local
import { getPropsMap } from './tasksReducer'
import { tasksSubmit } from './tasksAction'

//import css
import './tasks.css'

class Tasks extends React.Component {


    render() {
        const { handleSubmit, errorMessage } = this.props;
        let taskNameInput, descInput, projectInput;
        return (
            <div>
                <h1>Tasks</h1>
                <FormGroup >
                    {errorMessage ? (<Alert bsStyle="danger"><strong>Error!</strong> {errorMessage}</Alert>) : null}
                </FormGroup>

                <Form onSubmit={(e) => {
                    e.preventDefault();
                    let datas = { taskName: taskNameInput.value, desc: descInput.value, projectName: projectInput.value }
                    handleSubmit(datas);
                }
                }>
                    <Table responsive bordered condensed hover>
                        <thead>
                            <tr>
                                <th><ControlLabel>Tasks Name</ControlLabel></th>
                                <th><ControlLabel>Description</ControlLabel></th>
                                <th><ControlLabel>Projects</ControlLabel></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <FormGroup controlId="formControlsSelect" className="ahi-tasks-name">
                                        <FormControl componentClass="select" placeholder="select" inputRef={
                                            (ref) => { taskNameInput = ref }
                                        }>
                                            <option value="select" >select</option>
                                            <option value="task 1">task 1</option>
                                            <option value="task 2">task 2</option>
                                            <option value="task 3">task 3</option>
                                        </FormControl>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup className="ahi-tasks-desc">
                                        <FormControl type="string" placeholder="enter description"
                                            inputRef={(ref) => {
                                                descInput = ref
                                            }}
                                        />
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="formControlsSelect" className="ahi-tasks-name">
                                        <FormControl componentClass="select" placeholder="select" inputRef={
                                            (ref) => { projectInput = ref }
                                        }>
                                            <option value="select" >select</option>
                                            <option value="type 1">type 1</option>
                                            <option value="type 2">type 2</option>
                                            <option value="type 3">type 3</option>
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
    return getPropsMap(state, 'tasks');
}
const TasksHome = connect(mapStateToProps, { handleSubmit: tasksSubmit })(Tasks);
export default TasksHome;
