import { useState } from "react";
import { useEffect } from "react";

import user_icon from "../../assets/user_icons/sophie.png";
import youtube_icon from "../../assets/icons/youtube.png";
import instagram_icon from "../../assets/icons/instagram.png";
import twitter_icon from "../../assets/icons/twitter.png";
import channel_icon from "../../assets/icons/customer-service.png";
import photo_icon from "../../assets/icons/photo.png";
import pinterest_icon from "../../assets/icons/Pinterest.png";
import facebook_icon from "../../assets/icons/facebook.png";
import link_icon from "../../assets/icons/LinkMinor.svg";
import arrow_icon from "../../assets/icons/CircleDownMajor.svg";

import posts from "../../data/postArray";
import Post from "./Post/Post";
import { instructions } from "../../data/instructions";

import PropTypes from "prop-types";
PostList.propTypes = {
    type: PropTypes.string,
};

export default function PostList({ type }) {
    const postData = posts;
    const [postArray, setPostArray] = useState(postData);
    const [instructionOn, setInstructionOn] = useState(false);
    const instruction_text = instructions["Post Section"].split("\n");
    const submitHandler = (e) => {
        e.preventDefault();
        const newPost = {
        type: "POST",
        username: "Sophie",
        content_text: e.target.content_text.value,
        like: 0,
        comment: [],
        timestamp: Date.now(),
        };
        // if (newPost.type==="channel") newPost.title = "Women in Business";
        let newPostArray = [];
        postArray.forEach((post) => newPostArray.push(post));
        newPostArray.push(newPost);
        newPostArray = newPostArray.sort((a, b) => b.timestamp - a.timestamp);
        setPostArray(newPostArray);
    };
    useEffect(() => {
        if (type !== "all") {
        let newPostArray = postArray.filter((post) => post.type == type);
        setPostArray(newPostArray);
        }
        let newPostArray = postArray.sort((a, b) => b.timestamp - a.timestamp);
        setPostArray(newPostArray);
    }, [postArray, type]);

    return (
        <div className="overflow-y-auto h-screen flex flex-col box-border bg-slate-50 w-3/5 mr-0 ml-0 mb-4 pb-10 box-border ">
        <div className="italic text-white flex flex-start ml-0 mt-4 mb-4 pl-8 bg-gradient-to-r from-green-900 via-slate-200 to-green-900">
            {" "}
            <a
            className="mr-2 ml-2 hover:underline hover:cursor-pointer"
            href="https://accounts.shopify.com/"
            rel="noopener noreferrer"
            target="_blank"
            title ="Shopify Account"
            >
            Welcome to Shopify
            </a>
            {">"} <span className="underline ml-2"> Shopify Hub</span>
        </div>
        <div className="text-green-900 text-lg mb-2 pl-8 text-left">
            Welcome to{" "}
            <span
            className="text-black text-xl font-semibold underline italic relative hover:cursor-help"
            onMouseOver={() => setInstructionOn(true)}
            onMouseOut={() => setInstructionOn(false)}
            >
            Shopify Hub Post Section
            <img
                className={
                !instructionOn
                    ? "hidden"
                    : "z-20 absolute w-10 h-10 left-1/4 top-3 p-2 border-3 z-50 border-green-800 w-3/4 min-h-max -rotate-45"
                }
                src={arrow_icon}
                alt="arrow-icon"
            />
            <div
                className={
                !instructionOn
                    ? "hidden"
                    : "absolute not-italic font-normal text-sm normal-case bg-gradient-to-br from-slate-100/75 via-white to-slate-100/75 border-slate-50 border-2 rounded-sm left-1/4 top-8 p-2 border-3 z-10 border-green-800 w-3/4 min-h-max"
                }
            >
                {instruction_text.map((text, index) => (
                <div key={index} className="text-left">
                    {text}
                    <br />
                </div>
                ))}
            </div>
            </span>
            !
        </div>
        <form
            className="flex flex-col items-center w-9/10 bg-white box-border shadow-xl rounded-lg m-8 mb-0 mt-0 p-6 pb-3"
            onSubmit={submitHandler}
        >
            <div className="flex flex-row justify-between items-center box-border w-full">
            <img
                className="rounded-full w-14 h-14 mr-2 box-border bg-slate-300"
                src={user_icon}
                alt="user_icon"
            />
            <input
                className="rounded-sm border w-full box-border p-3 pt-1 pb-7 min-h-80"
                type="text"
                name="content_text"
                placeholder="Share what you have been up to!"
                required
            />
            </div>
            <div className="flex flex-row justify-between m-3 w-full">
            <fieldset className="flex flex-row justify-start w-4/5 flex-wrap">
                <div className="pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 click_function_not_implemented">
                <img className="w-6 h-6" src={photo_icon} alt="photo_icon" />
                <label className="text-1xl p-1">Photo</label>
                </div>
                <div className="pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 click_function_not_implemented">
                <img className="w-6 h-6" src={channel_icon} alt="channel_icon" />
                <label className="text-1xl p-1">
                    Channel
                </label>
                </div>
                <div className="pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 click_function_not_implemented">
                <img className="w-6 h-6" src={youtube_icon} alt="youtube_icon" />
                <label className="text-1xl p-1 click_function_not_implemented">
                    Youtube
                </label>
                </div>
                <div className="pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 click_function_not_implemented">
                <img
                    className="w-6 h-6"
                    src={instagram_icon}
                    alt="instagram_icon"
                />
                <label className="text-1xl p-1">
                    Instagram
                </label>
                </div>
                <div className="pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 click_function_not_implemented">
                <img className="w-6 h-6" src={twitter_icon} alt="twitter_icon" />
                <label className="text-1xl p-1">
                    Twitter
                </label>
                </div>
                <div className="pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 click_function_not_implemented">
                <img
                    className="w-6 h-6"
                    src={pinterest_icon}
                    alt="pinterest_icon"
                />
                <label className="text-1xl p-1">
                    Pinterest
                </label>
                </div>
                <div className="pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 click_function_not_implemented">
                <img
                    className="w-6 h-6"
                    src={facebook_icon}
                    alt="facebook_icon"
                />
                <label className="text-1xl p-1">
                    Facebook
                </label>
                </div>
                <div className="pr-2 pl-2 mr-1 flex flex-row justify-start items-center rounded-lg hover:bg-slate-200 click_function_not_implemented">
                <img className="w-6 h-6" src={link_icon} alt="link_icon" />
                <label className="text-1xl p-1">Link</label>
                </div>
            </fieldset>
            <button className="rounded-sm pl-4 pr-4 pt-1 pb-1 bg-green-700 h-10 uppercase text-white w-1/5 font-semibold hover:bg-green-900 hover:cursor-pointer ">
                Post
            </button>
            </div>
        </form>
        <div className="border-box w-9/10 mb-8">
            {postArray.map((post, index) => (
            <Post key={index} post={post} />
            ))}
        </div>
        </div>
    );
}
