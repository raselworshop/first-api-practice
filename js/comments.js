const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => console.log(data))
        // .catch(console.error('here is the error', error)) //to find a debug error
}

// a different system async function
const loadComments2 = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    console.log(data)
}