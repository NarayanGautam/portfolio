import TopNav from "./TopNav";
import icon from "../assets/profile_icon.png";
import { useState } from "react";

const discord_icon = "https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png";

const Content = (data) => {
    const [content_data, setContent] = useState(data.skills);
    const [time, setTime] = useState(Math.floor(Math.random() * 30 + 30));
    
    return (
        <div className="content">
            <TopNav />
            <div className="content-list">
            {Object.keys(content_data).map((key) => (
                //setTime(time-2),
                <>
                <Post 
                    name = "Viewer"
                    msgtime = {time + " minutes ago"}
                    text = {key}
                    img = {discord_icon}
                />
                <Post 
                    name = "Shuva Gautam"
                    msgtime = {time -2 + " minutes ago"}
                    text = {content_data[key]}
                    img = {icon}
                    />
                </>
                ))}
            </div>
        </div>
    )
}


const Post = ({ name, msgtime, text, img }) => (
    text.split(/[./!]/).map((sentence) => (
        <div className="post">
            <div className="avatar-wrap">
                <img src={img} alt="avatar" className="avatar" />
            </div>
            <div className="post-content">
                <div className="post-writer">
                    {name}
                    <small className="post-time">
                        {msgtime}
                    </small>
                </div>
                <div className="post-text">
                    {sentence}
                </div>
            </div>
        </div>
    ))
)

export default Content
