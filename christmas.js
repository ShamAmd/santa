


function createFallingFlakes() {
    const flakeContainer = document.querySelector('.falling-flakes');
    const numberOfFlakes = 50; // Number of flakes

    for (let i = 0; i < numberOfFlakes; i++) {
        const flake = document.createElement('div');
        flake.classList.add('flake');
        flake.innerText = '❄'; // Snowflake emoji
        flake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        flake.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random speed
        flake.style.animationDelay = `${Math.random() * 5}s`; // Random delay
    

        flakeContainer.appendChild(flake);
    }
}

// Call the function to start generating flakes
createFallingFlakes();


const eventsData = [ 
  {
    image: './assets/rose2.png',
    hoverImage: './assets/rose.png', // Hover image
    caption: '🎤 Carol Song - Rose'
  },
  {
    image: './assets/cake.png',
    hoverImage: './assets/cake.png',
    caption: '🎂 Cake Cutting and Wine'
  },
  {
    image: './assets/gift.png',
    hoverImage: './assets/gift.png',
    caption: '🎁 Christmas Friend Gift Exchanging'
  },
  {
    image: './assets/madhusmitha2.png',
    hoverImage: './assets/madhusmitha.png',
    caption: '💃 Solo Dance - MadhuSmitha'
  },
  {
    image: './assets/haseeb.png',
    hoverImage: './assets/haseeb2.png',
    caption: '🎶 Group Song - Hazeeb and Team'
  },
  {
    image: './assets/sudhin2.png',
    hoverImage: './assets/sudhin.png',
    caption: '🎤 Solo Song - Sudhin'
  },
  {
    image: './assets/nithin.png',
    hoverImage: './assets/nithin2.png',
    caption: '🎶 Group Song - Nithin and Team'
  },
  {
    image: './assets/shilpa2.png',
    hoverImage: './assets/shilpa.png',
    caption: '💃 Group Dance - Shilpa and Team'
  }
];

  
  const eventsContainer = document.querySelector('.event-cards-container');
  
  function createEventCards() {
    eventsData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        const eventImage = document.createElement('img');
        eventImage.src = event.image;
        eventImage.alt = event.caption;
        eventImage.classList.add('event-card-image');

        const eventCaption = document.createElement('div');
        eventCaption.classList.add('event-card-caption');
        eventCaption.textContent = event.caption;

        // Add hover effect
        eventImage.addEventListener('mouseenter', () => {
            eventImage.src = event.hoverImage; // Switch to hover image
        });

        eventImage.addEventListener('mouseleave', () => {
            eventImage.src = event.image; // Revert to original image
        });

        eventCard.appendChild(eventImage);
        eventCard.appendChild(eventCaption);
        eventsContainer.appendChild(eventCard);
    });
}


// 

  
  function loopEventCards() {
    createEventCards();
  
    let isScrolling = false;
    let scrollPosition = 0;
  
    eventsContainer.addEventListener('scroll', () => {
      if (!isScrolling) {
        isScrolling = true;
        window.requestAnimationFrame(() => {
          scrollPosition += eventsContainer.scrollLeft;
          eventsContainer.scrollLeft = scrollPosition;
          isScrolling = false;
        });
      }
    });
  
    setInterval(() => {
      eventsContainer.scrollLeft += 1;
    }, 16);
  }
  
  loopEventCards();



  // games section


  const gamesData = [
    { image: './assets/candles.png', name: 'Blow It Out!' },
    { image: './assets/sticks.png', name: 'Stick in Hair' },
    { image: './assets/chochlates.png', name: 'Catch the Chocolates' },
    { image: './assets/ball.png', name: 'Ball Pass Relay' },
    { image: './assets/walk.png', name: 'Careful Steps' },
    { image: './assets/biscuit.png', name: 'Face the Biscuit' },
    { image: './assets/balloons.png', name: 'Keep It Up!' },
    { image: './assets/spoon.png', name: 'Scoop It' },
    { image: './assets/tressue.png', name: 'Treasure Hunt' },
  ];

  function populateGamesSection() {
    const gamesContainer = document.querySelector('.games-container');

    gamesData.forEach(game => {
      const gameCard = document.createElement('div');
      gameCard.className = 'game-card';
      gameCard.style.backgroundImage = `url(${game.image})`;

      const overlay = document.createElement('div');
      overlay.className = 'game-overlay';
      overlay.textContent = game.name;

      gameCard.appendChild(overlay);
      gamesContainer.appendChild(gameCard);
    });
  }

  document.addEventListener('DOMContentLoaded', populateGamesSection);
  