import {  
    Link, 
    Separator,  
    Flex,
    Avatar,
    Badge
} from "@radix-ui/themes";
    
const JourneyCard = ({ title, time, img, link }) => {
  return (
    <div className="hover:cursor-pointer bg-white/10 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-gray-700">
      {/* Image Section */}
      <div className="h-26">
        {/* Replace with your real image */}
        <img 
          src={img} 
          alt={title} 
          className="object-cover w-full h-full" 
        />
      </div>

      {/* Text Section */}
      <div className="bg-gradient-to-br from-[#232323] to-[#00000] bg-[#0c0c12] text-white p-3">
        <h3 className="text-lg font-semibold truncate hover:underline">{title}
          <a 
            href={link} 
          />
        </h3>
        <p className="text-sm">{time}H🕝</p>
      </div>
    </div>
  );
};

const SmallJourneyCard = ({ stitle, stime, simg, slink }) => {
  return (
    <div className="hover:cursor-pointer bg-white/10 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-gray-700">
      {/* Image Section */}
      <div className="h-16">
        {/* Replace with your real image */}
        <img 
          src={simg} 
          alt={stitle} 
          className="object-cover w-full h-full" 
        />
      </div>

      {/* Text Section */}
      <div className="bg-gradient-to-br from-[#232323] to-[#00000] bg-[#0c0c12] text-white p-3">
        <h3 className="text-xs font-semibold truncate hover:underline">{stitle}
          <a 
            href={slink} 
          />
        </h3>
        <p className="text-xs">{stime}H🕝</p>
      </div>
    </div>
  );
};

const VideoJourneyCard = ({ VItitle, VItime, VIimg, VIlink }) => {
  return (
    <div className="hover:cursor-pointer bg-white/10 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-gray-700">
      {/* Image Section */}
      <div className="h-16">
        {/* Replace with your real image */}
        <img 
          src={VIimg} 
          alt={VItitle} 
          className="object-cover w-full h-full" 
        />
      </div>

      {/* Text Section */}
      <div className="bg-gradient-to-br from-[#232323] to-[#00000] bg-[#0c0c12] text-white p-3">
        <h3 className="text-xs font-semibold truncate hover:underline">{VItitle}
          <a 
            href={VIlink} 
          />
        </h3>
        <p className="text-xs">{VItime}H🕝</p>
      </div>
    </div>
  );
};

const CreatorCard = ({ CRtitle, CRavatar, CRprofileLink, UserName }) => {
  return (
    <div className="flex items-center hover:cursor-pointer bg-white/10 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-gray-700 p-2">
      {/* Avatar */}
      <Avatar
        src={CRavatar} 
        alt={CRtitle} 
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Display name */}
      <div className="ml-4">
        <Link href={CRprofileLink}>
          <h3 className="text-sm font-semibold truncate hover:underline text-white">
            {CRtitle}
          </h3>
        </Link>
      <p className="text-xs">@{UserName}</p>
      </div>
    </div>
  );
};


export default function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-[#232323] to-[#00000] min-h-screen bg-[#0c0c12] text-white">
      
    </div>
  )
}