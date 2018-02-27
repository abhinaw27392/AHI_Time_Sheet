// import react
import React from 'react';
import { Switch, Route } from 'react-router-dom'

// import local
import Authorization from '../common/hoc/Authorization'
import Home  from '../home/Home'

import TimesheetHome1 from '../timesheet/TimesheetHome' //--------------------------added
import ManagerHome from '../manager/ManagerHome'
import AdminHome from '../admin/AdminHome'
// import TimesheetHome  from '../timesheet/TimesheetHome'

import './Main.css';

export const EMPLOYEE_ROLE = [{ 'group': 'USER' }, { 'group': 'MANAGER' }, { 'group': 'ADMIN' }];
export const MANAGER_ROLE = [{ 'group': 'MANAGER' }, { 'group': 'ADMIN' }];
export const ADMIN_ROLE = [{ 'group': 'ADMIN' }];

const Employee = Authorization(EMPLOYEE_ROLE)
const Manager = Authorization(MANAGER_ROLE)
const Admin = Authorization(ADMIN_ROLE)

export const Main = () =>

  (
    <main>
      <Switch>
        <Route path='/app/manager' component={Manager(ManagerHome)} />
        <Route path='/app/admin' component={Admin(AdminHome)} />
        <Route path='/app/timesheet' component={Employee(TimesheetHome1)} />
        <Route exact path='/app' component={Home} />
      </Switch>
    </main>
  )



// export const Main = () =>

//   (
//     <main>
//       <Switch>
//         <Route path='/app/manager' component={ManagerHome} />
//         <Route path='/app/admin' component={AdminHome} />
//         <Route path='/app/timesheet' component={TimesheetHome1} />
//         <Route exact path='/app' component={Home} />
//       </Switch>
//     </main>
//   )