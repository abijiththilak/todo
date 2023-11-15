function addto(textdata){
    if(textdata.length == 0){
        alert("Kindly Enter Task Name!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${textdata}
                </span>
                <button id="edt" class="edit" style="width:75px; margin-left:100px;">
                <i class="fa-solid fa-pen" style="color: blue;"></i>
                </button>
                <button id="del" class="delete" style="width:75px; margin-left:150px;">
                <i class="fa-solid fa-trash" style="color: red; "></i>
                </button>
            </div>
        `;
        var edit_tasks = document.querySelectorAll(".edit");
        for(var i=0; i<edit_tasks.length; i++){
            edit_tasks[i].onclick = function(){
                const edited = prompt("Edit Your Task Name")
                this.parentNode.remove();
                addto(edited)
        }
    }
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    inp.value=""
}