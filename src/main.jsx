import ReactDOM from 'react-dom/client'
import './style.css'
import Header from './Header'
import MainContent from './MainContent'

function Footer() {
    return (
        <footer className='footer'>
            <small>© 2023 Ibanez development. All rights reserved.</small>
        </footer>
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
