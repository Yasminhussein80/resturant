let dark= document.getElementById("dark");

if(localStorage.getItem("dark-mode")==="true"){
    document.body.classList.add("dark-mode");
};

dark.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode",document.body.classList.contains("dark-mode"));
});