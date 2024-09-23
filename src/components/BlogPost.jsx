import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogPostRow = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="Img Loading" />
          <div className="card-body">
            <h5 className="card-title">Card title 1</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <NavLink to="#" className="btn btn-primary">Show more..</NavLink> 
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="Img Loading" />
          <div className="card-body">
            <h5 className="card-title">Card title 2</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <NavLink to="#" className="btn btn-primary">Show more..</NavLink> 
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="Img Loading" />
          <div className="card-body">
            <h5 className="card-title">Card title 3</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <NavLink to="#" className="btn btn-primary">Show more..</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogPost = () => {

  return (
    <div className="bg-background text-primary-foreground min-h-screen flex flex-col">
      <div className="container mx-auto flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <BlogPostRow />
        </div>
      </div>

     
    </div>
  );
};

export default BlogPost;
