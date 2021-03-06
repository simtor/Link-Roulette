const open = require('open');

// Opens the image in the default image viewer
(async () => {
    await open('unicorn.png', {wait: true});
    console.log('The image viewer app closed');

    // Opens the url in the default browser
    // await open('https://www.youtube.com/');

    // Specify the app to open in
    await open('https://www.youtube.com/', {app: 'firefox'});

    // Specify app arguments
    await open('https://www.youtube.com/', {app: ['google chrome', '--incognito']});
})();