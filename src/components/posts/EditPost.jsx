import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../apis/Axios";

const EditPost = () => {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
 let navigate=useNavigate()
  useEffect(() => {
    let fetchPost = async () => {
      let { data } = await Axios.get(`/posts/${id}`);
      setTitle(data.title);
      setDetails(data.details);
    };
    fetchPost();
  }, [id]);

  let handleSubmit = async e => {
    e.preventDefault()
    let payLoad={title,details}
    try {
      await Axios.put(`/posts/${id}`,payLoad)
       navigate(`/`)
    } catch (error) {
      console.log(error);
    }
  }

  return(
  <section id="authblock" className="card">
    <article className="card-body col-4 mx-auto bg-light my-4">
      <h2 className="text-center font-weight-bold text-dark text-uppercase my-2">
        Update Post
      </h2>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea
            type="text"
            id="details"
            cols="30"
            rows="10"
            value={details}
            onChange={e => setDetails(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success btn-block my-2 ">
            {loading === true ? "loading" : "Create Post"}
          </button>
        </div>
      </form>
    </article>
    </section>
  );
};

export default EditPost;
