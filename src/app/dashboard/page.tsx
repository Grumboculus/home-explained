import { 
    Button,
    Card, 
    Text, 
    Container, 
    Link, 
    Separator, 
    IconButton, 
    Flex
} from "@radix-ui/themes";
    
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
        <p className="hover:bg-gray-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:underline hover:cursor-pointer inline-block">
          <a href="/dashboard">Home</a>
        </p>
        <Separator size="2" orientation="vertical" />
        <p className="hover:bg-gray-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:underline hover:cursor-pointer inline-block">
          <a href="#">Journeys</a>
        </p>
        <Separator size="2" orientation="vertical" />
        <p className="hover:bg-gray-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:underline hover:cursor-pointer inline-block">
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
      <div className="flex-[1] bg-black/30 rounded-lg p-4 backdrop-blur-md">
        <h2 className="text-xl font-bold mb-2">Top Left Card</h2>
        <p className="text-gray-300">Takes ~20% height.</p>
      </div>

      {/* Middle Cards */}
      <div className="flex flex-[2.5] gap-4">
        <div className="flex-1 bg-black/30 rounded-lg p-4 backdrop-blur-md">
          <h3 className="text-lg font-semibold">Middle Card 1</h3>
          <p className="text-gray-400 text-sm">Emphasized taller cards.</p>
        </div>
        <div className="flex-1 bg-black/30 rounded-lg p-4 backdrop-blur-md">
          <h3 className="text-lg font-semibold">Middle Card 2</h3>
          <p className="text-gray-400 text-sm">Emphasized taller cards.</p>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="flex-[1] bg-black/30 rounded-lg p-4 backdrop-blur-md">
        <h4 className="text-lg font-semibold">Bottom Left Small Card</h4>
        <p className="text-gray-400 text-sm">About 20% height.</p>
      </div>

    </div>

    {/* Right Side */}
    <div className="w-full lg:w-1/2 bg-black/20 rounded-lg p-6 backdrop-blur-md flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4">Right Side Full Height</h2>
      <p className="text-gray-400">Content goes here — maybe Journeys, Videos, Articles...</p>
    </div>

  </div>
</div>


  )
}