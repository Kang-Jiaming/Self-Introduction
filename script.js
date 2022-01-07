document.onkeyup=(e) => {
    console.log(e);
    if(e.target.tagName == "INPUT" && e.key == "Enter"){
        document.querySelector(".search-btn").click()
    }
}

if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    alert('目前未适配移动设备，请使用电脑端访问')
    closeCurrentPage()
  }


function closeCurrentPage() {
	const ua = window.navigator.userAgent;
	if (ua.indexOf('MSIE') > 0) {
		if (ua.indexOf('MSIE 6.0') > 0) {
			window.opener = null;
			window.close();
		} else {
			window.open('', '_top');
			window.top.close();
		}
	} else {
		window.opener = null;
		window.open('', '_self', '');
		window.close();
	}
}