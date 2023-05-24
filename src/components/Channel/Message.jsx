import sp_icon from "../../assets/user_icons/sophie.png";
import PropTypes from "prop-types";
Message.propTypes = {
  message:PropTypes.string
};
export default function Message({message}) {
  return (
    <div className="flex flex-row m-2 justify-end">
      <div className=" text-white text-lg flex flex-col justify-start">
        <div className="p-2 pr-4 pl-4 bg-white text-lg rounded-lg text-black">
          {message}
        </div>
        <div className="text-sm text-slate-500 text-left">8:34 pm</div>
      </div>
      <img
        className="ml-4 w-10 h-10 rounded-full bg-white"
        src={sp_icon}
        alt="sophie_usericon"
      />
    </div>
  );
}
