import React, { useState } from 'react';

import MyPhoto from "../person.png";

import '../styles/_avatar.css';

function Avatar(props) {
    return (
      <div className="avatar-container">
        <img className="avatar-image" src={MyPhoto} />
      </div>
    );
}

export default Avatar;