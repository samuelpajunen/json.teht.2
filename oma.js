// Hakee JSON-tiedoston Mocky-palvelusta
fetch('https://run.mocky.io/v3/fe145545-dfd8-418d-8dc2-b706f66c2b37')
.then(function (response) {
    return response.json(); // Muuntaa vastauksen JSON-muotoon
})
.then(function (responseJson) {
    kerro(responseJson); // Kutsuu kerro-funktiota datan kanssa
}) 
.catch(function(error){
    document.getElementById("vastaus").innerHTML = 
        "<p>Tietoa ei pystytä hakemaan</p>";
});

// Funktio näyttää haetut tiedot HTML-sivulla
function kerro(data) {
    // Haetaan dataa näkyville
    let htmlSisalto = 
    "<h2>" + data.toteutus.nimi + " (" + data.toteutus.tunnus + ")</h2>" +
    "<h3><strong>Määrä:</strong> " + data.maara + "</h3>" +
    "<h3><strong>Osallistujat:</strong> " + data.nimet.join(', ') + "</h3>" +
    "<h3><strong>Kesto:</strong> " + data.kesto + "</h3>" +
    "<h3><strong>Viikkomäärä:</strong> " + data.viikkomaara + "</h3>" +
    "<img src='" + data.kuva + "' alt='Iso siru tummalla konelevyllä, josta lähtee valolähteitä' style='max-width:500px;'>";

    // Asetetaan sisältö elementtiin, jonka id on "vastaus"
    document.getElementById("vastaus").innerHTML = htmlSisalto;
}
