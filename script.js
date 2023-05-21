const tarefas = [];


function AddTarefa(){
    const txttarefa = document.getElementById('tarefa')
    const tarefa = txttarefa.value

    if(tarefa !== ""){
        tarefas.unshift(tarefa)
        txttarefa.value = ''
        ExibirTarefa()
    }
}

function ExibirTarefa(){
    const ListaDeTarefas = document.getElementById('local')
       ListaDeTarefas.innerHTML = ""

    tarefas.forEach(function(tarefa){
        const li = document.createElement('li')
        li.textContent = tarefa;
        ListaDeTarefas.appendChild(li)
        
                  
    });
    
}

function criar(){
    AddTarefa()
}
