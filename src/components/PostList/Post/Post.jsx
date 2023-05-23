import React from 'react'
import './Post.scss';
import youtube_image from '../../../assets/images/youtube_hero.webp';
import channel_image from '../../../assets/images/channels_icon.jpeg';
import like_icon from '../../../assets/icons/ThumbsUpMinor.svg';
import comment_icon from '../../../assets/icons/ConversationMinor.svg';
import share_icon from '../../../assets/icons/ShareMinor.svg';
import repost_icon from '../../../assets/icons/repost_icon.jpeg';
import instagram_image from '../../../assets/images/instagram_image.webp';
import { dateConverter } from '../../../functions/DateConverter';
import PropTypes from 'prop-types';
Post.propTypes = {
  post:PropTypes.object
};
export default function Post({post}) {
  let content;
  switch(post.type) {
    case "youtube":
      content = "a Youtube Video"
      break;
    case "instagram":
      content = "a post from Instagram "
      break;
    case "article":
      content = "an Article"
      break;
    case "channel":
      content = "a Channel"
      break;
    case "event":
      content = "an Event"
      break;
    case "link":
      content = "a Link"
      break;
    default:
      content = "a post"
      // code block
  }
  return (
    <div className = "items-center rounded-lg bg-white shadow-xl box-border p-4 m-8">
        <div className = "relative flex justify-between p-2 pb-0 text-slate-500 text-sm">
          <div>
            <span className = "underline text-slate-600 pr-1">{post.username}</span> shared {content}
          </div>
          {post.type=="channel"&&<div className= "absolute top-10 left-2 p-2 shadow-sm bg-green-900/50 text-white font-semibold rounded-lg text-sm hover:cursor-pointer hover:bg-green-900">
            Tap to Join Channel
          </div>}
          <div>
            {dateConverter(post.timestamp)}
          </div>
        </div>
        <div className = "p-2 flex flex-row justify-between w-full">
          {((post.type=="channel"||post.type=="youtube"||post.type=="instagram"))&&<div className = "flex flex-col items-center w-1/5">
            {post.type=='youtube'&&
            <img className = "pt-2 w-1/1 hover:cursor-pointer" src = {youtube_image} alt="Youtube_image"/>}
            {post.type=='channel'&&
            <img className = "pt-2 w-1/1" src = {channel_image} alt="Channel_image"/>
            }
            {post.type=='instagram'&&
            <img className = "pt-2 w-1/1" src = {instagram_image} alt="Instagram_image"/>
            }
            {post.type=='channel'&&<div className = "text-sm font-semibold italic">
              {post.title}
            </div>}
          </div>}
          <div className = {(post.type=="channel"||post.type=="youtube"||post.type=="instagram")?"text-base text-left pl-6 w-4/5":"text-base text-left w-4/5"}>
            {post.content_text}
          </div>
        </div>
        <hr/>
        <div className = "flex flex-row justify-between items-center pt-2">
          <div className = "flex flex-row items-center justify-start rounded-lg pl-2 pr-2 hover:bg-slate-200 cursor-pointer">
            <img className = "w-4 box-border mr-2" src= {like_icon} alt= "like_icon"/>
            <div>{post.like}</div>
          </div>
          <div className = "flex flex-row items-center justify-start rounded-lg pl-2 pr-2 hover:bg-slate-200 cursor-pointer">
            <img className = "w-4 box-border mr-2" src= {comment_icon} alt= "comment_icon"/>
            <div>Comment</div>
          </div>
          <div className = "flex flex-row items-center justify-start rounded-lg pl-2 pr-2 hover:bg-slate-200 cursor-pointer">
            <img className = "w-4 box-border mr-2" src= {share_icon} alt= "share_icon"/>
            <div>Share</div>
          </div>
          <div className = "flex flex-row items-center justify-start rounded-lg pl-2 pr-2 hover:bg-slate-200 cursor-pointer">
            <img className = "w-4 box-border mr-2" src= {repost_icon} alt= "repost_icon"/>
            <div>Repost</div>
          </div>
        </div>
    </div>
  )
}
