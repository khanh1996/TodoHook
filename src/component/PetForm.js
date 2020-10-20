import React from 'react';
import PropTypes from 'prop-types';

PetFrom.propTypes = {
  
};

function PetFrom(props) {

  function _handleSubmit(event){
    event.preventDefault();
    console.log(event.target);
  }


  return (
    <form  onSubmit={_handleSubmit}>
      <div className="form-group">
        <label>Tên : </label>
        <input
          type="text"
          className="form-control"
          name="name"
          
        />
      </div>
      <div className="form-group">
        <label>Species : </label>
        <input
          type="text"
          className="form-control"
          name="species"
        />
      </div>
      <br></br>
      <label>Age: </label>
      <input
        type="number"
        className="form-control"
        name="age"
        min="1"
      />
      <br></br>
      <button type="submit" className="btn btn-warning">
        <span className="fa fa-plus mr-5"></span>Save
      </button>
      <button type="button" className="btn btn-danger">
        <i className="fas fa-times mr-5"></i>Clear
      </button>
    </form>
  );
}

export default PetFrom;