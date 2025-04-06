
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Index = () => {
  const [markdownCode, setMarkdownCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("standard");

  const animatedReadmeTemplates = {
    standard: `# Hi there, I'm [Your Name] 👋

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=2E9FFF&center=true&vCenter=true&width=435&lines=Full+Stack+Developer;UI%2FUX+Design+Enthusiast;Always+learning+new+things" alt="Typing SVG" />
</div>

## About Me ✨

- 🔭 I'm currently working on **[Your Current Project]**
- 🌱 I'm currently learning **[Technology/Skill]**
- 👯 I'm looking to collaborate on **Open Source Projects**
- 💬 Ask me about **React, JavaScript, Node.js**
- 📫 How to reach me: **[Your Email]**
- ⚡ Fun fact: **[Your Fun Fact]**

## Tech Stack 🛠️

<div align="center">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
</div>

## GitHub Stats 📊

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=YOURUSERNAME&show_icons=true&theme=tokyonight" alt="GitHub Stats" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=YOURUSERNAME&theme=tokyonight" alt="GitHub Streak" />
</div>

## Connect with me 🌐

<div align="center">
  <a href="https://linkedin.com/in/YOURUSERNAME">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://twitter.com/YOURUSERNAME">
    <img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white" alt="Twitter" />
  </a>
</div>

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=YOURUSERNAME&style=flat-square&color=blue" alt="Profile Views" />
</div>

---

<div align="center">
  <img src="https://github.com/YOURUSERNAME/YOURUSERNAME/blob/output/github-contribution-grid-snake.svg" alt="Snake animation" />
</div>`,

    gradient: `# Welcome to my GitHub Profile <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30">

<div align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=4000&pause=1000&color=F75C7E&center=true&vCenter=true&random=false&width=600&height=100&lines=Full+Stack+Developer;UI%2FUX+Designer;Open+Source+Enthusiast;Always+Learning+New+Things" alt="Typing SVG" />
  </a>
</div>

<img align="right" alt="Coding" width="400" src="https://i.imgur.com/nMZJSZF.gif">

## About Me 🚀

- 🔭 I'm currently working on **[Your Current Project]**
- 🌱 I'm currently learning **[Technology/Skill]**
- 👯 I'm looking to collaborate on **[Interesting Area]**
- 👨‍💻 All of my projects are available at **[Your Portfolio]**
- 💬 Ask me about **[Your Expertise Areas]**
- 📫 How to reach me: **[Your Email]**

## Skills & Tools 🛠️

<div align="center">
  <img src="https://skillicons.dev/icons?i=js,ts,react,nodejs,express,mongodb,html,css,tailwind,git,docker,figma&perline=6" />
</div>

## GitHub Stats 📊

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=YOURUSERNAME&show_icons=true&theme=radical" alt="GitHub Stats" />
</p>

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=YOURUSERNAME&theme=radical&no-frame=true&no-bg=false&margin-w=4&row=1" alt="GitHub Trophies" />
</p>

<div align="center">
  <a href="https://github.com/anuraghazra/github-readme-stats">
    <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=YOURUSERNAME&layout=compact&theme=radical"/>
  </a>
</div>

## Let's Connect 🌐

<div align="center">
  <a href="https://linkedin.com/in/YOURUSERNAME">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://twitter.com/YOURUSERNAME">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
  </a>
  <a href="mailto:your.email@example.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</div>

---

<div align="center">
  <img src="https://raw.githubusercontent.com/YOURUSERNAME/YOURUSERNAME/output/github-contribution-grid-snake-dark.svg" alt="Snake animation" />
</div>

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=YOURUSERNAME&label=Profile%20views&color=ff69b4&style=for-the-badge" alt="Profile Views" />
</div>`,

    matrix: `<div align="center">
  <img src="https://i.imgur.com/8MupZHY.gif" width="400px"/>
  <br>

# Hello, world! <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">

  <br>
  <img src="https://readme-typing-svg.demolab.com?font=Matrix&size=50&duration=3000&pause=1000&color=00FF00&center=true&vCenter=true&width=600&height=100&lines=I'm+[Your+Name];Software+Engineer;Cybersecurity+Enthusiast;AI+%26+ML+Explorer" alt="Typing SVG" />
</div>

<img align="right" alt="GIF" src="https://i.imgur.com/vyzgQc5.gif" width="360px"/>

## > About_Me.exe 👨‍💻

\`\`\`python
#!/usr/bin/python
class SoftwareEngineer:
    def __init__(self):
        self.name = "[Your Name]"
        self.role = "Software Engineer"
        self.location = "[Your Location]"
        self.blog = "[Your Blog URL]"
        self.knowledge_base = [
            "JavaScript", "TypeScript", "Python",
            "React", "Node.js", "Docker",
            "Machine Learning", "Cybersecurity"
        ]
        self.interests = [
            "AI & ML", "Ethical Hacking",
            "Open Source", "System Design"
        ]
    
    def say_hi(self):
        print("Thanks for dropping by! Let's build something amazing together!")

me = SoftwareEngineer()
me.say_hi()
\`\`\`

## > Skills.sh 💻

<div align="center">
  <code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
  <code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
  <code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
  <code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"></code>
  <code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"></code>
  <code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>
</div>

## > Experience.log 📝

- 🔭 **Current:** [Your Current Role] at [Company]
- 🧠 **Previously:** [Your Previous Role] at [Company]
- 🌱 **Learning:** [What you're currently learning]
- 👯 **Collaborating on:** [Current collaboration projects]
- 📚 **Studying:** [What you're studying]

## > Stats.bat 📊

<div align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=YOURUSERNAME&show_icons=true&theme=chartreuse-dark&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=YOURUSERNAME&layout=compact&langs_count=6&theme=chartreuse-dark"/>
</div>

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=YOURUSERNAME&theme=matrix&no-frame=true&no-bg=false&row=1&column=6" />
</div>

## > Connect.exe 🔗

<div align="center">
  <a href="https://github.com/YOURUSERNAME" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank">
  </a>
  <a href="https://linkedin.com/in/YOURUSERNAME" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank">
  </a>
  <a href="https://twitter.com/YOURUSERNAME" target="_blank">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" target="_blank">
  </a>
</div>

<div align="center">
  <br><p><b>Visitors Count</b></p>  
  <p><img align="center" src="https://profile-counter.glitch.me/{YOURUSERNAME}/count.svg" /></p> 
</div>

<div align="center">
  <!-- Snake animation -->
  <img src="https://github.com/YOURUSERNAME/YOURUSERNAME/blob/output/github-contribution-grid-snake.svg" alt="Snake animation" />
</div>

###### *psst - check my pinned repositories below* 👇`
  };

  useEffect(() => {
    setMarkdownCode(animatedReadmeTemplates.standard);
  }, []);

  useEffect(() => {
    setMarkdownCode(animatedReadmeTemplates[selectedTheme]);
  }, [selectedTheme]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdownCode);
    setCopied(true);
    toast.success("README code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadReadme = () => {
    const element = document.createElement("a");
    const file = new Blob([markdownCode], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("README file downloaded!");
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          GitHub Profile README Generator
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          Create an animated GitHub profile README that stands out and showcases your skills and projects
        </p>
      </div>
      
      <Tabs defaultValue="editor" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="editor">README Editor</TabsTrigger>
          <TabsTrigger value="instructions">How To Use</TabsTrigger>
        </TabsList>
        
        <TabsContent value="editor" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="col-span-1 p-4">
              <h2 className="text-2xl font-semibold mb-4">Choose a Theme</h2>
              <div className="space-y-4">
                <Button 
                  variant={selectedTheme === "standard" ? "default" : "outline"} 
                  className="w-full justify-start" 
                  onClick={() => setSelectedTheme("standard")}
                >
                  <span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
                  Standard
                </Button>
                <Button 
                  variant={selectedTheme === "gradient" ? "default" : "outline"} 
                  className="w-full justify-start" 
                  onClick={() => setSelectedTheme("gradient")}
                >
                  <span className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-2"></span>
                  Gradient
                </Button>
                <Button 
                  variant={selectedTheme === "matrix" ? "default" : "outline"} 
                  className="w-full justify-start" 
                  onClick={() => setSelectedTheme("matrix")}
                >
                  <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                  Matrix
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-semibold mb-4">Actions</h2>
              <div className="space-y-4">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={copyToClipboard}
                >
                  {copied ? "Copied!" : "Copy to Clipboard"}
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={downloadReadme}
                >
                  Download README.md
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-2">Tips</h2>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  <li>Replace <code className="bg-gray-100 px-1 rounded">YOURUSERNAME</code> with your GitHub username</li>
                  <li>Fill in the placeholders like [Your Name], [Your Email], etc.</li>
                  <li>For the snake animation, set up a GitHub Action (see instructions tab)</li>
                </ul>
              </div>
            </Card>
            
            <Card className="col-span-1 lg:col-span-2 p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">README Code</h2>
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={copyToClipboard}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-auto max-h-[65vh] border rounded-lg p-4 bg-gray-50 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">{markdownCode}</pre>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="instructions">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How to Use Your Animated GitHub Profile README</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Step 1: Create a Special Repository</h3>
                <p className="text-gray-600">
                  Create a new repository with the same name as your GitHub username. For example, if your username is "johndoe", create a repository named "johndoe".
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Step 2: Add Your README</h3>
                <p className="text-gray-600">
                  Create a README.md file in this repository and paste the generated code from the editor tab.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Step 3: Customize Your README</h3>
                <p className="text-gray-600">
                  Replace all placeholders (like [Your Name], [Your Email], etc.) with your actual information.
                </p>
                <p className="text-gray-600 mt-2">
                  Replace "YOURUSERNAME" with your GitHub username throughout the document.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Step 4: Set Up the Snake Animation (Optional)</h3>
                <p className="text-gray-600">
                  For the snake animation to work, you need to set up a GitHub Action. Create a file at <code className="bg-gray-100 px-1 rounded">.github/workflows/snake.yml</code> with the following content:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg mt-2 overflow-auto text-sm">
{`name: Generate Snake

on:
  schedule:
    - cron: "0 */12 * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: Platane/snk@master
        id: snake-gif
        with:
          github_user_name: YOURUSERNAME
          svg_out_path: dist/github-contribution-grid-snake.svg
      - uses: crazy-max/ghaction-github-pages@v2.1.3
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}`}
                </pre>
                <p className="text-gray-600 mt-2">
                  Remember to replace YOURUSERNAME with your actual GitHub username.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Step 5: Commit Your Changes</h3>
                <p className="text-gray-600">
                  Commit and push your changes to your GitHub repository. The profile README will automatically appear on your GitHub profile page.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
