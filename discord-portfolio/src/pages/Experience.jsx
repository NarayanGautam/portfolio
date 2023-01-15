import SideBar from "../components/SideBar"
import ChannelBar from "../components/ChannelBar"
import Content from "../components/Content"

export default function Experience() {
  let data = {
    "channels": {
      "Work Experience": ["Teaching Assistant", "UI/UX Design"],
      "Projects": ["Full Stack Art Gallery", "Discord Themed Portfolio", "Pokemon Query Program"],
    }
  }

  return (
    <div className='flex'>
        <SideBar />
        <ChannelBar page="Experience" {...data}/>
        <Content />
    </div>
  )
}
