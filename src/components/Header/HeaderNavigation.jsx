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
          <li className='nav-menu-item'>Отзывы</li>
          <li className='nav-menu-item'>Контакты</li>
        </ul>
      </nav>
    </>
  )
}
