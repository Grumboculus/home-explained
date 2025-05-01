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
        <p className="text-xs">{stime}🕝</p>
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
        <p className="text-xs">{VItime}🕝</p>
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
      {/* Navbar */}
      <div className="py-2 bg-black/15 backdrop-blur-md">
        <div className="flex items-center justify-between px-6">
      
          <Link href="/">
            <img 
              src="/HomeExplainedLogo.png" 
              alt="Logo" 
              className="bg-white/10 h-10 w-auto rounded-full px-1 py-1 hover:cursor-pointer" 
            />
          </Link>

          <Flex className="gap-2">
            <p className="bg-gray-600 transition-colors duration-300 px-3 py-2 rounded-full hover:cursor-pointer inline-block">
              <a href="/dashboard">Home</a>
            </p>
            <Separator color="gray" size="2" orientation="vertical" />
            <p className="hover:bg-gray-600 transition-colors duration-300 px-3 py-2 rounded-full hover:cursor-pointer inline-block">
              <a href="/journeys">Journeys</a>
            </p>
            <Separator color="gray" size="2" orientation="vertical" />
            <p className="hover:bg-gray-600 transition-colors duration-300 px-3 py-2 rounded-full hover:cursor-pointer inline-block">
              <a href="#">Schools</a>
            </p>
          </Flex>

          <div className="w-10" />
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="flex flex-col lg:flex-row h-auto min-h-[calc(100vh-64px)] px-6 gap-6 mt-4">
    
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
      
          {/* Top Card */}
          <div className="flex-[1] justify-between bg-black/30 rounded-lg p-4 backdrop-blur-md">
            <h2 className="text-xl font-bold mb-2">Creators</h2>
            <p className="text-gray-300">Our favorite teachers and creators!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {/* Cards */}
              <CreatorCard CRtitle="Grumbo" CRavatar="/DashboardIMGS/Creators/GrumboPlain.png" CRprofileLink="/users/1" UserName="grumbo" />
              <CreatorCard CRtitle="Aurora Lane" CRavatar="/DashboardIMGS/Creators/Aurora.png" CRprofileLink="/users/2" UserName="aurora.codes" />
              <CreatorCard CRtitle="Maxx" CRavatar="/DashboardIMGS/Creators/MAXImage.png" CRprofileLink="/users/3" UserName="maxxybuilding" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {/* Cards */}
              <CreatorCard CRtitle="WCarterW" CRavatar="/DashboardIMGS/Creators/Crown.png" CRprofileLink="/users/4" UserName="carterMRW" />
              <CreatorCard CRtitle="MRS.Hart" CRavatar="/DashboardIMGS/Creators/MUSIC.png" CRprofileLink="/users/5" UserName="mrs.hart" />
              <CreatorCard CRtitle="LeoL" CRavatar="/DashboardIMGS/Creators/LBOX.png" CRprofileLink="/users/6" UserName="LeoisanL" />
            </div>
          </div>

          {/* Middle Cards */}
          <div className="flex flex-[2.5] gap-4">
            <div className="flex-1 bg-black/30 rounded-lg p-4 backdrop-blur-md">
              <h3 className="text-lg font-semibold">Articles</h3>
              <p className="text-gray-400 text-xs">Articles you might like!</p>
            <br />
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Recommended</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {/* Cards */}
                  <SmallJourneyCard stitle="Recommended 1" stime="6M" simg="/PlaceholderIMG.png" slink="#" />
                  <SmallJourneyCard stitle="Recommended 2" stime="2M" simg="/PlaceholderIMG.png" slink="#" />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Trending</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {/* Cards */}
                  <SmallJourneyCard stitle="Trending 1" stime="5M" simg="/PlaceholderIMG.png" slink="#" />
                  <SmallJourneyCard stitle="Trending 2" stime="10M" simg="/PlaceholderIMG.png" slink="#" />
              </div>
              </div>

              <div className="flex justify-center items-center mt-4">
                <Link href="/articles">
                  <button className="px-4 text-white py-2 rounded-md bg-white/10 hover:bg-white/20 hover:cursor-pointer transition">View All 👁️</button>
                </Link>
              </div>

            </div>


            <div className="flex-1 bg-black/30 rounded-lg p-4 backdrop-blur-md">
                <h3 className="text-lg font-semibold">Videos</h3>
              <p className="text-gray-400 text-xs">Videos you might like!</p>

              <br />
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Recommended</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {/* Cards */}
                  <VideoJourneyCard VItitle="Recommended 1" VItime="30M" VIimg="/PlaceholderIMG.png" VIlink="#" />
                  <VideoJourneyCard VItitle="Recommended 2" VItime="1H" VIimg="/PlaceholderIMG.png" VIlink="#" />
                </div>
              </div>

              <div className="mb-8">

                <h3 className="text-2xl font-semibold mb-4">Trending</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {/* Cards */}
                  <VideoJourneyCard VItitle="Trending 1" VItime="12M" VIimg="/PlaceholderIMG.png" VIlink="#" />
                  <VideoJourneyCard VItitle="Trending 2" VItime="45M" VIimg="/PlaceholderIMG.png" VIlink="#" />
              </div>
              </div>

              <div className="flex justify-center items-center mt-4">
                <Link href="/videos">
                  <button className="px-4 text-white py-2 rounded-md bg-white/10 hover:bg-white/20 hover:cursor-pointer transition">View All 👁️</button>
                </Link>
              </div>

            </div>
          </div>

          {/* Bottom Card */}
          <div className="flex-[1] bg-black/30 rounded-lg p-4 backdrop-blur-md gap-4 justify-between overflow-hidden">
            <h4 className="text-lg font-semibold">Profile</h4>
            <p className="text-gray-400 text-sm">Customize your profile!</p>

            <div className="flex flex-row justify-center items-center mt-4">
              <div className="flex items-center mt-4 bg-black/20 p-4 rounded-lg w-1/2 mb-4 gap-1">
              <Avatar
                src="/DashboardIMGS/Creators/GrumboPlain.png"
                alt="Grumbo"
                className="w-16 h-16 rounded-full object-cover bg-black/20"
              />
                <div className="ml-4 ml-4 flex-1 min-w-0">
                  <h3 className="text-lg font-semibold">Grumbo</h3>
                  <p className="text-gray-400 text-xs truncate overflow-hidden">Founder of Home-Explained! Thank you so much for using my app!</p> 
                </div>

                <Badge color="yellow" size="1" variant="solid" className="text-xs font-semibold">Founder</Badge>

              </div>

              <div className="flex items-center mt-4 mg-4 p-4 mb-4 gap-4">
                  <Link href="/dashboard">
                    <button className="px-4 text-white py-2 rounded-md bg-white/10 hover:bg-white/20 hover:cursor-pointer transition text-xs">Edit Profile</button>
                  </Link>

                  <Link href="/dashboard">
                    <button className="px-4 text-white py-2 rounded-md bg-white/10 hover:bg-white/20 hover:cursor-pointer transition text-xs">Account Settings</button>
                  </Link>

              </div>

            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-black/20 rounded-lg p-6 backdrop-blur-md flex flex-col justify-between">

        {/* Right Side */}
        <div>
          <Link href="/journeys">
            <h2 className="text-3xl font-bold mb-4 hover:cursor-pointer hover:underline text-white">Journeys</h2>
          </Link>
          <p className="text-gray-400 mb-8">Take the journey to learn a new skill.</p>

          {/* Trending Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Trending</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Cards */}
              <JourneyCard title="Trending 1" time="2" img="/PlaceholderIMG.png" link="#" />
              <JourneyCard title="Trending 2" time="4" img="/PlaceholderIMG.png" link="#" />
              <JourneyCard title="Trending 3" time="1.5" img="/PlaceholderIMG.png" link="#" />
              <JourneyCard title="Trending 4" time="2" img="/PlaceholderIMG.png" link="#" />
            </div>
          </div>

          {/* Recommended Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Recommended</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Cards */}
              <JourneyCard title="Recommended 1" time="3" img="/PlaceholderIMG.png" link="#" />
              <JourneyCard title="Recommended 2" time="5" img="/PlaceholderIMG.png" link="#" />
              <JourneyCard title="Recommended 3" time="2.5" img="/PlaceholderIMG.png" link="#" />
              <JourneyCard title="Recommended 4" time="2" img="/PlaceholderIMG.png" link="#" />
            </div>
          </div>

          {/* Newest Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Newest</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Cards */}
              <JourneyCard title="Newest 1" time="6" img="/PlaceholderIMG.png" link="#" />
              <JourneyCard title="Newest 2" time="2" img="/PlaceholderIMG.png" link="#" />
              <JourneyCard title="Newest 3" time="3.5" img="/PlaceholderIMG.png" link="#" />
              <JourneyCard title="Newest 4" time="2.5" img="/PlaceholderIMG.png" link="#" />
            </div>
          </div>

          <div className="mb-8 justify-between">
            <div className="flex justify-between">
              
              <Link href="/journeys">
                <button className="px-4 text-white py-2 rounded-md bg-white/10 hover:bg-white/20 hover:cursor-pointer transition">View All 👁️</button>
              </Link>

              <Link href="/dashboard">
              <button className="px-4 text-white py-2 rounded-md bg-white/10 hover:bg-white/20 hover:cursor-pointer transition">Random 🎲</button>
              </Link>
             
              <Link href="/dashboard">
              <button className="px-4 text-white py-2 rounded-md bg-white/10 hover:bg-white/20 hover:cursor-pointer transition">Create Journey ✍️</button>
              </Link>
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}