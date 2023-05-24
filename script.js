const astarefas = [...document.querySelectorAll('li')];
const tarefas = [];

function AddTarefa() {
  const txttarefa = document.getElementById('tarefa');
  const tarefa = txttarefa.value;

  if (tarefa !== "") {
    tarefas.unshift(tarefa);
    txttarefa.value = '';
    ExibirTarefa();
  }
}

function ExibirTarefa() {
  const ListaDeTarefas = document.getElementById('local');
  ListaDeTarefas.innerHTML = "";

  tarefas.forEach(function(tarefa) {
    const li = document.createElement('li');
    li.setAttribute('class', 'selecionada');
    li.textContent = tarefa;

    const btnApagar = document.createElement('button');
    btnApagar.textContent = 'Apagar';
    btnApagar.setAttribute('class', 'btn-apagar');

    btnApagar.addEventListener('click', function() {
      ApagarTarefa(tarefa);
    });

    li.appendChild(btnApagar);

    ListaDeTarefas.appendChild(li);
  });
}

function criar() {
  AddTarefa();
}

function ApagarTarefa(tarefa) {
  const indice = tarefas.indexOf(tarefa);
  if (indice !== -1) {
    tarefas.splice(indice, 1);
    ExibirTarefa();
  }
}

astarefas.forEach(function(el) {
  el.addEventListener('click', function(evt) {
    const tarefa = evt.target.textContent;
    console.log(tarefa);
    // Realizar outras operações com a tarefa selecionada, se necessário
  });
});
console.log(astarefas)