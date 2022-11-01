// Selectors
const wrap = $('#main')
const contents = $('.content-container')
const markers = $('.marker')

// Global Variables
let sectionAnchorPointer = []
let resultX = 0
let nextSectionIndex = 0
let scrollTrigger = 0
let yearElement = null

// Animation variables
let walkAnimate = null
let animating = false
let i = 0
let up = true
let yearPhase = 0
const INTERVAL = 200

// Audio Files
const endingAudio = new Audio('content/soundclips/tbc-clip.mp3')
const jump = new Audio('content/soundclips/jump.mp3')
const fall = new Audio('content/soundclips/fall.mp3')
const land = new Audio('content/soundclips/land.mp3')

// Animation options
const SCROLL_SPEED = 50 // Speed control

$(document).ready(function () {

    animationFunctions()

    // Scroll animation functions
    resizeHandler()
    //mouseWheelScroll()
    requestAnimationFrame(scrollToNext)

    $(window).resize(() => {
        resizeHandler()
        location.reload() // This is slow but is necessary
    })

    // For restarting
    $('#reload-btn').on('click', function () {
        yearPhase = 0
        animating = false
        yearElement = null
        scrollTrigger = 0
        $('#main-image').trigger('click')
        $('#fourth-image').css({
            display: 'none',
            top: '10%',
            left: '380%',
            background: 'url(./content/poses/fall.png) 0px 0px'
        })
        $('#tbc-img').css({
            left: '500%'
        })
    })
})

function animationFunctions() {
    let phase = 1

    $('#main-banner').animate({
        top: '-6%',
        opacity: '100%'
    }, {
        duration: 1500,
        specialEasing: {
            top: 'linear',
            opacity: 'linear'
        },
        complete: function () {
            $('#main-banner>p:nth-child(2n)').animate({
                opacity: '100%'
            }, {
                duration: 300,
                complete: function () {
                    $(this).animate({
                        left: '24%'
                    }, {
                        duration: 500,
                        specialEasing: {
                            left: 'easeOutExpo'
                        }
                    })
                }
            })
            $('#main-banner>p:nth-child(3n)').animate({
                opacity: '100%'
            }, {
                duration: 300,
                complete: function () {
                    $(this).animate({
                        left: '11%'
                    }, {
                        duration: 500,
                        specialEasing: {
                            left: 'easeOutExpo'
                        },
                        complete: function () {
                            $('#main-image').trigger('click')
                        }
                    })
                }
            })
        }
    })

    // Animation for the main page
    $('#main-image').on('click', function animateMain() {
        animateWalk($(this))
        $('#main-image').off('click')

        if (phase === 1) {
            clearInterval(walkAnimate)
            $('#main-speech').animate({
                opacity: '100%'
            }, {
                duration: 1000,
                specialEasing: {
                    opacity: 'linear'
                },
                complete: function () {
                    $('#main-image').on('click', animateMain)
                    animating = false
                    phase = 2
                }
            })
        }
        if (phase === 2) {
            $('#main-speech').animate({
                opacity: '0'
            }, {
                duration: 1000,
                specialEasing: {
                    opacity: 'linear'
                }
            })
            $(this).animate({
                left: ['32%', 'linear']
            }, {
                duration: 500,
                complete: function () {
                    $(this).animate({
                        left: ['45%', 'linear'],
                        top: ['67%', 'linear']
                    }, {
                        duration: 750,
                        complete: function () {
                            $(this).animate({
                                left: ['100%', 'linear']
                            }, {
                                duration: 3000,
                                complete: function () {
                                    scrollTrigger = $(window).width()
                                    clearInterval(walkAnimate)
                                    $(this).css({
                                        background: 'url(./content/poses/idle.png) 0px 0px',
                                        top: '60%',
                                        left: '26%'
                                    })
                                    phase = 1
                                    animating = false
                                    $('#main-image').on('click', animateMain)
                                    $('#first-image').trigger('click')
                                }
                            })
                        }
                    })
                }
            })
        }
    })

    // Animations for the 2nd page
    $('#first-image').on('click', function animateFirst() {
        animateWalk($(this))
        $('#first-image').off('click')

        $('.nes-container').animate({
            opacity: '0'
        }, {
            duration: 500
        })

        if (phase === 1) {
            animateYear($('#year-2013'))
            $(this).css({
                display: 'block'
            })
            $(this).animate({
                left: '105%'
            }, {
                duration: 1500,
                specialEasing: {
                    left: 'linear'
                },
                complete: function () {
                    clearInterval(walkAnimate)
                    $(this).css({
                        background: 'url(./content/poses/idle.png) 0px 0px'
                    })
                    $('#first-image').on('click', animateFirst)
                    phase = 2
                    animating = false
                }
            })
        }
        if (phase === 2) {
            $(this).animate({
                left: ['123%', 'linear']
            }, {
                duration: 2000,
                complete: function () {
                    clearInterval(walkAnimate)
                    $(this).css({
                        background: 'url(./content/poses/squat.png) 0px 0px'
                    })
                    $(this).animate({
                        top: '61.1%'
                    }, {
                        duration: 1500,
                        complete: function () {
                            $(this).css({
                                background: 'url(./content/poses/jump.png) 0px 0px'
                            })
                            jump.play()
                            $(this).animate({
                                left: '140%',
                                top: '22%'
                            }, {
                                duration: 1000,
                                specialEasing: {
                                    left: "easeOutSine",
                                    top: "easeOutExpo"
                                },
                                complete: function () {
                                    $(this).css({
                                        background: 'url(./content/poses/fall.png) 0px 0px'
                                    })
                                    $(this).animate({
                                        left: '157%',
                                        top: '61.1%'
                                    }, {
                                        duration: 1000,
                                        specialEasing: {
                                            left: "easeInSine",
                                            top: "easeInQuint"
                                        },
                                        complete: function () {
                                            $(this).css({
                                                background: 'url(./content/poses/fallen.png) 0px 0px'
                                            })
                                            land.play()
                                            $(this).animate({
                                                top: '61%'
                                            }, {
                                                duration: 1500,
                                                complete: function () {
                                                    $(this).css({
                                                        background: 'url(./content/poses/idle.png) 0px 0px'
                                                    })
                                                    phase = 3
                                                    animating = false
                                                    $('#first-image').on('click', animateFirst)
                                                    animateYear()
                                                }
                                            })
                                        }
                                    })
                                }
                            })

                        }
                    })
                }
            })
        }
        if (phase === 3) {
            $(this).animate({
                left: '163%'
            }, {
                duration: 750,
                specialEasing: {
                    left: "easeInSine"
                },
                complete: function () {
                    $(this).animate({
                        left: '168%',
                        top: '54%'
                    }, {
                        duration: 750,
                        specialEasing: {
                            left: "linear",
                            top: 'linear'
                        },
                        complete: function () {
                            $(this).animate({
                                left: '177%'
                            }, {
                                duration: 750,
                                specialEasing: {
                                    left: "linear"
                                },
                                complete: function () {
                                    $(this).animate({
                                        left: '187%',
                                        top: '44%'
                                    }, {
                                        duration: 750,
                                        specialEasing: {
                                            left: "linear",
                                            top: 'linear'
                                        },
                                        complete: function () {
                                            $(this).animate({
                                                left: '200%'
                                            }, {
                                                duration: 1000,
                                                specialEasing: {
                                                    left: "linear"
                                                },
                                                complete: function () {
                                                    scrollTrigger = $(window).width() * 2
                                                    clearInterval(walkAnimate)
                                                    $(this).css({
                                                        top: '60%',
                                                        left: '80%',
                                                        background: 'url(./content/poses/idle.png) 0px 0px',
                                                        display: 'none'
                                                    })
                                                    animating = false
                                                    phase = 1
                                                    $('#first-image').on('click', animateFirst)
                                                    $('#sec-image').trigger('click')
                                                    $(this).css({
                                                        display: 'none',
                                                        top: '61%',
                                                        left: '80%',
                                                        background: 'url(./content/poses/idle.png) 0px 0px'
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })

    // Animations for the 3rd page
    $('#sec-image').on('click', function animateSecond() {
        animateWalk($(this))
        $('#sec-image').off('click')

        $('.nes-container').animate({
            opacity: '0'
        }, {
            duration: 500
        })

        if (phase === 1) {
            animateYear($('#year-2018'))
            $(this).css({
                display: 'block'
            })
            $(this).animate({
                left: '205%'
            }, {
                duration: 1500,
                specialEasing: {
                    left: 'linear'
                },
                complete: function () {
                    clearInterval(walkAnimate)
                    $(this).css({
                        background: 'url(./content/poses/idle.png) 0px 0px'
                    })
                    $('#sec-image').on('click', animateSecond)
                    phase = 2
                    animating = false
                }
            })
        }
        if (phase === 2) {
            $(this).animate({
                left: '250%'
            }, {
                duration: 3000,
                specialEasing: {
                    left: "easeInSine"
                },
                complete: function () {
                    clearInterval(walkAnimate)
                    $(this).css({
                        background: 'url(./content/poses/idle.png) 0px 0px',
                    })
                    phase = 3
                    animating = false
                    $('#sec-image').on('click', animateSecond)
                    animateYear()
                }
            })
        }
        if (phase === 3) {
            $(this).animate({
                left: '288%'
            }, {
                duration: 2500,
                specialEasing: {
                    left: "easeInSine"
                },
                complete: function () {
                    clearInterval(walkAnimate)
                    $(this).css({
                        background: 'url(./content/poses/squat.png) 0px 0px',
                    })
                    $(this).animate({
                        top: '56.1%'
                    }, {
                        duration: 1500,
                        specialEasing: {
                            top: 'linear'
                        },
                        complete: function () {
                            $(this).css({
                                background: 'url(./content/poses/jump.png) 0px 0px'
                            })
                            jump.play()
                            $(this).animate({
                                top: '-20%',
                                left: '298%'
                            }, {
                                duration: 1000,
                                specialEasing: {
                                    left: "easeOutSine",
                                    top: "easeOutExpo"
                                },
                                complete: function () {
                                    scrollTrigger = $(window).width() * 3
                                    phase = 1
                                    animating = false
                                    $('#sec-image').on('click', animateSecond)
                                    $('#third-image').trigger('click')
                                    $(this).css({
                                        display: 'none',
                                        top: '56%',
                                        left: '180%',
                                        background: 'url(./content/poses/idle.png) 0px 0px'
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })

    //Animations for the 4th page
    $('#third-image').on('click', function animateThird() {
        animateWalk($(this))
        $('#third-image').off('click')

        $('.nes-container').animate({
            opacity: '0'
        }, {
            duration: 500
        })

        if (phase === 1) {
            animateYear($('#year-2019'))
            clearInterval(walkAnimate)
            $('#third-image').css({
                display: 'block'
            })
            $('#third-image').animate({
                top: '14%',
                left: '305%'
            }, {
                duration: 1500,
                specialEasing: {
                    left: "easeInSine",
                    top: "easeInExpo"
                },
                complete: function () {
                    $(this).css({
                        background: 'url(./content/poses/fallen.png) 0px 0px',
                    })
                    fall.play()
                    $(this).animate({
                        top: '14.1%'
                    }, {
                        duration: 1500,
                        complete: function () {
                            $(this).css({
                                background: 'url(./content/poses/idle.png) 0px 0px',
                            })
                            $('#third-image').on('click', animateThird)
                            phase = 2
                            animating = false
                        }
                    })
                }
            })
        }
        if (phase === 2) {
            $(this).animate({
                top: '17%',
                left: '313%'
            }, {
                duration: 750,
                speechSynthesis: {
                    top: 'easeInSine', // Walking
                    left: 'easeInSine'
                },
                complete: function () {
                    clearInterval(walkAnimate)
                    $(this).css({
                        background: 'url(./content/poses/squat.png) 0px 0px',
                    })
                    $(this).animate({
                        top: '17.1%'
                    }, {
                        duration: 1500,
                        complete: function () {
                            $(this).css({
                                background: 'url(./content/poses/jump.png) 0px 0px',
                            })
                            jump.play()
                            $(this).animate({
                                top: '-5%',
                                left: '333%'
                            }, {
                                duration: 1000,
                                specialEasing: {
                                    left: "easeOutSine", // Jumping
                                    top: "easeOutExpo"
                                },
                                complete: function () {
                                    $(this).css({
                                        background: 'url(./content/poses/fall.png) 0px 0px',
                                    })
                                    $(this).animate({
                                        top: '26.1%',
                                        left: '348%'
                                    }, {
                                        duration: 1000,
                                        specialEasing: {
                                            left: "easeInSine", // Falling
                                            top: "easeInQuint"
                                        },
                                        complete: function () {
                                            $(this).css({
                                                background: 'url(./content/poses/fallen.png) 0px 0px',
                                            })
                                            land.play()
                                            $(this).animate({
                                                top: '26%'
                                            }, {
                                                duration: 1000,
                                                complete: function () {
                                                    $(this).css({
                                                        background: 'url(./content/poses/idle.png) 0px 0px',
                                                    })
                                                    phase = 3
                                                    animating = false
                                                    $('#third-image').on('click', animateThird)
                                                    animateYear()
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
        if (phase === 3) {
            $(this).animate({
                left: '353%'
            }, {
                duration: 500,
                specialEasing: {
                    left: 'easeInSine'
                },
                complete: function () {
                    $(this).css({
                        background: 'url(./content/poses/fall.png) 0px 0px',
                    })
                    clearInterval(walkAnimate)
                    $(this).animate({
                        top: '40.1%',
                        left: '359%'
                    }, {
                        duration: 750,
                        specialEasing: {
                            left: "easeInSine", // Falling
                            top: "easeInQuint"
                        },
                        complete: function () {
                            $(this).css({
                                background: 'url(./content/poses/fallen.png) 0px 0px',
                            })
                            land.play()
                            $(this).animate({
                                top: '40.2%'
                            }, {
                                duration: 750,
                                complete: function () {
                                    $(this).css({
                                        background: 'url(./content/poses/idle.png) 0px 0px',
                                    })
                                    $(this).animate({
                                        top: '40.1%'
                                    }, {
                                        duration: 500,
                                        complete: function () {
                                            $(this).css({
                                                background: 'url(./content/poses/squat.png) 0px 0px',
                                            })
                                            $(this).animate({
                                                top: '40%'
                                            }, {
                                                duration: 1000,
                                                complete: function () {
                                                    $(this).css({
                                                        background: 'url(./content/poses/jump.png) 0px 0px',
                                                    })
                                                    jump.play()
                                                    $(this).animate({
                                                        top: '-5%',
                                                        left: '374%'
                                                    }, {
                                                        duration: 1250,
                                                        specialEasing: {
                                                            left: "easeOutSine", // Jumping
                                                            top: "easeOutExpo"
                                                        },
                                                        complete: function () {
                                                            $(this).css({
                                                                background: 'url(./content/poses/fall.png) 0px 0px',
                                                            })
                                                            $(this).animate({
                                                                top: '12.1%',
                                                                left: '380%'
                                                            }, {
                                                                duration: 750,
                                                                specialEasing: {
                                                                    left: "easeInSine", // Falling
                                                                    top: "easeInQuint"
                                                                },
                                                                complete: function () {
                                                                    $(this).css({
                                                                        background: 'url(./content/poses/fallen.png) 0px 0px',
                                                                    })
                                                                    land.play()
                                                                    $(this).animate({
                                                                        top: '12.1%',
                                                                    }, {
                                                                        duration: 500,
                                                                        complete: function () {
                                                                            $(this).css({
                                                                                background: 'url(./content/poses/idle.png) 0px 0px',
                                                                            })
                                                                            phase = 4
                                                                            animating = false
                                                                            $('#third-image').on('click', animateThird)
                                                                            animateYear()
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
        if (phase === 4) {
            $(this).animate({
                left: '385%'
            }, {
                duration: 750,
                specialEasing: {
                    left: 'easeInSine'
                },
                complete: function () {
                    clearInterval(walkAnimate)
                    $(this).css({
                        background: 'url(./content/poses/squat.png) 0px 0px',
                    })
                    $(this).animate({
                        left: '385.1%'
                    }, {
                        duration: 1000,
                        complete: function () {
                            $(this).css({
                                background: 'url(./content/poses/jump.png) 0px 0px',
                            })
                            jump.play()
                            $(this).animate({
                                top: '-20%',
                                left: '405%'
                            }, {
                                duration: 1250,
                                specialEasing: {
                                    left: "easeOutSine", // Jumping
                                    top: "easeOutExpo"
                                },
                                complete: function () {
                                    scrollTrigger = $(window).width() * 4
                                    phase = 1
                                    animating = false
                                    $('#third-image').on('click', animateThird)
                                    $('#fourth-image').trigger('click')
                                    $(this).css({
                                        display: 'none',
                                        top: '-20%',
                                        left: '290%',
                                        background: 'url(./content/poses/fall.png) 0px 0px'
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })

    //Animations for the 5th page
    $('#fourth-image').on('click', function animateFourth() {
        animateWalk($(this))
        $('#fourth-image').off('click')

        $('.nes-container').animate({
            opacity: '0'
        }, {
            duration: 500
        })

        if (phase === 1) {
            animateYear($('#last-year'))
            clearInterval(walkAnimate)
            $('#fourth-image').css({
                display: 'block',
                background: 'url(./content/poses/fall.png) 0px 0px',
            })
            $('#fourth-image').animate({
                top: '69.1%',
                left: '405%'
            }, {
                duration: 1250,
                specialEasing: {
                    left: "easeInSine", // Falling
                    top: "easeInQuint"
                },
                complete: function () {
                    $(this).css({
                        background: 'url(./content/poses/fallen.png) 0px 0px',
                    })
                    fall.play()
                    $(this).animate({
                        top: '69%'
                    }, {
                        duration: 1000,
                        complete: function () {
                            $(this).css({
                                background: 'url(./content/poses/idle.png) 0px 0px',
                            })
                            phase = 2
                            animating = false
                            $('#fourth-image').on('click', animateFourth)
                        }
                    })
                }
            })
        }
        if (phase === 2) {
            $(this).animate({
                left: '435%'
            }, {
                duration: 2000,
                specialEasing: {
                    left: 'easeInSine'
                },
                complete: function () {
                    clearInterval(walkAnimate)
                    $(this).css({
                        background: 'url(./content/poses/squat.png) 0px 0px',
                    })
                    $(this).animate({
                        top: '69.001%'
                    }, {
                        duration: 1000,
                        complete: function () {
                            clearInterval(walkAnimate)
                            $(this).css({
                                background: 'url(./content/poses/jump.png) 0px 0px',
                            })
                            jump.play()
                            $(this).animate({
                                top: '42%',
                                left: '440%'
                            }, {
                                duration: 750,
                                specialEasing: {
                                    left: "easeOutSine", // Jumping
                                    top: "easeOutExpo"
                                },
                                complete: function () {
                                    $(this).css({
                                        background: 'url(./content/poses/fall.png) 0px 0px',
                                    })
                                    $(this).animate({
                                        top: '69%',
                                        left: '445%'
                                    }, {
                                        duration: 750,
                                        specialEasing: {
                                            left: "easeInSine", // Falling
                                            top: "easeInQuint"
                                        },
                                        complete: function () {
                                            $(this).css({
                                                background: 'url(./content/poses/idle.png) 0px 0px',
                                            })
                                            land.play()
                                            phase = 3
                                            animating = false
                                            $('#fourth-image').on('click', animateFourth)
                                            animateYear()
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
        if (phase === 3) {
            endingAudio.play()
            $(this).animate({
                left: '485%'
            }, {
                duration: 3750,
                specialEasing: {
                    left: 'easeInSine'
                },
                complete: function () {
                    clearInterval(walkAnimate)
                    phase = 1
                    animating = false
                    $(this).css({
                        background: 'url(./content/poses/run3.png) 0px 0px',
                    })
                    $('#tbc-img').animate({
                        left: '390%'
                    }, {
                        duration: 500,
                        specialEasing: {
                            left: 'easeOutExpo'
                        },
                        complete: function () {
                            //Ending Here
                            console.log('End')
                            endingAudio.addEventListener('ended', function () {
                                $('#fourth-image').on('click', animateFourth)
                                $('#ending-screen').animate({
                                    opacity: '100%'
                                }, {
                                    duration: 500
                                })
                            })
                        }
                    })
                }
            })
        }
    })
}

// Animate Year banners
function animateYear(element) {
    switch (yearPhase) {
        case 0:
            yearElement = $('#mar-2013')
            break
        case 1:
            yearElement = $('#jun-2013')
            break
        case 2:
            yearElement = $('#uni-years')
            break
        case 3:
            yearElement = $('#jul-2018')
            break
        case 4:
            yearElement = $('#jul-2019')
            break
        case 5:
            yearElement = $('#aug-2019')
            break
        case 6:
            yearElement = $('#nov-2019')
            break
        case 7:
            yearElement = $('#oct-2020')
            break
        case 8:
            yearElement = $('#aug-2021')
            break
    }

    if (element) {
        element.animate({
            top: '0',
            opacity: '100%'
        }, {
            duration: 1000,
            specialEasing: {
                top: 'linear',
                opacity: 'easeInQuad'
            },
            complete: function () {
                element.animate({
                    transform: 'scale(1.5,1.5)'
                }, {
                    duration: 1000,
                    specialEasing: {
                        transform: 'linear'
                    },
                    complete: function () {
                        element.animate({
                            top: '-20%',
                            opacity: '0'
                        }, {
                            duration: 1000,
                            specialEasing: {
                                top: 'linear',
                                opacity: 'easeInQuad'
                            },
                            complete: function () {
                                yearElement.animate({
                                    opacity: '100%'
                                }, {
                                    duration: 500,
                                    specialEasing: {
                                        opacity: 'easeInQuad'
                                    },
                                    complete: function () {
                                        yearPhase++
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    else {
        yearElement.animate({
            opacity: '100%'
        }, {
            duration: 500,
            specialEasing: {
                opacity: 'easeInQuad'
            },
            complete: function () {
                yearPhase++
            }
        })
    }
}

// Generic Walk animation
function animateWalk(element) {
    if (!animating) {
        walkAnimate = setInterval(() => {
            // Oscillator counter
            if (up) {
                i++
                i === 3 ? up = false : up = true
            }
            else if (!up) {
                i--
                i === 1 ? up = true : up = false
            }

            element.css({
                background: 'url(./content/poses/run' + i + '.png) 0px 0px'
            })

            animating = true
        }, INTERVAL)
    } else if (animating) {
        clearInterval(walkAnimate)
        element.css({
            background: 'url(./content/poses/idle.png) 0px 0px'
        })

        animating = false
    }
}

const resizeHandler = () => {
    $('.content-container').each(function (i, e) {
        sectionAnchorPointer.push(this.offsetLeft)
    })
}

const getCurrentSectionIndex = () =>
    sectionAnchorPointer.findIndex((leftValue, i, array) => {
        const rightValue = array[i + 1] ?? Infinity
        return leftValue <= resultX && resultX < rightValue
    })

const mouseWheelScroll = () => {
    // Attaching this event via jQuery results to slowdown so
    // I'm doing this with vanilla JS
    window.addEventListener('wheel', (ev) => {
        scrollTrigger = 0
        const { deltaY } = ev
        const currentSectionIndex = getCurrentSectionIndex()
        const add = Math.abs(deltaY) / deltaY
        nextSectionIndex = currentSectionIndex + add
        nextSectionIndex = Math.min(sectionAnchorPointer.length - 1, Math.max(0, nextSectionIndex)) // To avoid pointing to a section index that does not exist
        console.log(sectionAnchorPointer[nextSectionIndex])
    })
}

// Scroll animation
function scrollToNext() {
    var nextScrollX
    scrollTrigger !== 0 ? nextScrollX = scrollTrigger : nextScrollX = sectionAnchorPointer[nextSectionIndex]
    if (Math.abs(resultX - nextScrollX) > SCROLL_SPEED) {
        const val = -Math.abs(resultX - nextScrollX) / (resultX - nextScrollX)
        resultX = resultX + val * SCROLL_SPEED
    }
    else {
        resultX = nextScrollX
    }

    window.scroll(resultX, 0)
    requestAnimationFrame(scrollToNext)
}