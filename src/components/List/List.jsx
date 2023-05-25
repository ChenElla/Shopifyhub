import channel_icon from "../../assets/images/ChannelsMajor.svg";
import topics_icon from "../../assets/icons/SocialPostMajor.svg";
import channel_header from "../../assets/icons/Channel.png";
import trend_icon from "../../assets/icons/Trending.png";
import plus_button from "../../assets/icons/CirclePlusMajor.svg";

import {
    channelArray,
    channelBrowse,
    trendingTopics,
} from "../../data/listArray";

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
    let initAvai = false;
    const colorArray = [
        "bg-blue-500",
        "bg-purple-500",
        "bg-green-500",
        "bg-red-500",
        "bg-black",
    ];
    switch (about) {
        case "channel":
        arr = channelArray;
        icon = channel_icon;
        header_icon = channel_header;
        break;
        case "channelB":
        arr = channelBrowse;
        icon = channel_icon;
        header_icon = channel_header;
        break;
        case "trend":
        arr = trendingTopics;
        icon = topics_icon;
        header_icon = trend_icon;
        break;
        default:
        arr = channelArray;
        icon = channel_icon;
    }
    return (
        <div className="list_column mb-2 ml-0 mr-0 box-border">
        <div className="flex flex-row justify-between items-center mb-2">
            <div className="flex flex-row justify-start items-center underline">
            <img className="w-5 h-5 mr-2" src={header_icon} alt="header_icon" />
            <div className="text-lg font-semibold">{header_context}</div>
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
                {initAvai ? (
                <div
                    className={`${colorArray[index]} w-8 h-8 mr-2 p-1 rounded-full text-white text-center font-semibold flex flex-row justify-center hover:cursor-pointer hover:border border-white`}
                >
                    <div className="m-auto">{item.inits}</div>
                </div>
                ) : (
                <img
                    className="w-7 h-7 mr-2 p-1 bg-slate-300 rounded-full"
                    src={icon}
                    alt="icon"
                />
                )}
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
