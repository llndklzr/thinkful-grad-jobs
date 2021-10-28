import React from "react";

export default function ErrorHandler({error, wrapperClassName="", messageClassName=""}){
  return( 
    error && 
      <span className={`error-wrapper ${wrapperClassName}`}>
        <span className={`error-message ${messageClassName}`}>{error.message}</span>
      </span>
    )
}