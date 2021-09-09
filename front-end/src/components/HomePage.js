import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(){
  return(
    <div className="homepage-wrapper">
      <div className="sub-homepage-wrapper">
        <div className="prompt-wrapper">
          <h4 className="header">Welcome to Thinkful Graduate Stories!</h4>
          <p className="prompt">
            Here you can seach and view stories of your fellow Thinkful grads to see when, where, and how they got hired into their desired field. 
            <br/>
            <br/>
            Or, better yet, maybe you’re a grad who’s made it into a career post-Thinkful. Congrats! Here’s a great place to share the elements of your story on the road to getting hired.
            <br/>
            <br/>
            Whether you’re looking for that first job in your new field, or off to a great start in your career, don’t be afraid to connect with fellow grads. Together, we’ll help everyone have a story worth sharing.
          </p>
        </div>
        <div className="page-btns">
            <Link className="page-link" to={"/stories"}>View Stories</Link>
            <Link className="page-link" to={"new-story"}>Create Story</Link>
            <Link className="page-link" to={"/map"}>Map Search</Link>
          </div>
      </div>
    </div>
  )
}