import React from "react";

export default function StoryBreadCrumbs({formPage, setFormPage}){
  return (
    formPage < 5 ?
      <div className="create-story-breadcrumbs">
        <span
          className={formPage === 1 ? "dot dot-active" : "dot"}
          onClick={() => setFormPage(1)}
        ></span>
        <span
          className={formPage === 2 ? "dot dot-active" : "dot"}
          onClick={() => setFormPage(2)}
        ></span>
        <span
          className={formPage === 3 ? "dot dot-active" : "dot"}
          onClick={() => setFormPage(3)}
        ></span>
        <span
          className={formPage === 4 ? "dot dot-active" : "dot"}
          onClick={() => setFormPage(4)}
        ></span>
        <span
          className={formPage === 5 ? "dot dot-active" : "dot"}
          onClick={() => setFormPage(5)}
        ></span>
      </div>
    : null
  )
}