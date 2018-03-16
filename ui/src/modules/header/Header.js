//import react
import React from "react";
import { Link } from "react-router-dom";

// import redux
import { connect } from "react-redux";

// import third-party
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

//import local
import AuthorizedLinkContainer from "../common/hoc/AuthorizedLinkContainer";
import loggedUser from '../authentication/loggedUser/loggedUserReducer'

import { EMPLOYEE_ROLE, MANAGER_ROLE, ADMIN_ROLE } from "../main/Main";

// import css
import "./Header.css";
import "./Header.css";
import Logo from "./AH_Long.png";

export const HeaderComponent = ({ userData }) => (
  <header>
    <Navbar fluid fixedTop collapseOnSelect>
      <Navbar.Header>
        <div className="navbar-brand">
          <img src={Logo} height="40" />
        </div>

        <Navbar.Toggle />
      </Navbar.Header>
      {userData ? (
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to="/app" activeHref="active">
              <NavItem>Dashboard</NavItem>
            </IndexLinkContainer>

            <AuthorizedLinkContainer
              allowedRoles={EMPLOYEE_ROLE}
              to="/app/timesheet"
              activeHref="active"
            >
              <NavItem>Timesheet</NavItem>
            </AuthorizedLinkContainer>

            <AuthorizedLinkContainer
              allowedRoles={MANAGER_ROLE}
              to="/app/manager"
              activeHref="active"
            >
              <NavItem>Manage</NavItem>
            </AuthorizedLinkContainer>

            <AuthorizedLinkContainer
              allowedRoles={ADMIN_ROLE}
              to="/app/admin"
              activeHref="active"
            >
              <NavItem>Administer</NavItem>
            </AuthorizedLinkContainer>
          </Nav>

          <Nav pullRight>
            <NavItem>
              <span>
                {userData.firstName} {userData.lastName}
              </span>
            </NavItem>
            <NavItem componentClass="span" eventKey={20} href="#">
              <Link to="/auth/logout">Logout</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      ) : null}
    </Navbar>
  </header>
);

const mapStateToProps = state => {
  // console.log("loggedUser is:")
  // console.log(state.authenticationReducer.loggedUser);
  return state.authenticationReducer.loggedUser;
};

const Header = connect(mapStateToProps, null, null, { pure: false })(HeaderComponent);


// export default Header;

// export const HeaderComponent = () => (
//   <header>
//     <Navbar fluid fixedTop collapseOnSelect>
//       <Navbar.Header>
//         <div className="navbar-brand">
//           <img src={Logo} height="40" /> 
//         </div>
        
//         <Navbar.Toggle />
        
//       </Navbar.Header>

//       <Navbar.Collapse>
//         <Nav>
//           <IndexLinkContainer to="/app" activeHref="active">
//             <NavItem>Dashboard</NavItem>
//           </IndexLinkContainer>

//           <LinkContainer to="/app/timesheet" activeHref="active">
//             <NavItem>Timesheet</NavItem>
//           </LinkContainer>

//           <LinkContainer to="/app/manager" activeHref="active">
//             <NavItem>Manage</NavItem>
//           </LinkContainer>

//           <LinkContainer to="/app/admin" activeHref="active">
//             <NavItem>Administrator</NavItem>
//           </LinkContainer>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   </header>
// );

// const mapStateToProps = state => {
//   // return state.authenticationReducer.loggedUser;
//   return state  //-----------------------added for local-------------
// };

// // https://github.com/react-bootstrap/react-router-bootstrap/issues/152
// const Header = connect(mapStateToProps, null, null, { pure: false })(HeaderComponent);

export default Header;

