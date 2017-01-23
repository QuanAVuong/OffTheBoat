import React from 'react';
import Maps from "../Maps";

const ServicesStep = React.createClass({
  displayServices() {
    return this.props.service.map((service, i) => {
      if(i < 5) {
        return(
          <li key={'service'+i}>
            {service.company}<br/>
            {service.address}<br/>
            {service.city}, {service.state}
            {service.zip}<br />
            {service.phone}<br/>
            {service.description}<br/>
            <br/>
          </li>)
      }
    })
  },
  render() {
    console.log(this.props)
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{this.props.text}</div>
        <div className="collapsible-body">
          {/*Google map will live here!!! */}
          <Maps query={this.props.service[0].company} />
          <ul>{this.displayServices()}</ul>
        </div>
      </li>
    );
  }
});

export default ServicesStep;
