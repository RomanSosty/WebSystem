import React from "react";

interface PostProps{
    title: string;
    content?: string;
    createdAt: string;
}

const Post: React.FC<PostProps> = ({title, content, createdAt}) => {
    return <div className="post-box">
        <h3>{title}</h3>
        <p>
            {content}
        </p>
        <p>{createdAt}</p>
    </div>
}

export default Post;