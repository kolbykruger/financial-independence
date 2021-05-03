//Inspiration Animation
document.addEventListener('DOMContentLoaded', function () {
    let controller = new ScrollMagic.Controller()
    let elems = document.querySelectorAll('.inspiration .inspiration-item')

    for (let i = 0; i < elems.length; i++) {
        if (elems[i]) {
            const elem = elems[i],
                word = elems[i].querySelector('h2'),
                icon = elems[i].querySelector('.icon'),
                parent = elem.parentNode.parentNode.parentNode.parentNode,
                wordDist = elem.dataset.word,
                iconDist = elem.dataset.icon

            if (parent) {
                new ScrollMagic.Scene({
                    triggerElement: parent,
                    triggerHook: 1,
                    duration: '300%',
                })
                    .setTween(TweenMax.to(word, 1, { y: wordDist, ease: Power3.easeNone }))
                    //.setTween(TweenMax.to(icon, 1, { y: iconDist, ease: Power3.easeNone }))
                    .addTo(controller)
            }
        }
    }
})

//ScrollMagic Animations
document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller()
    var elems = document.querySelectorAll('section, .inspiration-item')

    for (var i = 0; i < elems.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: elems[i],
            triggerHook: 0.85,
            reverse: true,
        })
            .setClassToggle(elems[i], 'active')
            //.addIndicators()
            .addTo(controller)
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
