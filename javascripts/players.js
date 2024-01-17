async function updatePlayerCount() {
    const serverAddress = '107.161.154.192:25565'; // Replace with your server IP
    const apiUrl = `https://api.mcsrvstat.us/2/${serverAddress}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.online) {
            document.getElementById('player-count').innerText = data.players.online;
        } else {
            document.getElementById('player-count').innerText = 'Server Offline';
        }
    } catch (error) {
        console.error('Error fetching server data:', error);
        document.getElementById('player-count').innerText = 'Error fetching data';
    }
}

// Call updatePlayerCount when the page content is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    updatePlayerCount();
});
