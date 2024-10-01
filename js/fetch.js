/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
*/
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
//  .then(response => response.json())
//  .then(json => console.log(json))

function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}




// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response)) // .json() isn't same/similler to JSON.perse() but closer 
//     //   .then(response => response.json()) // .json() isn't same/similler to JSON.perse() but closer 
//     //   .then(json => console.log(json))