import ReactDOM from 'react-dom/client'
import './style.css'

function Header() {
    return (
        <header>
            <nav className='nav'>
                <img className='nav-logo' src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png" alt="reactlogo2"/>
                <ul className='nav-items'>
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className='footer'>
            <small>© 2023 Ibanez development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div className='mainCon'>
            <h1>🔥Fun facts about React!!!🔥</h1>
            <ol className='mainCon-items'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walker</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Maintained by Meta</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render (<Page/>)
