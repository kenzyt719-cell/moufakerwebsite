import React, { useEffect, useState } from "react";
import "./Blogsdetails.css";
import Nav from "../Components/Layout/Nav";
import Titleandsub from "../Components/Common/Titleandsub";
import Footer from "../Components/Layout/Footer";
import blogImg from "../Assets/blogsmain.png";
import { supabase } from "../supabaseClient";
import { useParams } from "react-router-dom";

const Blogsdetails = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    const { data, error } = await supabase
      .from("blogs_details")
      .select("*")
      .eq("id", Number(id)) // 👈 مهم
      .single();

    if (error) {
      console.log(error);
    } else {
      setBlog({
        title: data.title,
        description1: data.decription1,
        description2: data.decription2,
      });
    }
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <div className="contacthoem">
        <Nav />

        <Titleandsub title="Blogs Details" />

        <div className="divdiovblogs">

          <div className="blog-section">
            <img src={blogImg} alt="blog" className="imgblogdetails" />
            <h1 className="h1blogdetails">{blog.title}</h1>
          </div>

          <div className="blog-section">
            <h2 className="h2blogsdetails">{blog.description1}</h2>
          </div>

          <div className="blog-section">
            <img src={blogImg} alt="blog" className="imgblogdetails" />
            <h3 className="h2blogsdetails">{blog.description2}</h3>
          </div>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blogsdetails;