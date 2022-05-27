import React from "react";

function Blogfrontend() {
  return (
    /*<div>
      <nav>
        <div className="grid grid-cols-2 p-5 bg-indigo-900">
          <div className="grid grid-cols-3">
            <h1 className="text-right hover:text-xl">Home</h1>
            <h1 className="text-right hover:text-xl ">Browse</h1>
          </div>
          <div className="grid grid-cols-2 ">
            <input
              className="bg-blue-400 hover:text-xl md:w-1/2 text-black  hover:bg-blue-500 rounded-lg text-center"
              type="text"
              placeholder="Search"
            ></input>
            <div className="grid grid-cols-3 text-left sm:visible invisible sm:justify-items-center ">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="xl:p-20 xl:pb-5">
        <img
          className="p-6"
          src="https://speckyboy.com/wp-content/themes/speckyboy-3.9.9/images/logo-sm.png"
        ></img>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap- lg:gap-y-3 xl:mr-7 xl:p-14 xl:pt-0 xl:ml-6 sm:rounded-md sm:ml-2 sm:mr-2">
        <div className="flex flex-col ">
          <div>
            <img
              className="p-6"
              src="https://speckyboy.com/wp-content/uploads/2020/06/box-packaging-mockup-templates-thumb.jpg"
            ></img>
          </div>
          <div className="p-6 pt-0">
              <h1 className="font-bold sm:text-xl text-left text-2xl text-blue-600">WordPress Tips & Plugins for Those “Oh $#!%” Moments</h1>
              <p className="pt-4 text-left font-bold text-sm text-gray-500 p-2 pl-0">By Eric Karkovack</p>
              <p className="pt-2 text-left text-[.8rem]">Tips and free plugins that will help you quickly recover from those unexpected, but all too common, WordPress hiccups and moments.</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <img
              className="p-6"
              src="https://speckyboy.com/wp-content/uploads/2022/05/duotone-photoshop-action-thumb.jpg"
            ></img>
          </div>
          <div className="p-6 pt-0">
              <h1 className="font-bold text-left text-2xl text-blue-600">WordPress Tips & Plugins for Those “Oh $#!%” Moments</h1>
              <p className="pt-4 text-left font-bold text-gray-500 p-2 pl-0">By Eric Karkovack</p>
              <p className="pt-2 text-left text-sm">Tips and free plugins that will help you quickly recover from those unexpected, but all too common, WordPress hiccups and moments.</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <img
              className="p-6"
              src="https://speckyboy.com/wp-content/uploads/2022/05/3d-css-javascript-snippet-thumb.jpg"
            ></img>
          </div>
          <div className="p-6 pt-0">
              <h1 className="font-bold text-left text-2xl text-blue-600">WordPress Tips & Plugins for Those “Oh $#!%” Moments</h1>
              <p className="pt-4 text-left font-bold text-gray-500 p-2 pl-0">By Eric Karkovack</p>
              <p className="pt-2 text-left text-sm">Tips and free plugins that will help you quickly recover from those unexpected, but all too common, WordPress hiccups and moments.</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <img
              className="p-6"
              src="https://speckyboy.com/wp-content/uploads/2022/05/wk-news-644-thumb.jpg"
            ></img>
          </div>
          <div className="p-6 pt-0">
              <h1 className="font-bold text-left text-2xl text-blue-600">WordPress Tips & Plugins for Those “Oh $#!%” Moments</h1>
              <p className="pt-4 text-left font-bold text-gray-500 p-2 pl-0">By Eric Karkovack</p>
              <p className="pt-2 text-left text-sm">Tips and free plugins that will help you quickly recover from those unexpected, but all too common, WordPress hiccups and moments.</p>
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}

export default Blogfrontend;

/*<div>
      <div className="grid grid-cols-1 ">
        <div className="p-3">
          <h1 className=" text-black text-start font-bold text-3xl">
            Adventure.com
          </h1>
        </div>
        <div>
          <img
            className="w-full h-full"
            src="https://adventure.com/wp-content/uploads/2022/05/Hero-Mr-Bamboo-Thailand-Photo-credit-IMG_20180908_130116-1536x768.jpg"
          ></img>
        </div>
        <div className="md:grid md:grid-cols-2 md:grid-flow-row-dense">
          <div className="md:col-span-2">
            <h1 className="p-6 text-gray-900 text-3xl p-3 font-thin">Recent</h1>
          </div>
          <div className="p-5 pt-0 md:col-span-1">
            <div>
              <img
                className="rounded-lg"
                src="https://adventure.com/wp-content/uploads/2022/04/Whats-in-the-water-Underwater-construction-debris_Lake-Tahoe_Photo-Credit-Below-the-Blue-6-1920x1080.jpg"
              ></img>
            </div>
            <div className="text-left">
              <h1 className="w-4/5 font-semibold text-2xl ">
                What’s lurking in Lake Tahoe? The answer: a ton of trash
              </h1>
              <p className="text-base text-gray-500 pt-1">May 5,2022</p>
            </div>
            <div className="flex">
              <h1 className="">
                Lauren Steele<span className="pl-10">Places</span>
              </h1>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="pt-5 pl-5 text-left w-6/7 bg-white shadow-md">
              <p className="text-gray-700 text-xl ">
                Our Great National Parks is the latest five-part nature
                documentary series from Netflix, Wild Space Productions, and
                Michelle and former President Barack Obama’s production company,
                Higher Ground. In a crowded, post-Attenborough genre, and in a
                world tearing itself apart, the series tries something kind of
                radical. It tries to sell you hope.
              </p>
              <p className="text-red-500 font-semibold pt-3 text-base">
                Keep Reading...
              </p>
            </div>

            <div className="md:col-span-1">
              <div className=" pt-5">
                <div>
                  <img
                    className="rounded-lg"
                    src="https://adventure.com/wp-content/uploads/2022/04/cinthia-aguilar-dkdqdm7kr_u-un.jpg"
                  ></img>
                </div>
                <div className="text-left">
                  <h1 className="w-4/5 font-semibold text-2xl ">
                    What’s lurking in Lake Tahoe? The answer: a ton of trash
                  </h1>
                  <p className="text-base text-gray-500 pt-1">May 5,2022</p>
                </div>
                <div className="flex">
                  <h1 className="">
                    Lauren Steele<span className="pl-10">Places</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className=" pt-5">
                <div>
                  <img
                    className="rounded-lg"
                    src="https://adventure.com/wp-content/uploads/2022/04/cinthia-aguilar-dkdqdm7kr_u-un.jpg"
                  ></img>
                </div>
                <div className="text-left">
                  <h1 className="w-4/5 font-semibold text-2xl ">
                    What’s lurking in Lake Tahoe? The answer: a ton of trash
                  </h1>
                  <p className="text-base text-gray-500 pt-1">May 5,2022</p>
                </div>
                <div className="flex">
                  <h1 className="">
                    Lauren Steele<span className="pl-10">Places</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="text-left mt-10 md:grid md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense  lg:pl-[100px] lg:pr-[100px]">
              <div className="md:col-span-2 lg:col-span-4">
                <h1 className="text-3xl font-thin md:text-left lg:text-left">
                  News
                </h1>
              </div>
              <div className="w-5/6 g flex-col ">
                <p className="text-gray-500 mt-3">May 24, 2022</p>
                <h1 className="font-semibold text-xl">
                  The first all-Black climbing team has summited Everest. Here’s
                  why that’s a huge deal
                </h1>
                <p className="mt-2">James Shackell</p>
              </div>

              <div className="w-5/6 flex flex-col">
                <p className="text-gray-500 mt-3">May 24, 2022</p>
                <h1 className="font-semibold text-xl">
                  The first all-Black climbing team has summited Everest. Here’s
                  why that’s a huge deal
                </h1>
                <p className="mt-2">James Shackell</p>
              </div>

              <div className="w-5/6 flex-col">
                <p className="text-gray-500 mt-3">May 24, 2022</p>
                <h1 className="font-semibold text-xl">
                  The first all-Black climbing team has summited Everest. Here’s
                  why that’s a huge deal
                </h1>
                <p className="mt-2">James Shackell</p>
              </div>
              <div className="w-5/6 flex-col">
                <p className="text-gray-500 mt-3">May 24, 2022</p>
                <h1 className="font-semibold text-xl">
                  The first all-Black climbing team has summited Everest. Here’s
                  why that’s a huge deal
                </h1>
                <p className="mt-2">James Shackell</p>
              </div>
            </div>
            <div className="">
              <h1>Popular this Month</h1>
              <div>
                <img src="https://adventure.com/wp-content/uploads/2019/04/Hero-Are-we-liking-our-NPs-to-death-Selfie-at-Yellowstone-Matt-Ludin-1920x1080.jpg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>*/
    <div>
      <nav>
        <div className="grid grid-cols-2 p-5 bg-indigo-900">
          <div className="grid grid-cols-3">
            <h1 className="text-right hover:text-xl">Home</h1>
            <h1 className="text-right hover:text-xl ">Browse</h1>
          </div>
          <div className="grid grid-cols-2 ">
            <input
              className="bg-blue-400 hover:text-xl md:w-1/2 text-black  hover:bg-blue-500 rounded-lg text-center"
              type="text"
              placeholder="Search"
            ></input>
            <div className="grid grid-cols-3 text-left sm:visible invisible sm:justify-items-center ">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="xl:p-20 lg:p-20 lg:pb-5 xl:pb-5">
        <img
          className="p-6"
          src="https://speckyboy.com/wp-content/themes/speckyboy-3.9.9/images/logo-sm.png"
        ></img>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:p-14 lg:pt-0  ">
        <div className="lg:col-span-2  lg:p-10 lg:pb-0 lg:pt-15 h-m ">
          <h1 className="text-3xl sm:text-3xl lg:p-0 text-gray-700 font-bold text-left p-7 pb-0">
            WordPress Tips & Plugins for Those “Oh $#!%” Moments
          </h1>
          <hr className="mt-7"></hr>
          <p className="text-sm text-left lg:pb-0 p-7 pt-5 pb-1 font-bold  lg:pl-0">By<span className="text-blue-400 lg:pb-0 pr-2 "> Eric Earkovack</span>May 26th, 2022
          </p>
          <p className="text-sm text-left lg:pb-0 p-7 pb-4 pt-0 font bold text-gray-500">
            
          </p>
          <hr></hr>
        </div>
        <div className="lg:col-span-2">
          <p className="text-base text-left lg:text-base lg:p-10 p-7 sm:text-lg text-gray-700">
            It’s happened to all of us at one time or another. We work hard to
            build a flawless website (in our eyes, anyway), and then a client
            comes along with a “suggestion” that blows it all to bits. Then
            there are those times when we make a boneheaded mistake that means
            having to rip things up and try to piece it back together again.Not
            so fast. When working with WordPress, there are indeed some built-in
            features, best practices, and plugins available that can help us in
            these moments. Perhaps they can’t fix everything, but they can at
            least make the task easier to manage. Here are a few notable
            selections you’ll want to check out the next time $#!% happens. It’s
            happened to all of us at one time or another. We work hard to build
            a flawless website (in our eyes, anyway), and then a client comes
            along with a “suggestion” that blows it all to bits. Then there are
            those times when we make a boneheaded mistake that means having to
            rip things up and try to piece it back together again. Not so fast.
            It’s happened to all of us at one time or another. We work hard to
            build a flawless website (in our eyes, anyway), and then a client
            comes along with a “suggestion” that blows it all to bits. Then
            there are those times when we make a boneheaded mistake that means
            having to rip things up and try to piece it back together again.Not
            so fast. When working with WordPress, there are indeed some built-in
            features, best practices, and plugins available that can help us in
            these moments. Perhaps they can’t fix everything, but they can at
            least make the task easier to manage. Here are a few notable
            selections you’ll want to check out the next time $#!% happens. It’s
            happened to all of us at one time or another. We work hard to build
            a flawless website (in our eyes, anyway), and then a client comes
            along with a “suggestion” that blows it all to bits. Then there are
            those times when we make a boneheaded mistake that means having to
            rip things up and try to piece it back together again. Not so fast.
            It’s happened to all of us at one time or another. We work hard to
            build a flawless website (in our eyes, anyway), and then a client
            comes along with a “suggestion” that blows it all to bits. Then
            there are those times when we make a boneheaded mistake that means
            having to rip things up and try to piece it back together again.Not
            so fast. When working with WordPress, there are indeed some built-in
            features, best practices, and plugins available that can help us in
            these moments. Perhaps they can’t fix everything, but they can at
            least make the task easier to manage. Here are a few notable
            selections you’ll want to check out the next time $#!% happens. It’s
            happened to all of us at one time or another. We work hard to build
            a flawless website (in our eyes, anyway), and then a client comes
            along with a “suggestion” that blows it all to bits. Then there are
            those times when we make a boneheaded mistake that means having to
            rip things up and try to piece it back together again. Not so fast.
          </p>
        </div>
        <div className="lg:col-span-1 ">
          <div className="hidden lg:block lg:col-span-1 lg:h-full">
            <div className="flex flex-col  ">
              <div>
                <img
                  className="p-6"
                  src="https://speckyboy.com/wp-content/uploads/2020/06/box-packaging-mockup-templates-thumb.jpg"
                ></img>
              </div>
              <div className="p-6 pt-0">
                <h1 className="font-bold sm:text-xl text-left text-2xl text-blue-600">
                  WordPress Tips & Plugins for Those “Oh $#!%” Moments
                </h1>
                <p className="pt-4 text-left font-bold text-sm text-gray-500 p-2 pl-0">
                  By Eric Karkovack
                </p>
                <p className="pt-2 text-left text-[.8rem]">
                  Tips and free plugins that will help you quickly recover from
                  those unexpected, but all too common, WordPress hiccups and
                  moments.
                </p>
              </div>
            </div>


          </div>
        </div>

        <div className="hidden lg:block lg:col-span-1">
            <div className="flex flex-col ">
              <div>
                <img
                  className="p-6"
                  src="https://speckyboy.com/wp-content/uploads/2020/06/box-packaging-mockup-templates-thumb.jpg"
                ></img>
              </div>
              <div className="p-6 pt-0">
                <h1 className="font-bold sm:text-xl text-left text-2xl text-blue-600">
                  WordPress Tips & Plugins for Those “Oh $#!%” Moments
                </h1>
                <p className="pt-4 text-left font-bold text-sm text-gray-500 p-2 pl-0">
                  By Eric Karkovack
                </p>
                <p className="pt-2 text-left text-[.8rem]">
                  Tips and free plugins that will help you quickly recover from
                  those unexpected, but all too common, WordPress hiccups and
                  moments.
                </p>
              </div>
            </div>
            </div>
            <div className="hidden lg:block lg:col-span-1">
            <div className="flex flex-col ">
              <div>
                <img
                  className="p-6"
                  src="https://speckyboy.com/wp-content/uploads/2020/06/box-packaging-mockup-templates-thumb.jpg"
                ></img>
              </div>
              <div className="p-6 pt-0">
                <h1 className="font-bold sm:text-xl text-left text-2xl text-blue-600">
                  WordPress Tips & Plugins for Those “Oh $#!%” Moments
                </h1>
                <p className="pt-4 text-left font-bold text-sm text-gray-500 p-2 pl-0">
                  By Eric Karkovack
                </p>
                <p className="pt-2 text-left text-[.8rem]">
                  Tips and free plugins that will help you quickly recover from
                  those unexpected, but all too common, WordPress hiccups and
                  moments.
                </p>
              </div>
            </div>
            </div>
            <div className="hidden lg:block lg:col-span-1">
            <div className="flex flex-col ">
              <div>
                <img
                  className="p-6"
                  src="https://speckyboy.com/wp-content/uploads/2020/06/box-packaging-mockup-templates-thumb.jpg"
                ></img>
              </div>
              <div className="p-6 pt-0">
                <h1 className="font-bold sm:text-xl text-left text-2xl text-blue-600">
                  WordPress Tips & Plugins for Those “Oh $#!%” Moments
                </h1>
                <p className="pt-4 text-left font-bold text-sm text-gray-500 p-2 pl-0">
                  By Eric Karkovack
                </p>
                <p className="pt-2 text-left text-[.8rem]">
                  Tips and free plugins that will help you quickly recover from
                  those unexpected, but all too common, WordPress hiccups and
                  moments.
                </p>
              </div>
            </div>
            </div>


      </div>
    </div>
  );
}
export default Blogfrontend;
