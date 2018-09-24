import React from 'react';

function AbandonedCart(props) {
  /* TODO:
  * Create real fields with validation
  * trigger API call
  */

  return (
    <div className="bandoned-cart">
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          Error message here
        </small>
      </div>

      <div className="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="name"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="nameHelp"
          placeholder="Enter name"
        />
        <small id="emailHelp" className="form-text text-muted">
          Error message here
        </small>
      </div>

      <div className="form-group">
        <label for="exampleInputEmail1">Surname</label>
        <input
          type="surname"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="surnameHelp"
          placeholder="Enter surname"
        />
        <small id="emailHelp" className="form-text text-muted">
          Error message here
        </small>
      </div>
    </div>
  );
}

export default AbandonedCart;
