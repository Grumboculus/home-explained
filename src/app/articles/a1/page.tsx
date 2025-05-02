import { 
    Link, 
    Separator, 
    DataList, 
} from "@radix-ui/themes";
  
  export default function Video2() {
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

                <div className="grid grid-rows-10 justify-center items-center contents-center gap-1">
                  
                  <p>Did you know some of the brightest sources of light in the sky come from the regions around black holes in the centers of galaxies? It sounds a little contradictory, but it’s true! They may not look bright to our eyes, but satellites have spotted oodles of them across the universe. </p>

                  <p> 
                    One of those satellites is NASA's Fermi Gamma-ray Space Telescope. Fermi has found thousands of these kinds of galaxies since it launched in 2008, and there are many more out there!
                    Watch a cosmic gamma-ray fireworks show in this animation using just a year of data from the Large Area Telescope (LAT) aboard NASA’s Fermi Gamma-ray Space Telescope. Each object’s magenta circle grows as it brightens and shrinks as it dims. The yellow circle represents the Sun following its apparent annual path across the sky. The animation shows a subset of the LAT gamma-ray records available for more than 1,500 objects in a continually updated repository. Over 90% of these sources are a type of galaxy called a blazar, powered by the activity of a supermassive black hole.
                    NASA’s Marshall Space Flight Center/Daniel Kocevski 
                  </p>

                  <p>
                    Black holes are regions of space that have so much gravity that nothing — not light, not particles, nada — can escape. Most galaxies have supermassive black holes at their centers, and these black holes are hundreds of thousands to billions of times the mass of our Sun. In active galactic nuclei (also called “AGN” for short, or just "active galaxies") the central region is stuffed with gas and dust that's constantly falling toward the black hole. As the gas and dust fall, they start to spin and form a disk. Because of the friction and other forces at work, the spinning disk starts to heat up.
                    Composite image of Markarian 573 in X-ray, radio, and visible light.
                    This composite view of the active galaxy Markarian 573 combines X-ray data (blue) from NASA's Chandra X-ray Observatory and radio observations (purple) from the Karl G. Jansky Very Large Array in New Mexico with a visible light image (gold) from the Hubble Space Telescope. Markarian 573 is an active galaxy that has two cones of emission streaming away from the supermassive black hole at its center.
                    X-ray: NASA/CXC/SAO/A.Paggi et al; Optical: NASA/STScI; Radio: NSF/NRAO/VLA
                  </p>

                  <p>
                    The disk's heat gets emitted as light, but not just wavelengths of it that we can see with our eyes. We detect light from AGN across the entire electromagnetic spectrum, from the more familiar radio and optical waves through to the more exotic X-rays and gamma rays, which we need special telescopes to spot.
                  </p>

                  <p>
                    An artist’s concept showing the black hole at the center of an active galaxy with a disk of material falling in toward the black hole and a jet accelerated away.
                    In the heart of an active galaxy, matter falling toward a supermassive black hole creates jets of particles traveling near the speed of light as shown in this artist’s concept.
                    NASA/Goddard Space Flight Center Conceptual Image Lab
                  </p>

                  <p>
                    About one in 10 AGN beam out jets of energetic particles, which are traveling almost as fast as light. Scientists are studying these jets to try to understand how black holes — which pull everything in with their huge amounts of gravity — somehow provide the energy needed to propel the particles in these jets.
                    Side-by-side artist’s concepts of active galaxy TXS 0128+554 as viewed at two different angles.
                    This artist’s concept shows two views of the active galaxy TXS 0128+554, located around 500 million light-years away. Left: The galaxy’s central jets appear as they would if we viewed them both at the same angle. The black hole, embedded in a disk of dust and gas, launches a pair of particle jets traveling at nearly the speed of light. Scientists think gamma rays (magenta) detected by NASA’s Fermi Gamma-ray Space Telescope originate from the base of these jets. As the jets collide with material surrounding the galaxy, they form identical lobes seen at radio wavelengths (orange). The jets experienced two distinct bouts of activity, which created the gap between the lobes and the black hole. Right: The galaxy appears in its actual orientation, with its jets tipped out of our line of sight by about 50 degrees.
                    NASA’s Goddard Space Flight Center
                  </p> 

                  <p>
                    Many of the ways we tell one type of AGN from another depend on how they’re oriented from our point of view. With radio galaxies, for example, we see the jets from the side as they’re beaming vast amounts of energy into space. Then there’s blazars, which are a type of AGN that have a jet that is pointed almost directly at Earth, which makes the AGN particularly bright. 
                    Gamma-ray image of galaxy 3C 279 during a flare in June 2015 as seen by the Fermi Gamma-ray Space Telescope
                    Blazar 3C 279's historic gamma-ray flare in 2015 can be seen in this image from the Large Area Telescope on NASA's Fermi satellite. During the flare, the blazar outshone the Vela pulsar, usually the brightest object in the gamma-ray sky.
                    NASA/DOE/Fermi LAT Collaboration
                  </p>

                  <p>
                    So why do we care about AGN? We know that some AGN formed early in the history of the universe. With their enormous power, they almost certainly affected how the universe changed over time. By discovering how AGN work, we can understand better how the universe came to be the way it is now.
                  </p>

                  <div className="bg-black/30 backdrop-blur-md shadow-lg my-4 mx-4 rounded-2xl p-4 flex justify-center border border-gray-600">
                    <DataList.Root size="2" >
                      <DataList.Item>
                        <DataList.Label className="text-white font-bold" color="red" minWidth="88">Creator</DataList.Label>
                        <DataList.Value className="text-white">NetworkChuck</DataList.Value>
                      </DataList.Item>

                    <DataList.Item>
                        <DataList.Label className="text-white font-bold" color="red" minWidth="88">Host Site</DataList.Label>
                        <DataList.Value className="text-white">YouTube</DataList.Value>
                      </DataList.Item>

                      <DataList.Item>
                        <DataList.Label className="text-white font-bold" color="red" minWidth="88">Link</DataList.Label>
                        <DataList.Value>
                          <a
                           href="https://www.youtube.com/watch?v=UtMMjXOlRQc"
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
                        <DataList.Value className="text-white">All credit goes to NetworkChuck for his video.</DataList.Value>
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