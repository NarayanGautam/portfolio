import TopNav from "./TopNav";

const Content = () => {
    return (
        <div className="content">
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
        </div>
    )
}

const Post = ({ name, time, text }) => (
    <div className="post">
        <div className="avatar-wrap">
            <img src="https://avatars.dicebear.com/api/open-peeps/1.svg" alt="avatar" className="avatar" />
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
