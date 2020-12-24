const task3Element = document.getElementById('task-3');
function nameless(){
    alert("Lorem ipsum")
}

function named(name){
    alert(`Hello ${name}`)
}

function trio(a, b, c){
    return `${a} ${b} ${c}`;
}
// nameless();

named("Joe Doe");
task3Element.addEventListener('click', nameless);
alert(trio("Task", "3", "here"));

