import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    let result = await fetch("https://klemo-blog-server.onrender.com/blogs", {});
    result = await result.json();
    setBlogs(result);
  };

  const deleteBlog = async (id) => {
    console.warn(id);
    let result = await fetch(`https://klemo-blog-server.onrender.com/blogs/${id}`, {
      method: "Delete",
    });

    result = await result.json();
    if (result) {
      getBlogs();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`https://klemo-blog-server.onrender.com/search/${key}`);
      result = await result.json();
      if (result) {
        setBlogs(result);
      }
    } else {
      getBlogs();
    }
  };

  return (
    /*<div>
      {blogs.map((value) => (
        <section class="text-gray-600 body-font">
          <div key ={value._id} class="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {value.title}
              </h1>
              <p class="mb-8 leading-relaxed">{value.summary}</p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link to={"/singlepost/"+value.key}>Read More</Link>
                </button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  {value.author}
                </button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                onClick={()=>deleteBlog(value._id)}>
                  Delete
                </button>
                
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>*/

    <div>
      <nav>
        <div className="md:grid md:grid-cols-7 p-5  bg-blue-100 w-full fixed">
          <div className="md:grid md:grid-cols-3 md:col-span-2 md:col-start-2 font ">
            <div className=" pl-5 flex">
              <img
                className="h-9 w-32 "
                src="https://i.ibb.co/P6p1X8s/Logo-removebg-preview-1.png"
              ></img>
            </div>
          </div>
          <div className="flex text-gray-600 md:col-span-2">
            <h1 className="text-right text-xl pl-5 hover:text-xl">
              <a target="_blank" href="https://klemo.co/">
                Home
              </a>
            </h1>
            <h1 className="text-right pl-5 text-xl   hover:text-xl">
              <a target="_blank" href="https://klemo.co/service">
                Services
              </a>
            </h1>
            <h1 className="text-right pl-5 text-xl  hover:text-xl">
              <a target="_blank" href="https://klemo.co/contact">
                Contact
              </a>
            </h1>
          </div>

          <div className="md:grid md:grid-cols-2 md:col-span-2 justify-items-start">
            <input
              className="bg-gray-100 px-3 hover:text-xl md:w-1/2 text-black  hover:bg-gray-500 rounded-lg text-left"
              type="text"
              placeholder="Search.."
              onChange={searchHandle}
            ></input>
            {/* <div className="grid gap-5 grid-cols-3 text-left sm:visible invisible sm:justify-items-center ">
              <a
                target="_blank"
                href="https://www.facebook.com/ankit.dewangan.395454/"
              >
                <AiFillFacebook className="text-xl"></AiFillFacebook>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ankit.dewangan05/"
              >
                <GrInstagram className="text-xl"></GrInstagram>
              </a>
              <a
                target="_blank"
                href="https://in.linkedin.com/in/ankit-dewangan-4a66051b3"
              >
                <AiFillLinkedin class="text-xl"></AiFillLinkedin>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
      <div className="xl:p-20 xl:pb-5"></div>

      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense lg:gap-2 lg:gap-y-3 xl:mr-7 xl:p-14 xl:pt-0 xl:ml-6 sm:rounded-md sm:ml-2 sm:mr-2">
        {blogs.map((value) => (
          <div className="flex flex-col ">
            <div>
              <img className="p-6" src={value.url}></img>
            </div>
            <div className="p-6 pt-0">
              <h1 className="font-bold sm:text-xl text-left text-2xl text-blue-600">
                {value.title}
              </h1>
              <p className="pt-4 text-left font-bold text-sm text-gray-500 p-2 pl-0">
                {value.author}
              </p>
              <p className="pt-2 text-left text-[.8rem]">{value.summary}</p>
              <div className="flex justify-between">
                <p className="pt-3 text-left text-sm text-red-700 font-semibold">
                  <Link to={"/singlepost/" + value.key}>Read More....</Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

//<Link to={"/singlepost/"+value.key}>Read More</Link>
