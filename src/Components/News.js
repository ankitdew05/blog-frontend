//d04d78a17799492d84652214aefc1d7f

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const News = () => {
  const [data, setData] = useState([" "]);

  useEffect(() => {
    getNews();
  }, []);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2022-05-19&sortBy=popularity&apiKey=d04d78a17799492d84652214aefc1d7f"
      )
      .then((response) => {
        //console.log(response);
        setData(response.data.articles);
      });
  };

  return (
    <div class="lg:flex-auto overflow-x-auto ">
      <div>
        <h1 className=" text-3xl font-bold text-gray-600 text-left p-5 lg:text-5xl lg:p-10">Latest News...</h1>
      </div>
      <div class="lg:flex-row lg:pl-2 lg:p-3">
        <div class=" md:grid md:grid-cols-2 md:gap-2 md:p-3 lg:grid lg:gap-5 lg:grid-cols-3 lg:grid-rows-3 ">
          {data.map((value) => (
            <div
              key={value._id}
              class=" mb-5  rounded overflow-hidden shadow-lg "
            >
              <img
                class="w-100 h-80 p-3 w-full object-cover object-center"
                src={value.urlToImage}
                alt="Sunset in the mountains"
              ></img>
              <div class="px-6 py-4 ">
                <div class="font-bold text-xl mb-2">{value.title}</div>
                <p class="text-gray-700 text-base">{value.description}</p>
              </div>

              <div class="px-6 pt-4 pb-2">
                <button class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <a target="_blank" href={value.url}>Read More</a>
                </button>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {value.author}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {value.publishedAt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
