
//import react
import React, { Component } from 'react'

//import redux
import { connect } from 'react-redux'

//import third-party 
import { Alert, Button, Col, Form, FormControl, FormGroup, Table } from 'react-bootstrap'
import Time from 'react-time'
// import { Field, reduxForm } from 'redux-form';

//import local
import { getPropsMap } from './timesheetReducer'
import { displayDates, timesheetSubmit } from './timesheetAction'
import { dates, prevDay, type1, type2, type3, type4, type5, ctr } from './timesheetAction'


//import css
import './timesheet.css'

let dateDatas = displayDates();

let inputRefs = {
  type1: [],
  type2: [],
  type3: [],
  type4: [],
  type5: []
};


class TimeSheet extends React.Component {


  render() {


    const { handleSubmit, errorMessage } = this.props;

    return (
      <Form className="ahi-timesheet-form" onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(inputRefs);
      }
      }>
        <FormGroup >
          {errorMessage ? (<Alert bsStyle="danger"><strong>Error!</strong> {errorMessage}</Alert>) : null}
        </FormGroup>

        <Table responsive bordered condensed hover type="number">
          <thead>
            <tr>
              <th><button className="leftShift btn btn-primary" onClick={displayDates} >>>></button></th>
              {dateDatas.map(function (date) {
                return <th ><Time value={date} format="DD-MMM-YY" className="workType-width" /></th>
              })}
              <th><button className="btn btn-primary" >>>></button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div className="workType-width">Type 1</div></td>
              {type1.map(function (name1) {
                inputRefs.type1.length = 0;
                return <td ><FormGroup>
                  <FormControl type="number"
                    inputRef={(ref) => {
                      if (ref != null) {
                        inputRefs.type1.push({ [name1]: ref.value })
                      }
                    }}
                  />
                  <FormControl.Feedback />
                </FormGroup></td>
              }
              )}
            </tr>
            <tr>
              <td><div className="workType-width">Type 2</div></td>
              {type2.map(function (name2) {
                inputRefs.type2.length = 0;
                return <td ><FormGroup>
                  <FormControl type="number"
                    inputRef={(ref) => {
                      if (ref != null) {
                        inputRefs.type2.push({ [name2]: ref.value })
                      }
                    }}
                  />
                  <FormControl.Feedback />
                </FormGroup></td>
              }
              )}
            </tr>
            <tr>
              <td><div className="workType-width">Type 3</div></td>
              {type3.map(function (name3) {
                inputRefs.type3.length = 0;
                return <td ><FormGroup>
                  <FormControl type="number"
                    inputRef={(ref) => {
                      if (ref != null) {
                        inputRefs.type3.push({ [name3]: ref.value })
                      }
                    }}
                  />
                  <FormControl.Feedback />
                </FormGroup></td>
              }
              )}
            </tr>
            <tr>
              <td><div className="workType-width">Type 4</div></td>
              {type4.map(function (name4) {
                inputRefs.type4.length = 0;
                return <td ><FormGroup>
                  <FormControl type="number"
                    inputRef={(ref) => {
                      if (ref != null) {
                        inputRefs.type4.push({ [name4]: ref.value })
                      }
                    }}
                  />
                  <FormControl.Feedback />
                </FormGroup></td>
              }
              )}
            </tr>
            <tr>
              <td><div className="workType-width">Type 5</div></td>
              {type5.map(function (name5) {
                inputRefs.type5.length = 0;
                return <td ><FormGroup>
                  <FormControl type="number"
                    inputRef={(ref) => {
                      if (ref != null) {
                        inputRefs.type5.push({ [name5]: ref.value })
                      }
                    }}
                  />
                  <FormControl.Feedback />
                </FormGroup></td>
              }
              )}
            </tr>

          </tbody>

        </Table><br />
        <FormGroup>
          <button type="submit" className="btn btn-primary submitbtn" >Submit</button>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return getPropsMap(state, 'timesheet');
}
const TimesheetHome = connect(mapStateToProps, { handleSubmit: timesheetSubmit })(TimeSheet);
export default TimesheetHome;



