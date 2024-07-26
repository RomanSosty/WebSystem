import React from "react";
import { format } from 'date-fns';
import './Post.css'

export interface PostProps{
    title: string;
    content?: string;
    createdAt: string;
}

const Post: React.FC<PostProps> = ({title, content, createdAt}) => {
    const postContent = content ?? '';
    const sentences = postContent.split('. ').filter(sentences => sentences.trim() !== '');
    const formattedDate = createdAt ? format(new Date(createdAt), 'dd.MM.yyyy HH:mm') : 'Neznáme datum';

    return <div className="post-box">
        <h3>{title}</h3>
            {sentences.map((sentence, index) => (
               <p key={index}>{sentence.trim()}.</p>
            ))}
        <p className="post-created-at">{formattedDate}</p>
    </div>
}

export default Post;