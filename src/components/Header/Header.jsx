import './Header.css'
import { HeaderNavigation } from './HeaderNavigation'
import { TicketsSearchForm } from './TicketsSearchForm'

export const Header = () => {
    return (
        <div className='header'>
            <HeaderNavigation />
            <TicketsSearchForm />
        </div>

    )
}
