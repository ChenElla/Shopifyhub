import { useState } from 'react';
import user_icon from '../../assets/user_icons/sophie.png';
import youtube_icon from '../../assets/icons/youtube.png';
import instagram_icon from '../../assets/icons/instagram.png';
import twitter_icon from '../../assets/icons/twitter.png';
import channel_icon from '../../assets/icons/customer-service.png';
import photo_icon from '../../assets/icons/photo.png';
import pinterest_icon from '../../assets/icons/Pinterest.png';
import facebook_icon from '../../assets/icons/facebook.png';
import link_icon from '../../assets/icons/LinkMinor.svg';
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
    const submitHandler = (e)=>{
        e.preventDefault();
        const newPost = {
            type:"POST",
            username:"Sophie",
            content_text:e.target.content_text.value,
            like:0,
            comment:[
            ],
            timestamp:Date.now()
        };
        // if (newPost.type==="channel") newPost.title = "Women in Business";
        let newPostArray = [];
        postArray.forEach((post)=>newPostArray.push(post));
        newPostArray.push(newPost);
        newPostArray = newPostArray.sort((a,b)=>b.timestamp-a.timestamp);
        setPostArray(newPostArray);
    }
    useEffect(()=>{
        if (type !== 'all'){
            let newPostArray = postArray.filter((post) => post.type == type);
            setPostArray(newPostArray);
        }
        let newPostArray = postArray.sort((a,b)=>b.timestamp-a.timestamp);
        setPostArray(newPostArray);
    },[postArray,type])
    
    return (
        <div className = "overflow-y-auto h-screen flex flex-col box-border bg-slate-50 w-3/5 mr-0 ml-0 mb-4 pb-10 box-border " >
            {/* <div className = "flex flex-row justify-start items-center mt-4 w-fit pr-2 pl-2 hover:cursor-pointer hover:bg-slate-300"><img className= "w-6 h-6 mr-2" src={back_icon} alt="back_icon"/><div className= "text-lg">Back</div></div> */}
            <div className = "italic text-white flex flex-start ml-0 mt-4 mb-4 pl-8 bg-gradient-to-r from-green-900 via-slate-200 to-green-900">  <a className = "mr-2 ml-2 hover:underline hover:cursor-pointer" href="https://account.shopify.com">Welcome to Shopify</a> {">"} <span className = "underline ml-2" > ShopifyHub</span></div>
            <form className = "flex flex-col items-center w-9/10 bg-white box-border shadow-xl rounded-lg m-8 mb-0 mt-0 p-6 pb-3" onSubmit= {submitHandler}>
                <div className = "flex flex-row justify-between items-center box-border w-full">
                    <img className = "rounded-full w-14 h-14 mr-2 box-border bg-slate-300" src= {user_icon} alt= "user_icon"/>
                    <input className= "rounded-sx border w-full box-border p-3 pt-1 pb-7 min-h-80" type = "text" name = "content_text" placeholder = "Share what you have been up to!" required/>
                </div>
                <div className = "flex flex-row justify-between m-3 w-full">
                    <fieldset className = "flex flex-row justify-start w-4/5 flex-wrap ">
                        <div className = "pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 hover:cursor-pointer">
                            <img className = "w-6 h-6" src={photo_icon} alt="photo_icon" />
                            <label className= "text-1xl p-1 hover:cursor-pointer">Photo</label>
                        </div>
                        <div className = "pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 hover:cursor-pointer">
                            <img className = "w-6 h-6" src={channel_icon} alt="channel_icon" />
                            <label className= "text-1xl p-1 hover:cursor-pointer">Channel</label>
                        </div>
                        <div className = "pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 hover:cursor-pointer">
                            <img className = "w-6 h-6" src={youtube_icon} alt="youtube_icon" />
                            <label className= "text-1xl p-1 hover:cursor-pointer">Youtube</label>
                        </div>
                        <div className = "pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:cursor-pointer hover:bg-slate-200 ">
                            <img className = "w-6 h-6" src={instagram_icon} alt="instagram_icon" />
                            <label className= "text-1xl p-1 hover:cursor-pointer">Instagram</label>
                        </div>
                        <div className = "pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 hover:cursor-pointer">
                            <img className = "w-6 h-6" src={twitter_icon} alt="twitter_icon" />
                            <label className= "text-1xl p-1 hover:cursor-pointer">Twitter</label>
                        </div>
                        <div className = "pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 hover:cursor-pointer">
                            <img className = "w-6 h-6" src={pinterest_icon} alt="pinterest_icon" />
                            <label className= "text-1xl p-1 hover:cursor-pointer">Pinterest</label>
                        </div>
                        <div className = "pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 hover:cursor-pointer">
                            <img className = "w-6 h-6" src={facebook_icon} alt="facebook_icon" />
                            <label className= "text-1xl p-1 hover:cursor-pointer">Facebook</label>
                        </div>
                        <div className = "pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 hover:cursor-pointer">
                            <img className = "w-6 h-6" src={link_icon} alt="link_icon" />
                            <label className= "text-1xl p-1 hover:cursor-pointer">Link</label>
                        </div>
                        {/* <div className = "pr-2">
                            <input type="radio" id="event" name="type" value="event" />
                            <label htmlFor="event" className= "text-1xl p-1">Event</label>
                        </div>
                        <div className = "pr-2">
                            <input type="radio" id="link" name="type" value="link" />
                            <label htmlFor="link" className= "text-1xl p-1">Link</label>
                        </div> */}
                    </fieldset>
                    <button className = "rounded-sm pl-4 pr-4 pt-1 pb-1 bg-green-700 h-10 uppercase text-white w-1/5 font-semibold hover:bg-green-900 hover:cursor-pointer ">
                        Post
                    </button>
                </div>
            </form>
            <div className = "border-box w-9/10 mb-8">
                {postArray.map((post,index) => <Post key = {index} post = {post}/>)} 
            </div>
        </div>
    )
}
