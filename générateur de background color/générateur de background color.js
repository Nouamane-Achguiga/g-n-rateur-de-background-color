var btnc=document.getElementById('btnc')
var prg=document.getElementById('prg')
var bd=document.getElementById('bod')
let rgb=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
function change(){
    color=["#"]
    let a
    for(let i=0;i<6;i++){
    a=Math.floor(Math.random()*16)
    color=color+rgb[a]
    }
    bd.style.backgroundColor=color
    prg.innerHTML=color
}
btnc.addEventListener('click',change)