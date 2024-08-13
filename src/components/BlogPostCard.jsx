import React from 'react';

const BlogPostCardsRow = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Img Loading" />
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                 Show more..
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Img Loading" />
            <div className="card-body">
              <h5 className="card-title">Card title 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Show more..
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Img Loading" />
            <div className="card-body">
              <h5 className="card-title">Card title 3</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                 Show more..
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCardsRow;
