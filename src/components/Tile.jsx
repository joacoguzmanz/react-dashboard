import React from "react";

const Tile = (props) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default Tile;