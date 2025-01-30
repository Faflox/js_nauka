import fetch from "node-fetch";

(async function getData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/');
        if (response.ok) {
            const result = await response.json();
            console.log(result);
        } else {
            console.log('Nie udało się ');
        }
    } catch (error) {
        console.error('Błąd:', error);
    }
})();