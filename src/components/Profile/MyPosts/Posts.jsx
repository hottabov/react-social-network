import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const Posts = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  let postElements = props.postsData.map(elem =>
    <Post
    id={elem.id}
    message={elem.message}
    likes={elem.likes}
  />)

  let newPostElement = React.createRef();

  return (
    <div className={s.wrapper}>
      <div className={s.addPost}>
        <div className={s.textarea__wrapper}>
          <textarea className={s.textarea}
            ref={newPostElement}
            name="" id=""
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={addPost} className={s.button__addpost}>
            <span>Send</span>
            <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg"><path d="M3.79 2.772 24.86 12.85a1.25 1.25 0 0 1 0 2.255L3.79 25.183a1.25 1.25 0 0 1-1.746-1.457l2.108-7.728a.5.5 0 0 1 .415-.364l10.21-1.387a.25.25 0 0 0 .195-.149l.018-.063a.25.25 0 0 0-.157-.268l-.055-.014-10.2-1.387a.5.5 0 0 1-.414-.364l-2.12-7.773A1.25 1.25 0 0 1 3.79 2.772z" fill="#fff" /></svg>
          </button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default Posts;
