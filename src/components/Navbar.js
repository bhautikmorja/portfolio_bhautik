'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const currentRoute = usePathname();

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link href="/" className={`navbar-link ${currentRoute === '/' ? 'active' : ''}`}>
                            About
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/experience" className={`navbar-link ${currentRoute === '/experience' ? 'active' : ''}`}>
                            Experience
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/portfolio" className={`navbar-link ${currentRoute === '/portfolio' ? 'active' : ''}`}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/services" className={`navbar-link ${currentRoute === '/services' ? 'active' : ''}`}>
                            Services
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/contact" className={`navbar-link ${currentRoute === '/contact' ? 'active' : ''}`}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
