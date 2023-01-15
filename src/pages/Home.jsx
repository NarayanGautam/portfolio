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

  return (
    <div className='flex'>
        <SideBar />
        <ChannelBar page="Home" {...data} />
        <Content />
    </div>
  )
}