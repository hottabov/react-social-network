import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";



const Posts = (props) => {

  let postElements = props.postData.map(elem => <Post id={elem.id} message={elem.message} likes={elem.likes}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPostToState(text);
  }



  return (
    <div className={s.wrapper}>
      <div className={s.addPost}>
        <div>
          <textarea
            ref={newPostElement}
            name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button onClick={addPost} className={s.buttonAdd}>
            Add post
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
