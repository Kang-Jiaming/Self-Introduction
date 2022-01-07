document.onkeyup=(e) => {
    console.log(e);
    if(e.target.tagName == "INPUT" && e.key == "Enter"){
        document.querySelector(".search-btn").click()
    }
}

if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    alert('目前未适配移动设备，请使用电脑端访问')
    window.open("https://baidu.com")
  }

