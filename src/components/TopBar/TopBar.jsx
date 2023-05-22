import React from 'react'
import profile_icon from '../../assets/icons/ProfileMajor.svg';
import setting_icon from '../../assets/icons/SettingsMajor.svg';
import logout_icon from '../../assets/icons/LogOutMinor.svg';
import com_icon from '../../assets/icons/SocialPostMajor.svg';
import { useState } from 'react';
import logo from '../../assets/logo/Shopify-Logo.png';
import user_icon from '../../assets/icons/userIcon.avif';

export default function TopBar() {
    const [open, setOpen] = useState(false);
  return (
    <div className = "flex flex-row justify-between items-center w-full bg-green-900 shadow-xl text-white">
        <div className = "flex flex-row justify-start items-center p-4 pb-2">
            <img className = "w-16 h-10" src= {logo} alt="shopifyHub_logo"/>
            <span className= "italic text-2xl font-semibold">Shopify</span><span className = "italic text-2xl font-semibold underline decoration-yellow-400 text-orange-400">Hub</span>
        </div>
        <div className = "relative p-2 pr-4 flex flex-row justify-left items-center">
            <div className = "italic mr-2 font-semibold">
                Welcome to the Hub, <span className= "underline text-lg">Sara N.</span>
            </div>
            <img src = {user_icon} alt = "profile-icon" className = "rounded-full w-10 h-10 hover:cursor-pointer hover:border border-white" onClick = {()=>setOpen(!open)}/>
            <div className = {open?"flex flex-col justify-start shadow-xl absolute w-fit top-14 right-4 bg-white":"hidden"} >
                <div className = "flex flex-row justify-start items-center p-2 hover:bg-slate-200">
                    <img className = "w-7 h-7 pr-2" src = {profile_icon}/>
                    <div className = "text-slate-500">
                        Profile
                    </div>
                </div>
                <div className = "flex flex-row justify-start items-center p-2 hover:bg-slate-200">
                    <img className = "w-7 h-7 pr-2" src = {setting_icon}/>
                    <div className = "text-slate-500">
                        Settings
                    </div>
                </div>
                <hr/>
                <div className = "flex flex-row justify-start items-center w-max p-2 hover:bg-slate-200">
                    <img className = "w-7 h-7 pr-2" src = {com_icon}/>
                    <div className = "text-slate-500">
                        Shopify Community
                    </div>
                </div>
                <hr/>
                <div className = "flex flex-row justify-start items-center p-2 hover:bg-slate-200">
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
