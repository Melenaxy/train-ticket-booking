import './Subscription.css'

export const Subscription = () => {
    return (
        <form className='subscription'>
            <h2 className='subscription-header'>Подписка</h2>
            <label className='sub-email' htmlFor='subemail'>Будьте в курсе событий</label>
            <div className='sub-email-container'>
                <input className='subscription-email' type='text' id='subemail' placeholder='e-mail'></input>
                <button className='subscription-btn' type='button'>отправить</button>
            </div>
            <h2 className='socials-header'>Подписывайтесь на нас</h2>
            <ul className='socials-container'>
                <li class="socials-item">
                    <a href="#0" class="socials-item-link youtube">
                        <span class="visually-hidden">Профиль компании в Youtube</span>
                    </a>
                </li>
                <li class="socials-item">
                    <a href="#0" class="socials-item-link linkedin">
                        <span class="visually-hidden">Профиль компании в Linkedin</span>
                    </a>
                </li>
                <li class="socials-item">
                    <a href="#0" class="socials-item-link google">
                        <span class="visually-hidden">Профиль компании в Google</span>
                    </a>
                </li>
                <li class="socials-item">
                    <a href="#0" class="socials-item-link facebook">
                        <span class="visually-hidden">Профиль компании в Facebook</span>
                    </a>
                </li>
                <li class="socials-item">
                    <a href="#0" class="socials-item-link twitter">
                        <span class="visually-hidden">Профиль компании в Twitter</span>
                    </a>
                </li>
            </ul>

        </form>
    )
}
