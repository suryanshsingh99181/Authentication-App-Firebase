const ArtistCard = ({ backgroundImage, profileImage, name, handle }) => {
  return (
    <div
      className="relative bg-cover bg-center rounded-[10px]  w-full h-[150px] p-4 text-white bg-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute bottom-2 rounded-[10px] left-4 flex items-center">
        <div className="relative rounded-[10px]">
          <img
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 rounded-[10px] border-2 border-white bg-white"
          />
          <div className="absolute w-3 h-3 bg-green-500 border-2 border-white rounded-full -top-[2px] -right-[2px]"></div>
        </div>
      </div>

      <div className="absolute bottom-4 left-20 bg-transparent">
        <p className="font-semibold text-lg bg-transparent z-10">{name}</p>
        <p className="text-sm text-white bg-transparent">{handle}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
