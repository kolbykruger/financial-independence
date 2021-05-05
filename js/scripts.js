//Global Definition for ScrollMagic Controller
let controller = new ScrollMagic.Controller()

//Journey Line
document.addEventListener('DOMContentLoaded', function () {
    let elem = document.querySelector('.journey-line')
    let maskPath = document.getElementById('maskPath')

    if (elem && maskPath) {
        new ScrollMagic.Scene({
            triggerElement: elem,
            triggerHook: 0.75,
            duration: '65%',
            reverse: true,
        })
            //.setTween(tl)
            //.addIndicators()
            .setTween(
                gsap.from(maskPath, {
                    drawSVG: 1,
                    ease: Power0.easeNone,
                })
            )
            .addTo(controller)
    }
})

//Inspiration Animation
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.inspiration .inspiration-item')

    for (let i = 0; i < elems.length; i++) {
        if (elems[i]) {
            const elem = elems[i],
                word = elems[i].querySelector('h2'),
                icon = elems[i].querySelector('.icon'),
                parent = elem.parentNode.parentNode.parentNode,
                wordDist = elem.dataset.word,
                iconDist = elem.dataset.icon

            if (parent) {
                new ScrollMagic.Scene({
                    triggerElement: parent,
                    triggerHook: 1,
                    duration: '160%',
                    reverse: true,
                })
                    .setTween(
                        TweenMax.to(word, 5, {
                            y: wordDist,
                            ease: Power0.easeNone,
                        })
                    )
                    .addTo(controller)
            }
        }
    }
})

//Flip Flops
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.flip-flops img, .journey img')

    for (let i = 0; i < elems.length; i++) {
        if (elems[i]) {
            const elem = elems[i],
                parent = elem.parentNode.parentNode.parentNode.parentNode

            if (parent) {
                new ScrollMagic.Scene({
                    triggerElement: parent,
                    duration: '200%',
                    triggerHook: 1,
                    reverse: true,
                })
                    .setTween(
                        TweenMax.to(elem, 5000, {
                            y: '12%',
                            ease: Linear.easeNone,
                        })
                    )
                    .addTo(controller)
            }
        }
    }
})

//Impression
document.addEventListener('DOMContentLoaded', function () {
    let elem = document.querySelector('.impression')

    if (elem) {
        let elemImage = elem.querySelector('img')

        new ScrollMagic.Scene({
            triggerElement: elem,
            duration: '200%',
            triggerHook: 1,
            reverse: true,
        })
            .setTween(
                TweenMax.to(elemImage, 5000, {
                    y: '10%',
                    ease: Linear.easeNone,
                })
            )
            .addTo(controller)
    }
})

//ScrollMagic Animations
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('section, .inspiration-item, .journey-item')

    for (var i = 0; i < elems.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: elems[i],
            triggerHook: 0.9,
            reverse: false,
        })
            .setClassToggle(elems[i], 'active')
            //.addIndicators()
            .addTo(controller)
    }
})

//background magic
document.addEventListener('DOMContentLoaded', function () {
    const magicBackground = document.getElementById('background-magic')
    const elems = document.querySelectorAll('section')

    if (magicBackground) {
        for (var i = 0; i < elems.length; i++) {
            if (elems[i]) {
                const magicColor = elems[i].dataset.color

                new ScrollMagic.Scene({
                    triggerElement: elems[i],
                    triggerHook: 0.9,
                })
                    .setTween(
                        TweenMax.to(magicBackground, 1.5, {
                            backgroundColor: magicColor ? magicColor : 'transparent',
                        })
                    )
                    //.addIndicators()
                    .addTo(controller)
            }
        }
    }
})

//Blog Categories (if a selectbox)
let blogCategories = {
    elem: document.querySelector('select#blog_categories'),
    init: function () {
        if (this.elem) {
            this.elem.addEventListener('change', function (e) {
                window.location.href = window.location.href.split('?')[0] + '?category=' + e.target.value
            })
        }
    },
}.init()

//Responsive iFrame
$('iframe[src*="youtube"],iframe[src*="vimeo"]').wrap('<div class="responsive-iframe"/>')

//Accordion
document.addEventListener('DOMContentLoaded', function () {
    let accordion = document.querySelectorAll('.accordion-title')

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            let panel = this.nextElementSibling

            if (panel.style.maxHeight) {
                this.classList.remove('open')
                panel.style.maxHeight = null
                panel.setAttribute('aria-hidden', true)
                panel.setAttribute('aria-expanded', false)
            } else {
                this.classList.add('open')
                panel.style.maxHeight = panel.scrollHeight + 'px'
                panel.setAttribute('aria-hidden', false)
                panel.setAttribute('aria-expanded', true)
            }
        })
    }
})

//Flickity Carousel
$('.carousel .group').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 8000,
})

$('.slideshow .container').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 5000,
})

//Universal Tables
$('table').wrap("<div class='universal-table'></div>")

//PDO Page loader
document.addEventListener('DOMContentLoaded', function () {
    let pdoElement = document.getElementById('pdopage')
    if (pdoElement) {
        let loadState = document.createElement('div')
        loadState.classList.add('pdo-loader')
        loadState.setAttribute('aria-hidden', true)
        //loadState.textContent = 'Loading';

        pdoElement.appendChild(loadState)

        if (pdoPage) {
            pdoPage.callbacks['before'] = function (config) {
                document.querySelector('.pdo-loader').classList.add('pdo-loading')
            }
            pdoPage.callbacks['after'] = function (config) {
                document.querySelector('.pdo-loader').classList.remove('pdo-loading')
            }
        }
    }
})
