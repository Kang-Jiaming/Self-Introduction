document.onkeyup=(e) => {
    console.log(e);
    if(e.target.tagName == "INPUT" && e.key == "Enter"){
        document.querySelector(".search-btn").click()
    }
}