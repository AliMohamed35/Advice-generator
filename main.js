const endPoint = `https://api.adviceslip.com/advice`;

async function fetchAdvices() {
    try {
        let response = await fetch(`${endPoint}?t=${new Date().getTime()}`); // added this to prevent getting cashed responses and prevent pressing the btn multiple times to generate new advice

        if (!response.ok) {
            throw new Error('Failed to fetch');
        }

        let data = await response.json();
        document.getElementById('advice').innerHTML = `"${data.slip.advice}"`;
        document.getElementById('advice-id').innerHTML = `ADVICE #${data.slip.id}`;
    } catch (error) {
        console.log(error);
    }
}

fetchAdvices();
