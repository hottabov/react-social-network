import s from "./Post.module.scss";


const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.wrapper}>
        <div className={s.picture}>
          <img className={s.img} src="https://picsum.photos/200" alt=""/>
        </div>
        <div className={s.content}>
          <div className={s.message}>
            {props.message}
          </div>
          <div className={s.message__footer}>
            <div className={s.likes}>
              <div className={s.likes__heart}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.39">
                  <path
                    d="M60.83 17.18c8-8.35 13.62-15.57 26-17 23.17-2.64 44.44 21.08 32.74 44.43-3.33 6.65-10.11 14.56-17.61 22.32-8.23 8.52-17.34 16.87-23.72 23.2l-17.4 17.26-14.38-13.84C29.16 76.89 1 55.92 0 29.94-.63 11.74 13.73.08 30.25.29c14.76.2 21 7.54 30.58 16.89z"
                    fill={'#ed1b24'}/>
                </svg>
              </div>
              <div className={s.likes__count}>
                {props.likes}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;