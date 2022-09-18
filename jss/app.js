window.onload =()=>{
  init()
}
// using correct api url '/?userId=1' to filter the json before fetching
let url = 'https://jsonplaceholder.typicode.com/posts/?userId=1'
let myData = ''


//fetching using async function
const init = async ( ) =>{
  let resp = await fetch(url)
  let data = await resp.json()
  myRender(data)
  return data
}

//coloring function using inside ternary operator
const coloring = (id,color)=>{
  document.getElementById(`id-${id}`).style.backgroundColor = color
}  


const myRender = (data) =>{
  data.forEach((item)=> {
    let myRoot = document.getElementById('root')  
    
    myRoot.innerHTML += `
    <div id="id-${item.id}" style="width:70vw"> 
    <h3>Id: ${item.id} </h3> 
    <h3>Title: ${item.title}</h3>
    <p> body: ${item.body}</P>
    </div>
    `
    item.id % 2 === 0 ? coloring(item.id,'red'): coloring(item.id,'yellow')
    item.id % 5 === 0 ? coloring(item.id,'hotpink'): console.log('i must type here somthing')
  });
    }
