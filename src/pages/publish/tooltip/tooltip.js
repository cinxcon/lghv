const TooltipMsg = ({ children, message }) => {
  return (
    <div className='tooltip-wrap'>
      {children}
      <div className="tooltip">{message}</div>
    </div>
  );
}

export default TooltipMsg;
