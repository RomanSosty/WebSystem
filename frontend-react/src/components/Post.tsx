import React from "react";
import {format} from 'date-fns';
import './Post.css'
import Button from "./Button.tsx";

export interface PostProps {
    title: string;
    content?: string;
    createdAt: string;
    postId: number;
    role?: never;
    page?: string;
}

const Post: React.FC<PostProps> = ({title, content, createdAt, role, postId, page}) => {
    const postContent = content ?? '';
    const sentences = postContent.split('. ').filter(sentences => sentences.trim() !== '');
    const formattedDate = createdAt ? format(new Date(createdAt), 'dd.MM.yyyy HH:mm') : 'Neznáme datum';

    const deletePost = async () => {
        try {
            const response = await fetch('http://localhost:8080/deletePost?id='+ postId, {
                method: 'GET'
            });

            if (response.ok) {
                window.location.reload();
            } else {
                console.error(response);
            }

        } catch (error) {
            console.error("Error during fetch posts")
        }
    }

    return <div className="post-box">
        <h3>{title}</h3>
        {sentences.map((sentence, index) => (
            <p key={index}>{sentence.trim()}.</p>
        ))}
        <p className="post-created-at">{formattedDate}</p>
        <div className="delete-button">
            {role == page ? (
                <Button title="Smazat" onClick={deletePost}></Button>
            ) : (
                <div></div>
            )}
        </div>
    </div>
}

export default Post;