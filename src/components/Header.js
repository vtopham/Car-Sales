import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
  imgSrc: state.car.image,
  imgAlt: state.car.name,
  carName: state.car.name,
  price: state.car.price
  }

}
const Header = props => {
  // return (
  //   <>
  //     <figure className="image is-128x128">
  //       <img src={props.car.image} alt={props.car.name} />
  //     </figure>
  //     <h2>{props.car.name}</h2>
  //     <p>Amount: ${props.car.price}</p>
  //   </>
  // );

  return (
    <>
      <figure className="image is-128x128">
        <img src={props.imgSrc} alt={props.imgAlt} />
      </figure>
      <h2>{props.carName}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

// export default Header;
export default connect(mapStateToProps, {})(Header)
