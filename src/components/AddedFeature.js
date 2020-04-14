import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    state: state
  }
}

const AddedFeature = props => {

  
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(mapStateToProps, {})(AddedFeature);
