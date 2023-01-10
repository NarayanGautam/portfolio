
import '../App.css'
import SideBar from "../components/SideBar"
import ChannelBar from "../components/ChannelBar"
import Content from "../components/Content"

export default function Home() {
  return (
    <div className='flex'>
        <SideBar />
        <ChannelBar />
        <Content />
    </div>
  )
}