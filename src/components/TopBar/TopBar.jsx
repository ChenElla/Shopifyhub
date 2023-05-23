import React from 'react'
import profile_icon from '../../assets/icons/ProfileMajor.svg';
import setting_icon from '../../assets/icons/SettingsMajor.svg';
import logout_icon from '../../assets/icons/LogOutMinor.svg';
import com_icon from '../../assets/icons/SocialPostMajor.svg';
import { useState } from 'react';
import logo from '../../assets/logo/Shopify-Logo.png';
import user_icon from '../../assets/user_icons/sophie.png';
import PropTypes from 'prop-types';
TopBar.propTypes = {
  setMain:PropTypes.func
}
export default function TopBar({setMain}) {
    const [open, setOpen] = useState(false);
  return (
    <div className = "flex flex-row justify-between items-baseline w-full bg-green-900 shadow-xl text-white">
        <div className = "flex flex-row justify-start items-center p-4 pb-2 hover:cursor-pointer" onClick = {()=>setMain('posts')}>
            <img className = "w-14 h-8" src= {logo} alt="shopifyHub_logo"/>
            <span className= "italic text-4xl font-semibold">Shopify</span><span className = "italic text-4xl font-semibold underline decoration-yellow-400 text-orange-400">Hub</span>
        </div>
        <div className = "flex flex-row items-baseline text-white text-lg justify-between w-1/2">
            <a className = "hover:underline" href="https://apps.shopify.com/">My Shopify Store</a>
            <a className = "hover:underline" href="https://community.shopify.com/c/shopify-community/ct-p/en">Shopify Community</a>
            <a className = "hover:underline" href="https://academy.shopify.com/">Shopify Academy</a>
            <a className = "hover:underline" href="https://www.shopify.com/learn">Shopify Learn</a>
        </div>
        <div className = "relative p-2 pr-4 flex flex-row justify-left items-center">
            <div className = "italic mr-2 font-semibold">
                Welcome to the Hub, <span className= "underline text-lg">Sophie</span>
            </div>
            {/* <img src = {user_icon} alt = "profile-icon" className = "rounded-full w-10 h-10 hover:cursor-pointer hover:border border-white" onClick = {()=>setOpen(!open)}/> */}
            <div className = "w-10 h-10 rounded-full text-white text-center bg-orange-500 font-semibold flex flex-row justify-center hover:cursor-pointer hover:border border-white" onClick = {()=>setOpen(!open)}>
                <div className ="m-auto" >SM</div>
            </div>
            <div className = {open?"flex flex-col justify-start shadow-xl absolute w-fit top-14 right-4 bg-white":"hidden"} >
                <div className = "flex flex-row justify-start items-center p-2 hover:bg-slate-200 hover:cursor-pointer">
                    <img className = "w-7 h-7 pr-2" src = {profile_icon}/>
                    <div className = "text-slate-500">
                        Profile
                    </div>
                </div>
                <div className = "flex flex-row justify-start items-center p-2 hover:bg-slate-200 hover:cursor-pointer">
                    <img className = "w-7 h-7 pr-2" src = {setting_icon}/>
                    <div className = "text-slate-500">
                        Settings
                    </div>
                </div>
                <hr/>
                {/* <div className = "flex flex-row justify-start items-center w-max p-2 hover:bg-slate-200 hover:cursor-pointer">
                    <img className = "w-7 h-7 pr-2" src = {com_icon}/>
                    <div className = "text-slate-500">
                        Shopify Community
                    </div>
                </div> */}
                <hr/>
                <div className = "flex flex-row justify-start items-center p-2 hover:bg-slate-200 hover:cursor-pointer">
                    <img className = "w-7 h-7 pr-2" src = {logout_icon}/>
                    <div className = "text-slate-500">
                        Log Out
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
