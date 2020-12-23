// chrome.webNavigation.onCompleted.addListener(function(details) {
//     if (details.frameId == 0) {
//         // Here you can perform tasks after page load completed
//         alert("loaded");
//     }
// });

chrome.webNavigation.onCompleted.addListener(function() {

    alert("loaded");

    // if (details.frameId == 0) {
        // Here you can perform tasks after page load completed
    // }
    // chrome.tabs.executeScript(details.tabId, {
    //     code: ' if (document.body.innerText.indexOf("Cat") !=-1) {' +
    //           '     alert("Cat not found!");' +
    //           ' }'
    // });
}, {
    url: [{
        // Runs on example.com, example.net, but also example.foo.com
        hostContains: '.shopee.'
    }],
});