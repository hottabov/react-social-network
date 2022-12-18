import s from "./Profile.module.scss";
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return (
    <div>
      <div className={s.profile}>
        <ProfileInfo/>
        <Posts
          dispatch={props.dispatch}
          postsData={props.profilePage.postsData}
          newPostText={props.profilePage.newPostText}
          // addPostToState={props.addPostToState}
          // updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  )
}

export default Profile;