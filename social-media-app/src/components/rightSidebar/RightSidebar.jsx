import pp1 from "../../assets/pp1.png";
import pp2 from "../../assets/pp2.png";
import pp3 from "../../assets/pp3.png";
import pp4 from "../../assets/pp4.png";
import bg1 from "../../assets/1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import bg4 from "../../assets/bg4.png";
import bg5 from "../../assets/bg5.png";
import ArtistCard from "./ArtistCard";

const RightSidebar = () => {
  const artists = [
    {
      name: "Thomas Edward",
      handle: "@thewildartsyou",
      profileImage: pp1,
      bgImage: bg1,
    },
    {
      name: "Chris Doe",
      handle: "@thewildartsyou",
      profileImage: pp2,
      bgImage: bg2,
    },
    {
      name: "Emilie Jones",
      handle: "@thewildartsyou",
      profileImage: pp3,
      bgImage: bg3,
    },
    {
      name: "Jessica Williams",
      handle: "@thewildartsyou",
      profileImage: pp4,
      bgImage: bg4,
    },
    {
      name: "Jessica Williams",
      handle: "@thewildartsyou",
      profileImage: pp4,
      bgImage: bg5,
    },
  ];

  return (
    <>
      <div className="w-[260px] bg-white p-6 shadow-md mt-[30px] rounded-[10px]">
        <div>
          <div className="mb-4 bg-white">
            <span className="px-1 bg-white font-semibold">Artists</span>
            <span className="px-1 bg-white">Photographers</span>
          </div>
          <div className="h-[600px] overflow-y-scroll no-scrollbar space-y-4 bg-white overflow-hidden ">
            {artists.map((artist, index) => (
              <ArtistCard
                key={index}
                backgroundImage={artist.bgImage}
                profileImage={artist.profileImage}
                name={artist.name}
                handle={artist.handle}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 pl-2 pr-2">
        <span className="text-[#8d8d8d] text-[10px] font-gilroy text-nowrap">
          Privacy
        </span>
        <span className="text-[#8d8d8d] text-[10px] font-gilroy text-nowrap">
          Terms of Service
        </span>
        <span className="text-[#8d8d8d] text-[10px] font-gilroy text-nowrap">
          Cookie Notice
        </span>
      </div>
    </>
  );
};

export default RightSidebar;
