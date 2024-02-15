import React from "react";
import errorimg from "../../asset/errorpage.png";
import "./Page404.css";

const Page404 = () => {
  return (
    <React.Fragment>
      <div className="parent-errpage">
        <img
          className="img-404"
          src="https://img.freepik.com/premium-vector/connection-error-concept_106788-37.jpg?size=626&ext=jpg"
          alt=""
        />
      </div>
    </React.Fragment>
  );
};

export default Page404;
