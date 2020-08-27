new ChatWidget({
    target: document.getElementById('chat-widget-wrapper'),
    props: {
        endpoint: 'https://dev.vca.lidl/api/v2/chat/key/lidl-vca-demo/',
        settings: {
            cardScrollDistance: 200,
            newMessages: '↓ Neue Nachrichten',
            locale: 'de-DE',
            header: `
                <div style="display: flex; align-items: center;">
                    <img
                        src="../../../_assets/themes/Schwarz/images/logo.svg"
                        alt="Logo"
                        class="bot-avatar" />
                    Sir Chatalot the third
                </div>
                <a class="close" onclick="alert('Implement click handler to close widget!')" />`,
        },
    },
});
