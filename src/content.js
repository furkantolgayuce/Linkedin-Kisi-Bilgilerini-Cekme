// Inform the background page that 
// this tab should have a page-action.
chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
  });
  
  // Listen for messages from the popup.
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    // First, validate the message's structure.
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
      // Collect the necessary data. 
      // (For your specific requirements `document.querySelectorAll(...)`
      //  should be equivalent to jquery's `$(...)`.)
      var domInfo = {
        name: document.getElementsByClassName('inline t-24 t-black t-normal break-words')[0].textContent,
        title: document.getElementsByClassName('mt1 t-18 t-black t-normal break-words')[0].textContent,
        url: document.URL
      };
  
      // Directly respond to the sender (popup), 
      // through the specified callback.
      response(domInfo);
    }
  });

  let area = document.getElementsByClassName('flex-1 mr5')[0]

  const copy_buttons = '<ul class="mb2"><button id="copy_info_business" class="pv-s-profile-actions pv-s-profile-actions--follow ml2 artdeco-button artdeco-button--2 artdeco-button--primary ember-view" type="button"><span class="artdeco-button__text">İş Geliştirme Kopyala</span></button></ul><ul><button id="copy_button" class="pv-s-profile-actions pv-s-profile-actions--follow ml2 artdeco-button artdeco-button--2 artdeco-button--primary ember-view" type="button"><span class="artdeco-button__text">Kopyala</span></button></ul>';
  area.innerHTML += copy_buttons;

let copy_button = document.getElementById('copy_button');
let copy_info_business = document.getElementById('copy_info_business');


copy_button.onclick = function() {
  let name = document.getElementsByClassName('inline t-24 t-black t-normal break-words')[0].textContent.trim()
  let title = document.getElementsByClassName('mt1 t-18 t-black t-normal break-words')[0].textContent.trim()
  let url = document.URL
  var alan = name+"\t"+title+"\t"+url
  var textAlani = document.createElement('TEXTAREA');
  textAlani.value = alan;
  console.log(alan);
  document.body.appendChild(textAlani);
  textAlani.select();
  document.execCommand('copy');
  textAlani.style.display = 'none';
}

copy_info_business.onclick = function() {
  let name = document.getElementsByClassName('inline t-24 t-black t-normal break-words')[0].textContent.trim()
  let title = document.getElementsByClassName('mt1 t-18 t-black t-normal break-words')[0].textContent.trim()
  let url = document.URL
  var alan = name+"\t\t\t\t"+title+"\t"+url
  var textAlani = document.createElement('TEXTAREA');
  textAlani.value = alan;
  console.log(alan);
  document.body.appendChild(textAlani);
  textAlani.select();
  document.execCommand('copy');
  textAlani.style.display = 'none';
}