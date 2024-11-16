const inputField = document.querySelector("input");
const btn1 = document.querySelector("#btn-1");
const ul = document.querySelector("ul");
const errorMsg = document.querySelector(".error-msg");


btn1.addEventListener("click", () => {

    if(inputField.value.trim() === ""){
        errorMsg.textContent = "Task cannot be Empty!";
        errorMsg.classList.add("visible");
        
        setTimeout( () => {
            errorMsg.classList.remove("visible");
        }, 3000);
    }else{

        errorMsg.classList.remove("visible");

        const li = document.createElement("li");
        const span = document.createElement("span");
        const img = document.createElement("img");
        const btn2 = document.createElement("button");
        
        btn2.innerHTML = '&times;'
        img.src = 'images/unchecked.png'
        span.innerHTML = inputField.value;

        ul.appendChild(li);
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn2);

        inputField.value = '';

        img.addEventListener("click", () => {
            if(img.src.includes("unchecked.png")){
                img.src = "images/checked.png";
                span.style.textDecoration = "line-through";
            }else{
                img.src = "images/unchecked.png";
                span.style.textDecoration = "none";
            }
        })

        btn2.addEventListener("click", () => {
            li.remove();
        })
    }
})