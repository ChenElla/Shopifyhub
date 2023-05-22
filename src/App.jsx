import './App.css'
import PostList from './components/PostList/PostList'
import TopBar from './components/TopBar/TopBar';
import './styling/global.scss';
import List from './components/List/List';
function App() {
  return (
    <div className = "relative">
      <TopBar/>
      <div className = "page_background w-full absolute top-0 right-0 h-screen"/>
      <div className = "flex flex-row justify-center w-full">
        <div className = "flex-1 column_background flex flex-col items-center ml-0 mr-0 p-4 w-1/5">
          <List header_context= "Your Channels" about = "channel"/>
          <hr className = "w-full h-px mt-2 mb-2 bg-black-800"/>
          <List header_context= "Browse Channels" about = "channelB"/>
          <hr className = "w-full h-px mt-2 mb-2 bg-black-800"/>
          <List header_context= "Private Messaging" about = "chat" />
        </div>
        <PostList type = "all"/>
        <div className = "flex flex-col flex-1 items-center ml-0 mr-0 p-4 column_background w-1/5">
          <List header_context= "Trending Topics" about = "trend" />
        </div>
      </div>
    </div>
  )
}

export default App
