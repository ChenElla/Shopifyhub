import sp_icon from '../../assets/user_icons/sophie.png';
import PropTypes from "prop-types";
LiveMessage.propTypes = {
  message:PropTypes.string
};
export default function LiveMessage({message}) {
  return (
    <div className="flex flex-col justify-start bg-white rounded-sm m-2">
              <div className="flex flex-row justify-between items-center p-3">
                <div className="flex flex-row justify-start items-center">
                  <img
                    className="w-8 h-8 rounded-full bg-black mr-1"
                    src={sp_icon}
                    alt="spohie_usericon"
                  />
                  <div className="text-black">Me</div>
                </div>
                <div className="text-slate-500 text-sm">8:34 pm</div>
              </div>
              <div className="text-left ml-5 mb-2 text-black font-normal">
                {message}
              </div>
    </div>
  )
}
