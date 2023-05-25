import channel_icon from "../../assets/images/ChannelsMajor.svg";
import topics_icon from "../../assets/icons/SocialPostMajor.svg";
import channel_header from "../../assets/icons/Channel.png";
import trend_icon from "../../assets/icons/Trending.png";
import plus_button from "../../assets/icons/CirclePlusMajor.svg";
import arrow_icon from "../../assets/icons/CircleDownMajor.svg";
import { useState } from "react";

import {
  channelArray,
  channelBrowse,
  trendingTopics,
} from "../../data/listArray";

import {
  instructions
} from '../../data/instructions';

import PropTypes from "prop-types";
List.propTypes = {
  about: PropTypes.string,
  header_context: PropTypes.string,
  setChannel: PropTypes.func,
  setMain: PropTypes.func,
};
export default function List({ about, header_context, setChannel, setMain }) {
  let arr;
  let icon;
  let header_icon;
  let main;
  const [instructionOn, setInstructionOn] = useState(false);

  switch (about) {
    case "channel":
      arr = channelArray;
      icon = channel_icon;
      header_icon = channel_header;
      main = "channel";
      break;
    case "channelB":
      arr = channelBrowse;
      icon = channel_icon;
      header_icon = channel_header;
      main = "channel";
      break;
    case "trend":
      arr = trendingTopics;
      icon = topics_icon;
      header_icon = trend_icon;
      main = "posts";

      break;
    default:
      arr = channelArray;
      icon = channel_icon;
  }
  return (
    <div className="list_column mb-2 ml-0 mr-0 box-border">
      <div className="relative flex flex-row justify-between items-center mb-2">
        <div className="flex flex-row justify-start items-center underline">
          <img className="w-5 h-5 mr-2" src={header_icon} alt="header_icon" />
          <div
            className="text-lg font-semibold"
            onMouseOver={() => setInstructionOn(true)}
            onMouseOut={() => setInstructionOn(false)}
            alt="what does this column do?"
          >
            {header_context}
          </div>
        </div>
        <img
          className="w-6 h-6 hover:cursor-pointer hover:border-white rounded-full border-2"
          src={plus_button}
          alt="plus_button"
        />
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
              : "text-left absolute text-sm bg-gradient-to-br from-slate-100/75 via-white to-slate-100/75 border-slate-50 border-2 rounded-sm left-1/3 top-8 p-2 border-3 z-10 border-green-800 w-2/3 min-h-max"
          }
        >
          {instructions[`${header_context}`]}
        </div>
      </div>
      <div className="flex flex-col pr-2 pl-2">
        {arr.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-start items-center p-1 hover:bg-slate-200 cursor-pointer w-1/1"
            onClick={() => {
                setChannel(item.title);
                setMain(main);
            }}
          >
            <img
              className="w-7 h-7 mr-2 p-1 bg-slate-300 rounded-full"
              src={icon}
              alt="icon"
            />
            <div className="flex flex-col justify-start items-start">
              <div className="text-sm text-left">{item.title}</div>
              <div className="text-sm text-slate-500 text-left">{item.sub}</div>
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
