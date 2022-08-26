const audio=document.querySelector("audio")
const playerBtn=document.querySelector(".playerBtn")
const pauseBtn=document.querySelector(".pauseBtn")
const range=document.querySelector(".range")
const faBars=document.querySelector(".fa-bars")
const faTimes=document.querySelector(".fa-times")
const redVol=document.querySelector(".redVol")
const incVol=document.querySelector(".incVol")
const playlist=document.querySelector(".playlist")
const musicDisplay=document.querySelector(".music-display")
const ul=document.querySelector("#list")
const saved=document.querySelector("#saved")
const nameEl=document.querySelector("#nameEl")
const para=document.querySelector("p")
const audioFile=document.getElementById("audioFile")


function file(){
    
    ul.innerHTML+=`<li class="m-one"> ${audioFile.value.replace("C:\\fakepath\\" ,'') }</li>`
    const li=document.querySelectorAll("li")
    let reader=new FileReader()

    let file=audioFile.files[0]
    for(let i=0 ; i<li.length ; i++){
        li[i].addEventListener("click", function(){
            audio.removeAttribute("src")
            console.log(6)
            audio.setAttribute("src",saved.children[i].innerText)
            
    para.innerText=this.innerText
  
           audio.play()
           playMusic()
        })
    }
    reader.onload=function(e){
      saved.innerHTML+=`<li> ${e.target.result}</li>`
    }
    reader.readAsDataURL(file)
}

function readFile(){
    file()
    audioFile.value=""
}


function listPage(){
    playlist.style.display="block"
    musicDisplay.style.display="none"
    this.style.display="none"
}
faBars.addEventListener("click", listPage)

function playerPage(){
    playlist.style.display="none"
    musicDisplay.style.display="flex"
    faBars.style.display="block"
}
faTimes.addEventListener("click",playerPage)


incVol.addEventListener("click",function(){
   if(audio.volume===1){
    audio.volume+=0
   }else{
    audio.volume+=0.1
   }
   console.log(audio.volume)
})

redVol.addEventListener("click",function(){
    if(audio.volume <= 0){
        audio.volume+=0
       }else{
        audio.volume-=0.1
       }
       console.log(audio.volume)
})

function playMusic(){
    audio.play()
    playerBtn.style.display="none"
    pauseBtn.style.display="inline-block"
    
}
playerBtn.addEventListener("click",playMusic)


function pauseMusic(){
    audio.pause()
    pauseBtn.style.display="none"
    playerBtn.style.display="inline-block"
}
pauseBtn.addEventListener("click", pauseMusic)
    


function rangeMoves(){
    const percentagePosition=(100*audio.currentTime)/audio.duration
    range.style.backgroundSize='${percentagePosition}% 100%'
    range.value=percentagePosition
}
    audio.ontimeupdate=rangeMoves
    function rangeChange(){
    const time=(range.value*audio.duration)/100
     audio.currentTime=time
}
    range.addEventListener("change",rangeChange)

