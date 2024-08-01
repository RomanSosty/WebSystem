import Button from "./Button.tsx";
import React, {useState} from "react";
import Modal from 'react-modal';
import NewPost from "./NewPost.tsx";

interface PostHeaderProps {
    title: string;
    roles?: never;
    page: string;
}

Modal.setAppElement('#root');

const PostHeader: React.FC<PostHeaderProps> = ({title, roles, page}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (<div className="posts-header">
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Nový příspěvek"
            className="modal-new-post"
        >
            <NewPost closeModal={closeModal}/>
        </Modal>
        <h1>{title}</h1>
        {roles == page ? (
            <Button title="Přidat příspěvek" onClick={openModal}></Button>
        ) : (
            <div></div>
        )}
    </div>)
}

export default PostHeader;