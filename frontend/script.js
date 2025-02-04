const API_URL = 'http://localhost:8080/api/todos';

// Fonction pour charger et afficher les ToDos
async function loadTodos() {
    try {
        const response = await fetch(API_URL);
        const todos = await response.json();
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = ''; // Vider la liste existante
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;
            todoList.appendChild(li);
        });
    } catch (error) {
        console.error('Erreur lors du chargement des ToDos:', error);
    }
}

// Fonction pour ajouter une nouvelle tâche
async function addTodo(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const newTodo = { title: todoInput.value };

    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo),
        });
        todoInput.value = ''; // Réinitialiser le champ
        loadTodos(); // Recharger les ToDos
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la tâche:', error);
    }
}

// Événement pour le formulaire
document.getElementById('todo-form').addEventListener('submit', addTodo);

// Charger les ToDos au chargement de la page
loadTodos();
