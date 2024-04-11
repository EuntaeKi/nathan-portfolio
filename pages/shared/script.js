$(function() {
    // Load layout
    loadHtml('keepContent', '#layout', '#content', '../../components/layout/layout.html');
    loadCss('../../components/layout/styles.css');

    // Load header
    const noHeaderPages = ['intro'];
    if (!noHeaderPages.some(page => window.location.pathname.toLowerCase().includes(page))) {
        loadHtml('discardContent', '#header', '#content', '../../components/header/header.html');
        loadCss('../../components/header/styles.css');
    }    
});

// Loads the component
// If the inner HTML of the component needs to be preserved and rendered after the loading,
// it will temporarily copy the inner HTML and paste it once the loading finishes
function loadHtml(loadingType, source, target, path) {
    // Save the existing inner HTML
    let existingContent = $(source).html();

    // Use AJAX to get HTML file
    $.get(path, function(data) {
        if (loadingType == 'keepContent') {
            // Create a temporary div to insert the existing content into the loaded HTML
            let temp = $('<div>').html(data);
            temp.find(target).html(existingContent);
            $(source).html(temp.html());
        } else if (loadingType == 'discardContent') {
            $(source).append(data);
        } else {
            return;
        }
        const event = new Event('layoutLoaded');
        document.dispatchEvent(event);
    });
}

function loadCss(path) {
    $('head').append('<link rel="stylesheet" type="text/css" href="' + path + '">');
}