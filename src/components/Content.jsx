import TopNav from "./TopNav";
import icon from "../assets/profile_icon.png";
import { useState } from "react";

const discord_icon = "https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png";
const Content = (data) => {
    //const [content_data, setContent] = useState(data.about);
    let content_data = data.channels;
    console.log(content_data);
    return (
        <div className="content">
            <TopNav />
            {Object.keys(content_data).map((key) => (
                <div className="content-list">
                    <Post 
                        name = "viewr"
                        time = "2 hours ago"
                        text = {key}
                        img = {discord_icon}
                    />
                    <Post 
                        name = "Shuva Gautam"
                        time = "2 hours ago"
                        text = {content_data[key]}
                        img = {icon}
                    />
                </div>
            ))}
        </div>
        

            /*<div className="content">
                <TopNav />
                <div className="content-list">
                    <Post 
                        name = "Shuva Gautam"
                        time = "2 hours ago"
                        text = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    />
                    <Post 
                        name = "Tailwind CSS"
                        time = "2 hours ago"
                        text = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    />
                </div>
            </div> */
    )
}

const Post = ({ name, time, text, img }) => (
    <div className="post">
        <div className="avatar-wrap">
            <img src={img} alt="avatar" className="avatar" />
        </div>
        <div className="post-content">
            <div className="post-writer">
                {name}
                <small className="post-time">
                    {time}
                </small>
            </div>
            <div className="post-text">
                {text}
            </div>
        </div>
    </div>
)

export default Content;
