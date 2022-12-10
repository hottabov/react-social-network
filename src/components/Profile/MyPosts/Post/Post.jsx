import React from "react";
import s from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.picture}>
        <img className={s.img} src="https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg" alt=""/>
      </div>
      <div className={s.content}>
        {props.message}
      </div>
      <div className={s.likes}>
        {props.likes}
      </div>
    </div>
  )
}

export default Post;