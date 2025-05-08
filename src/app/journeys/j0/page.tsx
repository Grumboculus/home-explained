import {  
    Link, 
    Separator,  
    Flex,
    Avatar,
    Badge,
} from "@radix-ui/themes";

const VideoCard = ({ title, img, link }) => {
    return (
      <div className="flex items-center hover:cursor-pointer bg-white/10 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-gray-700 p-2">
        <img src={img} alt={title} className="w-1/3 h-auto rounded-lg" />
        <div className="flex flex-col justify-center ml-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">Click to watch</p>
        </div>
      </div>
    );
};

const ArticleCard = ({ title, img, link }) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="max-w-xs w-full bg-white/10 rounded-2xl overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-gray-700 p-3 mx-auto">
          <img src={img} alt={title} className="w-full h-40 object-cover rounded-md" />
  
          <div className="text-center mt-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
            <p className="text-sm sm:text-base text-gray-400">Click to read</p>
          </div>
        </div>
      </a>
    );
  };
  

export default function Dashboard() {
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

                    <div className="w-full p-4 rounded-2xl shadow-md">
                        <h2 className="text-4xl font-semibold text-center mb-2 mt-4"> Universe Explained </h2>
                        <p className="text-ms text-center text-gray-300"> Check out where we started! We didn't start out as all skills, it was originally just going to be space info! </p>

                    </div>

                    <div className="flex flex-col items-center gap-6 w-full mt-6">

                        {/* Top Image */}
                        <div className="w-full flex justify-center">
                            <img 
                                src="/Universe1.jpg" 
                                alt="Journey Preview" 
                                className="w-1/3 sm:w-1/2 max-w-xs rounded-xl shadow-md"
                            />
                        </div>

                        {/* Creator Card */}
                        <div className="flex items-center gap-4 bg-black/30 border border-gray-600 px-4 py-3 rounded-xl shadow-sm">
                            <img 
                                src="/HomeExplainedLogo.png" 
                                alt="Creator Avatar" 
                                className="w-12 h-12 rounded-full object-cover"
                            />

                            <div>
                                <p className="font-semibold text-white truncate">Explained Team</p>
                                <p className="text-sm text-gray-400">Creator</p>
                            </div>

                         </div>

                        {/* Description */}
                        <div className="max-w-2xl text-center">
                            <p className="text-gray-300 text-sm sm:text-base">
                                Learn about the universe, from the Big Bang to black holes, and everything in between. This journey will take you through the wonders of space, time, and the cosmos.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-4 w-full mt-6"> 
                          <Badge size="3" radius="full" color="green">Starter</Badge>
                          <p className="rounded-2xl font-bold text-white text-lg">Start out here!</p>
  
                          <div className="flex flex-col items-center gap-8 w-full mt-6">
    
                            {/* Video Card Section */}
                            <div className="flex justify-center items-center gap-4 flex-wrap">
                              <h1 className="text-2xl font-black text-white border border-gray-600 px-4 py-4 rounded-full">1</h1>
                              <Separator size="2" color="blue" orientation="vertical" />
                              <VideoCard title="Intro to the Universe" img="/Universe1.jpg" link="#" />
                            </div>

                            <Separator size="3" color="blue" orientation="vertical" className="w-full max-w-sm" />

                            {/* Article Card Section */}
                            <div className="flex justify-center items-center gap-4 flex-wrap">
                              <h1 className="text-2xl font-black text-white border border-gray-600 px-4 py-4 rounded-full">2</h1>
                              <Separator size="2" color="blue" orientation="vertical" />
                              <div className="flex justify-center w-full sm:w-auto">
                                <ArticleCard title="Intro to the Universe" img="/Universe1.jpg" link="#" />
                              </div>
                            </div>

                          </div>

                        </div>

                        </div>
                            

                    </div>  
                </div>
            </div>     
  )
}