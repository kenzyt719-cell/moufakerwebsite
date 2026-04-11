import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Nav from "../Components/Layout/Nav";
import Titleandsub from "../Components/Common/Titleandsub";
import Footer from "../Components/Layout/Footer";
import Blogone from "../Components/Layout/Blogone";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from("blogs_screen")
      .select("*")
      .limit(6);

    if (error) {
      console.log(error);
    } else {
      setBlogs(data);
    }
  };

  return (
    <>
      <div className="contacthoem">
        <Nav />

        <Titleandsub
          title="Blogs"
          subtitle="Have questions? We're here to help you discover how Moufakker can transform your learning experience"
        />
      </div>

      <div className="blogsdiv">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blogs/${blog.id}`)}
            style={{ cursor: "pointer" }}
          >
            <Blogone
              title={blog.title}
              subTitle={blog.sub_title}
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Blogs;