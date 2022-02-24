import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import quote from "./../blog/quote.svg";
import "./work.css";
import BlogData from "./../blog/MOCK_DATA.json";
function truncate(input) {
  return input?.length > 50 ? `${input.substring(0, 49)} . . .` : input;
}
function Work() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="skill-title">
        <h1>My Work</h1>
      </div>
      <div className="blog-container">
        <div className="row wrap">
          {BlogData.map((blogDetail, index) => {
            return (
              <div key={blogDetail.id} className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-4">
                <div className="card">
                  <div className="thumbnail">
                    <a href="">
                      <img
                        src={"https://picsum.photos/180/120?person"}
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="content">
                    <h4>
                      <a
                        variant="primary"
                        onClick={handleShow}
                        className="me-2"
                      >
                        {truncate(blogDetail.title)}
                      </a>
                    </h4>
                  </div>

                  <Offcanvas show={show} onHide={handleClose} placement="top">
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title> </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <div className="work-container">
                        {/* <div className="skill-title">
                          <h1>Post Details</h1>
                        </div> */}
                        {/* <h3>{blogDetail.title}</h3> */}
                        <div className="work-left-container">
                          <img
                            src={"https://picsum.photos/450/340?person"}
                            alt=""
                          />
                        </div>
                        <div className="work-right-container">
                          <p>{blogDetail.title}</p>
                        <button>view project &gt; </button>
                        </div>
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Work;
