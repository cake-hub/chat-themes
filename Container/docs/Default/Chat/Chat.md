# Chat

**This is a theme** for our "Schwarz Gruppe" chatbot. **CAKE did not provide the chatbot itself.** If you want to get in touch with the department responsible for the bot, please use the CAKE contact details.

## Quick start

Install CAKE in your Node.js powered apps with [the npm package]({{ variables.npmPackageUrl }}):

```console
npm install --save {{ variables.npmPackageName }}
```

## Folder structure

Choose between one of the company folders. In this folder you will find themed CSS files and assets for your chatbot. Not every theme has all of the listed subfolders.

```text
dist/
└── [COMPANY NAME]/
    ├── css/
    │   ├── [...]
    ├── fonts/
    │   └── [...]
    ├── icons/
    │   └── [...]
    └── images/
        └── [...]
```

## Include theme

### CSS

Please load the theme file **after** the general `chat-widget.min.css` file. Here is a simple example:

```html
<!-- Independent overall styling -->
<link rel="stylesheet" href="./css/chat-widget.min.css" />
<!-- Theme -->
<link rel="stylesheet" href="./[COMPANY NAME]/css/chat-cake.min.css" />
```

### JavaScript

To support also older browsers we use some polyfills.

Polyfills IE need for Promise, fetch API, ...

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=fetch%2Ces6"></script>
```

`runtime.js` source: <https://github.com/facebook/regenerator>

```html
<script src="runtime.js"></script>
```

And the legacy JavaScript version of chatbot.

```html
<script src="./js/chat-widget-legacy.min.js"></script>
```


## Chatbot example configuration

You have to set some JavaScript properties to get the theme up and run.

Here is an extract from the official documentation. Only the properties relevant to the theme are shown here.

```js
new ChatWidget({
    props: {
        settings: {
            cardScrollDistance: 200,
            newMessages: '↓ Neue Nachrichten',
            locale: 'de-DE',
            header: `
                <div style="display: flex; align-items: center;">
                    <img
                        src="../../../_assets/themes/Lidl/images/logo.svg"
                        alt="Logo"
                        class="bot-avatar" />
                    Sir Chatalot the second
                </div>
                <a class="close" onclick="alert('Implement click handler to close widget!')" />`,
            iconSend: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M55.06 2.27L3.66 27.02c-1.71.82-1.42 3.35.44 3.76l20.62 4.51 4.51 20.62c.41 1.86 2.93 2.15 3.76.44L57.73 4.94c.82-1.71-.96-3.49-2.67-2.67zM7.57 28.46L49.7 8.18l-24.2 24.2-17.93-3.92zm23.97 23.97L27.62 34.5l24.2-24.2-20.28 42.13z"/><path d="M20.29 38.29c-.2-.2-.51-.2-.71 0L5.29 52.59c-.2.2-.2.51 0 .71l1.41 1.41c.2.2.51.2.71 0l12.88-12.88c.98-.98.98-2.56 0-3.54zM9.01 42.77l2.47-2.47c.98-.98.98-2.56 0-3.54-.2-.2-.51-.2-.71 0l-3.89 3.89c-.2.2-.2.51 0 .71l1.41 1.41c.21.2.52.2.72 0zM22.27 45.95l-7.34 7.34c-.2.2-.2.51 0 .71l1.41 1.41c.2.2.51.2.71 0l5.92-5.92c.98-.98.98-2.56 0-3.54a.501.501 0 00-.7 0z"/></svg>'
        },
    },
});
```

You find the `iconSend` SVG for your company in the `icons` folder. For example: `paper-plane.svg`.

```text
dist/
└── [COMPANY NAME]/
    ├── [...]
    ├── icons/
    │   └── paper-plane.svg
    └── [...]
```

<ContentRack
    fields='
        "preview": {
            "src": "examples/chatDefault.html",
            "type": "link"
        }
    '
 />

![ChatDefault](examples/chatDefault.html)
