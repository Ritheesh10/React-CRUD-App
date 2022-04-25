import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../apis/Axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false)
  let navigate=useNavigate()
  let handleSubmit = async e => {
    e.preventDefault()
    try {
      let payload={title,details}
      await Axios.post('/posts',payload)
      navigate("/posts")
    }catch(error){}
  }

  return (
    <section id="authblock" className="card">
      <article className="card-body col-4 mx-auto bg-light my-4">
        <h2 className="text-center font-weight-bold text-dark text-uppercase my-2">
          Create Post
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Title</label>
            <input type="text" value={title}
               onChange={e=>setTitle(e.target.value)}
              className="form-control"
              required/>
          </div>
          <div className="form-group">
            <label htmlFor="details">Details</label>
            <textarea
              type="text"
              id="details"
              cols="30"
              rows="10"
              value={details}
              onChange={e=>setDetails(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success btn-block my-2 ">
              {loading===true?"loading":"Submit"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatePost;
