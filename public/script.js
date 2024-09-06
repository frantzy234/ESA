document.getElementById('getData').addEventListener('click', function() {
    fetch('http://localhost:3000/NBAplayer')  
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const output = document.getElementById('output');
            output.innerHTML = ''; 

            data.forEach(player => {
               
                const playerCard = document.createElement('div');
                playerCard.classList.add('player-card');

               
                const playerImage = document.createElement('img');
                playerImage.src = player.imageurl;
                playerImage.alt = player.name;

                
                const playerName = document.createElement('div');
                playerName.classList.add('player-name');
                playerName.textContent = player.name;

                
                const playerTeam = document.createElement('div');
                playerTeam.classList.add('player-team');
                playerTeam.textContent = player.team;

                const playerStats = document.createElement('div');
                playerStats.classList.add('playerStat');
                playerStats.textContent = player.stat;

                
                playerCard.appendChild(playerImage);
                playerCard.appendChild(playerName);
                playerCard.appendChild(playerTeam);
                playerCard.appendChild(playerStats);
                output.appendChild(playerCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});




