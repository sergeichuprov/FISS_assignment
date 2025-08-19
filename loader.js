// loader.js
(function() {
    // This script dynamically loads the final payload.
    // This technique is often used to hide the true source of the malicious code.
    var payloadUrl = 'payload.js';
    var scriptElement = document.createElement('script');
    scriptElement.src = payloadUrl;
    document.head.appendChild(scriptElement);
})();
