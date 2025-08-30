// Liste over skeer
const skeer = [
    {id: 1, navn: "1932", billede: "Images/Ske20.png", info: "", titel: "Children Around The Christmas Tree", lavetAf: "Ebba Holm"},
    {id: 2, navn: "1936", billede: "Images/Ske17.png", info: "", titel: "Christmas Candle", lavetAf: "Arno Malinowski"},
    {id: 3, navn: "1943", billede: "Images/Ske04.png", info: "", titel: "Dove of Peace", lavetAf: "Olaf Stæhr-Nielsen"},
    {id: 4, navn: "1951", billede: "Images/Ske18.png", info: "", titel: "Colorful Christmas", lavetAf: "Eigil Jensen"},
    {id: 5, navn: "1957", billede: "Images/Ske19.png", info: "", titel: "Danish Julenisser", lavetAf: "Erik Ellegaard Frederiksen"},
    {id: 5, navn: "1959", billede: "Images/Ske08.png", info: "", titel: "The Lucia Bride", lavetAf: "Henry Thelander"},
    {id: 5, navn: "1961", billede: "Images/Ske02.png", info: "", titel: "Organ Pipes", lavetAf: "Arne L. Hansen"},
    {id: 5, navn: "1962", billede: "Images/Ske10.png", info: "", titel: "Madonna and Child", lavetAf: "Carl R. Frederiksen"},
    {id: 0, navn: "1963", billede: "Images/Ske16.png", info: "", titel: "Santa's Village", lavetAf: "Carsten Fröhlich"},
    {id: 0, navn: "1964", billede: "Images/Ske13.png", info: "", titel: "Orion", lavetAf: "Inger Hanmann"},
    {id: 0, navn: "1965", billede: "Images/Ske01.png", info: "", titel: "The Christmas Tree", lavetAf: "Theresia Hvorslev"},
    {id: 0, navn: "1967", billede: "Images/Ske07.png", info: "", titel: "Splendor of Yule", lavetAf: "Paul Rene Gauguin"},
    {id: 0, navn: "1969", billede: "Images/Ske12.png", info: "", titel: "Greenlander", lavetAf: "Ib Antoni"},
    {id: 0, navn: "1972", billede: "Images/Ske06.png", info: "", titel: "Herald", lavetAf: "Bjorn Wiinblad"},
    {id: 0, navn: "1974", billede: "Images/Ske15.png", info: "", titel: "The Blue Bird", lavetAf: "Carl-Henning Pedersen"},
    {id: 0, navn: "1975", billede: "Images/Ske11.png", info: "", titel: "Shooting Star", lavetAf: "Per Arnoldi"},
    {id: 0, navn: "1976", billede: "Images/Ske14.png", info: "", titel: "Snow Crystal", lavetAf: "Gudmund Olsen"},
    {id: 0, navn: "1978", billede: "Images/Ske03.png", info: "", titel: "Solstice", lavetAf: "Vibeke Alfelt"},
    {id: 0, navn: "1981", billede: "Images/Ske05.png", info: "", titel: "Red Robin", lavetAf: "Falke Bang"},
    {id: 0, navn: "1985", billede: "Images/Ske09.png", info: "", titel: "The Bird Sheaf", lavetAf: "Naja Salto"},
    
    
    // Fortsæt til ca. 25 skeer
];

// Funktion til at vise skeer på forsiden
function visSkeer() {
    const container = document.getElementById('skeer-container');
    skeer.forEach(skee => {
        const div = document.createElement('div');
        div.className = 'skee';
        div.innerHTML = `
            <img src="${skee.billede}" alt="${skee.navn}">
            <p>${skee.navn}</p>
        `;
        div.addEventListener('click', () => {
            // Gem data i localStorage og gå til detaljeside
            localStorage.setItem('valgtSkee', JSON.stringify(skee));
            window.location.href = 'Info.html';
        });
        container.appendChild(div);
    });
}

visSkeer();
