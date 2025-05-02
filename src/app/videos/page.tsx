import {  
    Link, 
    Separator,  
    Button,
    Badge,
} from "@radix-ui/themes";

import "@radix-ui/colors/gray.css";

import { ArrowRightIcon } from "@radix-ui/react-icons";

const JourneyCard = ({ title, watchTime, img, link, Creator }) => {
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
          <Link href={link}>
            <h3 className="text-lg text-white hover:cursor-pointer font-semibold truncate hover:underline">{title}
            </h3>
          </Link>
          
          <Badge radius="full" color="blue" className="my-1">{Creator}</Badge>

          <p className="text-sm">{watchTime}🕝</p>
          
        </div>
      </div>
    );
  };

export default function Videos() {
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

            {/* Main Card */}
            <div className="flex-1 flex justify-center items-start p-4 mx-4 my-4">
                <div className="bg-black/20 backdrop-blur-md shadow-lg rounded-2xl w-full max-w-screen flex flex-col gap-8 ">

                    {/* Title and Description */}
                    <div className="text-center my-6 mx-4">
                        <h1 className="text-4xl font-bold mb-2">Videos</h1>
                        <p className="text-gray-200 max-w-2xl mx-auto">
                            Check out educational videos made by our favorite creators! (Placeholders)
                        </p>

                    </div>

                    {/* Trending */}
                    <div className="flex flex-col gap-4 mx-4 my-4 p-4 bg-black/20 fade-in-up rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold">Trending</h2>
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                            <JourneyCard title=" 12 VS Code Extensions to INCREASE Productivity 2024 " watchTime="27:12" img="/Videos/VSCode.jpg" link="/videos/v1" Creator="Devression" />
                            <JourneyCard title="Coding is easy, actually" watchTime="9:47" img="/Videos/CodingEasy.jpg" link="/videos/v2" Creator="easy, actually" />
                            <JourneyCard title="i created malware with Python (it's SCARY easy!!)" watchTime="25:17" img="/Videos/Malware.jpg" link="/videos/v3" Creator="NetworkChuck" />
                            <JourneyCard title=" 12 VS Code Extensions to INCREASE Productivity 2024 " watchTime="27:12" img="/Videos/VSCode.jpg" link="/videos/v1" Creator="Devression" />
                            <JourneyCard title="Coding is easy, actually" watchTime="9:47" img="/Videos/CodingEasy.jpg" link="/videos/v2" Creator="easy, actually" />
                            <JourneyCard title="i created malware with Python (it's SCARY easy!!)" watchTime="25:17" img="/Videos/Malware.jpg" link="/videos/v3" Creator="NetworkChuck" />
                        </div>

                        <div className="flex justify-end items-end">

                        </div>  

                    </div>
                </div>
            </div>
        </div>
    )
  }