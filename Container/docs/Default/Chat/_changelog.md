# Change log

## [1.0.0](https://github.com/cake-hub/chat-themes/tree/v1.0.0) - 2020-08-27

### Added

* `Docs`: add paper-plane icon to documentation example
* `SCSS`: New variable `$chat-widget-max-height`

### Changed

* `Docs`: add detailed example configuration for different themes
* `Docs`: minor documentation adjustments
* `CSS`: lower height for the chatbot if the viewport height is not sufficient
* `CSS`: to position the chatbot on the website you have to add your own CSS. We have removed the centering with `margin: 0 auto;` from CSS file and added it to our example HTML.
* `CSS`, `SCSS`: slim down CSS file by importing only the CSS framework utilities they are used in chatbot.
* `SCSS`: moved value from `$chat-widget-height` to new variable `$chat-widget-max-height`

### Removed

* `Assets`: removed paper-plane icon from package
