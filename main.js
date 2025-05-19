const endPoint = `https://api.adviceslip.com/advice`;

async function fetchAdvices() {
    try {
        let response = await fetch(endPoint);

        if (!response.ok) {
            throw new Error('failed to fetch')
        } else {
            let data = await response.json();
            generateAdvice(data)
        }
    } catch (error) {
        console.log(error);
    }
}

function generateAdvice(data) {
    let advice = document.getElementById('advice');
    let advice_id = document.getElementById('advice-id');
    advice.innerHTML = `"${data.slip.advice}"`;
    advice_id.innerHTML = `ADVICE #${data.slip.id}`;
}

fetchAdvices();