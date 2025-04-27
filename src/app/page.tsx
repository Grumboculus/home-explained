import { Link, Button } from "@radix-ui/themes";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-[#232323] to-[#00000] min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Main Section */}
      <section className="flex flex-col items-center justify-center px-4 text-center relative overflow-hidden flex-grow">
        <div className="absolute inset-0 -z-10" />
        
        <h1 className="text-6xl md:text-6xl font-serif mb-4 tracking-wide">
          World Explained
        </h1>
        <p className="max-w-xl text-gray-300 mb-8">
          Teaching the future generations about the world we live in, one step at a time.
        </p>
        <div className="flex gap-4">
          <Link href="/signin">
            <Button variant="outline" size="3" radius="large">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button color="blue" radius="large" size="3">
              Getting Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}