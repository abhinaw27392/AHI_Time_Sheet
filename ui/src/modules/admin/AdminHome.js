//import react
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

//import third-party

//import local
import DepartmentHome from '../department/department'
import ProjectHome from '../project/project'
import EmployeeHome from '../employee/employee'
import TasksHome from '../tasks/tasks'


class AdminHome extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <h2>AdminHome</h2>
        <ul>
          <li>
            <Link to={`${match.url}/department`}>Department</Link>
          </li>
          <li>
            <Link to={`${match.url}/project`}>Project</Link>
          </li>
          <li>
            <Link to={`${match.url}/employee`}>Employee</Link>
          </li>
          <li>
            <Link to={`${match.url}/tasks`}>Tasks</Link>
          </li>
        </ul>

        <Route path={`${match.url}/department`} component={DepartmentHome} />
        <Route path={`${match.url}/project`} component={ProjectHome} />
        <Route path={`${match.url}/employee`} component={EmployeeHome} />
        <Route path={`${match.url}/tasks`} component={TasksHome} />
      </div>
    );
  }


}

export default AdminHome;