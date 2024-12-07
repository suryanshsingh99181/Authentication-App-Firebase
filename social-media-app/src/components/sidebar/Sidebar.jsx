import homeIcon from "../../assets/home.svg";
import notificationsIcon from "../../assets/notification.svg";
import shopIcon from "../../assets/heart.svg";
import conversationIcon from "../../assets/message.svg";
import walletIcon from "../../assets/wallet.svg";
import subscriptionIcon from "../../assets/favorite.svg";
import myprofileIcon from "../../assets/profile.svg";
import settingIcon from "../../assets/setting.svg";
import logoutIcon from "../../assets/logout.svg";
import { auth } from "../authentication/firebase";

const Sidebar = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User Logged Out Successfully");
    } catch (error) {
      console.log("Error in Logging Out ", error.message);
    }
  };

  return (
    <div className="w-[260px] h-[707px] bg-white shadow-md mt-[30px] rounded-[10px]">
      <nav className="bg-white py-7 rounded-[10px] overflow-hidden ">
        <ul className=" bg-white border-l-[#88C2BB]">
          {/* space-y-4*/}
          <li className="flex px-9 py-2 items-center space-x-3 border-l-[4px] border-l-[#88C2BB] font-semibold bg-white cursor-pointer">
            <img src={homeIcon} alt="" className=" bg-white" />
            <span className="bg-white">Home</span>
          </li>
          <li className="flex px-9 py-2 items-center space-x-3 text-[#8D8D8D] bg-white border-l-[4px] border-transparent cursor-pointer hover:font-semibold hover:text-black hover:border-l-[4px] hover:border-l-[#88C2BB]">
            <img src={notificationsIcon} alt="" className="bg-white" />
            <span className="bg-white">Notifications</span>
          </li>
          <li className="flex px-9 py-2 items-center space-x-3 text-[#8D8D8D] bg-white cursor-pointer border-l-[4px] border-transparent over:font-semibold hover:text-black hover:border-l-[4px] hover:border-l-[#88C2BB]">
            <img src={shopIcon} alt="" className="bg-white" />
            <span className="bg-white">Shop</span>
          </li>
          <li className="flex px-9 py-2 items-center space-x-3 text-[#8D8D8D] bg-white cursor-pointer border-l-[4px] border-transparent over:font-semibold hover:text-black hover:border-l-[4px] hover:border-l-[#88C2BB]">
            <img src={conversationIcon} alt="" className="bg-white" />
            <span className="bg-white">Conversation</span>
          </li>
          <li className="flex px-9 py-2 items-center space-x-3 text-[#8D8D8D] bg-white cursor-pointer border-l-[4px] border-transparent over:font-semibold hover:text-black hover:border-l-[4px] hover:border-l-[#88C2BB]">
            <img src={walletIcon} alt="" className="bg-white" />
            <span className="bg-white">Wallet</span>
          </li>
          <li className="flex px-9 py-2 items-center space-x-3 text-[#8D8D8D] bg-white cursor-pointer border-l-[4px] border-transparent over:font-semibold hover:text-black hover:border-l-[4px] hover:border-l-[#88C2BB]">
            <img src={subscriptionIcon} alt="" className="bg-white" />
            <span className="bg-white">Subscription</span>
          </li>
          <li className="flex px-9 py-2 items-center space-x-3 text-[#8D8D8D] bg-white cursor-pointer border-l-[4px] border-transparent over:font-semibold hover:text-black hover:border-l-[4px] hover:border-l-[#88C2BB]">
            <img src={myprofileIcon} alt="" className="bg-white" />
            <span className="bg-white">My Profile</span>
          </li>
          <li className="flex px-9 py-2 items-center space-x-3 text-[#8D8D8D] bg-white cursor-pointer border-l-[4px] border-transparent over:font-semibold hover:text-black hover:border-l-[4px] hover:border-l-[#88C2BB]">
            <img src={settingIcon} alt="" className="bg-white" />
            <span className="bg-white">Settings</span>
          </li>
        </ul>
      </nav>
      <div className="space-y-4">
        <span className="bg-white flex p-2 items-center justify-center mt-[300px]">
          <img src={logoutIcon} alt="" className="bg-white p-1" />
          <button onClick={handleLogout} className="text-[#88c2bb] p-1 ">
            Log out
          </button>
        </span>
      </div>
      <div className="flex items-center justify-between pt-3">
        <span className="text-[#8d8d8d] text-[10px] font-gilroy text-nowrap">
          2022 © logo name
        </span>
        <span className="text-[#8d8d8d] text-[10px] font-gilroy text-nowrap">
          Developed by ian Infotech
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
