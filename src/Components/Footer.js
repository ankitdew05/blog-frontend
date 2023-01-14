import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <div>
      <nav>
        <div className="grid mt-3 sm:grid-cols-2 p-5 bg-gray-300 flex  bottom-0 w-full">
          <div className=" font-bold ">
            <a target="_blank" href="https://klemo.co">
              <h1 className=" pt-3 sm:text-right text-xl underline font-thin ">
               All rights reserved @Klemo.co
              </h1>
            </a>
          </div>
          {/* <div className="grid grid-cols-2 ">
            <div className="grid grid-cols-3 text-left sm:visible invisible sm:justify-items-center ">
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
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Footer;
