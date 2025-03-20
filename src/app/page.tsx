import { Container, Flex, Button } from "@radix-ui/themes";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <Container size="2">
          <Flex direction={"column"} align="center" justify="center" gap="4">
            <h1 className="text-4xl flex-auto font-bold maximumimpact">Welcome to Home Explained!</h1>
            <p className="text-1xl flex-auto" align="center">Home Explained is a project orientated towards teaching users about our world.
                It includes <b> english, math, science, geography, and history.</b> 
                The project allows users to learn these topics via fun interactive games.
                Users are allowed to learn not only through interactive games but also through articles, videos, and books.</p>
          </Flex>

          <Flex className="" align="center" justify="center" gap="1">
            <Button variant="soft" color="blue" size={"4"}>
              Sign-in
            </Button>
            <Button variant="soft" color="gray" size={"2"}>
              Sign-up
            </Button>
          </Flex>
        </Container>
      </main>
    </div>
  );
}

