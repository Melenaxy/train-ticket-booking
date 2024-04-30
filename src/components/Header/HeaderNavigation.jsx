import './HeaderNavigation.css'

export const HeaderNavigation = () => {
  return (
    <>
      <div className='logo'>Лого</div>
      <nav className='header-nav'>
        <ul className='nav-menu'>
          <li className='nav-menu-item'>
            <a href='#about'>О нас</a>
          </li>
          <li className='nav-menu-item'>
            <a href='#advantages'>Как это работает</a>
          </li>
          <li className='nav-menu-item'>
            <a href='#reviews'>Отзывы</a>
          </li>
          <li className='nav-menu-item'>
            <a href='#contacts'>Контакты</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
