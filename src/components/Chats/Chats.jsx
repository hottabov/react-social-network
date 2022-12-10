import s from './Chats.module.scss';
import Message from "./Message/Message";
import Participants from "./Participants/Participants";
import React from "react";
// import Post from "../Profile/MyPosts/Post/Post";

const Chats = (props) => {

  let participantsElements = props.participantsData.map(elem => <Participants id={elem.id} name={elem.name}/>)
  let messagesElements = props.messagesData.map(elem => <Message id={elem.id} message={elem.message}/>)

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div className={s.wrapper}>

      <div className={s.chats}>
        <ul className={s.participants}>
          {participantsElements}
        </ul>
        <div className={s.messagesWrap}>
          <ul className={s.messages}>
            {messagesElements}
          </ul>
          <div className={s.addMessage}>
            <div>
          <textarea
            ref={newMessageElement}
            name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
              <button onClick={addMessage} className={s.buttonAdd}>
                Send message
              </button>
            </div>
          </div>
        </div>


      </div>



    </div>


  );
}

export default Chats;