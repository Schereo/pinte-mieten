import { Link } from 'react-router-dom';
import logo from '../../assets/pinte_logo.png';
import { Image } from '../image';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white  rounded-box w-52"
                        >
                            <li>
                                <Link to="/">Mieten</Link>
                            </li>
                            <li>
                                <a>Ausleihen</a>
                            </li>
                            <li>
                                <Link to="/login">Anmelden</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost">
                        <Image src={logo} alt="Pinte Logo" width="w-12" height="h-12"></Image>
                    </a>
                </div>
                <div className="navbar-end"></div>
            </div>
            {children}
        </>
    );
}
