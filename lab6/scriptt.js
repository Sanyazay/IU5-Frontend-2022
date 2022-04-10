

// 1
const firstelem = document.getElementById('firstobject')
firstelem.onclick = function() {
    firstelem.style.background ="#" + Math.floor(Math.random() * 256).toString(16) + Math.floor(Math.random() * 256).toString(16) + Math.floor(Math.random() * 256).toString(16);   
};
//2
let timer = 0;
let timerlaunch
secondobject.onmouseover = function() {
    timerlaunch = setInterval(()=>{timer++; secondobject.innerHTML=`${timer}`},1000)
}
secondobject.onmouseout = function() {
    clearInterval(timerlaunch)
}
//3
const button1 = document.getElementById("openlistbutton");
const items = document.getElementById("items");

button1.addEventListener("click", () => {items.classList.toggle("item-show")});
//4

const figure = document.getElementById("d21");
const area = document.getElementById("thirdobject");
let flag = false;
document.addEventListener('mousemove',(mouse) =>{
    if(flag){

        let x,y;
        const minX = area.offsetLeft + figure.offsetWidth/2,
        maxX = area.offsetLeft + area.offsetWidth - figure.offsetWidth/2,
        minY = area.offsetTop + figure.offsetWidth/2,
        maxY = area.offsetTop + area.offsetHeight - figure.offsetHeight/2;
        
        const coordX=mouse.pageX,
        coordY=mouse.pageY;
        
        if(coordX > maxX){
            x = area.offsetWidth - figure.offsetWidth ;
            
        }else if(coordX < minX){
            x = 0; //+ figure.offsetWidth /2;
            
            
        }else{
            x = coordX - minX;
            
        }
        if(coordY > maxY){
            y = area.offsetHeight - figure.offsetHeight;
            
        }else if(coordY < minY){
            y = 0; //+ figure.offsetWidth /2;
            
        }else{
            y = coordY - minY;
            
        }
        
        figure.style.left = `${x}px`;
        figure.style.top = `${y}px`;
        
    }
    

})
figure.addEventListener('click', () => {
	flag = true;
 })

 document.addEventListener('keyup', (k) => {
 if (k.key.toLowerCase() == 'escape') {
	flag = false;
 }
 })

//5
const BButton = document.getElementById("BButton");
const series = document.getElementById("series")

BButton.addEventListener("click", () => {
   fetch("https://breakingbadapi.com/api/episodes").then((data) => data.json()).then((data) => {
       data.forEach((ep) => {
           const episode = document.createElement("div");
           series.classList.add("episode-card");

           const title = document.createElement('h1');
           title.innerText = `${ep.title}`
           series.appendChild(title);

           const season = document.createElement('h4');
           season.innerText = `Сезон ${ep.season}`
           series.appendChild(season);

           const epNum = document.createElement('h4');
           epNum.innerText = `Серия ${ep.episode}`
           series.appendChild(epNum);

           const airDate = document.createElement('h4');
           airDate.innerText = `Дата выхода: ${ep.air_date}`
           series.appendChild(airDate);

           const chars = document.createElement('h4');
           chars.innerText = "Персонажи:"
           series.appendChild(chars);
           const characters = document.createElement('div');
           characters.classList.add("characters");
           ep.characters.forEach((ch) => {
               const charact = document.createElement('p');
               charact.innerText = ch;
               characters.appendChild(charact);
           }) 
           episode.appendChild(characters);
           series.appendChild(episode);
       })
   })

})
