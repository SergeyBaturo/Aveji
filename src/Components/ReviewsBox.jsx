import React from "react";
import icon from '../assets/icon.svg';

const ReviewBox = (className, titleClassName, title, text) => {
  return (
    <div className={className}>
      <img src={icon} />
      <h1 className={titleClassName}>
        {title}
      </h1>
      <p>
        {text}
      </p>
    </div>
  )
}

export default ReviewBox;