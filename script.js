// Game source types and configurations
const gameSourceTypes = {
    LOCAL: 'local',
    EXTERNAL_IFRAME: 'external_iframe',
    EXTERNAL_LINK: 'external_link',
    EMBED_CODE: 'embed_code'
};

// Trusted game sources for embedding
const trustedSources = [
    'itch.io',
    'newgrounds.com',
    'crazygames.com',
    'poki.com',
    'y8.com',
    'kongregate.com',
    'armor.games',
    'addictinggames.com',
    'miniclip.com',
    'play2048.co',
    'littlealchemy2.com',
    'orteil.dashnet.org'
];

// Games data array with enhanced embedding support
const gamesData = [
    {
        id: 1,
        title: "Neon Snake",
        category: "arcade",
        description: "Classic snake game with neon graphics and smooth controls",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='20' y='80' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='40' y='80' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='60' y='80' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='80' y='80' width='20' height='20' fill='%23ff00ff'/%3E%3Crect x='140' y='120' width='20' height='20' fill='%23ffff00'/%3E%3C/svg%3E",
        gameUrl: "games/snake.html",
        rating: 4.5,
        plays: 15420,
        sourceType: gameSourceTypes.LOCAL
    },
    {
        id: 2,
        title: "Neon Tetris",
        category: "puzzle",
        description: "Block-falling puzzle game with retro neon styling",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='60' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='80' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='100' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='120' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='80' y='80' width='20' height='20' fill='%23ff00ff'/%3E%3Crect x='100' y='80' width='20' height='20' fill='%23ff00ff'/%3E%3C/svg%3E",
        gameUrl: "games/tetris.html",
        rating: 4.7,
        plays: 23150,
        sourceType: gameSourceTypes.LOCAL
    },
    {
        id: 3,
        title: "Neon Pong",
        category: "arcade",
        description: "Classic pong game with glowing paddles and ball",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='20' y='70' width='10' height='60' fill='%2300ffff'/%3E%3Crect x='170' y='70' width='10' height='60' fill='%2300ffff'/%3E%3Ccircle cx='100' cy='100' r='8' fill='%23ff00ff'/%3E%3C/svg%3E",
        gameUrl: "games/pong.html",
        rating: 4.2,
        plays: 8930,
        sourceType: gameSourceTypes.LOCAL
    },
    {
        id: 4,
        title: "Neon Asteroids",
        category: "action",
        description: "Space shooter with vector graphics and neon effects",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,80 110,100 100,120 90,100' fill='%2300ffff'/%3E%3Cpolygon points='60,60 80,50 90,70 70,80' fill='%23ff00ff'/%3E%3Cpolygon points='140,140 160,130 170,150 150,160' fill='%23ffff00'/%3E%3C/svg%3E",
        gameUrl: "games/asteroids.html",
        rating: 4.6,
        plays: 12750,
        sourceType: gameSourceTypes.LOCAL
    },
    {
        id: 5,
        title: "Neon Breakout",
        category: "arcade",
        description: "Brick-breaking game with colorful neon blocks",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='40' y='40' width='30' height='15' fill='%2300ffff'/%3E%3Crect x='80' y='40' width='30' height='15' fill='%23ff00ff'/%3E%3Crect x='120' y='40' width='30' height='15' fill='%23ffff00'/%3E%3Crect x='40' y='60' width='30' height='15' fill='%23ff0080'/%3E%3Crect x='80' y='60' width='30' height='15' fill='%2300ff80'/%3E%3Crect x='120' y='60' width='30' height='15' fill='%2380ff00'/%3E%3C/svg%3E",
        gameUrl: "games/breakout.html",
        rating: 4.4,
        plays: 18200,
        sourceType: gameSourceTypes.LOCAL
    },
    {
        id: 6,
        title: "Space Invaders",
        category: "action",
        description: "Defend Earth from waves of alien invaders",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='60' y='40' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='120' y='40' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='40' y='70' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='80' y='70' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='120' y='70' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='160' y='70' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='90' y='160' width='20' height='20' fill='%2300ffff'/%3E%3C/svg%3E",
        gameUrl: "games/space-invaders.html",
        rating: 4.8,
        plays: 25600,
        sourceType: gameSourceTypes.LOCAL
    },
    {
        id: 10,
        title: "Defender",
        category: "action",
        description: "Defend the planet from alien invaders in this side-scrolling shooter",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='0' y='160' width='200' height='40' fill='%23654321'/%3E%3Cpolygon points='60,120 80,100 100,120 80,140' fill='%2300ffff'/%3E%3Cpolygon points='120,80 140,60 160,80 140,100' fill='%23ff0000'/%3E%3Cpolygon points='20,100 40,80 60,100 40,120' fill='%23ff0000'/%3E%3Cline x1='80' y1='120' x2='100' y2='100' stroke='%23ffff00' stroke-width='2'/%3E%3C/svg%3E",
        gameUrl: "games/defender.html",
        rating: 4.3,
        plays: 9640,
        sourceType: gameSourceTypes.LOCAL
    },
    // Local versions of popular games
    {
        id: 14,
        title: "2048 Clone",
        category: "puzzle",
        description: "Addictive number puzzle game - combine tiles to reach 2048",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23faf8ef'/%3E%3Crect x='20' y='20' width='35' height='35' fill='%23eee4da' rx='3'/%3E%3Crect x='65' y='20' width='35' height='35' fill='%23ede0c8' rx='3'/%3E%3Crect x='110' y='20' width='35' height='35' fill='%23f2b179' rx='3'/%3E%3Crect x='155' y='20' width='35' height='35' fill='%23f59563' rx='3'/%3E%3Ctext x='37' y='42' font-family='Arial' font-size='12' fill='%23776e65'%3E2%3C/text%3E%3Ctext x='82' y='42' font-family='Arial' font-size='12' fill='%23776e65'%3E4%3C/text%3E%3Ctext x='127' y='42' font-family='Arial' font-size='12' fill='%23f9f6f2'%3E8%3C/text%3E%3Ctext x='170' y='42' font-family='Arial' font-size='10' fill='%23f9f6f2'%3E16%3C/text%3E%3C/svg%3E",
        gameUrl: "games/local-2048.html",
        rating: 4.6,
        plays: 45000,
        sourceType: gameSourceTypes.LOCAL
    },
    {
        id: 16,
        title: "Cookie Clicker Clone",
        category: "strategy",
        description: "Addictive incremental game - click cookies to build your empire",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f4e4bc'/%3E%3Ccircle cx='100' cy='100' r='60' fill='%23deb887'/%3E%3Ccircle cx='80' cy='80' r='8' fill='%23654321'/%3E%3Ccircle cx='120' cy='85' r='6' fill='%23654321'/%3E%3Ccircle cx='90' cy='110' r='7' fill='%23654321'/%3E%3Ccircle cx='115' cy='115' r='5' fill='%23654321'/%3E%3Ccircle cx='105' cy='130' r='6' fill='%23654321'/%3E%3Ctext x='100' y='180' text-anchor='middle' font-family='Arial' font-size='14' fill='%23333'%3EClick!%3C/text%3E%3C/svg%3E",
        gameUrl: "games/local-cookie-clicker.html",
        rating: 4.2,
        plays: 56000,
        sourceType: gameSourceTypes.LOCAL
    }
];

// Pagination and filtering variables
let currentFilter = 'all';
let currentPage = 1;
const gamesPerPage = 6;

// DOM elements
const gamesGrid = document.getElementById('gamesGrid');
const gameModal = document.getElementById('gameModal');
const gameTitle = document.getElementById('gameTitle');
const gameFrame = document.getElementById('gameFrame');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    renderGames();
    setupEventListeners();
    createStars();
});

// Render games based on current filter and pagination
function renderGames() {
    console.log('Rendering games...');
    
    if (!gamesGrid) {
        console.error('Games grid not found!');
        return;
    }

    const filteredGames = currentFilter === 'all' 
        ? gamesData 
        : gamesData.filter(game => game.category === currentFilter);

    console.log('Filtered games:', filteredGames.length);

    // Calculate pagination
    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    const gamesToShow = filteredGames.slice(startIndex, endIndex);

    console.log('Games to show on page', currentPage, ':', gamesToShow.length);

    // Clear and populate games grid
    gamesGrid.innerHTML = '';

    gamesToShow.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
        console.log('Added game card:', game.title);
    });

    // Update pagination
    updatePagination(filteredGames.length);
}

// Create individual game card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    // Add source type indicator
    const sourceIndicator = game.sourceType === gameSourceTypes.EXTERNAL_LINK ? 
        '<div class="external-indicator">External Link</div>' : 
        game.sourceType === gameSourceTypes.EXTERNAL_IFRAME ? 
        '<div class="external-indicator">Web Game</div>' : '';
    
    card.innerHTML = `
        <div class="game-thumbnail">
            <img src="${game.thumbnail}" alt="${game.title}" loading="lazy">
            <div class="play-overlay">
                <div class="play-button">▶</div>
            </div>
            ${sourceIndicator}
        </div>
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.description}</p>
            <div class="game-stats">
                <div class="rating">
                    <span class="stars">${generateStars(game.rating)}</span>
                    <span class="rating-value">${game.rating}</span>
                </div>
                <div class="plays">${formatPlays(game.plays)} plays</div>
            </div>
            <div class="game-category">${game.category}</div>
        </div>
    `;

    card.addEventListener('click', () => openGame(game));
    return card;
}

// Generate star rating display
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '☆';
    }
    while (stars.length < 5) {
        stars += '☆';
    }
    return stars;
}

// Format play count
function formatPlays(plays) {
    if (plays >= 1000000) {
        return (plays / 1000000).toFixed(1) + 'M';
    } else if (plays >= 1000) {
        return (plays / 1000).toFixed(1) + 'K';
    }
    return plays.toString();
}

// Check if URL is from a trusted source
function isTrustedSource(url) {
    try {
        const urlObj = new URL(url);
        return trustedSources.some(source => urlObj.hostname.includes(source));
    } catch {
        return false;
    }
}

// Open game in modal with enhanced embedding support
function openGame(game) {
    gameTitle.textContent = game.title;

    // Handle different source types
    if (game.sourceType === gameSourceTypes.EXTERNAL_LINK) {
        // For external links, open in new tab
        window.open(game.gameUrl, '_blank');
        return;
    }

    // Create iframe with full screen attributes
    const iframe = document.createElement('iframe');
    
    // Use embedUrl if available, otherwise use gameUrl
    const gameSource = game.embedUrl || game.gameUrl;
    iframe.src = gameSource;
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.border = 'none';
    iframe.style.margin = '0';
    iframe.style.padding = '0';
    iframe.style.transform = 'scale(1)';
    iframe.style.transformOrigin = 'top left';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    iframe.scrolling = 'no';

    // Add security attributes for external games
    if (game.sourceType === gameSourceTypes.EXTERNAL_IFRAME) {
        iframe.sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups allow-presentation';
        iframe.loading = 'lazy';
    }

    // Clear and add iframe
    gameFrame.innerHTML = '';
    gameFrame.appendChild(iframe);

    // Show modal
    gameModal.style.display = 'block';
}

// Close game modal
function closeGame() {
    gameModal.style.display = 'none';
    gameFrame.innerHTML = '';
}

// Toggle fullscreen for game
function toggleFullscreen() {
    const iframe = gameFrame.querySelector('iframe');
    if (iframe) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    }
}

// Setup event listeners
function setupEventListeners() {
    // Modal close events
    window.addEventListener('click', (e) => {
        if (e.target === gameModal) {
            closeGame();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && gameModal.style.display === 'block') {
            closeGame();
        }
    });

    // Category filtering
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (category) {
                currentFilter = category;
                currentPage = 1;
                
                // Update active state
                document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                
                // Update filter and re-render games
                renderGames();
                
                // Scroll to games section
                document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateEasterEgg();
            konamiCode = [];
        }
    });
}

// Update pagination display
function updatePagination(totalGames) {
    const paginationContainer = document.getElementById('paginationContainer');
    if (!paginationContainer) return;

    const totalPages = Math.ceil(totalGames / gamesPerPage);
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    const startItem = (currentPage - 1) * gamesPerPage + 1;
    const endItem = Math.min(currentPage * gamesPerPage, totalGames);

    paginationContainer.innerHTML = `
        <div class="pagination-info">
            Showing ${startItem}-${endItem} of ${totalGames} games
        </div>
        <div class="pagination-controls">
            ${currentPage > 1 ? `<button onclick="changePage(${currentPage - 1})" class="page-btn">Previous</button>` : ''}
            ${currentPage < totalPages ? `<button onclick="changePage(${currentPage + 1})" class="page-btn">Next</button>` : ''}
        </div>
    `;
}

// Change page
function changePage(page) {
    const filteredGames = currentFilter === 'all' 
        ? gamesData 
        : gamesData.filter(game => game.category === currentFilter);
    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
    
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderGames();
        
        // Scroll to games section
        document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scroll to games section
function scrollToGames() {
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
}

// Add ripple effect to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('cta-button') || 
        e.target.classList.contains('control-btn') ||
        e.target.classList.contains('game-card')) {
        
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        e.target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Create animated stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Easter egg activation
function activateEasterEgg() {
    document.body.style.filter = 'hue-rotate(180deg)';
    
    const message = document.createElement('div');
    message.innerHTML = '🎮 KONAMI CODE ACTIVATED! 🎮';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff00ff, #00ffff);
        color: #000;
        padding: 20px 40px;
        border-radius: 15px;
        font-family: 'Press Start 2P', cursive;
        font-size: 1.2rem;
        z-index: 10000;
        animation: pulse 2s infinite;
        box-shadow: 0 0 30px rgba(255, 0, 255, 0.8);
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        document.body.style.filter = '';
        message.remove();
    }, 3000);
}