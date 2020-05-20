// Update the relevant fields with the new data.

const setDOMInfo = info => {
  document.getElementById('name').textContent = info.name;
  document.getElementById('title').textContent = info.title;
  document.getElementById('url').textContent = info.url;
};

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        // ...also specifying a callback to be called 
        //    from the receiving end (content script).
        setDOMInfo);
  });
});

let is_gelistirme = document.getElementById('is_gelistirme');
let kopyala = document.getElementById('copyText');

is_gelistirme.onclick = function() {
  let name = document.getElementById('name').textContent.trim()
  let title = document.getElementById('title').textContent.trim()
  let url = document.getElementById('url').textContent.trim()
  var alan = name+"\t\t\t\t"+title+"\t"+url
  var textAlani = document.createElement('TEXTAREA');
  textAlani.value = alan;
  document.body.appendChild(textAlani);
  textAlani.select();
  document.execCommand('copy');
  textAlani.style.display = 'none';
};

kopyala.onclick = function() {
  let name = document.getElementById('name').textContent.trim()
  let title = document.getElementById('title').textContent.trim()
  let url = document.getElementById('url').textContent.trim()
  var alan = name+"\t"+title+"\t"+url
  var textAlani = document.createElement('TEXTAREA');
  textAlani.value = alan;
  document.body.appendChild(textAlani);
  textAlani.select();
  document.execCommand('copy');
  textAlani.style.display = 'none';
};