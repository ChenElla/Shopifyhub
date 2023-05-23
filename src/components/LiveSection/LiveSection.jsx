import React from "react";
import user_icon from "../../assets/icons/userIcon.avif";

import video_off_icon from "../../assets/icons/video_off.png";
import micro_icon from "../../assets/icons/MicrophoneMajor.svg";
import mute_icon from "../../assets/icons/mute_icon.png";
import sp_icon from "../../assets/user_icons/sophie.png";
import ab_icon from "../../assets/user_icons/abhijeet.jpg";
import sr_icon from "../../assets/user_icons/sara.jpg";
import rc_icon from "../../assets/user_icons/rachel.jpg";
import ml_icon from "../../assets/user_icons/melissa.png";
import el_icon from "../../assets/user_icons/ella.png";

export default function LiveSection() {
  return (
    <div className="w-full">
      <div className="text-white pl-2 text-start font-xl font-semibold uppercase bg-gradient-to-r from-slate-500 to-transparent">
        Live
      </div>
      <div className="bg-gradient-to-br from-slate-900 to-transparent w-full shadow-lg">
        <div className="text-xl text-white mb-5 pt-5">
          Black Business Owners
        </div>
        <div className="flex flex-row pr-3 pl-3 pb-2 justify-between w-1/1">
          <div className="flex flex-col w-1/3 items-center">
            <img
              className="w-10 h-10 bg-slate-300 rounded-full border border-white border-5 "
              src={rc_icon}
              alt="rachel_user_icon"
            />
            <div className="text-slate-100 italic text-sm">Rachel M.</div>
            <div className="flex flex-row justify-between">
              <img
                className="w-4 h-4 mr-3 rounded-full bg-white p-1"
                src={micro_icon}
                alt="micro_phone_icon"
              />
              <img
                className="w-4 h-4 rounded-full bg-white p-1"
                src={video_off_icon}
                alt="video_off_icon"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 items-center">
            <img
              className="w-10 h-10 bg-slate-300 rounded-full border border-white border-5 "
              src={ml_icon}
              alt="melissa_user_icon"
            />
            <div className="text-slate-100 italic text-sm">Melissa L.</div>
            <div className="flex flex-row justify-between">
              <img
                className="w-4 h-4 mr-3 rounded-full bg-white p-1"
                src={mute_icon}
                alt="micro_phone_icon"
              />
              <img
                className="w-4 h-4 rounded-full bg-white p-1"
                src={video_off_icon}
                alt="video_off_icon"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 items-center">
            <img
              className="w-10 h-10 bg-slate-300 rounded-full border border-white border-5 "
              src={sp_icon}
              alt="sophie_user_icon"
            />
            <div className="text-slate-100 italic text-sm">Me</div>
            <div className="flex flex-row justify-between">
              <img
                className="w-4 h-4 mr-3 rounded-full bg-white p-1"
                src={mute_icon}
                alt="micro_phone_icon"
              />
              <img
                className="w-4 h-4 rounded-full bg-white p-1"
                src={video_off_icon}
                alt="video_off_icon"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row pr-3 pl-3 pb-10 justify-between w-1/1">
          <div className="flex flex-col w-1/3 items-center">
            <img
              className="w-10 h-10 bg-slate-300 rounded-full border border-white border-5 "
              src={el_icon}
              alt="ella_user_icon"
            />
            <div className="text-slate-100 italic text-sm">Ella C.</div>
            <div className="flex flex-row justify-between">
              <img
                className="w-4 h-4 mr-3 rounded-full bg-white p-1"
                src={mute_icon}
                alt="micro_phone_icon"
              />
              <img
                className="w-4 h-4 rounded-full bg-white p-1"
                src={video_off_icon}
                alt="video_off_icon"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 items-center ">
            <img
              className="w-10 h-10 bg-slate-500 rounded-full border border-white border-5 "
              src={sr_icon}
              alt="sara_user_icon"
            />
            <div className="text-slate-100 italic text-sm">Sara N.</div>
            <div className="flex flex-row justify-between">
              <img
                className="w-4 h-4 mr-3 rounded-full bg-white p-1"
                src={mute_icon}
                alt="micro_phone_icon"
              />
              <img
                className="w-4 h-4 rounded-full bg-white p-1"
                src={video_off_icon}
                alt="video_off_icon"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 items-center">
            <img
              className="w-10 h-10 bg-slate-500 rounded-full border border-white border-5 "
              src={ab_icon}
              alt="abhijeet_user_icon"
            />
            <div className="text-slate-100 italic text-sm">Abhijeet M.</div>
            <div className="flex flex-row justify-between">
              <img
                className="w-4 h-4 mr-3 rounded-full bg-white p-1"
                src={mute_icon}
                alt="micro_phone_icon"
              />
              <img
                className="w-4 h-4 rounded-full bg-white p-1"
                src={video_off_icon}
                alt="video_off_icon"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-white pl-2 text-start font-xl font-semibold uppercase bg-gradient-to-r from-slate-800 to-transparent">
            Chat
          </div>
          <div className="bg-white/25 w-full h-40 overflow-y-auto">
            <div className="flex flex-col justify-start bg-white/25 m-2">
              <div className="flex flex-row justify-between items-center p-3">
                <div className="flex flex-row justify-start items-center">
                  <img className="w-8 h-8 rounded-full bg-white mr-1" src={sp_icon} alt="sophie_usericon" />
                  <div className ="text-white">Me</div>
                </div>
                <div className="text-slate-500 ">8:30 pm</div>
              </div>
              <div className="text-left ml-5 mb-2 font-black font-normal">I love the idea!</div>
            </div>
            <div className="flex flex-col justify-start bg-white/25 m-2">
              <div className="flex flex-row justify-between items-center p-3">
                <div className="flex flex-row justify-start items-center">
                  <img className="w-8 h-8 rounded-full bg-white mr-1" src={rc_icon} alt="rachel_usericon" />
                  <div className ="text-white">Rachel</div>
                </div>
                <div className="text-slate-500 ">8:32 pm</div>
              </div>
              <div className="text-left ml-5 mb-2 text-slate-600 font-normal">Unmuted</div>
            </div>
          </div>
          <div className="flex flex-row ">
            <input className = "ml-2 mt-2 mb-2 w-50 pl-1 rounded-sm" placeholder = "Type message here..."/> 
            <button className = "rounded-sm bg-white w-full m-2 hover:bg-slate-800 hover:text-white">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}
