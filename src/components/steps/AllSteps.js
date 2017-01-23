import React from 'react';
import DocumentStep from './document-step';
import HousingStep from './housing-step';
import JobStep from './job-step';
import ServicesStep from './services-step';

const AllSteps = React.createClass({
  componentDidMount() {
    this.props.actions.fetchNycId()
    this.props.actions.fetchJobs()
    this.props.actions.fetchHousing()
    this.props.actions.fetchTraining()
  },
  render() {
      return(
        <ul className="collapsible popout" data-collapsible="accordion">
          <DocumentStep docs={this.props.docs} text={'IDNYC: Photo-ID Used For Identification'} />
          <HousingStep housing={this.props.housing} text={'Housing: Stranded Or Need Affordable Housing ? Click Here For Resources'} />
          <JobStep jobs={this.props.job} text={'Jobs: Find The Closest Job Resource Center'} />
          <ServicesStep service={this.props.training} text={'Training Services: Step Your Game Up With The Latest Professional Skills'} />
        </ul>
      );
  }
});

export default AllSteps;
