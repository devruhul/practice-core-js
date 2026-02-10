// api practice

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log("User Data:", data))
        .catch(error => console.error('Error:', error));
}

// display posts in the div container
function displayPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const container = document.getElementById('postContainer');
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                container.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error:', error));
}