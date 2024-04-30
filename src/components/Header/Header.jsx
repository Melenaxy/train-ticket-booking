import './Header.css'
import { HeaderNavigation } from './HeaderNavigation'
import { TicketsSearchForm } from './TicketsSearchForm'

export const Header = () => {
    return (
        <header className='header'>
            <HeaderNavigation />
            <TicketsSearchForm />
        </header>
    )
}
