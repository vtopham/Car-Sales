import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    state: state
  }
}

const AddedFeature = props => {
  const {removeAddedFeature} = props

  const handleRemove = event => {
    event.preventDefault()
    removeAddedFeature(props.feature)

  }
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {handleRemove} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(mapStateToProps, {})(AddedFeature);
