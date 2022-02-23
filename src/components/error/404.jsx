import "./404.css";

import { Link } from "react-router-dom";
function Error() {
  return (
    <>
   
      <section class="error-container">

        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
        <h1><b>This page doesn't exit.</b></h1>
      <p class="zoom-area">
        <b>(^.^) </b> let's go home and try another request <b>(^.^)</b>
      </p>
      </section>
      <div class="link-container">
      <button><Link to="/" className="more-link">Go to HOME</Link></button>
        
  
      </div>
    </>
  );
}

export default Error;
