# Chat

**This is a theme** for our "Schwarz Gruppe" chatbot. **CAKE did not provide the chatbot itself.** If you want to get in touch with the department responsible for the bot, please use the CAKE contact details.

## Quick start

## Install chatbot first

First at all follow the installation instruction of chatbot. You are not in touch with the chatbot team? No problem! Contact us and we can help you. Once you have successfully implemented the chatbot, come back and install one of our ready-made themes for different companies.

## Install theme

It's very simple. Just install our NPM package and replace the default styles with the company-specific ones from our package.

Install CAKE chat themes in your Node.js powered apps with [the npm package]({{ variables.npmPackageUrl }}):

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
<!-- Independent overall styling from chatbot -->
<link rel="stylesheet" href="./css/chat-widget.min.css" />
<!-- Theme from our chat-themes package -->
<link rel="stylesheet" href="./[COMPANY NAME]/css/chat-cake.min.css" />
```

### JavaScript

To **support older browsers** as well, we use some polyfills and the legacy JavaScript from the documentation of the chatbot. If you don't have to support Internet Explorer 11, you can also use the default `chat-widget.min.js` version and leave out the polyfills.

### Polyfills for larger browser support

Polyfills IE need for Promise, fetch API, ...

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=fetch%2Ces6"></script>
```

`runtime.js` source: <https://github.com/facebook/regenerator>

```html
<script src="runtime.js"></script>
```

### Legacy version of chatbot

And the legacy JavaScript version of chatbot instead of the default `chat-widget.min.js`.

```html
<script src="./js/chat-widget-legacy.min.js"></script>
```


### Example configuration

You have to set some JavaScript properties to get the theme up and run.
Here is an extract from the official documentation. Only the properties relevant to the theme are shown here.

<ContentRack
    fields='
        "Lidl":{
            "src": "examples/configurations/Lidl.js",
            "type": "content"
        },
        "Schwarz":{
            "src": "examples/configurations/Schwarz.js",
            "type": "content"
        }
    '
 />

## Example

By using your configuration a chatbot looking like the example below should show up in your project:

<ContentRack
    fields='
        "preview": {
            "src": "examples/chatDefault.html",
            "type": "link"
        }
    '
 />

<Iframe src="examples/chatDefault.html" style="min-height: 45rem;" title="Chat theme" alt="chatDefault" />
