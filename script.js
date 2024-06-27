document.addEventListener('DOMContentLoaded', async () => {
    const resultElement = document.getElementById('result');
    const proxyUrl = '';
    const apiUrl = 'https://swift-uganda-short.functions.on-fleek.app';

    try {
        fetch(apiUrl)
      .then(response => {console.log(response); response.json()})
      .then(json => {
        resultElement.textContent = JSON.stringify(json, null, 2);
        console.log(json)}
    )

        
    } catch (error) {
        resultElement.textContent = 'Error fetching data: ' + error.message;
    }
});
