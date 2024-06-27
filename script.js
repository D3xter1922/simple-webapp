document.addEventListener('DOMContentLoaded', async () => {
    const resultElement = document.getElementById('result');
    
    try {
        const response = await fetch('https://swift-uganda-short.functions.on-fleek.app');
        const data = await response.json();
        resultElement.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        resultElement.textContent = 'Error fetching data: ' + error.message;
    }
});
