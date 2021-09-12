# Chrome extension template
 A template repository for building Chromium extensions

* Tested for MV3.

## README usage
1. Capture screenshots for all missing images below. (if screenshots are intended for use on the Chrome Web Store, follow the guidelines: "1,280x800 or 640x400 .jpg or 24-bit .png (no alpha)"
 * `github/images/exampleUI.png`
 * `github/images/extension_card.png`
 * `github/images/extension_options.png`
2. Replace the icon files below with correct logo.
 * `data/img/icon128.png` (128x128 .png)
 * `data/img/icon48.png` (48x48 .png)
3. Update the README file with appropriate descriptions of the extension.
4. If published to the Chrome Web Store, update the appropriate link to direct to the store page.

---

![extension logo](data/img/icon128.png "extension logo")

 A basic extension tagline / description.

![manifest shield](https://img.shields.io/badge/Chrome%20Manifest-v3-blue, "manifest shield")

| |
|:---:|
| ![chrome web store](github/images/chromewebstore_logo.png "chrome web store") |
| Install this extension in the [Chrome web store](https://chrome.google.com/webstore/). |

## About
| |
|:---:|
| ![example UI](github/images/exampleUI.jpg "example UI") |
| Image caption |

An in-depth description of the extension and the problem it solves.

## Manual installation
| |
|:---:|
| ![extension page](github/images/extension_page_load_unpacked.png "extension page") |
| Navigate to `chrome://extensions` and `load unpacked`. |

1. Clone this repository onto your device.
2. Navigate to `chrome://extensions/` (replace `chrome` with the name of your Chromium based browser, for instance `opera://extensions/`).
3. Open the file explorer using `Load unpacked` and navigate to the root folder of this repository. 
4. Select this folder, and the extension should load into your list of browser extensions.

## User options
| Extension card | Options page |
|:---:|:---:|
| ![extension card](github/images/extension_card.png "extension card") | ![options page](github/images/extension_options.png "options page") |

The extension can be configured from `chrome://extensions` using the `options` button on the extension card.

## License
MIT
