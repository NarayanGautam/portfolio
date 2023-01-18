import '../App.css'
import SideBar from "../components/SideBar"
import ChannelBar from "../components/ChannelBar"
import Content from "../components/Content"


export default function Home() {

  let data = {
    "channels": {
      "General": [ "about me", "my skills", "resume", "contact me"],
      "Projects": ["project 1", "project 2", "project 3", "project 4"],
    }
  }

  let content_data = {
    /*"channels": {
      "General": [ "about me", "my skills", "resume", "contact me"],
      "Projects": ["project 1", "project 2", "project 3", "project 4"],
    } */
     "about": {
      "Who are you?": "My name is Shuva Narayan Gautam living in Ottawa. I am a student at Carleton University pursuing a Bachelor of Computer Science. I am a an aspiring software developer and I am passionate about learning new technologies and applying them to solve real-world problems. I am currently looking for a co-op position for Summer 2023.",
    },
    "skills": {
      "Languages": "Python, Java, C, C++, JavaScript, HTML, CSS, SQL",
      "Frameworks": "React, Django, Flask, Bootstrap, Tailwind CSS",
      "Tools": "Git, GitHub, VS Code, PyCharm, IntelliJ, Eclipse, Jupyter Notebook, MySQL Workbench, Postman, Figma, Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe After Effects",
    }, 
  }

  return (
    <div className='flex'>
        <SideBar />
        <ChannelBar page="Home" {...data} />
        <Content {...content_data}/>
    </div>
  )
}