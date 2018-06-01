// Fetch API

fetch('https://sgp-api-olivier.herokuapp.com/api/collaborateurs')

    .then((resp) => resp.json())

    .then(data => afficher(data));




function afficher(data) {

    var lignes = data.map(unCollab => `
        <tr>
            <td>${unCollab.matricule}</td>
            <td>${unCollab.nom}</td>
            <td>${unCollab.prenom}</td>
        </tr>
    `).join('')

    var html = `
        <table class="table">
            <thead>
                <th>Matricule</th>
                <th>Nom</th>
                <th>Prénom</th>
            </thead>
            <tbody>
               ${lignes}
            </tbody>
        </table>
    `;

    document.querySelector('#collabs').innerHTML = html

}
