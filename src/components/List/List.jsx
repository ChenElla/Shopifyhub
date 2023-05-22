import channel_icon from '../../assets/images/ChannelsMajor.svg';
import chat_icon from '../../assets/icons/ConversationMinor.svg';
import topics_icon from '../../assets/icons/SocialPostMajor.svg';
import {channelArray, channelBrowse, privateList, trendingTopics} from '../../data/listArray';
import PropTypes from 'prop-types';
List.propTypes = {
    about:PropTypes.string,
    header_context:PropTypes.string
};
export default function List({about,header_context}) {
    let arr;
    let icon;
    switch(about){
        case "channel":
            arr = channelArray;
            icon=channel_icon;
            break;
        case "channelB":
            arr = channelBrowse;
            icon=channel_icon;
            break;
        case "chat":
            arr = privateList;
            icon=chat_icon;
            break;
        case "trend":
            arr = trendingTopics;
            icon=topics_icon;
            break;
        default:
            arr = channelArray;
            icon=channel_icon;
    }
    return (
        <div className = "w-1/1 ml-0 mr-0 box-border">
            <div className = "mb-2 text-lg font-semibold">
                {header_context}
            </div>
            <div className = "flex flex-col pr-2 pl-2">
            {arr.map((item,index) => (
                    <div key = {index} className = "flex flex-row justify-start p-1 hover:bg-slate-200 cursor-pointer">
                        <img className = "w-5 h-5 mr-2" src = {icon} alt = "icon"/>
                        <div className = "text-sm">
                            {item}
                        </div>
                    </div>
            ))
            }
            </div>
        </div>

  )
}
