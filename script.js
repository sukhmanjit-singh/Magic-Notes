// let num=4
// const deleteNode = (val)=>{
//     let mynotes = document.getElementById('mynotes');
//     val=val.substring(6)
//     val="note"+val;
//     let btn =document.getElementById(val);
//     console.log(btn)
//     btn.remove();
// }
// const postNote = (value)=>{
//     let mynotes = document.getElementById('mynotes');
//     console.log('mynotes');
//     mynotes.innerHTML+=` <div class="col-sm-3 mb-3 mb-sm-2" id="note${num+1}">
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">Note ${num+1}</h5>
//         <p class="card-text">lorem2000</p>
//         <button type="button" class="btn btn-primary delete" id="delete${num+1}">Delete Node</button>
//       </div>
//     </div>
//   </div>`;
//   let del = document.getElementsByClassName('delete');
//   for(let btn of del){
//         btn.addEventListener("click",(e)=>{
//             const val = e.target.id;
//             deleteNode(val);
//             console.log(val);
//         })
//     }

// }
shownotes();
function shownotes(){
    let notes = localStorage.getItem("notes");
        if(notes==null){
            notesObj=[];
        }
        else{
            notesObj=JSON.parse(notes);
        }
    let html ="";
    notesObj.forEach((element,index)=>{
        html+=`<div class="col-sm-3 mb-3 mb-sm-2" id="note${index+1}>
             <div class="card">
              <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                 <p class="card-text">${element}</p>
                 <button type="button" onclick="deleteNote(this.id)"class="btn btn-primary delete" id="delete${index+1}">Delete Node</button>
               </div>
             </div>
           </div>`
    });
    let notesElm = document.getElementById('mynotes');
    if(notes.length!=0){
        notesElm.innerHTML=html;
    }
    else{
         
    }
}
let submit = document.getElementById('submit');
console.log(submit);
submit.addEventListener("click",(e)=>{
    if(text.value.length>0){
        let notes = localStorage.getItem("notes");
        if(notes==null){
            notesObj=[];
        }
        else{
            notesObj=JSON.parse(notes);
        }
        notesObj.push(text.value);
        let html="";
        notesObj.forEach
        localStorage.setItem("notes",JSON.stringify(notesObj))
        text.value="";
        shownotes();
    }
    else{
        alert("Add something");
    }
})
function deleteNote(val){
    console.log("deleting",val);
    index=val.substring(6);
    let notes = localStorage.getItem("notes");
    console.log(notes);
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(Number.parseInt(index-1),1); 
    localStorage.setItem("notes",JSON.stringify(notesObj))
    shownotes();
}
let search = document.getElementById('search');
search.addEventListener("input",()=>{
    let val = search.value.toLowerCase();
    let notesCard = document.getElementsByClassName('notesCard');
    Array.from(notesCard).forEach((element)=>{
        let txt = element.getElementsByTagName("p")[0].innerText;
        if(txt.includes(val)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
    console.log("search");
})
// let del = document.getElementsByClassName('delete');
// for(let btn of del){
//     btn.addEventListener("click",(e)=>{
//         const val = e.target.id;
//         deleteNode(val);
//         console.log(val);
//     })
// }