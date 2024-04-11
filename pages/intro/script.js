// Using custom event to signal once layout file successfully loads
document.addEventListener('layoutLoaded', function() {
    // Initially hide the loading plane, but show it once #pre-loading-plane finishes animation
    showLoadingPlane();

    // Loading planes are broken into two stages:
    // - Fly-in (Loading)
    // - Drop-in (Landing)
    // As the drop-in planes interfere with fly-in planes, they should be be hidden
    const $heading = $('.heading-container');
    const $flyInPlanes = $('.fly-in');
    const $dropInPlanes = $('.drop-in');
    $dropInPlanes.hide();

    // Attach Click EventHandler
    const $loadingPlane = $('#loading-plane');
    $loadingPlane.on('click', (e) => {
        $heading.hide();
        $flyInPlanes.hide();
        $dropInPlanes.show();
        playLandingPlane();
        showLastPlane();
    });
}, false);

// There are two of last frame's plane to eliminate the lag after the AnimationEnd event fires to start transform of rotation
// Once the animation is complete, it'll disappear (set opacity to 0). But you want the last fly-in plane to persist and 
// keep oscillating even after the animation is complete, so this function will fire once pre-loading (one before the last frame)
// finishes its animation
function showLoadingPlane() {
    const $loadingPlane = $('#loading-plane');
    $loadingPlane.hide();
    $('#pre-loading-plane').on('animationend', (e) => {
        window.requestAnimationFrame(function() {
            $loadingPlane.css('opacity', 1);
            $loadingPlane.show();
        });
    });
}

// animation-play-state style is set to pause on initialization
// Enabling the animation once the #loading-plane is clicked
function playLandingPlane() {
    $('.drop-in .plane').css('animation-play-state', 'running');
}

// Similar logic as showLoadingPlane()
function showLastPlane() {
    $('#pre-last-plane').on('animationend', (e) => {
        window.requestAnimationFrame(function() {
            $('#last-plane').css('opacity', 1);
        });
    });
    $('#last-plane').on('animationend', (e) => {
        window.requestAnimationFrame(function() {
            $('#name').css('opacity', 1);
        });

        // After 1.5 seconds, load next page
        setTimeout(() => {
            window.location.href = window.location.origin + '/pages/main/index.html';
        }, 1250);
    });
}
