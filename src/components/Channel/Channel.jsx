import PropTypes from 'prop-types';
Channel.propTypes = {
    channel:PropTypes.string
};
export default function Channel({channel}) {
  return (
    <div className = "overflow-y-auto h-screen flex flex-col box-border bg-slate-50 w-3/5 mr-0 ml-0 mb-4 pb-10 box-border " >
           {channel}
    </div>
  )
}
