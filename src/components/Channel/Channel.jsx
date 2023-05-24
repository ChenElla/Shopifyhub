import PropTypes from "prop-types";
Channel.propTypes = {
  channel: PropTypes.string,
  setMain:PropTypes.func
};
import { useState } from "react";
import back_icon from "../../assets/icons/ArrowLeftMinor.svg";
import ab_icon from "../../assets/user_icons/abhijeet.jpg";
import cs_icon from "../../assets/icons/CustomerPlusMajor.svg";
import cd_icon from "../../assets/icons/CircleDownMajor.svg";
import sound_icon from "../../assets/icons/SoundMajor.svg";
import hashtag_icon from "../../assets/icons/HashtagMajor.svg";
import sr_icon from "../../assets/user_icons/sara.jpg";
import rc_icon from "../../assets/user_icons/rachel.jpg";
import ml_icon from "../../assets/user_icons/melissa.png";
import Message from "./Message";

export default function Channel({ channel, setMain}) {
//   const [user, setUser] = useState("Abhijeet");
    const [sub, setSub] = useState("general");
    const [userMessage, setUserMessage] = useState([]);
    const submitHandler= (e)=>{
        e.preventDefault();
        let newUserMessage = [];
        userMessage.forEach(message=>newUserMessage.push(message));
        newUserMessage.push(e.target.message_input.value);
        setUserMessage(newUserMessage);
    }
  return (
    <div className="flex flex-row box-border bg-slate-50 w-3/5 mb-4 pb-10 box-border ">
      <div className="column w-1/3 h-screen bg-bage-50 shadow-lg box-border flex flex-col">
        <div className="flex flex-row justify-start items-center mt-3 w-fit pr-2 pl-2 hover:cursor-pointer hover:bg-slate-300" onClick = {()=>setMain("posts")}>
          <img className="w-3 h-3 mr-2" src={back_icon} alt="back_icon" />
          <div className="text-sm">Back to Main</div>
        </div>
        <hr className = "breakline bg-slate-300 w-full "/>
        <div className="text-left pl-4 pt-2 pb-2 text-black text-xl italic bg-gradient-to-r from-slate-50 to-slate-100 shadow-sm">
          {channel}
        </div>
        <hr className = "breakline bg-slate-300 w-full mb-3"/>
        <div className="flex flex-col mb-2 pl-2">
          <div className="flex flex-row items-center underline pl-1">
            <img className="w-4 h-4 pr-2" src={cd_icon} alt="expand"></img>
            <div className="uppercase text-sm">Text Channels</div>
          </div>
          <div className="p-2 pt-1 pb-1 flex flex-row justify-between hover:bg-slate-400 hover:text-white hover:cursor-pointer" onClick = {()=>setSub("general")}>
            <div className="flex flex-row items-center">
              <img className="h-4 w-4 mr-1" src={hashtag_icon} alt="hash_tag" />
              <div>general</div>
            </div>
            <img className="w-5 h-5 " src={cs_icon} alt="add_icon" />
          </div>
          <div className="p-2 pt-1 pb-1 flex flex-row justify-between hover:bg-slate-400 hover:text-white hover:cursor-pointer" onClick = {()=>setSub("marketing tips")}>
            <div className="flex flex-row items-center">
              <img className="h-4 w-4 mr-1" src={hashtag_icon} alt="hash_tag" />
              <div>marketing tips</div>
            </div>
            <img className="w-5 h-5 " src={cs_icon} alt="add_icon" />
          </div>
        </div>
        <hr className="breakline mb-3" />
        <div className="flex flex-col pl-2">
          <div className="flex flex-row items-center underline pl-1">
            <img className="w-4 h-4 pr-2" src={cd_icon} alt="expand"></img>
            <div className="uppercase text-sm">Voice Channels</div>
          </div>
          <div className="p-2 pt-1 pb-1 flex flex-row justify-between hover:bg-slate-400 hover:text-white hover:cursor-pointer">
            <div className="flex flex-row items-center">
              <img className="h-4 w-4 mr-1" src={sound_icon} alt="sound_icon" />
              <div>general</div>
            </div>
          </div>
          <div className="p-2 pt-1 pb-1 flex flex-row justify-between hover:bg-slate-400 hover:text-white hover:cursor-pointer">
            <div className="flex flex-row items-center">
              <img className="h-4 w-4 mr-1" src={sound_icon} alt="sound_icon" />
              <div>casual talks</div>
            </div>
          </div>
          <div className="p-2 pt-1 pb-1 flex flex-row justify-between hover:bg-slate-400 hover:text-white hover:cursor-pointer">
            <div className="flex flex-row items-center">
              <img className="h-4 w-4 mr-1" src={sound_icon} alt="sound_icon" />
              <div>conference</div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
      <div className="relative chatWindow w-2/3 bg-slate-50 shadow-lg box-border h-1/1">
        <div className="flex flex-row justify-start bg-gradient-to-r from-bage-50 to-white items-center p-2 box-border">
          {/* <img className = "w-10 h-10 rounded-full bg-white" src={ab_icon} alt = "abhijeet_usericon"/>
                <div className = "ml-2 text-white text-lg">
                    {user} <span className = "text-slate-200">- active</span>
                </div> */}
          <div className="ml-2 text-slate-800 flex flex-row items-center"><img className="h-4 w-4 mr-1" src={hashtag_icon} alt="hash_tag" />
              <div>{sub}</div> 
            </div>
        
        </div>
        <hr className = "breakline bg-slate-300 w-full"/>
        <div className="p-4 flex flex-col justify-start mb-0 h-full box-border w-1/1 bg-gradient-to-br from-slate-100 to-bage-50">
          <div className="flex flex-row m-2">
            <img
              className="w-10 h-10 rounded-full bg-white"
              src={ab_icon}
              alt="abhijeet_usericon"
            />
            <div className="ml-4 text-white text-lg flex flex-col justify-start">
              <div className="p-2 pr-4 pl-4 bg-white text-lg rounded-lg text-black">
                Hi!
              </div>
              <div className="text-sm text-slate-500 text-left">8:30 pm</div>
            </div>
          </div>
          <div className="flex flex-row m-2">
            <img
              className="w-10 h-10 rounded-full bg-white"
              src={rc_icon}
              alt="rachel_usericon"
            />
            <div className="ml-4 text-white text-lg flex flex-col justify-start">
              <div className="p-2 pr-4 pl-4 bg-white text-lg rounded-lg text-black">
                Hello, I heard there is a conference today so I joined.
              </div>
              <div className="text-sm text-slate-500 text-left">8:31 pm</div>
            </div>
          </div>
          <div className="flex flex-row m-2">
            <img
              className="w-10 h-10 rounded-full bg-white"
              src={ml_icon}
              alt="melissa_usericon"
            />
            <div className="ml-4 text-white text-lg flex flex-col justify-start">
              <div className="p-2 pr-4 pl-4 bg-white text-lg rounded-lg text-black">
                Good morning, everyone!
              </div>
              <div className="text-sm text-slate-500 text-left">8:31 pm</div>
            </div>
          </div>
          <div className="flex flex-row m-2">
            <img
              className="w-10 h-10 rounded-full bg-white"
              src={sr_icon}
              alt="sara_usericon"
            />
            <div className="ml-4 text-white text-lg flex flex-col justify-start">
              <div className="p-2 pr-4 pl-4 bg-white text-lg rounded-lg text-black">
                Hi team! How are you doing today?
              </div>
              <div className="text-sm text-slate-500 text-left">8:33 pm</div>
            </div>
          </div>
          {userMessage.map((message,index)=><Message key = {index} message={message}/>)}
        </div>
        <form onSubmit = {submitHandler} className="flex flex-row justify-start w-full box-border absolute bottom-20 right-0">
          <input
            className="w-4/5 pl-5 pr-2 text-left box-border rounded-sm"
            placeholder="Type your message here"
            name = "message_input"

          />
          <button className="h-10 pr-3 w-1/5 pl-3 box-border text-normal text-white bg-green-800 rounded-sm hover:cursor-pointer hover:bg-green-900" >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
