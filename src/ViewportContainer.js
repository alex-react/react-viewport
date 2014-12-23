'use strict';

import React from 'react/addons';

let ViewportContainer = React.createClass({ 

  getDefaultProps() {
    return {
      viewHeight: 100,
      viewWidth: 100
    };
  },

  testVhUnit() {
    return false;
  },

  testVwUnit() {
    return true;
  },

  componentDidMount() {
    // Event listeners
    if(!this.testVhUnit()) {
      import $ from 'jquery';
      $(window).resize(function() {
        console.log('sf');
      });
    }
  },

  componentDidUnmount() {
    $(window).off('resize');
  },

  render() {
   
    // Assign classes to the container
    let classes = [ 'ViewportContainer' ];

    if(!!this.props.className) {
      classes.push(this.props.className);
    }

    classes = classes.join(' ');

    // Styling for the container with fallbacks
    var containerStyle = {backgroundColor: 'red'};
    
    // First check if browser compatible with vw or vh, if so use that
    if(this.testVhUnit()) {
      containerStyle.height = this.props.viewHeight + 'vh';
    }

    if(this.testVwUnit()) {
      containerStyle.width = this.props.viewWidth + 'vw';
    }

    // Otherwise set up an event listener 

    return(
      <div 
        {...this.props}
        className={classes}
        style={containerStyle}
      />
    );
  }
});


React.render(
  <ViewportContainer className="test" >Hello world</ViewportContainer>,
  document.getElementById('demo')
);
export default ViewportContainer;
