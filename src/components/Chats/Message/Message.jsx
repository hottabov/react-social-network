import s from './Messsage.module.scss';

const Message = (props) => {

  return (
    <li className={s.message}>
      <div className={s.wrap}>
        {props.message}
      </div>
    </li>
  )
}

export default Message;