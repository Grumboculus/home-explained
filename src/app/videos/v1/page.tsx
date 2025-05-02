import { 
    Link, 
    Separator, 
    DataList, 
} from "@radix-ui/themes";
  
  export default function Video1() {
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

              <div className="w-full bg-black/30 p-4 rounded-2xl shadow-md">
                <h2 className="text-4xl font-semibold text-center mb-2 mt-4"> 12 VS Code Extensions to INCREASE Productivity 2024 </h2>

                <div className="grid grid-rows-3 justify-center items-center contents-center mt-4">
                  
                  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1UyQaR8pvjk?si=k2WjZ3gEMNXoSqgu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                  <div className="bg-black/30 backdrop-blur-md shadow-lg my-4 mx-4 rounded-2xl p-4 flex justify-center border border-gray-600">
                    <DataList.Root size="2" >
                      <DataList.Item>
                        <DataList.Label className="text-white font-bold" color="red" minWidth="88">Creator</DataList.Label>
                        <DataList.Value className="text-white">Devression</DataList.Value>
                      </DataList.Item>

                    <DataList.Item>
                        <DataList.Label className="text-white font-bold" color="red" minWidth="88">Host Site</DataList.Label>
                        <DataList.Value className="text-white">YouTube</DataList.Value>
                      </DataList.Item>

                      <DataList.Item>
                        <DataList.Label className="text-white font-bold" color="red" minWidth="88">Link</DataList.Label>
                        <DataList.Value>
                          <a
                           href="https://www.youtube.com/watch?v=1UyQaR8pvjk&t=10s"
                           className="text-white hover:underline hover:cursor-pointer"
                           target="_blank"
                           rel="noopener noreferrer"
                          >
                            Watch Video
                          </a>
                        </DataList.Value>
                      </DataList.Item>

                      <DataList.Item>
                        <DataList.Label className="text-white font-bold" color="red" minWidth="88">Credit Note & Channel</DataList.Label>
                        <DataList.Value className="text-white">All credit goes to Devression for his video.</DataList.Value>
                      </DataList.Item>
                    </DataList.Root>
                  </div>
                </div>  
            </div>
        </div>     
        </div>
    </div>
  )
}