import profile_icon from "../../assets/icons/ProfileMajor.svg";
import setting_icon from "../../assets/icons/SettingsMajor.svg";
import logout_icon from "../../assets/icons/LogOutMinor.svg";
import { useState } from "react";
import logo from "../../assets/logo/shopify_logo_darkbg.svg";
import user_icon from "../../assets/user_icons/sophie.png";
import back_icon from "../../assets/icons/CircleLeftMajor.svg";

import PropTypes from "prop-types";
TopBar.propTypes = {
    setMain: PropTypes.func,
};

export default function TopBar({ setMain }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="absolute top-0 flex flex-row justify-between items-baseline w-full bg-green-900 shadow-xl text-white">
        <div
            className="flex flex-row justify-start items-center p-4 hover:cursor-pointer"
            onClick={() => setMain("posts")}
        >
            <a href="https://community.shopify.com/c/shopify-community/ct-p/en" rel="noopener noreferrer" target="_blank">
            <img
                className="w-6 h-6 brightness-200 hover:brightness-0 mr-3"
                src={back_icon}
                alt="back_to_community"
            />
            </a>
            <div className="flex flex-row items-center justify-start">
            <img className="h-12" src={logo} alt="shopifyHub_logo" />
            <span className="italic text-4xl font-thin text-white">hub</span>
            </div>
        </div>
        <div className="flex flex-row items-center text-white text-base justify-between w-1/2">
            <a className="hover:underline" href="https://apps.shopify.com/" rel="noopener noreferrer" target="_blank">
            My Shopify Store
            </a>
            <a
                className="hover:underline"
                href="https://community.shopify.com/c/shopify-community/ct-p/en"
                rel="noopener noreferrer" 
                target="_blank"
            >
            Shopify Community
            </a>
            <a className="hover:underline" href="https://academy.shopify.com/" rel="noopener noreferrer" target="_blank">
            Shopify Academy
            </a>
            <a className="hover:underline" href="https://www.shopify.com/learn" rel="noopener noreferrer" target="_blank">
            Shopify Learn
            </a>
        </div>
        <div className="relative p-2 pr-4 flex flex-row justify-left items-center">
            <div className="italic mr-2 font-semibold text-base">
            Welcome to the Hub, <span className="underline text-lg">Sophie</span>
            </div>
            <img
            src={user_icon}
            alt="profile-icon"
            className="rounded-full bg-white w-10 h-10 hover:cursor-pointer hover:border border-white"
            onClick={() => setOpen(!open)}
            />
            <div
            className={
                open
                ? "flex flex-col justify-start shadow-xl absolute w-fit top-14 right-4 bg-white"
                : "hidden"
            }
            >
            <div className="flex flex-row justify-start items-center p-2 hover:bg-slate-200 hover:cursor-pointer">
                <img className="w-7 h-7 pr-2" src={profile_icon} />
                <div className="text-slate-500">Profile</div>
            </div>
            <div className="flex flex-row justify-start items-center p-2 hover:bg-slate-200 hover:cursor-pointer">
                <img className="w-7 h-7 pr-2" src={setting_icon} />
                <div className="text-slate-500">Settings</div>
            </div>
            <hr />
            <hr />
            <div className="flex flex-row justify-start items-center p-2 hover:bg-slate-200 hover:cursor-pointer">
                <img className="w-7 h-7 pr-2" src={logout_icon} />
                <div className="text-slate-500">Log Out</div>
            </div>
            </div>
        </div>
        </div>
    );
}
