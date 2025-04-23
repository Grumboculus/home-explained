import { 
    Button, 
    Text, 
    Container, 
    Link, 
    Separator, 
    IconButton, 
    Section,
    Flex
    } from "@radix-ui/themes";
    
    export default function Dashboard() {
      return (
        <div className="bg-gradient-to-br from-[#232323] to-[#00000] min-h-screen flex items-center justify-center bg-[#0c0c12] px-4">
            <div className="content-center">
              <Button className="justify-top" color="gray" size="3" variant="ghost">Journies</Button>
            </div>
        </div>
      )
    }
    