document.getElementById('getData').addEventListener('click', function() {
    fetch('http://localhost:3000/Teams') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const output = document.getElementById('output');
            output.innerHTML = ''; 

           

            data.forEach(team => {
               
                const teamCard = document.createElement('div');
                teamCard.classList.add('team-card');

              
                const teamImage = document.createElement('img');
                teamImage.src = team.imageurl;
                teamImage.alt = team.team; 
                teamCard.appendChild(teamImage);

                
                const teamName = document.createElement('div');
                teamName.classList.add('team-name'); 
                teamName.textContent = team.team;
                teamCard.appendChild(teamName);

               
                const teamYear = document.createElement('div');
                teamYear.classList.add('team-year'); 
                teamYear.textContent = `Year: ${team.year}`; 
                teamCard.appendChild(teamYear);

                
                output.appendChild(teamCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
