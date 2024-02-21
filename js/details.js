// javascript for details.html
let id =new URLSearchParams(window.location.search).get("id")
let details= document.querySelector(".details")
let deleteBtn= document.querySelector(".button")

const renderDetails= async()=>{
    const res= await fetch("http://localhost:3000/posts/" + id)
    const posts= await res.json()
        const template= `
            <h1>${posts.title}</h1>
            <p>${posts.body}</p>
        `

        details.innerHTML=template
        
}
deleteBtn.addEventListener('click' ,async(e)=>{
    const res= await fetch('http://localhost:3000/posts/'+ id,{
        method: 'DELETE',
    })

    window.location.replace('/index.html')
})

window.addEventListener('DOMContentLoaded', (e)=>renderDetails())

// console.log(id);