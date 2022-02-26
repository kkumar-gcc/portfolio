import "./404.css";

import { Link } from "react-router-dom";
function Error() {
  return (
    <>
      {/* <section> */}
        <div class="error-container">
          <span>4</span>
          <span>
            <span class="screen-reader-text">0</span>
          </span>
          <span>4</span>
          <h1>
            <b>This page doesn't exit.</b>
          </h1>
          <p class="zoom-area">
            <b>(^.^) </b> let's go home and try another request <b>(^.^)</b>
          </p>
          <div class="link-container">
            <Link to="/" className="more-link">
              {" "}
              <button>Go to HOME</button>
            </Link>
          </div>
        </div>
      {/* </section> */}
    </>
  );
}

export default Error;
