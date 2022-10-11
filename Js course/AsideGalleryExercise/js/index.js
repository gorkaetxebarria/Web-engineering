window.onload =()=>
{
    const img= document.querySelectorAll("img");
    addlistenners(img);
}

const addlistenners=(img)=>{
    img.forEach(element => {
        element.addEventListener('click',displayImg);
    });
}
const displayImg=(event)=>
{
    console.log("displaying foto");
    let canvas = document.getElementById("image");
    let target= event.target;
    console.log("cambia fondo");
    let variable=target.getAttribute('src');
    console.log(variable)
    canvas.style.backgroundImage="url("+variable+")";
}