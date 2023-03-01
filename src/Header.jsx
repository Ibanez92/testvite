import ReactLogo from "../react-logo.png"

export default function Header() {
    return (
        <header>
            <nav className='nav'>
                <img className='nav-logo' src={ReactLogo} alt="reactlogo2sd"/>
                <ul className='nav-items'>
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}