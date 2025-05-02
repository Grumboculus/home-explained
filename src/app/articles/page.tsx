import {  
    Link, 
    Separator,  
    Button,
    Badge,
} from "@radix-ui/themes";

import "@radix-ui/colors/gray.css";

import { ArrowRightIcon } from "@radix-ui/react-icons";

const JourneyCard = ({ title, readTime, img, link, timeSince }) => {
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
          <p className="text-sm">{readTime}🕝</p>
          <Badge radius="full" color="green">{timeSince}</Badge>
        </div>
      </div>
    );
  };

export default function Articles() {
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
                        <h1 className="text-4xl font-bold mb-2">Articles</h1>
                        <p className="text-gray-200 max-w-2xl mx-auto">
                            Read Articles and checkout recent things that have happened!
                        </p>

                    </div>

                    {/* Trending */}
                    <div className="flex flex-col gap-4 mx-4 my-4 p-4 bg-black/20 fade-in-up rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold">Trending</h2>
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                        </div>

                        <div className="flex justify-end items-end">

                        </div>  

                    </div>

                    {/* Recommended */}
                    <div className="flex flex-col gap-4 mx-4 my-4 p-4 bg-black/20 fade-in-up rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold">Recommended</h2>
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                            <JourneyCard title="The Universe’s Brightest Lights Have Some Dark Origins" readTime="3M" link="/articles/a1" img="/Articles/BrightLights.png" timeSince="NASA" />
                        </div>

                        <div className="flex justify-end items-end">
                        </div> 
                        
                    </div>

                </div>
            </div>
        </div>
    )
  }