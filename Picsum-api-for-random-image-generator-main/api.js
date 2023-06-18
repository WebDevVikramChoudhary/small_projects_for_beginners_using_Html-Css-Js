
let formss=document.getElementById("formsss")
let width=document.getElementById("width")
let height=document.getElementById("height")

height.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? formss(e) : null);
})


 formss.addEventListener('submit',function(e){
e.preventDefault()
   
    let  image=document.getElementById("img")

    let links="https://picsum.photos/"+width.value+"/"+height.value
    image.src=links
//   alert("https://source.unsplash.com/random/"+width.value+"*"+height.value)
})  