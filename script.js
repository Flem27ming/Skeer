// Liste over skeer
const skeer = [
    {id: 1, navn: "1932", billede: "Images/Ske20.png", info: "", titel: "Children Around The Christmas Tree", lavetAf: "Ebba Holm"},
    {id: 2, navn: "1936", billede: "Images/Ske17.png", info: "", titel: "Christmas Candle", lavetAf: "Arno Malinowski"},
    {id: 3, navn: "1943", billede: "Images/Ske04.png", info: "", titel: "Dove of Peace", lavetAf: "Olaf Stæhr-Nielsen"},
    {id: 4, navn: "1951", billede: "Images/Ske18.png", info: "", titel: "Colorful Christmas", lavetAf: "Eigil Jensen"},
    {id: 5, navn: "1957", billede: "Images/Ske19.png", info: "", titel: "Danish Julenisser", lavetAf: "Erik Ellegaard Frederiksen"},
    {id: 6, navn: "1959", billede: "Images/Ske08.png", info: "", titel: "The Lucia Bride", lavetAf: "Henry Thelander"},
    {id: 7, navn: "1961", billede: "Images/Ske02.png", info: "", titel: "Organ Pipes", lavetAf: "Arne L. Hansen"},
    {id: 8, navn: "1962", billede: "Images/Ske10.png", info: "", titel: "Madonna and Child", lavetAf: "Carl R. Frederiksen"},
    {id: 9, navn: "1963", billede: "Images/Ske16.png", info: "", titel: "Santa's Village", lavetAf: "Carsten Fröhlich"},
    {id: 10, navn: "1964", billede: "Images/Ske13.png", info: "", titel: "Orion", lavetAf: "Inger Hanmann"},
    {id: 11, navn: "1965", billede: "Images/Ske01.png", info: "", titel: "The Christmas Tree", lavetAf: "Theresia Hvorslev"},
    {id: 12, navn: "1967", billede: "Images/Ske07.png", info: "", titel: "Splendor of Yule", lavetAf: "Paul Rene Gauguin"},
    {id: 13, navn: "1969", billede: "Images/Ske12.png", info: "", titel: "Greenlander", lavetAf: "Ib Antoni"},
    {id: 14, navn: "1972", billede: "Images/Ske06.png", info: "", titel: "Herald", lavetAf: "Bjorn Wiinblad"},
    {id: 15, navn: "1974", billede: "Images/Ske15.png", info: "", titel: "The Blue Bird", lavetAf: "Carl-Henning Pedersen"},
    {id: 16, navn: "1975", billede: "Images/Ske11.png", info: "", titel: "Shooting Star", lavetAf: "Per Arnoldi"},
    {id: 17, navn: "1976", billede: "Images/Ske14.png", info: "", titel: "Snow Crystal", lavetAf: "Gudmund Olsen"},
    {id: 18, navn: "1978", billede: "Images/Ske03.png", info: "", titel: "Solstice", lavetAf: "Vibeke Alfelt"},
    {id: 19, navn: "1981", billede: "Images/Ske05.png", info: "", titel: "Red Robin", lavetAf: "Falke Bang"},
    {id: 20, navn: "1985", billede: "Images/Ske09.png", info: "", titel: "The Bird Sheaf", lavetAf: "Naja Salto"},
    
    
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

const onskedeSkeer = [
    {id: 101, navn: "1925", billede: "Images/Ske101.jpg", titel: "Poinseltia", lavetAf: "Ellen Michelsen"},
    {id: 102, navn: "1929", billede: "Images/Ske102.jpg", titel: "Christmas Rose", lavetAf: "Ebba Holm"},
    {id: 103, navn: "1941", billede: "Images/Ske105.jpg", titel: "Mistletoe", lavetAf: "Ole Hagen"},
    {id: 104, navn: "1945", billede: "Images/Ske107.jpg", titel: "Snow Crystals", lavetAf: "Erik Herløw"},
    {id: 105, navn: "1952", billede: "Images/Ske108.jpg", titel: "Santa and the Reindeer", lavetAf: "Arne Ungermann"},
    {id: 106, navn: "1955", billede: "Images/Ske109.jpg", titel: "Poinseltia", lavetAf: "Palle Pio"},
    {id: 107, navn: "1968", billede: "Images/Ske103.jpg", titel: "En mors hjerte", lavetAf: "Henry Heerup"},
    {id: 108, navn: "1991", billede: "Images/Ske104.jpg", titel: "Northern Lights", lavetAf: "Lin Utzon"},
    {id: 109, navn: "2003", billede: "Images/Ske106.jpg", titel: "Glowing Heart", lavetAf: "Esben Hanefelt Kristensen"},
    // osv.
];

// Funktion til at vise ønskede skeer
function visOnskedeSkeer() {
    const container = document.getElementById('skeeronskede-container');
    onskedeSkeer.forEach(skee => {
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

// Kald funktionen
visOnskedeSkeer();
