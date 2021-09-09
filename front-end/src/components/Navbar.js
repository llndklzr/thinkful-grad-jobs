import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/styles.scss";

export default function Navbar() {
  const currentPath = useLocation().pathname;

  function determineStyling(route){
    if(route===currentPath){
      return "current";
    }
  }

  return (
    <>
      <Link className={`navbar nav-btn ${determineStyling("/")}`} to="/">
        Home
      </Link>
      <Link className={`navbar nav-btn ${determineStyling("/stories")}`} to="/stories">
        View Stories
      </Link>
      <Link className={`navbar nav-btn ${determineStyling("/new-story")}`} to="/new-story">
        Create Story
      </Link>
      <Link className={`navbar nav-btn ${determineStyling("/map")}`} to="/map">
        Map Search
      </Link>
    </>
  );
}