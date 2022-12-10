import s from "./Profile.module.scss";
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

  return (
    <div>
      <div className={s.profile}>

        <ProfileInfo/>
        <Posts
          demoFunction={props.demoFunction}
          postData={props.postData}
          addPostToState={props.addPostToState}
        />



      </div>
    </div>
  )
}

export default Profile;