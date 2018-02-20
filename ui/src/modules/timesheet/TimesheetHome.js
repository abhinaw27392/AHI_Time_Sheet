import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// import { postInputData } from './timesheetAction'

class TimesheetHome extends React.Component {
  render() {

    // const { submitting } = this.props;

    return (
      <form>
        <Table responsive bordered condensed hover className="input-width" type="number">
          <thead>
            <tr>
              <th>Work Type</th>
              <th>06-02-2018</th>
              <th>07-02-2018</th>
              <th>08-02-2018</th>
              <th>09-02-2018</th>
              <th>10-02-2018</th>
              <th>11-02-2018</th>
              <th>12-02-2018</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div className="workType-width">Type 1</div></td>
              <td><Field name="a1" type="number" component="input" required className="input-width" /></td>
              <td><Field name="b1" type="number" component="input" required className="input-width" /></td>
              <td><Field name="c1" type="number" component="input" required className="input-width" /></td>
              <td><Field name="d1" type="number" component="input" required className="input-width" /></td>
              <td><Field name="e1" type="number" component="input" required className="input-width" /></td>
              <td><Field name="f1" type="number" component="input" required className="input-width" /></td>
              <td><Field name="g1" type="number" component="input" required className="input-width" /></td>
            </tr>
            <tr>
              <td><div className="workType-width">Type 2</div></td>
              <td><Field name="a2" type="number" component="input" required className="input-width" /></td>
              <td><Field name="b2" type="number" component="input" required className="input-width" /></td>
              <td><Field name="c2" type="number" component="input" required className="input-width" /></td>
              <td><Field name="d2" type="number" component="input" required className="input-width" /></td>
              <td><Field name="e2" type="number" component="input" required className="input-width" /></td>
              <td><Field name="f2" type="number" component="input" required className="input-width" /></td>
              <td><Field name="g2" type="number" component="input" required className="input-width" /></td>
            </tr>
            <tr>
              <td><div className="workType-width">Type 3</div></td>
              <td><Field name="a3" type="number" component="input" className="input-width" /></td>
              <td><Field name="b3" type="number" component="input" className="input-width" /></td>
              <td><Field name="c3" type="number" component="input" className="input-width" /></td>
              <td><Field name="d3" type="number" component="input" className="input-width" /></td>
              <td><Field name="e3" type="number" component="input" className="input-width" /></td>
              <td><Field name="f3" type="number" component="input" className="input-width" /></td>
              <td><Field name="g3" type="number" component="input" className="input-width" /></td>
            </tr>
            <tr>
              <td><div className="workType-width">Type 4</div></td>
              <td><Field name="a4" type="number" component="input" className="input-width" /></td>
              <td><Field name="b4" type="number" component="input" className="input-width" /></td>
              <td><Field name="c4" type="number" component="input" className="input-width" /></td>
              <td><Field name="d4" type="number" component="input" className="input-width" /></td>
              <td><Field name="e4" type="number" component="input" className="input-width" /></td>
              <td><Field name="f4" type="number" component="input" className="input-width" /></td>
              <td><Field name="g4" type="number" component="input" className="input-width" /></td>
            </tr>
            <tr>
              <td><div className="workType-width">Type 5</div></td>
              <td><Field name="a5" type="number" component="input" className="input-width" /></td>
              <td><Field name="b5" type="number" component="input" className="input-width" /></td>
              <td><Field name="c5" type="number" component="input" className="input-width" /></td>
              <td><Field name="d5" type="number" component="input" className="input-width" /></td>
              <td><Field name="e5" type="number" component="input" className="input-width" /></td>
              <td><Field name="f5" type="number" component="input" className="input-width" /></td>
              <td><Field name="g5" type="number" component="input" className="input-width" /></td>
            </tr>
          </tbody>
        </Table>
        {/* <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button> */}
      </form>
    );

  }
}

// Decorate the form component
const TimesheetHome1 = reduxForm({
  form: 'editForm'
})(TimesheetHome)

// const mapStateToProps = state => {
//   return state;
// }

// const TimesheetHome2 = connect(mapStateToProps, { submitting: postInputData })(TimesheetHome1);
export default TimesheetHome1; 