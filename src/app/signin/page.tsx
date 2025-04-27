import { 
Button, 
Text, 
Container, 
Link, 
Separator, 
IconButton 
} from "@radix-ui/themes";

export default function SignIn() {
  return (
    <div className="bg-gradient-to-br from-[#232323] to-[#00000] min-h-screen flex items-center justify-center bg-[#0c0c12] px-4">
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} className="p-8 rounded-xl shadow-lg w-full max-w-md border border-[#2e3a5b] z-0">
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
          <div className="flex items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button className="h-12 px-4 justify-center text-color-[#686868]" size="3" variant="solid">
                Sign-In
              </Button>
            </Link>

            <Separator className="justify-center" orientation="vertical" color="indigo" size="2"></Separator>

            <IconButton className="justify-center" radius="full" variant="outline" size="3">
              <Link>
                <img src="/googletrans(1).png" alt="Google Logo" className="" />
              </Link>
            </IconButton>
          </div>

          <br></br>
          <div className="flex justify-center">
            <Text className="justify-center" size="1" color="blue">Don't have an account? Register one today!  <Link href="/signup" className="underline" color="blue" size="1"> <u>SIGN UP</u> </Link> </Text>
          </div>     
        </Container>
      </form>
    </div>
  </div>
  
  )
}
