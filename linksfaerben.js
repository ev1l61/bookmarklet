javascript:(() => {
    const link = document.getElementsByTagName("a");
    for(let i = 0; i < link.length; i++){
        link[i].style.color = "red";
    }    
})();