// components/HeroSection.tsx
import { Container, Flex, Button } from "@radix-ui/themes";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10" />
      
      <h1 className="text-125xl md:text-6xl font-serif mb-4 tracking-wide">
        World Explained
      </h1>
      <p className="max-w-xl text-gray-300 mb-8">
        Teaching the future generations about the world we live in, one step at a time.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" size="3" radius="large">Sign In</Button>
        <Button color="blue" radius="large" size="3">Getting Started</Button>
      </div>
    </section>
  )
}
