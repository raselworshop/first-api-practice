function loadDataS(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => displayUsers(json))
}
function displayUsers(json){
    console.log(json)
}