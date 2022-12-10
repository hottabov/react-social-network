import s from './Participants.module.scss';
import {NavLink} from "react-router-dom";


const Participants = (props) => {

  let path = "/messages/" + props.id;

  return (
      <li className={s.participants}>
        <NavLink to={path} className={
          ({ isActive }) => isActive ? `${s.participant} ${s.active}` : `${s.participant}`
        }>
          {props.name}
        </NavLink>
      </li>
  );
}

export default Participants;
