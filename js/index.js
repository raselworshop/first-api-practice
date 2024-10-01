function loadUsers2(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers2(data))
}
// function displayUsers2(data){
//     for(const user of data){
//         console.log(user.name)
//         console.log(user.username)
//         console.log(user.email)
//         console.log(user.website)
//     }
// }
function displayUsers2(data){
    const ul = document.getElementById('user-list');
    for(const user of data){
        const li = document.createElement('li');
        li.innerHTML = `name: ${user.name}, and </br>
                        username: ${user.username}, and here is </br>
                        Email: ${user.email}`;
        ul.appendChild(li)
    }
}


// delete 
function postADelete(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
}

// post patching 
function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

// post creating 
function createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}