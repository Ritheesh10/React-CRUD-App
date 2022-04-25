import React from "react";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import CreatePost from "./components/posts/CreatePost";
import DeletePost from "./components/posts/DeletePost";
import EditPost from "./components/posts/EditPost";
import Posts from "./components/posts/Posts";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/delete-post/:id" element={<DeletePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
