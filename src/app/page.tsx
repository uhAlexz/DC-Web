import { Button } from "@/components/ui/button";
import { Github, LinkIcon, MessageCircleIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          DevCreates
        </h1>
        
        <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
          we are the nerdiest community of developers 💀
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mt-4">
          <Button 
            size="lg" 
            className="gap-2 bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-300 text-white"
          >
            <MessageCircleIcon className="h-5 w-5 text-white" />
            <a href="https://discord.gg/devcreates" target="_blank" rel="noopener noreferrer">
              Join Our Discord
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 border-blue-500 hover:bg-blue-950/50 hover:scale-110 transition-all duration-300"
          >
            <Github className="h-5 w-5" />
            <a href="https://github.com/devcreates" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 border-blue-500 hover:bg-blue-950/50 hover:scale-110 transition-all duration-300"
          >
            <LinkIcon className="h-5 w-5" />
            <a href="https://forum.devcreates.lol" target="_blank" rel="noopener noreferrer">
              Forum
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 border-blue-500 hover:bg-blue-950/50 hover:scale-110 transition-all duration-300"
          >
            <LinkIcon className="h-5 w-5" />
            <a href="https://blog.devcreates.lol" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
