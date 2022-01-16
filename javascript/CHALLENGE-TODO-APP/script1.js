const input = document.getElementById('todo-input')



input.addEventListener('keypress', (e) =>{
    if (e.keyboardEvent.charCode === 13 && input.value.length > 0){
        createTodoItem(input.value);
        input.value= '';
    }
});
