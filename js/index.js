// javascript for index.html
const conatainer= document.querySelector(".blogs")
const searchForm= document.querySelector(".search")
console.log(searchForm);
const  renderPosts= async(term)=>{
    let uri='http://localhost:3000/posts?_sort=likes';
    if (term) {
       const log= uri+=`&q=${term}`;
       console.log(log);
    }
    const res=  await fetch(uri);
    const posts= await res.json();
    console.log(posts);

    let template=''
    posts.forEach(post => {
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.body.slice(0,200)}</p>
                <a href="/details.html?id=${post.id}">read more...</a>
            </div>
        `
    })
    conatainer.innerHTML= template 

}

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    renderPosts(searchForm.term.value
        )
    console.log(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', (e)=>renderPosts())
