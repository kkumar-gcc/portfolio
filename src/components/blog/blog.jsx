import "./blog.css";
function Blog() {
  return (
    <>
      <div className="card">
        <div className="thumbnail">
          <a href="">
            <img src={"https://picsum.photos/200/300?person"} alt="" />
          </a>
        </div>
        <div className="title">
          <div className="category-list">
            <a href="">figma</a>
          </div>
          <div className="meta">
            <span>
              <a>new</a>
            </span>
          </div>
        </div>
        <div className="content">
          <h4>
            <a href="">this is article for timepass</a>
          </h4>
        </div>
      </div>
    </>
  );
}
export default Blog;
