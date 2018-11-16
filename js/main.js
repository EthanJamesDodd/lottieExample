(() => {
    // get a ref to the lottie container
    const preloader = document.querySelector('.preloader');

    let preloadAnim = bodymovin.loadAnimation({
        wrapper : preloader,
        animType : 'svg',
        loop : true,
        autoplay : false,
        path : './data/search.json'
    });

    function playAnimation() {
        preloadAnim.play();
        preloadAnim.setSpeed(10000);
    }


    preloader.addEventListener("mouseover", playAnimation);
})();