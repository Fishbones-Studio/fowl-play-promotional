import gameLogo from '../assets/fowlplaylogotransbg.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={gameLogo} alt="Fowl Play Logo" className="logo"/>
                    <span>Studio FishBones</span>
                </div>
                <div className="footer-links">
                    <a href="https://studio-fishbones.itch.io/fowl-play" target="_blank" rel="noopener noreferrer">Itch.io</a>
                    <a href="https://www.youtube.com/channel/UCHuoUuX4QLNywVWbs_sDbJQ" target="_blank" rel="noopener noreferrer">YouTube</a>
                    <a href="https://docs.studiofishbones.com/" target="_blank" rel="noopener noreferrer">Documentation</a>
                </div>
                <p className="copyright">© {new Date().getFullYear()} Studio Fishbones. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;