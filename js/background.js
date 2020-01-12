var currentURL = ""
var currentTab = null
var currentWindow
chrome.runtime.onMessage.addListener(messageReceived);
function full(){
    messageReceived({url:"full"})
}
function messageReceived(msg) {
    if(msg.greeting == null){
        if(msg.url == "pause" ||msg.url == "clear" || msg.url == "full"){
            if(msg.url == "pause"){
                //$(".ytp-play-button").click()
                chrome.tabs.executeScript(currentURL,{code:`$(".ytp-play-button").click()`})
            }
            if(msg.url == "clear"){
                chrome.tabs.executeScript(currentURL,{code:`$(".ytp-play-button").click()`})
                chrome.tabs.get(currentTab.id, (tab)=>{
                    chrome.windows.update(tab.windowId ,{state:"minimized"},function(windowUpdated){
                        //do whatever with the maximized window
                    });
                })
               
            }
            if(msg.url == "full"){
                chrome.tabs.executeScript(currentURL,{code:`$(".ytp-fullscreen-button").click()`})

            }
        }else{
           
                chrome.tabs.get(currentTab.id, (tab)=>{
                    chrome.windows.update(tab.windowId ,{state:"maximized",left:screen.width},function(windowUpdated){
                        //do whatever with the maximized window
                    });
                })
            chrome.tabs.update(currentURL,{url:"https://www.youtube.com/embed/"+msg.url.substring(32)+"?autoplay=1&version=3&enablejsapi=1&t=0s"})
            setTimeout(full, 4000)

        }
    } else{
        (chrome.tabs.query({windowId:msg.greeting.id},(tabs)=>{
            chrome.windows.update(tabs[0].windowId ,{state:"minimized"},function(windowUpdated){
                //do whatever with the maximized window
            });
            currentURL = tabs[0].id
            currentTab = tabs[0]
            currentWindow = msg.greeting

        }))
    }
   
}
//        chrome.tabs.executeScript((,{code:"document.location.href = 'google.com'"})
