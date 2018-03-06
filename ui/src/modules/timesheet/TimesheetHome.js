import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Time from 'react-time'

import _ from 'lodash';
import './timesheet.css'

const submit = (values) => {
  console.log("form data is:")
  console.log(values)
}


const TimesheetHome = ({ handleSubmit }) => {

  //-----------------------------------------date and prevDates-------------------------------------------------------------

  let dates = [];
  let prevDay = "";
  let type1 = []; let type2 = []; let type3 = []; let type4 = []; let type5 = [];

  let ctr = 0;


  // for (let i = 13; i >= 0; i--) {
  //   prevDay = new Date(new Date().setDate(new Date().getDate() - i));
  //   dates.push(prevDay);
  //   type1.push("a" + i); type2.push("b" + i); type3.push("c" + i); type4.push("d" + i); type5.push("e" + i);
  //   ctr++;
  // }
  // console.log("counter is:");
  // console.log(ctr);

  function displayDates() {
    console.log("displaydate is executing#############################");
    dates.length = 0;
    type1 = []; type2 = []; type3 = []; type4 = []; type5 = [];
    let j = ctr;

    for (let i = j + 9; i >= j; i--) {
      // console.log(i);
      prevDay = new Date(new Date().setDate(new Date().getDate() - i));
      dates.push(prevDay);
      type1.push("a" + i); type2.push("b" + i); type3.push("c" + i); type4.push("d" + i); type5.push("e" + i);
      ctr++;
    }

    console.log("counter is:" + ctr);
    console.log("dates are #####################################");
    console.log(dates);
    return dates;
    // dates.map(function (date) {
    //   return <th><Time value={date} format="DD-MM-YYYY" className="workType-width" /></th>
    // }
    // )
  }
  // let dateDatas = displayDates();

  //-----------------------------------------------------------------------------------------------------------------------
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Table responsive bordered condensed hover type="number">
        <thead >
          <tr >
            <th><button className="leftShift btn btn-primary" onClick={displayDates} >>>></button></th>
            {/* {_.map(dates, displayDates)} */}
            {displayDates().map(function (date) {
              return <th ><Time value={date} format="DD-MMM-YY" className="workType-width" /></th>
            }
            )}
            <th><button className="btn btn-primary" >>>></button></th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td><div className="workType-width">Type 1</div></td>
            {type1.map(function (name1) {
              return <td ><Field name={name1} className="workType-width" type="number" component="input" /></td>
            }
            )}
          </tr>
          <tr>
            <td><div className="workType-width">Type 2</div></td>
            {type2.map(function (name2) {
              return <td><Field name={name2} type="number" component="input" className="workType-width" /></td>
            }
            )}
          </tr>
          <tr>
            <td><div className="workType-width">Type 3</div></td>
            {type3.map(function (name3) {
              return <td><Field name={name3} type="number" component="input" className="workType-width" /></td>
            }
            )}
          </tr>
          <tr>
            <td><div className="workType-width">Type 4</div></td>
            {type4.map(function (name4) {
              return <td><Field name={name4} type="number" component="input" className="workType-width" /></td>
            }
            )}
          </tr>
          <tr>
            <td><div className="workType-width">Type 5</div></td>
            {type5.map(function (name5) {
              return <td><Field name={name5} type="number" component="input" className="workType-width" /></td>
            }
            )}
          </tr>
        </tbody>
      </Table><br />
      <button type="submit" className="btn btn-primary submitbtn">Submit</button>
    </form>
  );
}

// Decorate the form component
const TimesheetHome1 = reduxForm({
  form: 'editForm'
})(TimesheetHome)



export default TimesheetHome1; 