const start = document.getElementById('start');
const welcome = document.getElementById('welcome');
// const verdadero = document.getElementById('verdadero');
const play = document.getElementById('play');
const url = `https://opentdb.com/api.php?amount=10&type=boolean`;


start.addEventListener('click', function(event) {
  let evento = event.target;
  console.log(evento);
  trivia();
});

function trivia() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);

      // for (let i = 0; i < results.length; i++) {
      //    results[i];
      //  }
      let i = 0;
      let results = data.results;
      let question = data.results[i].question;
      let category = data.results[i].category;
      let correct = data.results[i].correct_answer;
      let incorrect = data.results[i].incorrect_answers;

      let html = `<h1>${category}</h1>
      <p>${question}</p>
      <button type="button" id="falso">FALSE</button>
      <button type="button" id="verdadero">TRUE</button>`;
      play.innerHTML = html;

      const btnFalso = document.getElementById('falso');
      const btnVerd = document.getElementById('verdadero');

      btnFalso.addEventListener('click', function(btnF){
        if(correct==='False') {
          alert('Respuesta Correcta!')
        }
        else{
          alert('Buuu! Respuesta Incorrecta!')
        }
      });

      btnVerd.addEventListener('click', function(btnV){
        if(correct==='True') {
          alert('Respuesta Correcta!')
        }
        else{
          alert('Buuu! Respuesta Incorrecta!')
        }
      })


    });
  start.remove();
  welcome.remove();
  cat.remove();
};
