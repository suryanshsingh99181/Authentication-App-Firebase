import ppc1 from "../../assets/ppc1.png";
import ppc2 from "../../assets/ppc2.png";
import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";
import heartIcon from "../../assets/heart2.svg";
import commentIcon from "../../assets/comment.svg";
import shareIcon from "../../assets/share.svg";
import React from "react";

const Content = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-[10px] shadow-md mb-7 ">
        {/* Post Header */}
        <div className="flex items-center justify-between mb-4 bg-white">
          <div className="flex items-center space-x-3 bg-white">
            <img
              src={ppc1}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="bg-white">
              <p className="font-semibold bg-white">Lara Leones</p>
              <p className="text-sm text-gray-500 bg-white">@thewallart</p>
            </div>
          </div>
          <span className="float-right font-extrabold bg-white text-2xl cursor-pointer">
            ⋮
          </span>
        </div>

        {/* Post Content */}
        <p className="text-gray-700 mb-4 bg-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
          <span className="text-red-400 bg-white ">Read More</span>
        </p>

        {/* Post Image */}
        <img src={post1} alt="Post" className="rounded-md w-full mb-4" />
        <hr className="mt-2 mb-2" />

        {/* Post Actions */}
        <div className="flex items-center justify-start px-2 py-2  text-gray-600 bg-white">
          <div className="flex items-center space-x-1 bg-white px-2">
            <img src={heartIcon} alt="" className="bg-white" />
            <span className="bg-white font-semibold text-black">9.8k</span>
          </div>
          <div className="flex items-center space-x-1 px-2">
            <img src={commentIcon} alt="" className="bg-white" />
            <span className="bg-white font-semibold text-black">8.6k</span>
          </div>
          <div className="flex items-center space-x-1 px-2">
            <img src={shareIcon} alt="" className="bg-white" />
            <span className="bg-white font-semibold text-black">7.2k</span>
          </div>
        </div>
      </div>
      {/*2nd Post */}
      <div className="bg-white p-6 rounded-[10px] shadow-md mb-7 ">
        {/* Post Header */}
        <div className="flex items-center justify-between mb-4 bg-white">
          <div className="flex items-center space-x-3 bg-white">
            <img
              src={ppc2}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="bg-white">
              <p className="font-semibold bg-white">Thomas J.</p>
              <p className="text-sm text-gray-500 bg-white">
                @thecustomcreater
              </p>
            </div>
          </div>
          <span className="float-right font-extrabold bg-white text-2xl cursor-pointer">
            ⋮
          </span>
        </div>

        {/* Post Content */}
        <p className="text-gray-700 mb-4 bg-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
          <span className="text-red-400 bg-white ">Read More</span>
        </p>

        {/* Post Image */}
        <img src={post2} alt="Post" className="rounded-md w-full mb-4" />
        <hr className="mt-2 mb-2" />

        {/* Post Actions */}
        <div className="flex items-center justify-start px-2 py-2  text-gray-600 bg-white">
          <div className="flex items-center space-x-1 bg-white px-2">
            <img src={heartIcon} alt="" className="bg-white" />
            <span className="bg-white font-semibold text-black">9.8k</span>
          </div>
          <div className="flex items-center space-x-1 px-2">
            <img src={commentIcon} alt="" className="bg-white" />
            <span className="bg-white font-semibold text-black">8.6k</span>
          </div>
          <div className="flex items-center space-x-1 px-2">
            <img src={shareIcon} alt="" className="bg-white" />
            <span className="bg-white font-semibold text-black">7.2k</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
