import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

var count = 0;

function refreshPage() {
  window.location.reload(false);
}

function Singlepost() {
  const [title, setTitle] = useState([]);
  const [content, setContent] = React.useState("");
  const [count, setCount] = React.useState(17);
  const [author, setAuthor] = React.useState("");
  const [name, setName] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [blogname, setBlogname] = React.useState("");
  const [url, setUrl] = React.useState("");
  const navigate = useNavigate();
  const params = useParams();

  function increase() {
    setCount(count + 1);
  }

  useEffect(() => {
    getsingleBlog();
    getBlogs();
  }, []);

  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    let result = await fetch("https://klemo-blog-server.onrender.com/blogs/limit");
    result = await result.json();
    setBlogs(result);
  };

  const getsingleBlog = async () => {
    console.warn(params);
    let result = await fetch(`https://klemo-blog-server.onrender.com/blogs/${params.key}`);
    result = await result.json();
    console.warn(result);
    setTitle(result.title);
    setContent(result.content);
    setAuthor(result.author);
    setUrl(result.url);
    setBlogname(params.key);
  };

  const sendReply = async () => {
    console.warn(name, comment, blogname);

    let result = await fetch("https://klemo-blog-server.onrender.com/add-comment", {
      method: "post",
      body: JSON.stringify({ name, comment, blogname }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    window.alert("Reply Send");
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
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {title}
            </h1>
            <p class="mb-8 leading-relaxed">{content}</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {author}
              </button>

              <button
                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                onClick={increase}
              >
                ❤️<span class="pl-1 font-bold">{count}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font mb-24">
        <div class="container px-5  mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Leave a reply
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Your Comment is Highly Appreciated
            </p>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              ></input>
            </div>
            <div class="relative flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Comment
              </label>

              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                value={comment}
              ></input>
            </div>
            <button
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={sendReply}
            >
              Reply
            </button>
          </div>
        </div>
      </section>
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
              <a target="_blank" href="https://klemo.co/home">
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

      <div className="lg:grid lg:gid-co-3"></div>
      <div className="xl:p-20 lg:p-20 lg:pb-5 xl:pb-5 lg:col-span-3 lg:text-center lg:flex lg:justify-center ">
        <img
          className="  rounded-lg lg:w-1/2 lg:pt-14  p-10 lg:pt-3 pr-3 pl-3"
          src={url}
        ></img>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:p-14 lg:pt-0  lg:col-span-2 ">
        <div className="lg:col-span-2  lg:p-10 lg:pb-0 lg:pt-15 h-m ">
          <h1 className="text-3xl sm:text-3xl lg:p-0 text-gray-700 font-bold text-left p-7 pb-0">
            {title}
          </h1>
          <hr className="mt-7"></hr>
          <p className="text-sm text-left lg:pb-0 p-7 pt-5 pb-1 font-bold  lg:pl-0">
            By
            <span className="text-blue-400 lg:pb-0 pr-2 ">{author}</span>
            May 26th, 2022
          </p>
          <p className="text-sm text-left lg:pb-0 p-7 pb-4 pt-0 font bold text-gray-500"></p>
          <hr></hr>
        </div>
        <div className="lg:col-span-2">
          <p className="text-base text-left lg:text-base lg:p-10 p-7 sm:text-lg text-gray-700">
            {content}
          </p>
        </div>

        {blogs.map((value) => (
          <div className="hidden lg:block  lg:col-span-1">
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
                <p className="pt-3 text-left text-sm text-red-700 font-semibold"
                onClick={refreshPage}>
                  <Link to={"/singlepost/"+value.key}>Read More....</Link>
                </p>
              </div>
            </div>
          </div>
        ))}

        <section class="text-gray-600 mt-20 body-font mb-24 lg:col-span-3">
          <div class="container px-5  mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Leave a reply
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Your Comment is Highly Appreciated
              </p>
            </div>
            <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div class="relative flex-grow w-full">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                ></input>
              </div>
              <div class="relative flex-grow w-full">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Comment
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  value={comment}
                ></input>
              </div>
              <button
                class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={sendReply}
              >
                Reply
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Singlepost;
