document.getElementById('generateBtn').addEventListener('click', function () {
    const link = document.getElementById('youtubeLink').value.trim();
    const result = document.getElementById('result');
    const loader = document.getElementById('loader');

    result.innerHTML = ""; // curăță rezultatul anterior

    if (link === '') {
        result.innerHTML = "<p style='color: yellow;'>Te rog să introduci un link YouTube valid.</p>";
        return;
    }

    loader.style.display = 'block'; // afișează loaderul

    // Simulăm un proces de "generare" timp de 2 secunde
    setTimeout(() => {
        loader.style.display = 'none'; // ascunde loaderul

        result.innerHTML = `
            <p style='color: lightgreen;'>Clipul a fost generat cu succes!</p>
            <p><strong>Linkul introdus:</strong> ${link}</p>
            <p>(Funcția de generare reală a clipurilor va fi disponibilă în curând.)</p>
        `;
    }, 2000);
});
