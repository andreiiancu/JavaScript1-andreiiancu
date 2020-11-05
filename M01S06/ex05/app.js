// // 1In functia adaugata ca parametru la addEventListener
// keywordul this face referinta la elementul de DOM al
// butonului. Folosind proprietatea innerText schimba mesajul
// Opreste Afisarea in Porneste Afisarea in functie de
// statusul evenimentelor.
// // 2 metode deja cunoscute, adauga un paragraf in DOM care
// contine textul: “Alerta va fi afisata”, respective
// “Alerta nu va fi afisata” in functie de statusul
// evenimentelor.
// // 3Adauga un buton in document pe care cand apesi,
// sunt eliminate celelate butoane cu metoda .remove()
// // 4Folosind metoda confirm(), modifica codul de la
// punctul anterior astfel incat utilizatorul sa confirme
// eliminarea elementelor din DOM: “Esti sigur ca vrei sa
// stergi butoanele din DOM?”.

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let showbutton = document.querySelector('#showButton');
    let toggleEventButton = document.querySelector('#toggleEventButton');
    let removeButton = document.querySelector('#removeButtons');
    let paragraphMessage = document.querySelector('#message');
    let eventBound = true;

    let showAlert = () => {
      alert('Butonul a fost apasat');
    };

    showbutton.addEventListener('click', showAlert);

    toggleEventButton.addEventListener('click', (event) => {
      let textEnabled = 'Opreste Afisarea';
      let textDisabled = 'Porneste Afisarea';
      let messageEnables = 'Alerta va fi afisata';
      let messageDisabled = 'Alerta nu va fi afisata';

      if (eventBound === true) {
        showbutton.removeEventListener('click', showAlert);
        eventBound = false;
        event.target.innerText = textDisabled;

        event.target.innerText = textEnabled;
        paragraphMessage.innerText = textEnabled;
      } else {
        showbutton.addEventListener('click', showAlert);

        removeButton.addEventListener('click', () => {
          let approveRemovl = confirm(
            'Esti sigur ca vrei sastergi butoanele din DOM?',
          );

          if (approveRemoval != true) {
            return;
          }
          showbutton.remove();
          toggleEventButton.remove();
        });
        eventBound = true;

        event.target;
      }
    });
  });
})();
// cea de mai sus este functie anonima
//Ca sa anulam evenimentul trebuie sa folosim functii numite
