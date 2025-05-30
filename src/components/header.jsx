import gameLogo from '../assets/fowlplaylogotransbg.png';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img src={gameLogo} alt="Fowl Play Logo" className="logo"/>
            </div>
        </header>
    );
}

export default Header;