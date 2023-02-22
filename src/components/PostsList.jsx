import { useState } from "react";

import Post from "./Post";
import Modal from "./Modal";
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList({isModalVisible, onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }

    /*
    
    let modalContent;

    if (modalIsVisible) {
        modalContent = (
            <Modal onClose={hideModalHandler}>            
                <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            </Modal> );
    }
    */

    return (
        <>
            {isModalVisible && (
            <Modal onClose={onStopPosting}>            
                <NewPost 
                    onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler}
                    onCancel={onStopPosting}
                 />
            </Modal> )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Manuel" body="Voir le cours complet!" />
            </ul>
        </>
    );
}

export default PostsList;