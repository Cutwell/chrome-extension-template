/** Options.js
 * JS scripting for the extension options page.
 * This example script stores a user preference. This preference is remembered between sessions and is accessible by any script in this extension.
 * The page will restore the user option upon reloading the option page, and defines a default option when none is stored.
 */

// Saves options to chrome.storage
function save_options() {
    var user_preference = document.getElementById('user_preference').value;
    chrome.storage.sync.set({
        user_preference: user_preference,
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value user_preference = default_preference
    chrome.storage.sync.get({
        user_preference: 'default_preference', // define a default preference if no preference is stored
    }, function (items) {
        document.getElementById('user_preference').value = items.user_preference;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);