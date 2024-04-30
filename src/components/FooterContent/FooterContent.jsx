import './FooterContent.css'
import { Contacts } from './Contacts/Contacts'
import { Subscription } from './Subscription/Subscription'

export const FooterContent = () => {
    return (
        <footer className='footer'>
            <div className='footer-container-1'>
                <Contacts />
                <Subscription />
            </div>
            <div className='footer-container-2'>
                <a href='#top'>
                    <div className='footer-logo'>Лого</div>
                </a>
                <a href='#top'>
                    <div className='arrow-up'></div>
                </a>
                <div className='info'>2018 WEB</div>
            </div>
        </footer>
    )
}
