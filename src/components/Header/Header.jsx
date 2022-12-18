import s from "./Header.module.scss"

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 365.386 365.386">
              <path
                d="M301.234 96.464c0 8.896-1.058 17.531-2.919 25.869-21.407-42.175-65.08-71.142-115.622-71.142-50.536 0-94.212 28.961-115.622 71.136-1.859-8.338-2.916-16.973-2.916-25.869C64.155 67.194 74.78 31.051 92.354 0 52.731 46.147 26.863 115.292 26.863 167.669c0 68.494 44.205 126.614 105.633 147.517l50.197 50.2 50.2-50.2c61.423-20.902 105.63-79.022 105.63-147.517 0-52.377-25.856-121.522-65.488-167.657 17.57 31.039 28.199 67.188 28.199 96.452z"
                fill="#54749A"/>
            </svg>
          </div>

          <div className={`${s.burger} active`}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;