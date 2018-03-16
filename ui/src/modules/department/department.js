//import react
import React, { Component } from 'react'

//import redux
import { connect } from 'react-redux'

//import third-party
import { Alert, Button, Col, Form, FormControl, FormGroup, Table, Nav, NavItem, Navbar, ModalDialog } from 'react-bootstrap'
import { DropdownButton, MenuItem, ButtonToolbar, ControlLabel } from "react-bootstrap";
import Dialog from 'react-bootstrap-dialog'
import { Switch, Route, Link } from 'react-router-dom'

//import local
import { getPropsMap } from './departmentReducer'
import { departmentSubmit } from './departmentAction'
import NewDepartmentHome from './newDepartment'

//import css
import './department.css'

class DepartmentHome extends React.Component {



    render() {

        const { handleSubmit, errorMessage, match } = this.props;

        return (
            <div>
                <h1>Department</h1>
                <Link to={`${match.url}/newdepartment`}><button type="submit" className="btn btn-primary newbutton" >Add New</button></Link>
                <Route path={`${match.url}/newdepartment`} component={NewDepartmentHome} />
                <br /><br />
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
                            <td>
                                IT
                                </td>
                            <td>
                                human resource
                                </td>
                            <td>Abhinaw</td>
                            <td>
                                <Link to={`${match.url}/editDepartment`}><button type="submit" className="btn btn-primary " >Edit</button></Link>
                            </td>
                            <td>
                            <Link to={`${match.url}/delDepartment`}><button type="submit" className="btn btn-primary danger" >Del</button></Link>
                            </td>
                        </tr>
                    </tbody>
                </Table><br />
            </div>
        );
    }
}
// const mapStateToProps = state => {
//     return getPropsMap(state, 'department');
// }
// const DepartmentHome = connect(mapStateToProps)(Department);
export default DepartmentHome;
