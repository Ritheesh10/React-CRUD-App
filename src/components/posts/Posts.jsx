import React, { useEffect, useState } from "react";
import Axios from "../../apis/Axios";
import { Link } from "react-router-dom";

const Posts = () => {
  const [state, setState] = useState(null)
  const [loading, setLoading] = useState(false)

  let deletePost = async (id) => {
    await Axios.delete(`/posts/${id}`);
    window.location.assign('/')
    id.preventDefault()
  };

  useEffect(() => {
    let fetchPosts = async () => {
      try {
        let {data}=await Axios.get('/posts')
        setLoading(true)
        setState(data)
       
     }catch(error){console.log(error)}
    }
    fetchPosts()
    setLoading(false)
  }, [])

  
  
  return (
    <div className="container my-4">
      <table className="table table-bordered table-hovered">
        <thead className="thead-dark text-capitalize">
          <tr>
            <th>title</th>
            <th>details</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>{state === null ? "loading" : state.map(post => {
          return (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.details}</td>
              <td>
                <Link
                  className="btn btn-primary btn-sm"
                  to={`/edit-post/${post.id}`}
                >
                  Edit
                </Link>
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={()=>deletePost(post.id)} >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}</tbody>
      </table>
    </div>
  );
};

export default Posts;
