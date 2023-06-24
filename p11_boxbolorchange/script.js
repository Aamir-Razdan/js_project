
let boxes=document.querySelectorAll('.box');


// boxes.forEach(function(box){
//     box.addEventListener('click',function(){
//         this.style.backgroundColor='#234543';
//     })
// })


boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        let clickedbox=box;
        clickedbox.style.backgroundColor='#234512';
    }
    )
}
)

  
  
  
  
  
  