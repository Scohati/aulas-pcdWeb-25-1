import './headerStyle.css'

function Header() {

    return (
        <header className="header-container">
            <h2>Logo</h2>
            <nav className="header-nav">
                <ul className='header-link-list'>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header