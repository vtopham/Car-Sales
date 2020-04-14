import React from 'react';
import { addFeature } from '../actions/addFeature'
import { reducer } from '../reducers/index'
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return {
    state:state
  }
}
const AdditionalFeature = props => {

  const {buyItem} = props

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {buyItem}>Add</button>
      
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(mapStateToProps, {addFeature})(AdditionalFeature);
