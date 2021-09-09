/** Content.js
 * This script is run upon the extension loading, controlled by the manifest.
 * Other scripts are accessible, as if they had been manually imported using <script></script> tags in the DOM.
 * NOTE: the extension may load before the DOM has finished loading. Use event triggers and tests to verify the page is in the correct state if your extension accesses DOM elements.
 * This script gets the saved user preference and wait for the page to load, then calls some function to perform the main extension action.
 */

// add a window event listener
// this event triggers once the DOM finished loading. This is important for extensions which edit the DOM, as if this is attempted before loading is complete, elements may be missing and the extension will fail.
window.addEventListener('load', function () {
    // call the Chrome API
    // this task could be completed more efficiently concurrently alongside loading the DOM, but this method is simpler to read and completely foolproof.
    get_user_preference();
});

function get_user_preference() {
    // access user_preference options
    let user_preference; // global var, loaded once from the API then stored

    chrome.storage.sync.get({
        user_preference: 'default_preference', // define a default preference if no preference is stored
    }, function (items) {
        user_preference = items.user_preference; // set the global var to the obtained preference

        // callback to the main extension function upon page load AND user preference load
        main(user_preference);
    });
}

// the main program code
// this code will only run once both the DOM has loaded, and the Chrome API has returned the correct user settings.
function main(user_preference) {
    
    // extension code here..

    return;
}