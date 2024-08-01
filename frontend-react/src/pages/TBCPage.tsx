import {useLocation} from "react-router-dom";
import "./TkJoyPage.css"
import Post, {PostProps} from "../components/Post.tsx";
import PostHeader from "../components/PostHeader.tsx";
import React, {useEffect, useState} from "react";

const TBCPage: React.FC = () => {
    const location = useLocation();
    const {roles} = location.state || {};
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:8080/allPostByClub?club=TBC', {
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
                    <h1>Taneční klub To be continued</h1>
                    <p>Vedoucí oddělení Dagmar Šurečková</p>
                    <p>731 177 824, sureckova@ddm-orlova.cz</p>
                </div>
                <div>
                    <h2>O nás</h2>
                    <p>
                        Taneční crew To be continued (TBC) vznikla v roce 2010 během letních prázdnin,
                        kdy jsme si jako partička přátel řekli, že chceme tvořit i jiné věci než, na které jsme byli doposud zvyklí. Vždy nás zajímal taneční styl streetdance,
                        který nabízí širokou škálu stylů jako je například (housedance, lockin, popin, dance hall, new style a mnoho dalších).</p>
                    <p>
                        Oficiálně jsme začali pracovat k 1.9.2010 pod školským zařízením DDM Orlová,
                        kde si nás pod svá křídla vzal taneční klub KMIT.
                        Tímto také vznikl název TK KMIT & TBC.
                        V roce 2015 jsme se osamostatnili od tanečního klubu Kmit.<br/>
                        Název našeho klubu je již pouze TO BE CONTINUED.<br/>
                        Taneční oddělení streetdance nebo-li (TBC) vede slečna Dagmar Šurečková.
                    </p>
                    <p> Rozdělujeme členy podle věku do kategorií:<br/>
                        - Mini kategorie (3-6 let)<br/>
                        - Dětská kategorie (7-11 let)<br/>
                        - Juniorská kategorie (11-14 let)<br/>
                        - Hlavní kategorie (od 15 let)<br/>
                        - Dospělí (od 18 let)
                    </p>
                    <p> Členové soutěžních skupin reprezentují DDM Orlová a město Orlová na tanečních soutěžích po celé
                        ČR.
                        Také vystupují na různých společenských akcích pořádanými DDM Orlová,
                        městem Orlová a jinými organizacemi.
                    </p>
                </div>
            </div>
            <div className="posts-section">
                <PostHeader title="Aktuality" roles={roles} page="TBC"/>
                <div className="posts-container">
                    {posts.map((post, index) => (
                        <Post title={post.title} content={post.content} createdAt={post.createdAt} key={index} postId={post.postId} role={roles} page="TBC"/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TBCPage