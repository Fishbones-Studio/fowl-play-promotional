import { useState, useRef } from 'react';
import gameArt from '../assets/square fowlplay.png';
import screenshot1 from '../assets/screenshots/Fowl Play Windows - 0.0.91 Screenshot 2025.06.24 - 19.53.09.96.png';
import screenshot2 from '../assets/screenshots/Fowl Play Windows - 0.0.91 Screenshot 2025.06.24 - 19.53.42.76.png';
import screenshot3 from '../assets/screenshots/Fowl Play Windows - 0.0.91 Screenshot 2025.06.24 - 19.53.47.29.png';
import screenshot4 from '../assets/screenshots/Godot Engine Screenshot 2025.06.26 - 14.43.42.35.png';
import screenshot5 from '../assets/screenshots/Godot Engine Screenshot 2025.06.26 - 14.48.52.95.png';
import screenshot6 from '../assets/screenshots/Godot Engine Screenshot 2025.06.26 - 14.49.34.65.png';
import screenshot7 from '../assets/screenshots/Kouhie - test3 [SBFnGujtQhA - 853x480 - 0m29s].png';
import screenshot8 from '../assets/screenshots/Kouhie - test3 [SBFnGujtQhA - 853x480 - 0m33s].png';
import screenshot9 from '../assets/screenshots/Kouhie - test3 [SBFnGujtQhA - 853x480 - 0m41s].png';

function Main() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const gameArtRef = useRef(null);

    const screenshots = [
        { src: screenshot1, alt: "Gameplay screenshot 1" },
        { src: screenshot2, alt: "Gameplay screenshot 2" },
        { src: screenshot3, alt: "Gameplay screenshot 3" },
        { src: screenshot4, alt: "Gameplay screenshot 4" },
        { src: screenshot5, alt: "Gameplay screenshot 5" },
        { src: screenshot6, alt: "Gameplay screenshot 6" },
        { src: screenshot7, alt: "Gameplay screenshot 7" },
        { src: screenshot8, alt: "Gameplay screenshot 8" },
        { src: screenshot9, alt: "Gameplay screenshot 9" }
    ];

    const handleMouseMove = (e) => {
        if (gameArtRef.current) {
            const rect = gameArtRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        }
    };

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
        <main className="content">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h2>Enter the Underground Chicken Fight Arenas</h2>
                        <p className="tagline">A brutal roguelike brawler where you train, upgrade, and fight
                            mutated chickens in illegal underground arenas.</p>
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
                                src="https://www.youtube.com/embed/lShrljgB0SY"
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
                        Choose the right gear, upgrade your fighter's abilities, and send your chicken into the arena to face powerful enemies.
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

            {/* Features Section */}
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
                        href="https://www.youtube.com/@FowlPlayHHS"
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Watch More on YouTube
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Main;