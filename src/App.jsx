import './App.css';
import gameLogo from './assets/fowlplaylogotransbg.png';
import gameArt from './assets/square fowlplay.png';
import { useState, useRef } from 'react';

// Import game screenshots
import screenshot1 from './assets/screenshots/Godot Engine Screenshot 2025.05.15 - 16.12.23.84.png';
import screenshot2 from './assets/screenshots/Fowl-play-0.0.2-windows Screenshot 2025.05.29 - 19.35.12.74.png';
import screenshot3 from './assets/screenshots/Godot Engine Screenshot 2025.05.15 - 16.12.57.66.png';
import screenshot4 from './assets/screenshots/Godot Engine Screenshot 2025.05.18 - 00.15.57.71.png';
import screenshot5 from './assets/screenshots/Fowl-play-0.0.2-windows Screenshot 2025.05.29 - 19.35.56.50.png';
import screenshot6 from './assets/screenshots/Fowl-play-0.0.2-windows Screenshot 2025.05.29 - 19.35.22.74.png';
import screenshot7 from './assets/screenshots/Fowl-play-0.0.2-windows Screenshot 2025.05.29 - 19.36.07.31.png';
import screenshot8 from './assets/screenshots/Fowl-play-0.0.2-windows Screenshot 2025.05.29 - 19.36.26.39.png';

function App() {
    // State variables for managing screenshots and mouse position
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const gameArtRef = useRef(null);

    // Array of screenshots with their respective alt text
    const screenshots = [
        { src: screenshot1, alt: "Gameplay screenshot 1" },
        { src: screenshot2, alt: "Gameplay screenshot 2" },
        { src: screenshot3, alt: "Gameplay screenshot 3" },
        { src: screenshot4, alt: "Gameplay screenshot 4" },
        { src: screenshot5, alt: "Gameplay screenshot 5" },
        { src: screenshot6, alt: "Gameplay screenshot 6" },
        { src: screenshot7, alt: "Gameplay screenshot 7" },
        { src: screenshot8, alt: "Gameplay screenshot 8" }
    ];

    // Function to handle mouse movement and update the mouse position state
    const handleMouseMove = (e) => {
        if (gameArtRef.current) {
            const rect = gameArtRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        }
    };

    // Function to calculate the transform image container based on mouse position
    const getTransformStyle = () => {
        if (!gameArtRef.current || !isHovering) return {};

        const containerWidth = gameArtRef.current.clientWidth;
        const containerHeight = gameArtRef.current.clientHeight;
        const xPercentage = (mousePosition.x / containerWidth) * 100;
        const yPercentage = (mousePosition.y / containerHeight) * 100;

        const xOffset = ((xPercentage - 50) / 3).toFixed(2);
        const yOffset = ((yPercentage - 50) / 6).toFixed(2);

        return {
            transform: `perspective(1000px) rotateY(${xOffset}deg) rotateX(${-yOffset}deg) scale(1.03)`,
            transition: 'transform 0.1s ease-out'
        };
    };

    // Functions to navigate through the screenshots
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
        );
    };

    const selectImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="app">
            <header className="header">
                <div className="header-content">
                    <img src={gameLogo} alt="Fowl Play Logo" className="logo"/>
                </div>
            </header>

            <main className="content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h2>Enter the Underground Chicken Fight Arenas</h2>
                            <p className="tagline">A brutal roguelike brawler where you train, upgrade, and fight
                                mutated chickens in illegal underground arenas</p>
                            <div className="cta-buttons-headers">
                                <a
                                    href="https://studio-fishbones.itch.io/fowl-play"
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Play on Itch.io
                                </a>
                                <a
                                    href="https://docs.studiofishbones.com/"
                                    className="btn btn-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Game Documentation
                                </a>
                            </div>
                        </div>
                        <div className="hero-media">
                            <div className="trailer-container">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                    title="Fowl Play Trailer"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="trailer-iframe">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Game Story Section */}
                <section className="game-story-section">
                    <div className="section-header">
                        <h2>The World of Fowl Play</h2>
                        <div className="divider"></div>
                    </div>
                    <div className="story-content">
                        <div
                            className="game-art-container"
                            ref={gameArtRef}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => {
                                setIsHovering(false);
                                setMousePosition({x: 0, y: 0});
                            }}
                        >
                            <img
                                src={gameArt}
                                alt="Fowl Play Game Art"
                                className="game-art"
                                style={getTransformStyle()}
                            />
                        </div>
                        <div className="game-story">
                            <p>
                                The world of Fowl Play is set in a grim and unsettling near future where food
                                resources have become increasingly scarce and questionable. Widespread environmental
                                decay and compromised food chains mean you can no longer trust the origin and safety
                                of food. In this image of anxiety and desperation, mutated chicken meat has emerged
                                as a highly sought-after, albeit controversial, delicacy among the wealthy elite.
                            </p>
                            <p>
                                Mutated chicken meat has become a prized delicacy among the elites. To cash in on
                                this craze, Poultry Men from around the world gather to host illegal underground
                                chicken fight arenas, pushing their chickens to their absolute boundaries. These
                                arenas are dangerous, lawless places, often situated in repurposed industrial zones
                                or forgotten sewer systems. The arenas are harsh and unforgiving environments,
                                designed to push both chickens and their Poultry Men to their breaking points, all
                                for the entertainment of a hidden, wealthy audience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Gameplay Section */}
                <section className="gameplay-section">
                    <div className="section-header">
                        <h2>Gameplay</h2>
                        <div className="divider"></div>
                    </div>
                    <div className="gameplay-content">
                        <p className="gameplay-description">
                            <strong>Fowl Play</strong> is a single-player game where you are the Poultry Man, responsible for making your chicken stronger and preparing it for brutal arena battles.
                            Choose the right gear, upgrade your fighter’s abilities, and send your chicken into the arena to face powerful enemies.
                        </p>
                        <p className="gameplay-description">
                            Win battles to earn rewards, unlock tougher opponents, and push your chicken to its limits. Conquer the arena and prove you are the best poultry handler out there.
                        </p>



                    <div className="screenshot-carousel">
                        <button className="carousel-button prev" onClick={prevImage} aria-label="Previous">
                            ❮
                        </button>
                        <div className="main-screenshot-container">
                            <img
                                src={screenshots[currentImageIndex].src}
                                alt={screenshots[currentImageIndex].alt}
                                className="main-screenshot"
                            />
                        </div>
                        <button className="carousel-button next" onClick={nextImage} aria-label="Next">
                            ❯
                        </button>
                    </div>

                    <div className="thumbnail-container">
                        {screenshots.map((screenshot, index) => (
                            <div
                                key={index}
                                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => selectImage(index)}
                            >
                                <img
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    className="thumbnail-image"
                                />
                            </div>
                        ))}
                    </div>
        </div>
</section>

{/* Features Section */
}
    <section className="features-section">
        <div className="section-header">
            <h2>Key Features</h2>
            <div className="divider"></div>
        </div>
        <div className="features-grid">
            <div className="feature-card">
                <h3>Brutal Combat</h3>
                <p>Do whatever it takes to dominate in fast-paced, skill-based chicken fights, use ruthless
                                attacks, clever tactics, and brutal special moves to win the arena.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Progression System</h3>
                            <p>Upgrade your chicken's stats, unlock new abilities, and customize your fighting
                                style.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Arena</h3>
                            <p>Enter the arena to fight against your opponent in high-stakes, no-rules combat.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Mutated Bosses</h3>
                            <p>Face off against grotesque mutated bosses, each with deadly powers and unpredictable
                                fighting styles.</p>
                        </div>
                    </div>

                </section>

                {/* Final CTA Section */}
                <section className="final-cta">
                    <h2>Ready to Enter the Arena?</h2>
                    <p>Download now and start your journey as a Poultry Man in the brutal underground chicken fight
                        scene.</p>
                    <div className="cta-buttons">
                        <a
                            href="https://studio-fishbones.itch.io/fowl-play"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Play on Itch.io
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCHuoUuX4QLNywVWbs_sDbJQ"
                            className="btn btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Watch More on YouTube
                        </a>
                    </div>
                </section>
            </main>

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
        </div>
    );
}

export default App;