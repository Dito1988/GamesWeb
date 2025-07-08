// Fixed Navigation System - Complete Working Version


const gameSourceTypes = {
    LOCAL: 'local',
    EXTERNAL_IFRAME: 'external_iframe',
    EXTERNAL_LINK: 'external_link',
    EMBED_CODE: 'embed_code'
};

// Games data array
const gamesData = [
    {
        id: 27,
        title: "Original Mario",
        category: "arcade",
        description: "Mario Game",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,50 150,100 100,150 50,100' fill='%2300ffff'/%3E%3Cpolygon points='100,70 130,100 100,130 70,100' fill='%23ff00ff'/%3E%3Cline x1='50' y1='100' x2='150' y2='100' stroke='%23ffff00' stroke-width='3'/%3E%3Cline x1='100' y1='50' x2='100' y2='150' stroke='%23ffff00' stroke-width='3'/%3E%3C/svg%3E",
        gameUrl: "https://dito1988.github.io/FullScreenMario/",
        rating: 0,
        plays: 0,
        sourceType: 'external_iframe',
        license: 'MIT License'
    },
    {
        id: 29,
        title: "DuckHunt",
        category: "arcade",
        description: "The classic Duck Hunt game ported to HTML5",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,50 150,100 100,150 50,100' fill='%2300ffff'/%3E%3Cpolygon points='100,70 130,100 100,130 70,100' fill='%23ff00ff'/%3E%3Cline x1='50' y1='100' x2='150' y2='100' stroke='%23ffff00' stroke-width='3'/%3E%3Cline x1='100' y1='50' x2='100' y2='150' stroke='%23ffff00' stroke-width='3'/%3E%3C/svg%3E",
        gameUrl: "https://duckhuntjs.com/",
        rating: 0,
        plays: 0,
        sourceType: 'external_iframe',
        license: 'MIT License'
    },
    {
        id: 28,
        title: "Drakonas",
        category: "arcade",
        description: "Game Shooter in 3D",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,50 150,100 100,150 50,100' fill='%2300ffff'/%3E%3Cpolygon points='100,70 130,100 100,130 70,100' fill='%23ff00ff'/%3E%3Cline x1='50' y1='100' x2='150' y2='100' stroke='%23ffff00' stroke-width='3'/%3E%3Cline x1='100' y1='50' x2='100' y2='150' stroke='%23ffff00' stroke-width='3'/%3E%3C/svg%3E",
        gameUrl: "https://dito1988.github.io/Drakonas/",
        rating: 0,
        plays: 0,
        sourceType: 'external_iframe',
        license: 'MIT License'
    },
    {
        id: 43,
        title: "Minecraft Classic",
        category: "strategy",
        description: "Build and explore in the classic version of Minecraft",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2387CEEB'/%3E%3Crect x='40' y='140' width='20' height='20' fill='%2300AA00'/%3E%3Crect x='60' y='140' width='20' height='20' fill='%23654321'/%3E%3Crect x='80' y='140' width='20' height='20' fill='%23808080'/%3E%3Crect x='100' y='140' width='20' height='20' fill='%2300AA00'/%3E%3Crect x='120' y='140' width='20' height='20' fill='%23654321'/%3E%3Crect x='140' y='140' width='20' height='20' fill='%23808080'/%3E%3Crect x='60' y='120' width='20' height='20' fill='%23808080'/%3E%3Crect x='100' y='120' width='20' height='20' fill='%23808080'/%3E%3C/svg%3E",
        gameUrl: "https://classic.minecraft.net/",
        rating: 4.9,
        plays: 8500000,
        sourceType: 'external_iframe',
        license: 'Free Play'
    },
    {
        "id": 80,
        "title": "Wordle",
        "category": "word",
        "description": "Guess the 5-letter word in 6 tries",
        "thumbnail": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjMwIiB5PSI2MCIgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiBmaWxsPSIjNmFhYTY0IiBzdHJva2U9IiNkM2QzZDMiLz48cmVjdCB4PSI2MCIgeT0iNjAiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0iI2M5YjQ1OCIgc3Ryb2tlPSIjZDNkM2QzIi8+PHJlY3QgeD0iOTAiIHk9IjYwIiB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIGZpbGw9IiM3ODdhODMiIHN0cm9rZT0iI2QzZDNkMyIvPjxyZWN0IHg9IjEyMCIgeT0iNjAiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0iIzZhYWE2NCIgc3Ryb2tlPSIjZDNkM2QzIi8+PHJlY3QgeD0iMTUwIiB5PSI2MCIgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiBmaWxsPSIjNmFhYTY0IiBzdHJva2U9IiNkM2QzZDMiLz48dGV4dCB4PSI0MiIgeT0iNzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmYiPkg8L3RleHQ+PHRleHQgeD0iNzIiIHk9Ijc3IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZmZmIj5FPC90ZXh0Pjx0ZXh0IHg9IjEwMiIgeT0iNzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmYiPkw8L3RleHQ+PHRleHQgeD0iMTMyIiB5PSI3NyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZiI+TDwvdGV4dD48dGV4dCB4PSIxNjIiIHk9Ijc3IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZmZmIj5PPC90ZXh0Pjwvc3ZnPg==",
        "gameUrl": "https://wordlegame.org/",
        "rating": 4.8,
        "plays": 600000,
        "sourceType": "external_iframe",
        "license": "MIT License"
    },
    {
        "id": 81,
        "title": "Checkers",
        "category": "strategy",
        "description": "Classic board game of strategy",
        "thumbnail": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hlY2tlcmJvYXJkIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2Y0ZjNkMCIvPjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjRmM2QwIi8+PHJlY3QgeD0iMjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzc0NTMzNiIvPjxyZWN0IHg9IjAiIHk9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiM3NDUzMzYiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2NoZWNrZXJib2FyZCkiLz48Y2lyY2xlIGN4PSI3MCIgY3k9IjcwIiByPSIxNSIgZmlsbD0iI2ZmMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSI3MCIgcj0iMTUiIGZpbGw9IiNmZjAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNzAiIGN5PSIxNTAiIHI9IjE1IiBmaWxsPSIjODAwIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTUiIGZpbGw9IiM4MDAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+",
        "gameUrl": "https://www.247checkers.com/",
        "rating": 4.8,
        "plays": 160000,
        "sourceType": "external_iframe",
        "license": "MIT License"
    },
    {
        "id": 82,
        "title": "Battleship",
        "category": "strategy",
        "description": "Sink your opponent's fleet",
        "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPjPAAABAgABYmYM3QAAAABJRU5ErkJggg==",
        "gameUrl": "https://www.battleshiponline.org/",
        "rating": 4.8,
        "plays": 130000,
        "sourceType": "external_iframe",
        "license": "MIT License"
    },
    {
        "id": 83,
        "title": "Risk",
        "category": "strategy",
        "description": "Conquer the world in this strategy game",
        "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEhAJgYpQKNQAAAABJRU5ErkJggg==",
        "gameUrl": "https://www.warzone.com/",
        "rating": 4.8,
        "plays": 95000,
        "sourceType": "external_iframe",
        "license": "MIT License"
    },
    {
        "id": 84,
        "title": "Hangman",
        "category": "word",
        "description": "Guess the word before the drawing is complete",
        "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYGBgYAAABQABDQottAAAAABJRU5ErkJggg==",
        "gameUrl": "https://www.hangmanwords.com/play",
        "rating": 4.7,
        "plays": 140000,
        "sourceType": "external_iframe",
        "license": "MIT License"
    },
    {
        id: 17,
        title: "Pac-Man HTML5",
        category: "arcade",
        description: "Classic Pac-Man game recreated in HTML5, open source",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Ccircle cx='100' cy='100' r='40' fill='%23ffff00'/%3E%3Cpath d='M 100 100 L 140 100 L 120 120 Z' fill='%23000'/%3E%3Ccircle cx='90' cy='85' r='5' fill='%23000'/%3E%3Ccircle cx='60' cy='60' r='8' fill='%23ff0000'/%3E%3Ccircle cx='140' cy='60' r='8' fill='%23ff69b4'/%3E%3Ccircle cx='60' cy='140' r='8' fill='%2300ffff'/%3E%3Ccircle cx='140' cy='140' r='8' fill='%23ffa500'/%3E%3C/svg%3E",
        gameUrl: "https://pacman.platzh1rsch.ch/",
        rating: 4.7,
        plays: 89000,
        sourceType: 'external_iframe',
        license: 'MIT License'
    },
    {
        id: 20,
        title: "Tetris Friends",
        category: "puzzle",
        description: "Classic Tetris game with modern HTML5 implementation",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='60' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='80' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='100' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='120' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='80' y='80' width='20' height='20' fill='%23ff00ff'/%3E%3Crect x='100' y='80' width='20' height='20' fill='%23ff00ff'/%3E%3Crect x='80' y='100' width='20' height='20' fill='%23ff00ff'/%3E%3Crect x='100' y='100' width='20' height='20' fill='%23ff00ff'/%3E%3Crect x='60' y='120' width='20' height='20' fill='%23ffff00'/%3E%3Crect x='80' y='120' width='20' height='20' fill='%23ffff00'/%3E%3Crect x='100' y='120' width='20' height='20' fill='%23ffff00'/%3E%3Crect x='80' y='140' width='20' height='20' fill='%23ffff00'/%3E%3C/svg%3E",
        gameUrl: "https://tetris.com/play-tetris",
        rating: 4.7,
        plays: 234000,
        sourceType: 'external_iframe',
        license: 'Free Play'
    },
    {
        id: 70,
        title: "Little Alchemy 2",
        category: "puzzle",
        description: "Combine elements to create new items in this creative puzzle game",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f8ff'/%3E%3Ccircle cx='70' cy='70' r='20' fill='%234169e1'/%3E%3Ccircle cx='130' cy='70' r='20' fill='%23ff6347'/%3E%3Cpath d='M100 120 L80 140 L120 140 Z' fill='%2332cd32'/%3E%3Ctext x='100' y='180' font-family='Arial' font-size='12' fill='%23333' text-anchor='middle'%3E+%3C/text%3E%3C/svg%3E",
        gameUrl: "https://littlealchemy2.com/",
        rating: 4.7,
        plays: 2800000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 14,
        title: "HexGL Racing",
        category: "racing",
        description: "Futuristic WebGL racing game, MIT licensed open source project",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,50 150,100 100,150 50,100' fill='%2300ffff'/%3E%3Cpolygon points='100,70 130,100 100,130 70,100' fill='%23ff00ff'/%3E%3Cline x1='50' y1='100' x2='150' y2='100' stroke='%23ffff00' stroke-width='3'/%3E%3Cline x1='100' y1='50' x2='100' y2='150' stroke='%23ffff00' stroke-width='3'/%3E%3C/svg%3E",
        gameUrl: "https://hexgl.bkcore.com/",
        rating: 4.6,
        plays: 89000,
        sourceType: 'external_iframe',
        license: 'MIT License'
    },
    {
        id: 32,
        title: "Slither.io",
        category: "arcade",
        description: "Multiplayer snake game - grow by eating pellets and other players",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23222'/%3E%3Ccircle cx='60' cy='100' r='15' fill='%2300ff00'/%3E%3Ccircle cx='85' cy='100' r='12' fill='%2300ff00'/%3E%3Ccircle cx='105' cy='100' r='10' fill='%2300ff00'/%3E%3Ccircle cx='120' cy='100' r='8' fill='%2300ff00'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%23ffff00'/%3E%3Ccircle cx='150' cy='150' r='5' fill='%23ff0000'/%3E%3C/svg%3E",
        gameUrl: "https://slither.io/",
        rating: 4.6,
        plays: 2500000,
        sourceType: 'external_iframe',
        license: 'Free Play'
    },
    {
        id: 48,
        title: "1v1.LOL",
        category: "action",
        description: "Build and battle in this competitive third-person shooter",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2387ceeb'/%3E%3Crect x='50' y='120' width='100' height='80' fill='%23654321'/%3E%3Crect x='70' y='100' width='60' height='20' fill='%23654321'/%3E%3Crect x='90' y='80' width='20' height='20' fill='%23654321'/%3E%3Ccircle cx='100' cy='70' r='10' fill='%23fdbcb4'/%3E%3Crect x='95' y='60' width='10' height='10' fill='%23654321'/%3E%3Cpath d='M80 140 L120 140 L110 160 L90 160 Z' fill='%23000080'/%3E%3C/svg%3E",
        gameUrl: "https://1v1.lol/",
        rating: 4.6,
        plays: 4500000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 13,
        title: "Slot Car Racing",
        category: "racing",
        description: "Car racing game, MIT licensed open source project",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,50 150,100 100,150 50,100' fill='%2300ffff'/%3E%3Cpolygon points='100,70 130,100 100,130 70,100' fill='%23ff00ff'/%3E%3Cline x1='50' y1='100' x2='150' y2='100' stroke='%23ffff00' stroke-width='3'/%3E%3Cline x1='100' y1='50' x2='100' y2='150' stroke='%23ffff00' stroke-width='3'/%3E%3C/svg%3E",
        gameUrl: "https://bruno-simon.com/",
        rating: 4.6,
        plays: 89000,
        sourceType: 'external_iframe',
        license: 'MIT License'
    },
    {
        id: 16,
        title: "Hextris",
        category: "puzzle",
        description: "Tetris-like hexagonal puzzle game, Apache 2.0 licensed",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,20 140,50 140,110 100,140 60,110 60,50' fill='%2300ffff' stroke='%23fff' stroke-width='2'/%3E%3Cpolygon points='100,40 120,55 120,95 100,110 80,95 80,55' fill='%23ff00ff'/%3E%3Cpolygon points='100,60 110,70 110,90 100,100 90,90 90,70' fill='%23ffff00'/%3E%3C/svg%3E",
        gameUrl: "https://hextris.io/",
        rating: 4.5,
        plays: 54000,
        sourceType: 'external_iframe',
        license: 'Apache 2.0'
    },
    {
        id: 42,
        title: "Krunker.io",
        category: "action",
        description: "Fast-paced multiplayer FPS browser game",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000033'/%3E%3Crect x='80' y='100' width='40' height='60' fill='%23FF6347'/%3E%3Crect x='90' y='80' width='20' height='20' fill='%23FFDBAC'/%3E%3Crect x='110' y='90' width='25' height='8' fill='%23000'/%3E%3Crect x='70' y='160' width='15' height='20' fill='%23000'/%3E%3Crect x='115' y='160' width='15' height='20' fill='%23000'/%3E%3C/svg%3E",
        gameUrl: "https://krunker.io/",
        rating: 4.5,
        plays: 3300000,
        sourceType: 'external_iframe',
        license: 'Free Play'
    },
    {
        id: 50,
        title: "Diep.io",
        category: "action",
        description: "Tank battle royale - upgrade your tank and dominate the battlefield",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23cdcdcd'/%3E%3Ccircle cx='100' cy='100' r='25' fill='%2300b2e1'/%3E%3Crect x='125' y='95' width='40' height='10' fill='%2300b2e1'/%3E%3Cpolygon points='60,60 80,40 100,60 80,80' fill='%23ffe869'/%3E%3Cpolygon points='140,140 160,120 180,140 160,160' fill='%23fc7677'/%3E%3Crect x='40' y='40' width='15' height='15' fill='%2300e16e'/%3E%3C/svg%3E",
        gameUrl: "https://diep.io",
        rating: 4.5,
        plays: 1900000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 66,
        title: "Skribbl.io",
        category: "puzzle",
        description: "Online drawing and guessing game with friends",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23fff'/%3E%3Crect x='20' y='20' width='160' height='120' fill='%23f0f0f0' stroke='%23000' stroke-width='2'/%3E%3Cpath d='M 40 60 Q 80 40 120 60 Q 160 80 140 120' stroke='%23ff6347' stroke-width='4' fill='none'/%3E%3Ccircle cx='60' cy='100' r='8' fill='%234169e1'/%3E%3Crect x='140' y='90' width='20' height='20' fill='%2332cd32'/%3E%3Crect x='30' y='150' width='20' height='10' fill='%23ff6347'/%3E%3Crect x='60' y='150' width='20' height='10' fill='%234169e1'/%3E%3C/svg%3E",
        gameUrl: "https://skribbl.io",
        rating: 4.4,
        plays: 1500000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 24,
        title: "Sudoku Web",
        category: "puzzle",
        description: "Classic Sudoku puzzle game with multiple difficulty levels",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23fff'/%3E%3Crect x='20' y='20' width='160' height='160' fill='none' stroke='%23000' stroke-width='3'/%3E%3Cline x1='73' y1='20' x2='73' y2='180' stroke='%23000' stroke-width='1'/%3E%3Cline x1='127' y1='20' x2='127' y2='180' stroke='%23000' stroke-width='1'/%3E%3Cline x1='20' y1='73' x2='180' y2='73' stroke='%23000' stroke-width='1'/%3E%3Cline x1='20' y1='127' x2='180' y2='127' stroke='%23000' stroke-width='1'/%3E%3Ctext x='46' y='50' font-family='Arial' font-size='20' fill='%23000'%3E5%3C/text%3E%3Ctext x='100' y='50' font-family='Arial' font-size='20' fill='%23000'%3E3%3C/text%3E%3Ctext x='154' y='104' font-family='Arial' font-size='20' fill='%23000'%3E7%3C/text%3E%3C/svg%3E",
        gameUrl: "https://sudoku.com/",
        rating: 4.4,
        plays: 76000,
        sourceType: 'external_iframe',
        license: 'Free Play'
    },
    {
        id: 15,
        title: "Clumsy Bird",
        category: "arcade",
        description: "Flappy Bird clone with MIT license, fully open source",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2387CEEB'/%3E%3Ccircle cx='80' cy='100' r='20' fill='%23FFD700'/%3E%3Ccircle cx='75' cy='95' r='3' fill='%23000'/%3E%3Cpolygon points='70,105 60,110 70,115' fill='%23FF4500'/%3E%3Crect x='150' y='0' width='30' height='80' fill='%2300FF00'/%3E%3Crect x='150' y='120' width='30' height='80' fill='%2300FF00'/%3E%3C/svg%3E",
        gameUrl: "https://ellisonleao.github.io/clumsy-bird/",
        rating: 4.3,
        plays: 67000,
        sourceType: 'external_iframe',
        license: 'MIT License'
    },
    {
        id: 62,
        title: "Worms.Zone",
        category: "arcade",
        description: "Colorful worm game with special abilities and power-ups",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23228b22'/%3E%3Ccircle cx='60' cy='100' r='18' fill='%23ff1493'/%3E%3Ccircle cx='85' cy='100' r='15' fill='%23ff1493'/%3E%3Ccircle cx='105' cy='100' r='12' fill='%23ff1493'/%3E%3Ccircle cx='120' cy='100' r='10' fill='%23ff1493'/%3E%3Ccircle cx='55' cy='95' r='3' fill='%23000'/%3E%3Ccircle cx='65' cy='95' r='3' fill='%23000'/%3E%3Ccircle cx='50' cy='50' r='6' fill='%23ffff00'/%3E%3Ccircle cx='150' cy='150' r='8' fill='%23ff6347'/%3E%3Cpolygon points='40,40 50,30 60,40 50,50' fill='%2300ffff'/%3E%3C/svg%3E",
        gameUrl: "https://worms.zone",
        rating: 4.2,
        plays: 1300000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 53,
        title: "Wings.io",
        category: "action",
        description: "Aerial combat game - pilot your plane and shoot down enemies",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2387ceeb'/%3E%3Cpolygon points='100,80 120,100 100,120 80,100' fill='%23ff6347'/%3E%3Cpolygon points='90,90 110,90 105,70 95,70' fill='%23ff6347'/%3E%3Ccircle cx='60' cy='60' r='8' fill='%23fff' opacity='0.8'/%3E%3Ccircle cx='140' cy='140' r='8' fill='%23fff' opacity='0.8'/%3E%3Cpolygon points='40,160 60,140 50,130 30,150' fill='%23ddd'/%3E%3C/svg%3E",
        gameUrl: "https://wings.io",
        rating: 4.2,
        plays: 950000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 58,
        title: "Lordz.io",
        category: "strategy",
        description: "Build your army and conquer territories in this medieval strategy game",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2390ee90'/%3E%3Crect x='80' y='60' width='40' height='60' fill='%23654321'/%3E%3Cpolygon points='80,60 100,40 120,60' fill='%23ff0000'/%3E%3Crect x='95' y='70' width='10' height='20' fill='%23000'/%3E%3Ccircle cx='60' cy='140' r='8' fill='%234169e1'/%3E%3Ccircle cx='140' cy='140' r='8' fill='%234169e1'/%3E%3Crect x='50' y='160' width='100' height='20' fill='%23654321'/%3E%3C/svg%3E",
        gameUrl: "https://lordz.io",
        rating: 4.2,
        plays: 890000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 65,
        title: "BuildRoyale.io",
        category: "action",
        description: "Battle royale with building mechanics and 2D graphics",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2387ceeb'/%3E%3Crect x='0' y='150' width='200' height='50' fill='%2390ee90'/%3E%3Crect x='70' y='120' width='60' height='30' fill='%23654321'/%3E%3Crect x='75' y='100' width='50' height='20' fill='%23654321'/%3E%3Crect x='80' y='80' width='40' height='20' fill='%23654321'/%3E%3Ccircle cx='100' cy='90' r='6' fill='%23ff6347'/%3E%3Crect x='110' y='85' width='12' height='4' fill='%23333'/%3E%3Ccircle cx='50' cy='50' r='4' fill='%23ffff00'/%3E%3C/svg%3E",
        gameUrl: "https://buildroyale.io",
        rating: 4.2,
        plays: 1100000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 40,
        title: "Bubble Shooter",
        category: "puzzle",
        description: "Match colored bubbles to clear the board",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23001122'/%3E%3Ccircle cx='50' cy='50' r='15' fill='%23FF0000'/%3E%3Ccircle cx='80' cy='50' r='15' fill='%2300FF00'/%3E%3Ccircle cx='110' cy='50' r='15' fill='%230000FF'/%3E%3Ccircle cx='140' cy='50' r='15' fill='%23FFFF00'/%3E%3Ccircle cx='65' cy='80' r='15' fill='%23FF00FF'/%3E%3Ccircle cx='95' cy='80' r='15' fill='%2300FFFF'/%3E%3C/svg%3E",
        gameUrl: "https://www.bubbleshooter.net/",
        rating: 4.1,
        plays: 450000,
        sourceType: 'external_iframe',
        license: 'Free Play'
    },
    {
        id: 52,
        title: "Mope.io",
        category: "arcade",
        description: "Animal evolution game - eat food and other animals to evolve",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2387ceeb'/%3E%3Ccircle cx='100' cy='120' r='30' fill='%23daa520'/%3E%3Ccircle cx='90' cy='110' r='3' fill='%23000'/%3E%3Ccircle cx='110' cy='110' r='3' fill='%23000'/%3E%3Cellipse cx='100' cy='125' rx='8' ry='4' fill='%23000'/%3E%3Ccircle cx='60' cy='60' r='8' fill='%23ff69b4'/%3E%3Ccircle cx='140' cy='160' r='12' fill='%2332cd32'/%3E%3Crect x='20' y='180' width='160' height='20' fill='%2390ee90'/%3E%3C/svg%3E",
        gameUrl: "https://mope.io",
        rating: 4.1,
        plays: 1300000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 54,
        title: "Deeeep.io",
        category: "arcade",
        description: "Ocean survival game - evolve from small fish to apex predators",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23006994'/%3E%3Cellipse cx='100' cy='100' rx='40' ry='20' fill='%23ff6347'/%3E%3Ccircle cx='85' cy='95' r='3' fill='%23000'/%3E%3Cpath d='M 60 100 L 40 90 L 40 110 Z' fill='%23ff6347'/%3E%3Cellipse cx='60' cy='60' rx='15' ry='8' fill='%2332cd32'/%3E%3Cellipse cx='140' cy='140' rx='20' ry='10' fill='%23ffff00'/%3E%3Ccircle cx='160' cy='40' r='5' fill='%23ff00ff'/%3E%3C/svg%3E",
        gameUrl: "https://deeeep.io",
        rating: 4.1,
        plays: 1050000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 56,
        title: "Stabfish.io",
        category: "action",
        description: "Underwater combat - grow your fish and stab enemies",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23004d7a'/%3E%3Cellipse cx='100' cy='100' rx='40' ry='25' fill='%23ff6347'/%3E%3Ccircle cx='85' cy='90' r='3' fill='%23000'/%3E%3Cpath d='M 60 100 L 30 90 L 30 110 Z' fill='%23ff6347'/%3E%3Cline x1='140' y1='100' x2='180' y2='100' stroke='%23666' stroke-width='3'/%3E%3Ccircle cx='50' cy='50' r='6' fill='%23ffff00'/%3E%3Ccircle cx='150' cy='150' r='8' fill='%2300ff00'/%3E%3C/svg%3E",
        gameUrl: "https://stabfish.io",
        rating: 4.1,
        plays: 720000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 63,
        title: "Stabfish2.io",
        category: "action",
        description: "Enhanced underwater combat with new weapons and abilities",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23004d7a'/%3E%3Cellipse cx='100' cy='100' rx='45' ry='25' fill='%23ff6347'/%3E%3Ccircle cx='85' cy='90' r='4' fill='%23000'/%3E%3Cpath d='M 55 100 L 25 90 L 25 110 Z' fill='%23ff6347'/%3E%3Cline x1='145' y1='100' x2='185' y2='100' stroke='%23666' stroke-width='4'/%3E%3Cline x1='145' y1='90' x2='175' y2='85' stroke='%23666' stroke-width='3'/%3E%3Cline x1='145' y1='110' x2='175' y2='115' stroke='%23666' stroke-width='3'/%3E%3Ccircle cx='50' cy='50' r='6' fill='%23ffff00'/%3E%3C/svg%3E",
        gameUrl: "https://stabfish2.io",
        rating: 4.0,
        plays: 750000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 64,
        title: "Yohoho.io",
        category: "action",
        description: "Pirate battle royale on tropical islands",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23006994'/%3E%3Ccircle cx='100' cy='150' r='40' fill='%23daa520'/%3E%3Ccircle cx='100' cy='100' r='15' fill='%23ff6347'/%3E%3Ccircle cx='95' cy='95' r='2' fill='%23000'/%3E%3Ccircle cx='105' cy='95' r='2' fill='%23000'/%3E%3Cpath d='M 90 105 Q 100 110 110 105' stroke='%23000' stroke-width='2' fill='none'/%3E%3Crect x='85' y='80' width='30' height='5' fill='%23000'/%3E%3Crect x='110' y='95' width='20' height='5' fill='%23654321'/%3E%3C/svg%3E",
        gameUrl: "https://yohoho.io",
        rating: 4.0,
        plays: 820000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 59,
        title: "Zlap.io",
        category: "action",
        description: "Swing your elastic weapon and knock out opponents",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ccircle cx='100' cy='100' r='15' fill='%23ff6347'/%3E%3Cpath d='M 100 100 Q 140 80 160 120' stroke='%23ffff00' stroke-width='6' fill='none'/%3E%3Ccircle cx='160' cy='120' r='8' fill='%23ffff00'/%3E%3Ccircle cx='70' cy='70' r='12' fill='%234169e1'/%3E%3Ccircle cx='130' cy='130' r='12' fill='%2332cd32'/%3E%3Cpath d='M 70 70 Q 50 90 30 70' stroke='%234169e1' stroke-width='4' fill='none'/%3E%3C/svg%3E",
        gameUrl: "https://zlap.io",
        rating: 3.9,
        plays: 590000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 60,
        title: "Venge.io",
        category: "action",
        description: "Tactical FPS with different classes and abilities",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='85' y='85' width='30' height='30' fill='%23ff6347'/%3E%3Crect x='90' y='75' width='20' height='10' fill='%234ecdc4'/%3E%3Crect x='75' y='90' width='10' height='20' fill='%234ecdc4'/%3E%3Crect x='115' y='90' width='10' height='20' fill='%234ecdc4'/%3E%3Crect x='100' y='115' width='20' height='25' fill='%23654321'/%3E%3Ccircle cx='60' cy='60' r='4' fill='%23ffe66d'/%3E%3Ccircle cx='140' cy='140' r='4' fill='%23ffe66d'/%3E%3C/svg%3E",
        gameUrl: "https://venge.io",
        rating: 4.0,
        plays: 850000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 61,
        title: "Kirka.io",
        category: "action",
        description: "Pixelated FPS with multiple game modes and weapons",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23654321'/%3E%3Crect x='80' y='80' width='40' height='40' fill='%23ff6b6b'/%3E%3Crect x='85' y='85' width='30' height='30' fill='%23ff6b6b'/%3E%3Crect x='90' y='70' width='20' height='10' fill='%234ecdc4'/%3E%3Crect x='70' y='90' width='10' height='20' fill='%234ecdc4'/%3E%3Crect x='120' y='90' width='10' height='20' fill='%234ecdc4'/%3E%3Crect x='95' y='125' width='10' height='20' fill='%23654321'/%3E%3Ccircle cx='50' cy='50' r='4' fill='%23ffe66d'/%3E%3C/svg%3E",
        gameUrl: "https://kirka.io",
        rating: 3.9,
        plays: 720000,
        sourceType: gameSourceTypes.EXTERNAL_IFRAME
    },
    {
        id: 1,
        title: "Neon Snake",
        category: "arcade",
        description: "Classic snake game with neon graphics and smooth controls",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='20' y='80' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='40' y='80' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='60' y='80' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='80' y='80' width='20' height='20' fill='%23ff00ff'/%3E%3Crect x='140' y='120' width='20' height='20' fill='%23ffff00'/%3E%3C/svg%3E",
        gameUrl: "games/snake.html",
        rating: 4.5,
        plays: 15420
    },
    {
        id: 2,
        title: "Neon Tetris",
        category: "puzzle",
        description: "Block-falling puzzle game with retro neon styling",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='60' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='80' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='100' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='120' y='40' width='20' height='20' fill='%2300ffff'/%3E%3Crect x='80' y='80' width='20' height='20' fill='%23ff00ff'/%3E%3Crect x='100' y='80' width='20' height='20' fill='%23ff00ff'/%3E%3C/svg%3E",
        gameUrl: "games/tetris.html",
        rating: 4.7,
        plays: 23150
    },
    {
        id: 5,
        title: "Neon Breakout",
        category: "arcade",
        description: "Brick-breaking game with colorful neon blocks",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='40' y='40' width='30' height='15' fill='%2300ffff'/%3E%3Crect x='80' y='40' width='30' height='15' fill='%23ff00ff'/%3E%3Crect x='120' y='40' width='30' height='15' fill='%23ffff00'/%3E%3Crect x='40' y='60' width='30' height='15' fill='%23ff0080'/%3E%3Crect x='80' y='60' width='30' height='15' fill='%2300ff80'/%3E%3Crect x='120' y='60' width='30' height='15' fill='%2380ff00'/%3E%3C/svg%3E",
        gameUrl: "games/breakout.html",
        rating: 4.4,
        plays: 18200
    },
    {
        id: 6,
        title: "Space Invaders",
        category: "action",
        description: "Defend Earth from waves of alien invaders",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Crect x='60' y='40' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='120' y='40' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='40' y='70' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='80' y='70' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='120' y='70' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='160' y='70' width='20' height='15' fill='%2300ff00'/%3E%3Crect x='90' y='160' width='20' height='20' fill='%2300ffff'/%3E%3C/svg%3E",
        gameUrl: "games/space-invaders.html",
        rating: 4.8,
        plays: 25600
    },
    {
        id: 7,
        title: "2048 Clone",
        category: "puzzle",
        description: "Addictive number puzzle game - combine tiles to reach 2048",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23faf8ef'/%3E%3Crect x='20' y='20' width='35' height='35' fill='%23eee4da' rx='3'/%3E%3Crect x='65' y='20' width='35' height='35' fill='%23ede0c8' rx='3'/%3E%3Crect x='110' y='20' width='35' height='35' fill='%23f2b179' rx='3'/%3E%3Crect x='155' y='20' width='35' height='35' fill='%23f59563' rx='3'/%3E%3Ctext x='37' y='42' font-family='Arial' font-size='12' fill='%23776e65'%3E2%3C/text%3E%3Ctext x='82' y='42' font-family='Arial' font-size='12' fill='%23776e65'%3E4%3C/text%3E%3Ctext x='127' y='42' font-family='Arial' font-size='12' fill='%23f9f6f2'%3E8%3C/text%3E%3Ctext x='170' y='42' font-family='Arial' font-size='10' fill='%23f9f6f2'%3E16%3C/text%3E%3C/svg%3E",
        gameUrl: "games/local-2048.html",
        rating: 4.6,
        plays: 45000
    },
    {
        id: 9,
        title: "Cookie Clicker Clone",
        category: "strategy",
        description: "Addictive incremental game - click cookies to build your empire",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f4e4bc'/%3E%3Ccircle cx='100' cy='100' r='60' fill='%23deb887'/%3E%3Ccircle cx='80' cy='80' r='8' fill='%23654321'/%3E%3Ccircle cx='120' cy='85' r='6' fill='%23654321'/%3E%3Ccircle cx='90' cy='110' r='7' fill='%23654321'/%3E%3Ccircle cx='115' cy='115' r='5' fill='%23654321'/%3E%3Ccircle cx='105' cy='130' r='6' fill='%23654321'/%3E%3Ctext x='100' y='180' text-anchor='middle' font-family='Arial' font-size='14' fill='%23333'%3EClick!%3C/text%3E%3C/svg%3E",
        gameUrl: "games/local-cookie-clicker.html",
        rating: 4.2,
        plays: 56000
    },
    {
        id: 11,
        title: "Space Shooter",
        category: "action",
        description: "Defend Earth from alien invaders in this classic space shooter",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,160 110,180 100,170 90,180' fill='%2300ffff'/%3E%3Crect x='60' y='40' width='20' height='15' fill='%23ff0000'/%3E%3Crect x='120' y='40' width='20' height='15' fill='%23ff0000'/%3E%3Crect x='40' y='70' width='20' height='15' fill='%23ff0000'/%3E%3Crect x='80' y='70' width='20' height='15' fill='%23ff0000'/%3E%3Crect x='120' y='70' width='20' height='15' fill='%23ff0000'/%3E%3Crect x='160' y='70' width='20' height='15' fill='%23ff0000'/%3E%3Cline x1='100' y1='150' x2='100' y2='130' stroke='%23ffff00' stroke-width='3'/%3E%3C/svg%3E",
        gameUrl: "games/space-shooter.html",
        rating: 4.4,
        plays: 31200
    },
    {
        id: 25,
        title: "Games",
        category: "arcade",
        description: "Games",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,50 150,100 100,150 50,100' fill='%2300ffff'/%3E%3Cpolygon points='100,70 130,100 100,130 70,100' fill='%23ff00ff'/%3E%3Cline x1='50' y1='100' x2='150' y2='100' stroke='%23ffff00' stroke-width='3'/%3E%3Cline x1='100' y1='50' x2='100' y2='150' stroke='%23ffff00' stroke-width='3'/%3E%3C/svg%3E",
        gameUrl: "https://dito1988.github.io/games/",
        rating: 0,
        plays: 0,
        sourceType: 'external_iframe',
        license: 'MIT License'
    },
    {
        id: 26,
        title: "Crazy Racing",
        category: "Car Racing Game",
        description: "Crazy Racing",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,50 150,100 100,150 50,100' fill='%2300ffff'/%3E%3Cpolygon points='100,70 130,100 100,130 70,100' fill='%23ff00ff'/%3E%3Cline x1='50' y1='100' x2='150' y2='100' stroke='%23ffff00' stroke-width='3'/%3E%3Cline x1='100' y1='50' x2='100' y2='150' stroke='%23ffff00' stroke-width='3'/%3E%3C/svg%3E",
        gameUrl: "https://dito1988.github.io/crazy_racing/",
        rating: 0,
        plays: 0,
        sourceType: 'external_iframe',
        license: 'MIT License'
    },
    {
        id: 30,
        title: "Galaga Rebubbled",
        category: "arcade",
        description: "Galaga rebubbled",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,50 150,100 100,150 50,100' fill='%2300ffff'/%3E%3Cpolygon points='100,70 130,100 100,130 70,100' fill='%23ff00ff'/%3E%3Cline x1='50' y1='100' x2='150' y2='100' stroke='%23ffff00' stroke-width='3'/%3E%3Cline x1='100' y1='50' x2='100' y2='150' stroke='%23ffff00' stroke-width='3'/%3E%3C/svg%3E",
        gameUrl: "https://dito1988.github.io/Galaga-Rebubbled",
        rating: 0,
        plays: 0,
        sourceType: 'external_iframe',
        license: 'MIT License'
    },
    {
        id: 31,
        title: "Dead valley!",
        category: "arcade",
        description: "HTML5 Grand Theft Auto style Zombie Survival Game",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,50 150,100 100,150 50,100' fill='%2300ffff'/%3E%3Cpolygon points='100,70 130,100 100,130 70,100' fill='%23ff00ff'/%3E%3Cline x1='50' y1='100' x2='150' y2='100' stroke='%23ffff00' stroke-width='3'/%3E%3Cline x1='100' y1='50' x2='100' y2='150' stroke='%23ffff00' stroke-width='3'/%3E%3C/svg%3E",
        gameUrl: "https://dito1988.github.io/dead-valley/",
        rating: 0,
        plays: 0,
        sourceType: 'external_iframe',
        license: 'MIT License'
    },
    {
        id: 12,
        title: "Snake Game",
        category: "arcade",
        description: "Snake game",
        thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23000'/%3E%3Cpolygon points='100,50 150,100 100,150 50,100' fill='%2300ffff'/%3E%3Cpolygon points='100,70 130,100 100,130 70,100' fill='%23ff00ff'/%3E%3Cline x1='50' y1='100' x2='150' y2='100' stroke='%23ffff00' stroke-width='3'/%3E%3Cline x1='100' y1='50' x2='100' y2='150' stroke='%23ffff00' stroke-width='3'/%3E%3C/svg%3E",
        gameUrl: "https://dito1988.github.io/javascript-snakes/",
        rating: 0,
        plays: 0,
        sourceType: 'external_iframe',
        license: 'MIT License'
    }


];

// Verified working games only - removed non-working and placeholder games

// Pagination and filtering variables
let currentFilter = 'all';
let currentPage = 1;
const gamesPerPage = 9; // Optimized for 25 total games

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing navigation...');
    initializeNavigation();
});

function initializeNavigation() {
    console.log('Initializing navigation system...');

    // Render games
    renderGames();

    // Setup all event listeners
    setupNavigation();

    console.log('Navigation system initialized successfully');
}

function renderGames() {
    console.log('Rendering games...');

    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) {
        console.error('Games grid not found!');
        return;
    }

    // Filter games
    const filteredGames = currentFilter === 'all'
        ? gamesData
        : gamesData.filter(game => game.category === currentFilter);

    console.log(`Showing ${filteredGames.length} games for filter: ${currentFilter}`);

    // Calculate pagination
    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    const gamesToShow = filteredGames.slice(startIndex, endIndex);

    // Clear grid
    gamesGrid.innerHTML = '';

    // Create game cards
    gamesToShow.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });

    // Update pagination
    updatePagination(filteredGames.length);

    console.log(`Rendered ${gamesToShow.length} games on page ${currentPage}`);
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';

    card.innerHTML = `
        <div class="game-thumbnail">
            <img src="${game.thumbnail}" alt="${game.title}" loading="lazy">
            <div class="play-overlay">
                <div class="play-button">▶</div>
            </div>
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

function formatPlays(plays) {
    if (plays >= 1000000) {
        return (plays / 1000000).toFixed(1) + 'M';
    } else if (plays >= 1000) {
        return (plays / 1000).toFixed(1) + 'K';
    }
    return plays.toString();
}

function openGame(game) {
    const gameModal = document.getElementById('gameModal');
    const gameTitle = document.getElementById('gameTitle');
    const gameFrame = document.getElementById('gameFrame');

    if (!gameModal || !gameTitle || !gameFrame) {
        console.error('Game modal elements not found');
        return;
    }

    gameTitle.textContent = game.title;

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = game.gameUrl;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;

    // Clear and add iframe
    gameFrame.innerHTML = '';
    gameFrame.appendChild(iframe);

    // Show modal
    gameModal.style.display = 'block';

    console.log(`Opened game: ${game.title}`);
}

function closeGame() {
    const gameModal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');

    if (gameModal) gameModal.style.display = 'none';
    if (gameFrame) gameFrame.innerHTML = '';

    console.log('Game closed');
}

function toggleFullscreen() {
    const iframe = document.querySelector('#gameFrame iframe');
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

function setupNavigation() {
    console.log('Setting up navigation...');

    // Category filtering
    const categoryCards = document.querySelectorAll('.category-card');
    console.log(`Found ${categoryCards.length} category cards`);

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            console.log(`Category clicked: ${category}`);

            if (category) {
                currentFilter = category;
                currentPage = 1;

                // Update active state
                categoryCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');

                // Re-render games
                renderGames();

                // Scroll to games
                scrollToGames();
            }
        });
    });

    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        console.log('Setting up mobile menu...');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Mobile menu toggled');
        });

        // Close mobile menu when clicking links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Modal close events
    const gameModal = document.getElementById('gameModal');
    if (gameModal) {
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
    }

    // "Show All" functionality
    const showAllBtn = document.createElement('button');
    showAllBtn.textContent = 'Show All Games';
    showAllBtn.className = 'show-all-btn';
    showAllBtn.style.cssText = `
        background: linear-gradient(45deg, #00ffff, #ff00ff);
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        color: #000;
        font-weight: bold;
        cursor: pointer;
        margin: 20px auto;
        display: block;
        transition: transform 0.3s ease;
    `;

    showAllBtn.addEventListener('click', () => {
        currentFilter = 'all';
        currentPage = 1;

        // Remove active state from all category cards
        categoryCards.forEach(c => c.classList.remove('active'));

        renderGames();
        scrollToGames();

        console.log('Showing all games');
    });

    // Add show all button to categories section
    const categoriesSection = document.querySelector('.categories-section .container');
    if (categoriesSection) {
        categoriesSection.appendChild(showAllBtn);
    }

    console.log('Navigation setup complete');
}

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
            <span class="page-numbers">Page ${currentPage} of ${totalPages}</span>
            ${currentPage < totalPages ? `<button onclick="changePage(${currentPage + 1})" class="page-btn">Next</button>` : ''}
        </div>
    `;
}

function changePage(page) {
    const filteredGames = currentFilter === 'all'
        ? gamesData
        : gamesData.filter(game => game.category === currentFilter);
    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderGames();
        scrollToGames();
        console.log(`Changed to page ${page}`);
    }
}

function scrollToGames() {
    const gamesSection = document.getElementById('games');
    if (gamesSection) {
        gamesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Global functions for HTML onclick events
window.closeGame = closeGame;
window.toggleFullscreen = toggleFullscreen;
window.changePage = changePage;
window.scrollToGames = scrollToGames;

console.log('Navigation script loaded successfully');