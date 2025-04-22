import { Button, Text, Heading, Container, Link } from "@radix-ui/themes";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0c0c12] px-4">
    <div className="bg-gradient-to-br from-[#232323] to-[#00000] p-8 rounded-xl shadow-lg w-full max-w-md border border-[#2e3a5b]">
      <h2 className="text-2xl font-semibold text-white mb-6">Sign in</h2>

      <form className="space-y-5">
        <div>
          <label className="block text-white font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 rounded bg-[#0f111a] text-white border border-gray-700"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-white font-medium">Password</label>
            <a href="#" className="text-sm text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded bg-[#0f111a] text-white border border-gray-700"
          />
        </div>
        <Container>
          <div className="flex justify-center">
            <Link>
              <Button className="h-12 px-4 justify-center text-color-[#686868]" size="3" variant="solid">
                Sign-In
              </Button>
            </Link>
          </div>
          <br></br>
          <div className="flex justify"></div>
          <Text className="justify-center h-12" size="1" color="blue">Don't have an account? Register one today!</Text>
          <Link href="/signup" color="blue" size="1"> SIGN UP </Link>

        </Container>
      </form>
    </div>
  </div>
  
  )
}
