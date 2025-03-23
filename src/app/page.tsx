import { Container, Flex, Button } from "@radix-ui/themes";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <Container size="2" className="bg-black min-h-screen flex flex-col items-top justify-top p-4">
          <br></br>
          <br></br>
          <Flex direction={"column"} align="center" justify="center" gap="2">
            <h1 className="text-4xl flex-auto font-bold maximumimpact text-gray-500">Welcome to Home Explained!</h1>
            <p className="text-1xl flex-auto text-gray-500" align="center">Home Explained is a project orientated towards teaching users about our world.
                It includes <b> english, math, science, geography, and history.</b> 
                The project allows users to learn these topics via fun interactive games.
                Users are allowed to learn not only through interactive games but also through articles, videos, and books.</p>
          </Flex>
      <br></br>
      <br></br>
          <Flex direction={"column"} align="center" justify="center" gap="2">
            <Button className="flex-auto" variant="solid" color="gray" size="4" radius="large" >
              Get Started
            </Button>
          </Flex>
          <br></br>
        </Container>
      </main>
    </div>
  );
}

