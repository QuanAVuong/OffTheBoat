import React from 'react';
import Maps from "../Maps";

const JobStep = React.createClass({
  displayJob() {
    return this.props.jobs.map((job, i) => {
      if (i < 5) {
        return (
          <li key={i}>
            {job.company}<br/>
            {job.address}<br/>
            {job.city}<br/>
            {/* {job.description}<br/> */}
            {job.website}<br/>
            {job.phone}<br/>
            <br/>
          </li>
        )
      }
    })
  },
  render() {
    console.log(this.props)
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{this.props.text}</div>
        <div className="collapsible-body">
          <Maps query={this.props.jobs[0].company} />
          <p>{this.displayJob()}</p>
        </div>
      </li>
    );
  }
});

export default JobStep;
