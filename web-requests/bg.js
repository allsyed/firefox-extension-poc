// Domain Blocking
browser.webRequest.onBeforeSendHeaders.addListener(function (details) {
  details.requestHeaders.push({ name: 'X-GoogApps-Allowed-Domains', value: 'brio.co.in' })
  //console.log(details)
  return {requestHeaders: details.requestHeaders}
},
{urls: [ "<all_urls>" ]}, 
['blocking', 'requestHeaders']);


browser.webRequest.onHeadersReceived.addListener(function (details) {
  //console.log(details)
  details.requestHeaders.push({name: 'X-GoogApps-Allowed-Domains', value: 'brio.co.in'})
  return {requestHeaders: details.requestHeaders}
},
{urls: [ "<all_urls>" ]}, 
['blocking', 'responseHeaders']);
