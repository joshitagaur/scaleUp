import React from 'react';

export const CardContainer = (data) => (
    <div className="col s6 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span>{data.data.title}</span>
          <h4>{data.data.amount}</h4>
        </div>
      </div>
    </div>
)