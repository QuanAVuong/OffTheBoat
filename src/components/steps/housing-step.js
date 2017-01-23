import React from 'react';
import Maps from "../Maps";

const HousingStep = React.createClass({
  displayHousing() {
    return this.props.housing.map((housing, i) => {
      if(i < 5) {
        return(
          <li key={'housing'+i}>
            {housing.company}<br/>
            {housing.address}<br/>
            {housing.city}, {housing.state}<br/>
            {housing.zip}
            {housing.phone}<br/>
            {/* {housing.description}<br/> */}
            <br/>
          </li>)
      }
    })
  },
  render() {
    console.log(this.displayHousing())
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{this.props.text}</div>
        <div className="collapsible-body">
          <Maps query={this.props.housing[0].company} />
          <ul>{this.displayHousing()}</ul>
        </div>
      </li>
    );
  }
});

export default HousingStep;
