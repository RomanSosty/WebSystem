import React from "react";
import Button from "./Button.tsx";

interface PostHeaderProps {
    title: string;
    roles?: never;
}

const PostHeader: React.FC<PostHeaderProps> = ({title, roles}) => {
    return (<div className="posts-header">
        <h1>{title}</h1>
        {roles == "ROLE_JOY" ? (
            <Button title="Přidat příspěvek" path="/tkjoy"></Button>
        ) : (
            <div></div>
        )}
    </div>)
}

export default PostHeader;