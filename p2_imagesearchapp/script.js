const accesskey="0VyI_HcnneloxfuOaSr0dp57dSfku6L-zhRsG5PJJhQ";

const secretkey="bMGOQwv77apaVYd5ulEG8rIymaqwn6l4hNpKeH7eXuw";

const form1=document.querySelector("form");
const btn=document.getElementById("searchbutton");
const input=document.getElementById("searchid");
const searchresultEl=document.querySelector('.search-result');


let inputEl=""
let page=1;
async function searchImage(){
    inputEl=input.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputEl}&client_id=${accesskey}`;
    console.log(url);
    const response =await fetch(url);
    const data=await response.json();
    console.log(data);
    if(page===1){
        searchresultEl.innerHTMl="";

    }
    const results=data.results;
    results.map((result)=>{
        const imageWrapper=document.createElement('div');
        imageWrapper.classList.add("search-result")
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description;
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchresultEl.appendChild(imageWrapper);
    
    
    
    
    });
    
   
   
    // if(page>1){
    //     showMoreButton.style.display="block"
    // }
  

}


form1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImage();
});

// showMoreButtonEl.addEventListener('click',(event)=>{
//     searchImage();
// })