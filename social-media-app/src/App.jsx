import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Content from "./components/content/Content.jsx";
import RightSidebar from "./components/rightSidebar/RightSidebar.jsx";
import SearchAndFilter from "./components/navbar/SearchAndFilter.jsx";
import Logo from "./components/navbar/Logo.jsx";
import BecomeASellerBtn from "./components/navbar/BecomeASellerBtn.jsx";
import HorizontalCarousel from "./components/HorizontalCarousel/HorizontalCarousel.jsx";

function App() {
  return (
    <div className="flex  min-h-screen bg-gray-100 gap-7 w-full p-10">
      <div className="w-[260px] justify-end ">
        <Logo />
        <Sidebar />
      </div>
      <div className="w-[620px]">
        <SearchAndFilter />
        <Content />
        <HorizontalCarousel />
      </div>

      <div className="w-[260px]">
        <BecomeASellerBtn />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
