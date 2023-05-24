import "./App.css";
import PostList from "./components/PostList/PostList";
import TopBar from "./components/TopBar/TopBar";
import List from "./components/List/List";
import { useState } from "react";
import LiveSection from "./components/LiveSection/LiveSection";
import Channel from "./components/Channel/Channel";
import ChatList from "./components/ChatList/ChatList";
import "./styling/global.scss";

function App() {
  const [main, setMain] = useState("posts");
  const [channel, setChannel] = useState("Black Business Owners");
  const type = "all";
  return (
    <div className="relative">
      <TopBar setMain={setMain} />
      <div className="main_container flex flex-row justify-center w-full">
        <div className="overflow-y-auto h-screen min-h-screen column_background flex flex-col items-center box-border w-1/5 ml-2 mr-2 mt-4 pr-4 pl-4 pt-4 list_container ">
          <List
            header_context="Your Channels"
            about="channel"
            setChannel={setChannel}
            setMain={setMain}
          />
          <hr className="w-full mt-2 mb-2 breakline" />
          <List
            header_context="Browse Channels"
            about="channelB"
            setChannel={setChannel}
            setMain={setMain}
          />
          <hr className="w-full mt-2 mb-2 breakline" />
          <ChatList header_context="Inbox Messaging" />
        </div>
        {main == "posts" ? (
          <PostList type={type} />
        ) : (
          <Channel channel={channel} setMain={setMain} />
        )}
        <div className="overflow-y-auto h-screen flex pr-4 pl-4 pt-4 mt-4 list_container flex-col items-center justify-start ml-0 mr-0 w-1/5 column_background">
          <div className="w-full h-1/4">
            <List header_context="Trending Topics" about="trend" />
            <hr className="w-full mt-4 mb-4 breakline" />
          </div>
          <div className="w-full h-3/4">
            <LiveSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
