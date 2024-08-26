document.addEventListener('DOMContentLoaded', () => {
    let episodesList = document.getElementById('episodes-list');

    fetch('https://api.sampleapis.com/simpsons/episodes')
        .then(response => response.json())
        .then(episodes => {
            console.log(episodes); 
            episodesList.innerHTML = episodes.map(episode => `
                <div class="epi-carta">
                    <img src="${episode.thumbnailUrl}" alt="${episode.name}" onError="this.src='default-image.jpg';">
                    <h2>${episode.name}</h2>
                    <p>${episode.description}</p>
                    <p class="punteo">Rating: ${episode.rating}</p>
                </div>
            `).join('');
        })
        .catch(error => {
            console.error('Error fetching episodes:', error);
        });
});