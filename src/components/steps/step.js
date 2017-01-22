import React from 'react';
import simple_map_page.jsx from '../Maps.js';

const Step = React.createClass({
  render() {
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{this.props.text}</div>
        <div className="collapsible-body">
          {/*Google map will live here!!! */}
          <simple_map_page.jsx />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
    );
  }
});

export default Step;
