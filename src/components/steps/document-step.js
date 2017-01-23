import React from 'react';
import Maps from "../Maps";

const DocumentStep = React.createClass({
  // getInitialState() {
  //   company: "null";
  // },

  // plot(name) {
  //   // document.getElementById("company").nodeValue()
  //   // document.getElementByTagName("iframe")[0].nodeValue()
  //   // this.props.docs[0].company
  //   this.setState({ company: name});
  // },


  displayDocs() {
    return this.props.docs.map((doc, i) => {
      if(i < 5) {
        return(
          <li key={i} >
            <div id="company">{doc.company}</div><br/>
            {doc.address}<br/>
            {doc.city}, {doc.zip}<br/>
            {doc.phone}<br/>
            <br/>
          </li>)
      }
    })
  },


  render() {
    // console.log(this.state.company);
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{this.props.text}</div>
        <div className="collapsible-body">
          <Maps query={this.props.docs[0].company} />
          <ul>{this.displayDocs()}</ul>
        </div>
      </li>
    );
  }
});

export default DocumentStep;
