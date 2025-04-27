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
      <div className="py-2 bg-black/15 backdrop-blur-md">
        <div className="flex items-center justify-between px-6">

            <Link href="/">
              <img 
                src="/HomeExplainedLogo.png" 
                alt="Logo" 
                className="bg-white/10 h-10 w-auto rounded-full px-1 py-1 hover:cursor-pointer" />
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

      <div>
        <div className="bg-black/15 backdrop-blur-md mt-4 p-70 rounded-lg shadow-lg mx-auto w-1/3 max-w-4xl ml-4">
        </div>  
      </div>

    </div>
  )
}