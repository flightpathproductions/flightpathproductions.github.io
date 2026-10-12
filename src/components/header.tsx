import { Link } from 'react-router-dom';
import MailingList from './MailingList';


export default function Header() {
    const logo = '/img/logo.png';
    return (
        <header className="py-3 sm:py-4 flex flex-col gap-y-3">
            <nav className="flex flex-wrap items-center text-white justify-center py-3 gap-x-4 gap-y-3 text-center sm:gap-x-6 h-26">
                <Link to="/">About</Link>
                <Link to="/crew">Crew</Link>
                <picture className="order-first basis-full sm:order-none sm:basis-auto">
                    <img className="mx-auto block h-20 w-auto max-w-full object-contain" src={logo} alt="Flight Path Productions logo" />
                </picture>
                <Link to="/press">Press</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <MailingList />
        </header>
    );
}