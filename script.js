const details = {
    valenzuela: {
        location: "Pugad Lawin",
        date: "August 23",
        action: "The symbolic Tearing of Cedulas."
    },
    alvarez: {
        location: "Bahay Toro",
        date: "August 24",
        action: "A strategic Gathering of Leaders."
    },
    masangkay: {
        location: "Balintawak",
        date: "August 26",
        action: "The First Skirmish (The spark of battle)."
    }
};

function showDetails(person) {
    const data = details[person];
    const box = document.getElementById('info-box');
    
    box.innerHTML = `
        <h3 style="color: #8b0000;">Account of the "Cry"</h3>
        <p><strong>Primary Location:</strong> ${data.location}</p>
        <p><strong>Primary Date:</strong> ${data.date}</p>
        <p><strong>Core Action:</strong> ${data.action}</p>
    `;
}