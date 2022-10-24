    const currentLocation = location.href;
    const navItem = document.querySelectorAll("a");
    for(let i=0; i < navItem.length; i++){
        if(navItem[i].href == currentLocation){
            navItem[i].className = "current";
        };
    };