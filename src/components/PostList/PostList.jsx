import React from 'react'
import { useState } from 'react';
import user_icon from '../../assets/icons/userIcon.avif';

import posts from '../../data/postArray';
import Post from './Post/Post';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
PostList.propTypes = {
  type:PropTypes.string
}
export default function PostList({type}) {
    const postData = posts;
    const [postArray, setPostArray] = useState(postData);
    useEffect(()=>{
        if (type !== 'all'){
            let newPostArray = postArray.filter((post) => post.type == type);
            setPostArray(newPostArray);
        }
    },[type])
    
    return (
        <div className = "overflow-y-auto h-screen flex flex-col box-border bg-slate-50 w-3/5 mr-0 ml-0 mb-4 pb-10 box-border " >
            <form className = "flex flex-col items-center w-9/10 bg-white box-border shadow-xl rounded-lg m-8 mb-0 p-6 pb-3">
                <div className = "flex flex-row justify-between items-center box-border w-full">
                    <img className = "rounded-full w-15 h-10 pr-2 box-border" src= {user_icon} alt= "user_icon"/>
                    <input className= "rounded-sx border w-full box-border p-3 min-h-80" type = "text" name = "content_text" placeholder = "Share with the Hub"/>
                </div>
                <div className = "flex flex-row justify-between m-3 w-full">
                    <fieldset className = "flex flex-row w-4/5">
                        <div className = "pr-2">
                            <input type="radio" id="youtube" name="type" value="youtube" />
                            <label htmlFor="youtube" className= "text-1xl p-1">Youtube</label>
                        </div>
                        <div className = "pr-2">
                            <input type="radio" id="instagram" name="type" value="instagram" />
                            <label htmlFor="instagram" className= "text-1xl p-1">Instagram</label>
                        </div>
                        <div className = "pr-2">
                            <input type="radio" id="channel" name="type" value="channel" />
                            <label htmlFor="channel" className= "text-1xl p-1">Channel</label>
                        </div>
                        <div className = "pr-2">
                            <input type="radio" id="event" name="type" value="event" />
                            <label htmlFor="event" className= "text-1xl p-1">Event</label>
                        </div>
                        <div className = "pr-2">
                            <input type="radio" id="link" name="type" value="link" />
                            <label htmlFor="link" className= "text-1xl p-1">Link</label>
                        </div>
                    </fieldset>
                    <div className = "rounded-full pl-2 pr-2 pt-1 pb-1 bg-green-700 uppercase text-white w-1/6 hover:bg-green-900 hover:cursor-pointer ">
                        Post
                    </div>
                </div>
            </form>
            <div className = "border-box w-9/10">
                {postArray.map((post,index) => <Post key = {index} post = {post}/>)} 
            </div>
            <div>
                End of the Page
            </div>
        </div>
    )
}
