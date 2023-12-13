var block=document.getElementById("block")
var continus=document.getElementById("continus")
var bird=document.getElementById("bird")
var count=0;
var blockT = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

continus.addEventListener('animationiteration',()=>{
    var random=(Math.random()*3);
    var top=(random*100)+150;
    blockT=500-top;
    block.style.marginTop=500-(top)+"px"
    
   
})

 const interval=setInterval(moving,10);
function moving()
{
    
        
    var characterTop=
    parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if(characterTop>500)
        {
            
            alert("game over ")
            bird.style.top=100+"px"
           

        }
        else if(characterTop<=0)
        {
            alert("game over ")
            bird.style.top=100+"px"
        }
        else 
        {
            var characterTop=
        parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        bird.style.top=(characterTop+1.9)+"px";
       
        }
       
   
}
function moveup()
{
    console.log("sdff")
    var characterTop=
    parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    
    bird.style.top=(characterTop-50)+"px";
}
var intermediate=setInterval(function()
{
    var birdTop=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    var blockpost=parseInt(window.getComputedStyle(continus).getPropertyValue("left"));
    console.log(blockpost)
    if(blockpost>45 && blockpost<=75)
    {
       if(birdTop>=blockT && birdTop<=blockT+200 )
       {
        
       }
       else if(birdTop>=blockT && birdTop<=blockT+1000)
       {
        
       }
       
       else 
       {
        alert("game over"+count)
        location.reload();
        count=0;
    }
    
        
    }
},10)