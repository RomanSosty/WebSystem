import {useLocation} from "react-router-dom";
import "./TkJoyPage.css"
import Post, {PostProps} from "../components/Post.tsx";
import PostHeader from "../components/PostHeader.tsx";
import React, {useEffect, useState} from "react";

const PrirodovedaPage: React.FC = () => {
    const location = useLocation();
    const {roles} = location.state || {};
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:8080/allPostByClub?club=PRIRODOVEDA', {
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
                    <h1>Oddělení přírodovědy</h1>
                    <p>Vedoucí oddělení Bc.Adam Bura</p>
                    <p>734 463 872, bura.adam@seznam.cz</p>
                </div>
                <div>
                    <h2>O nás</h2>
                    <p>
                        Oddělení přírodovědy poskytuje, již od otevření nové budovy Domu dětí a mládeže Orlová.
                        v roce 1990, dětem možnost nahlédnout do světa přírodních věd.
                        Hlavním lákadlem pro děti je svět zoologie a botaniky, kde na ně na velkém prostoru pěti
                        místností
                        čeká doslova „celý svět“.
                    </p>
                    <p>
                        V převážně biotopově zařízených expozicích mohou vidět více než 100 taxonů živočichů.
                        Od drobných bezobratlých přes tropické ryby a obojživelníky, populární velké želvy
                        a hady až po oblíbené domácí i divoké formy savců. Na většině míst se pak děti setkají také s tropickými rostlinami.  Vše je doplněno moderně vybavenou učebnou,
                        kde se děti, ať už v zájmových útvarech nebo při návštěvě školských zařízení
                        na vzdělávacích programech, mohou dozvědět více o životě zvířat, jejich vývoji, systematice, ekologii a etologii, ale také o aktuálních problémech životního prostředí.
                        Další částí oddělení je také technická sekce, kde si děti mohou
                        v taktéž moderně vybavené učebně vyzkoušet fungování robotiky a 3D tisku!
                    </p>
                </div>
            </div>
            <div className="posts-section">
                <PostHeader title="Aktuality" roles={roles} page="PRIRODOVEDA"/>
                <div className="posts-container">
                    {posts.map((post, index) => (
                        <Post title={post.title} content={post.content} createdAt={post.createdAt} key={index}
                              postId={post.postId} role={roles} page="PRIRODOVEDA"/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PrirodovedaPage