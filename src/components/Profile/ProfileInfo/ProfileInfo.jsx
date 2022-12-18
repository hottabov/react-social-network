import s from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <div className={s.picture}>
        <img className={s.img} src="https://picsum.photos/968/300?random" alt=""/>
      </div>

      <div className={s.content}>
        <div className={s.about}>
          <div className={s.avatar}>
            <img className={s.avatar_img}
                 src="https://picsum.photos/200?random"
                 alt=""/>
          </div>
          <div className={s.bio}>
            <div className={s.bio__name}>
              Omar Hayam
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;