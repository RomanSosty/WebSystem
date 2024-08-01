import {useLocation} from "react-router-dom";
import "./TkJoyPage.css"
import Post, {PostProps} from "../components/Post.tsx";
import PostHeader from "../components/PostHeader.tsx";
import React, {useEffect, useState} from "react";

const TkJoyPage: React.FC = () => {
    const location = useLocation();
    const {roles} = location.state || {};
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:8080/allPostByClub?club=TKJOY', {
                    method: 'GET'
                });

                if (response.ok) {
                    setPosts(await response.json())
                } else {
                    console.error(response);
                }

            } catch (error) {
                console.error("Error during fetch posts")
            }
        }

        fetchPosts();
    }, [])

    return (<div>
            <div className="page-main-text-section">
                <div>
                    <h1>Taneční klub Joy</h1>
                    <p>Vedoucí oddělení Kateřina Šostoková</p>
                    <p>603 154 426, sostokova@ddm-orlova.cz</p>
                </div>
                <div>
                    <h2>O nás</h2>
                    <p>
                        Taneční klub Joy byl založen v září roku 2015. Zakladatelkou a hlavní vedoucí klubu je Kateřina
                        Šostoková.</p>
                    <p>
                        Věnujeme se tanečnímu stylu disco dance a show dance, tanečníky rozdělujeme do skupin dle
                        výkonnostní třídy a věku.
                        V současné době působí v našem klubu téměř 200 dětí ve věku od 3 - 25 let.
                        Taneční klub Joy má za svá léta působení na kontě mnoho tanečních úspěchů,
                        největší úspěch je pro nás ovšem spokojenost a radost z tance dítěte.
                    </p>
                </div>
            </div>
            <div className="posts-section">
                <PostHeader title="Aktuality" roles={roles} page="TKJOY"/>
                <div className="posts-container">
                    {posts.map((post, index) => (
                        <Post title={post.title} content={post.content} createdAt={post.createdAt} key={index} postId={post.postId} role={roles} page="TKJOY"/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TkJoyPage