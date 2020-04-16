import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature } from './actions/addFeature'
import { removeFeature } from './actions/removeFeature'
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return {
    state: state
  }
}

const App = (props) => {

  const removeAddedFeature = feature => {
    // dispatch an action here to remove an item
    props.removeFeature(feature)
  };

  
  const buyItem = id => {
    props.addFeature(id)
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures removeAddedFeature = {removeAddedFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures buyItem = {buyItem}/>
        <Total/>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, {addFeature, removeFeature})(App);
