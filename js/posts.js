function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post', 'ph1')
        div.innerHTML = `
                <h4>User-${post.userId}</h4>
                <h5>Post: ${post.title}</h5>
                <p>Post Description:${post.body}</p>
        `
        postContainer.appendChild(div);
        console.log(post)
        // console.log(post)
    }
}

loadPosts();
