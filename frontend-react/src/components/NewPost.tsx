import React, {useState} from "react";
import './NewPost.css'

interface NewPostProps {
    closeModal: () => void;
}

interface NewPostData {
    title: string,
    content: string,
    club?: string | null
    username?: string | null
}

const NewPost: React.FC<NewPostProps> = ({closeModal}) => {
    const [postData, setPostData] = useState<NewPostData>({
        title: '',
        content: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setPostData((prevDate) => ({
            ...prevDate,
            [name]: value,
            club: localStorage.getItem("user_role"),
            username: localStorage.getItem("user_name")
        }));
    }

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/addPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                closeModal();
                window.location.reload()
            } else {
                console.error(response);
                closeModal()
            }
        } catch (error) {
            console.error('Error during login:', error);
            closeModal()
        }
        closeModal()
    }

    return (
        <div className="newPost-box">
            <form className="newPost-form" onSubmit={handleSave}>
                <h2>Nový příspěvek</h2>
                <div>
                    <input
                        placeholder="Nadpis"
                        type="text"
                        name="title"
                        value={postData.title}
                        onChange={handleChange}
                    />
                </div>
                <textarea
                    placeholder="Příspěvek"
                    id="content"
                    name="content"
                    value={postData.content}
                    onChange={handleChange}
                />
                <div className="button-box">
                    <button type="submit">
                        Uložit
                    </button>
                    <button onClick={closeModal}>
                        Zavřít
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewPost;