async function getMinecraftServerData(retryCount = 3) {
    const serverURL = 'https://apis.bithole.dev/mc/ping-server?host=play.catcraftmc.ru&port=25565';

    while (retryCount > 0) {
        try {
            const response = await fetch(serverURL);

            if (!response.ok) {
                throw new Error(`Сервер ответил: ${response.status}`);
            }

            const data = await response.json();
            console.log("Данные сервера:", data);

            if (data.players.online) {
                if (data.players.online == 1) {
                    document.getElementById('player-count').innerText = `${data.players.online} игрок`;
                }
                else if (data.players.online > 1 && data.players.online < 5) {
                    document.getElementById('player-count').innerText = `${data.players.online} игрока`;
                }
                else if (data.players.online >= 5) {
                    document.getElementById('player-count').innerText = `${data.players.online} игроков`;
                }
                    
            } else {
                document.getElementById('player-count').innerText = 'Сервер выключен =(';
            }

            break; // Break the loop if the request was successful
        } catch (error) {
            if (error == TypeError){
                return;
            }
            console.error("Не смог взять данные:", error);
            retryCount--;
            if (retryCount === 0) {
                document.getElementById('player-count').innerText = "Сервер не отвечает =(";
                break;
            }
            console.log(`Пробую... Осталось попыток: ${retryCount}`);
            await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds before retrying
        }
    }
}

getMinecraftServerData();


