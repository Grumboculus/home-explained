import { 
    Button, 
    Link, 
    Separator, 
    Badge,
    ScrollArea, 
    } from "@radix-ui/themes";

import { 
  PersonIcon,
  StarFilledIcon,
  BellIcon,
} from "@radix-ui/react-icons";

const CreatorCard = ({ JTitle, JLogo, JLink}) => {
  return (
    <div className="flex items-center gap-1 hover:cursor-pointer bg-white/5 rounded-lg overflow-hidden shadow-md p-2">
      {/* Avatar */}
      <img
        src={JLogo} 
        alt={JTitle} 
        className="w-8 h-8 rounded-lg object-cover"
      />

      {/* Display name */}
      <div className="ml-4">
        <Link href={JLink}>
          <h3 className="text-xs font-semibold truncate hover:underline text-white">
            {JTitle}
          </h3>
        </Link>
      </div>

      <div className="ml-auto flex items-center gap-1">
        <StarFilledIcon className="text-yellow-400" />
      </div>
    </div>
  );
};
  
  export default function User1() {
    return (
      <div className="bg-gradient-to-br from-[#3d3d3d] to-[#000000] min-h-screen bg-[#0c0c12] text-white flex flex-col">
            
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

                    <div className="flex items-center gap-2">
                        <p className="hover:bg-gray-600 transition-colors duration-300 px-3 py-2 rounded-full hover:cursor-pointer">
                            <a href="/dashboard">Home</a>
                        </p>
                        <Separator color="gray" size="2" orientation="vertical" />
                        <p className="hover:bg-gray-600 transition-colors duration-300 px-3 py-2 rounded-full hover:cursor-pointer">
                            <a href="/journeys">Journeys</a>
                        </p>
                        <Separator color="gray" size="2" orientation="vertical" />
                        <p className="hover:bg-gray-600 transition-colors duration-300 px-3 py-2 rounded-full hover:cursor-pointer">
                            <a href="#">Schools</a>
                        </p>
                    </div>

                    <div className="w-10" />
                </div>
        </div>

        <div className="flex-1 flex justify-center items-start p-4 mx-4 my-4">
          <div className="bg-black/20 backdrop-blur-md shadow-lg rounded-2xl w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">

            <div className="flex flex-col gap-6 px-4 py-8 sm:px-6 md:px-12 lg:px-24">
              {/* Row 1: Top Left (1/4) + Top Right (3/4) */}
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/4 bg-black/30 p-4 rounded-2xl shadow-md">
                  <h2 className="text-4xl font-semibold text-center mb-2">Grumbo</h2>
                  <img src="/GrumboPlain.png" alt="Grumbo" className="rounded-full mx-auto w-32 h-32 sm:w-40 sm:h-40 object-cover" />
                  <p className="text-sm text-gray-300 text-center">
                    Founder of Home Explained. 
                    A very passionate developer, trying to bring education to the masses for free.</p>

                  <div className="flex justify-center mt-4 gap-2 grid grid-cols-2">
                    <Button color="blue" size="2" variant="solid" radius="large" className="px-4 py-2 transition text-ms hover:cursor-pointer">
                      <BellIcon />Follow
                    </Button>
                    
                    <Button color="green" size="2" variant="solid" radius="large" className="px-4 py-2 transition text-ms hover:cursor-pointer">
                      <PersonIcon />Friend
                    </Button>
                  </div>
                </div>
  
              <div className="w-full lg:w-3/4 bg-black/30 p-4 rounded-2xl shadow-md">
                <h2 className="text-4xl font-semibold text-center mb-2">User Info</h2>
                <p className="text-ms text-gray-300 text-center">Check out Grumbo's Activity!</p>
  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 bg-black/30 p-4 rounded-2xl shadow-md">
                  <div className="w-full px-4 bg-gradient-to-br from-[#1d1d1d] to-[#000000] bg-[#0c0c12] p-4 rounded-2xl shadow-md">
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="font-bold text-2xl">User Badges</h1>
                      <p className="text-sm text-gray-300">Show off your prestige with user badges!</p>
                    </div>
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-1 gap-2 justify-center bg-black/30 border border-gray-600 p-4 rounded-2xl shadow-md w-full">
                      <Badge radius="full" color="purple">Founder</Badge>
                      <Badge radius="full" color="red">Developer</Badge>
                      <Badge radius="full" color="green">Completionist</Badge>
                      <Badge radius="full" color="yellow">Master of Elements</Badge>
                    </div>
                  </div>

                  <div className="w-full px-4 bg-gradient-to-br from-[#1d1d1d] to-[#000000] bg-[#0c0c12] p-4 rounded-2xl shadow-md">
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="font-bold text-2xl">User Day Streak</h1>
                      <p className="text-sm">Check your learning progress with streaks!</p>

                      <div className="flex items-end justify-center gap-2 mt-3 bg-black/30 border border-gray-600 p-4 rounded-2xl shadow-md w-full">
                        <img src="/streakt.png" alt="Streak" className="mt-auto gap-4 w-10 h-12" />
                        
                        <div className="flex items-center gap-1">
                          <h1 className="text-4xl font-bold">355</h1>
                          <p className="text-sm font-light">Days</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="w-full px-4 bg-gradient-to-br from-[#1d1d1d] to-[#000000] bg-[#0c0c12] p-4 rounded-2xl shadow-md">
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="font-bold text-2xl">Favorited</h1>
                      <p className="text-sm">Reward our creators by giving them a star!</p>

                      <div className="flex items-end justify-center gap-2 mt-3 bg-black/30 border border-gray-600 p-4 rounded-2xl shadow-md w-full">
                        <ScrollArea scrollbars="vertical" radius="large" style={{ width: "100%", height: "50px" }}>
                          
                          <div className="grid auto-rows-auto gap-2">
                            <CreatorCard JTitle="Web Development | Libraries" JLink="#" JLogo="/Journeys/WebDevPlace.jpg" />
                            <CreatorCard JTitle="Web Development | Libraries" JLink="#" JLogo="/Journeys/WebDevPlace.jpg" />
                          </div>

                        </ScrollArea>
                      </div>

                    </div>
                  </div>

                </div>  
              </div>
            </div>
  
            {/* Row 2: Centered 1/2 Width */}
            <div className="flex justify-center">
              <div className="w-full sm:w-2/3 md:w-1/2 bg-black/30 p-8 rounded-2xl shadow-md grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-bold">Followers</h2>
                  <p className="text-gray-200">2,012,124</p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-bold">Following</h2>
                  <p className="text-gray-200">2</p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-bold">Completions</h2>
                  <p className="text-gray-200">567</p>
                </div>
              </div>
            </div>
  
            {/* Row 3: Bottom Social (1/4 Width, Centered) */}
            <div className="flex justify-center items-center gap-2">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-black/30 p-4 rounded-2xl shadow-md text-center">
                <h2 className="text-md font-semibold mb-3">Socials</h2>
                  <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition text-sm">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                     Discord
                    </a>
                  </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }