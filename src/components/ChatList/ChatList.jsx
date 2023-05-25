import message_icon from "../../assets/icons/Messages.png";
import plus_button from "../../assets/icons/CirclePlusMajor.svg";
import ab_icon from "../../assets/user_icons/abhijeet.jpg";
import sr_icon from "../../assets/user_icons/sara.jpg";
import rc_icon from "../../assets/user_icons/rachel.jpg";
import ml_icon from "../../assets/user_icons/melissa.png";
import el_icon from "../../assets/user_icons/ella.png";

import { privateList } from "../../data/listArray";

import PropTypes from "prop-types";
ChatList.propTypes = {
  about: PropTypes.string,
  header_context: PropTypes.string,
  setChannel: PropTypes.func,
  setMain: PropTypes.func,
};
import arrow_icon from "../../assets/icons/CircleDownMajor.svg";
import { useState } from "react";
import { instructions } from "../../data/instructions";
export default function ChatList({ header_context, setChannel, setMain }) {
  const profile_image = [ab_icon, sr_icon, rc_icon, ml_icon, el_icon];
  const arr = privateList;
  const header_icon = message_icon;
  const [instructionOn, setInstructionOn] = useState(false);
  const instruction_text = instructions["Inbox Messaging"].split('\n');
  return (
    <div className="list_column mb-2 ml-0 mr-0 box-border">
      <div className="relative flex flex-row justify-between items-center mb-2">
        <div className="flex flex-row justify-start items-center underline">
          <img className="w-5 h-5 mr-2" src={header_icon} alt="header_icon" />
          <div
            className="text-lg font-semibold hover:cursor-help"
            onMouseOver={() => setInstructionOn(true)}
            onMouseOut={() => setInstructionOn(false)}
          >
            {header_context}
          </div>
        </div>
        <img
          className={
            !instructionOn
              ? "hidden"
              : "z-20 absolute w-10 h-10 left-1/3 top-3 p-2 border-3 z-50 border-green-800 w-2/3 min-h-max -rotate-45"
          }
          src={arrow_icon}
          alt="arrow-icon"
        />
        <div
          className={
            !instructionOn
              ? "hidden"
              : "absolute text-sm normal-case bg-gradient-to-br from-slate-100/75 via-white to-slate-100/75 border-slate-50 border-2 rounded-sm left-1/3 top-8 p-2 border-3 z-10 border-green-800 w-2/3 min-h-max"
          }
        >
          {instruction_text.map((text,index)=>(
              <div key = {index} className = "text-left">{text}<br/></div>
              ))} 
        </div>
        <img
          className="w-6 h-6 hover:cursor-pointer hover:border-white rounded-full border-2"
          src={plus_button}
          alt="plus_button"
        />
      </div>
      <div className="flex flex-col pr-2 pl-2">
        {arr.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-start items-center p-1 hover:bg-slate-200 cursor-pointer w-1/1"
            onClick={() => {
              setMain("channel");
              setChannel(item.title);
            }}
          >
            <img
              className="w-7 h-7 mr-2 p-0 bg-slate-300 rounded-full"
              src={profile_image[index]}
              alt="icon"
            />
            <div className="flex flex-col justify-start items-start">
              <div className="text-sm">{item.title}</div>
              <div className="text-sm text-slate-500">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-sm underline pt-1 text-green-800 hover:text-green-900 hover:font-semibold hover:cursor-pointer">
        See More
      </div>
    </div>
  );
}
