import { FC } from 'react';
import { FaWindowMinimize, FaWindowMaximize, FaTimes } from 'react-icons/fa';

const Navbar: FC = () => {
  return (
    <div className="bg-[#1E1E1E] text-white flex items-center justify-between px-4 h-10 shadow-md">
      {/* Menu Items */}
      <div className="hidden md:flex items-center space-x-4 ">
        <span className="cursor-pointer">File</span>
        <span className="cursor-pointer">Edit</span>
        <span className="cursor-pointer">View</span>
        <span className="cursor-pointer">Go</span>
        <span className="cursor-pointer">Run</span>
        <span className="cursor-pointer">Terminal</span>
        <span className="cursor-pointer">Help</span>
      </div>

      {/* Center Input */}
      <div className="flex flex-1 justify-center">
        <input
          className="bg-[#2D2D2D] text-white py-1 px-4 rounded-md outline-none text-center w-3/4 max-w-md "
          value="Christos Grigoriadis - Portfolio"
          readOnly
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        />
      </div>

      {/* Window Controls */}
      <div className="hidden md:flex items-center space-x-3 ">
      <div className="bg-[#4B4B4B] w-6 h-6 flex items-center justify-center rounded-full cursor-pointer">
          <FaWindowMinimize size={12} className="text-white" />
        </div>
        <div className="bg-[#4B4B4B] w-6 h-6 flex items-center justify-center rounded-full cursor-pointer">
          <FaWindowMaximize size={12} className="text-white" />
        </div>
        <div className="bg-[#CF6237] w-6 h-6 flex items-center justify-center rounded-full cursor-pointer">
          <FaTimes size={12} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
