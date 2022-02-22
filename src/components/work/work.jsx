import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import quote from './../blog/quote.svg';
// import "./blog.css";
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
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
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
                      <div className="post-container">
                        <div className="skill-title">
                          <h1>Post Details</h1>
                        </div>
                        <h3>{blogDetail.title}</h3>
                        <img
                          src={"https://picsum.photos/900/600?person"}
                          alt=""
                        />
                        <p>{blogDetail.desc}</p>
                        <div class="quotebox">
                          <div class="icon">
                            <img src={quote} alt="blog quote" />
                          </div>
                          <p>{blogDetail.quote}</p>
                        </div>
                     
                        <p>{blogDetail.desc1}</p>
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
