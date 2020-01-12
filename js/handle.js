chrome.windows.create({url:"/options.html",  focused: false, width:1, height:1,left:screen.width}, (window)=>{

    chrome.runtime.sendMessage({greeting: window}, function(response) {
       
    });
})