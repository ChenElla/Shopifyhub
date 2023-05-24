import './App.css'
import PostList from './components/PostList/PostList'
import TopBar from './components/TopBar/TopBar';
import './styling/global.scss';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LiveSection from './components/LiveSection/LiveSection';
import Channel from './components/Channel/Channel';
import ChatList from './components/ChatList/ChatList';
function App() {
  const [main,setMain] = useState("posts");
  const [channel,setChannel] = useState('Black Business Owners');
  const type = "all";
  return (
    <div className = "relative">
      <TopBar setMain = {setMain}/>
      <div className = "page_background w-full absolute top-0 right-0 h-screen"/>
      <div className = "flex flex-row justify-center w-full">
        <div className = "overflow-y-auto h-screen mb-10 pb-10 flex-1 column_background flex flex-col items-center w-1/5 ml-0 mr-0 p-4 ">
          <List header_context= "Your Channels" about = "channel" setChannel = {setChannel} setMain = {setMain}/>
          <hr className = "w-full mt-2 mb-2 breakline"/>
          <List header_context= "Browse Channels" about = "channelB" setChannel = {setChannel} setMain = {setMain}/>
          <hr className = "w-full mt-2 mb-2 breakline"/>
          <ChatList header_context= "Inbox Messaging" />
        </div>
        {main == "posts"?(<PostList type = {type}/>):(<Channel channel = {channel} setMain = {setMain}/>)}
        <div className = "flex flex-col flex-1 items-center ml-0 mr-0 p-4 w-1/5 column_background">
          <List header_context= "Trending Topics" about = "trend"/>
          <hr className = "w-full mt-2 mb-2 breakline"/>
          <LiveSection/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
