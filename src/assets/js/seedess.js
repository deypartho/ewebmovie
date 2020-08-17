/**
 * Seedess Custom UIs
 */

// show video on btn hover
function showVideoOnButtonHovers() {
  $('.btn').on('mouseover', function mouseover() {
    $('.fullscreen-bg__video').css({ opacity: 0.15 })
  })
  $('.btn').on('mouseout', function mouseout() {
    $('.fullscreen-bg__video').css({ opacity: 0.07 })
  })
  $('.btn').on('click', function(event) {
    var href = event.target.getAttribute('href')
    if (!href || href[0] === '#') return 
    event.preventDefault()
    $('.btn').off('mouseout')
    $('.fullscreen-bg__video').css({ opacity: 0.3 })
    setTimeout(function() {
      window.location = event.target.href
    }, 1000)
  })
}

// only show video on full page load
window.addEventListener('load', function() {
  $('.fullscreen-bg__video').css({ opacity: 0.05 })
})

// navbar
$('document').ready(function() {

  showVideoOnButtonHovers()

  var searchParams = new URLSearchParams(location.search)

    var offsetMargin = 70
    function activateNavItem(target) {
        var a = target.link
        var $target = $(target.target)
        $('body').attr('data-active', a.href.replace(/^.*\#/, ''))
        $('.navbar li').removeClass('active')
        $(a).closest('li').addClass('active')
        if ($target.hasClass('dark')) {
            $('.navbar').removeClass('light').addClass('dark')
        } else if ($target.hasClass('light')) {
            $('.navbar').removeClass('dark').addClass('light')
        } else {
            $('.navbar').removeClass('dark').addClass('light')
        }
        $target.find('.info').each(function(i, info) {
            var $info = $(info)
            var $title = $info.find('.info-title')
            var $icon = $info.find('.icon')
            try {
                var className = ($icon.attr('class') || '').split(' ').filter(function(className) {
                    return className.match('icon-')
                }).pop().replace('icon-', '')
                className && $title.addClass('text-' + className)
            } catch(e) {
                /* ignore */
            }
        })
        // disable video
        //controlVideoPlayer(target)
    }

    if ($('#cdn') && typeof showParticles === 'function') {
      showParticles()
    }

    // start stop video player on different targets/sections
    function controlVideoPlayer(target) {
      var autoplay = parseInt(localStorage.getItem('main-video-autoplay'))
      var video = document.querySelector('.fullscreen-bg video')

      if (!autoplay) {
        showParticles.pause()
        animateVideoState(video, 'pause')
        return
      } 

      if (target.link.href.indexOf('#home') !== -1) {
        showParticles.pause()
        animateVideoState(video, 'play')
      } else if (target.link.href.indexOf('#pricing') !== -1) {
        showParticles.pause()
        animateVideoState(video, 'play')
      } else if (target.link.href.indexOf('#cdn') !== -1) {
        showParticles.start()
        animateVideoState(video, 'play')
      } else {
        showParticles.pause()
        animateVideoState(video, 'pause')
      }
    }

    /**
     * Animate the video play/pause state
     * @param {HTMLElement} video 
     * @param {String} state 
     */
    function animateVideoState(video, state) {
      var duration = 1500;
      function animateVolume(volume, complete) {
        $(video).stop()
        if ($(video).data('muted')) {
          return complete()
        }
        $(video).animate({volume: volume}, duration, complete)
      }
      if (state === 'play') {
        video.style.opacity = 0.2
        animateVolume(1, function() { video.play() })
        video.play()
      }
      if (state === 'pause') {
        video.style.opacity = 0
        animateVolume(0, function() { video.pause() })
      }
    }

    // top navbar
    $('#navigation-main a[href^="#"], .bottom-nav a[href^="#"]').on('click', function(event) {
        // smooth scroll
        var currTarget = $(this.getAttribute('href'));
        if( currTarget.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: currTarget.offset().top - offsetMargin
            }, 600);
        }
        var link = this
        targets.map(function(target) {
            if (target.link === link) {
                activateNavItem(target)
            }
        })
    });
    // scrolling top nav highlighting
    var targets = [];
    function calcTargetPos() {
        targets = [] // clear
        $('.navbar a[href^="#"]:not(.btn)').map(function(i, el) {
            if (!$(el).is(":visible")) return
            var target = $(this.getAttribute('href'));
            if (!target.length) return;
            var pos = target.offset().top;

            targets.push({
                link: this,
                target: target,
                pos: pos
            })

        })
    }
    calcTargetPos()
    // recalculate target positions on scroll
    $(window).resize(function() {
        calcTargetPos()
    })
    // highlight when target scrolls to visible screen
    var scrollTimer
    var scrollEventIntervalMs = 50
    var posMargin = $(window).height()/2.5 // px
    $(window).on('scroll load', function() {
        clearTimeout(scrollTimer)
        scrollTimer = setTimeout(function() {
            var scrollTop = ($(window).scrollTop() || $("body").scrollTop() || $('html').scrollTop())
            targets.map(function(target, i) {
                var pos = target.pos - posMargin
                var nextPos = targets[i+1] 
                    && targets[i+1].pos - posMargin 
                    || 1000000
                if (scrollTop > pos && scrollTop < nextPos) {
                    activateNavItem(target)
                }
            })
        }, scrollEventIntervalMs)
    })

  // play button
  $('#btn-autoplay').click(function toggleMainVideoAutoPlay() {
    var autoplay = parseInt(localStorage.getItem('main-video-autoplay')) ? 0 : 1
    setAutoplay(autoplay)
  })

  function setAutoplay(autoplay) {
    var video = document.querySelector('.fullscreen-bg video')
    if (!video) return
    localStorage.setItem('main-video-autoplay', autoplay)
    if (autoplay) {
      $('#btn-autoplay').removeClass('btn-success')
      $('#btn-autoplay i').html('pause_circle_outline')
    } else {
      $('#btn-autoplay').addClass('btn-success')
      $('#btn-autoplay i').html('play_circle_outline')
    }
    animateVideoState(video, autoplay ? 'play' : 'pause')
  }

  // initial saved autoplay
  //setAutoplay(localStorage.getItem('main-video-autoplay'))
  
  // mute button
  var muted = parseInt(localStorage.getItem('main-video-muted'))
  var video = document.querySelector('.fullscreen-bg video')
  
  function toggleMainVideoVolume(e) {
    e.preventDefault()
    muted = muted ? 0 : 1
    localStorage.setItem('main-video-muted', muted)
    setMainVideoVolume(muted)
  }
  function setMainVideoVolume(muted) {
    if (!video) return
    video.volume = muted ? 0 : 1
    $(video).data('muted', muted)
    $('#btn-mute .material-icons').text(muted ? 'volume_off' : 'volume_up')
  }
  $('#btn-mute').click(toggleMainVideoVolume)
  setMainVideoVolume(muted)
  
  // main menu state
  var menuVisibleDefault = true;
  var menuVisible = localStorage.getItem('main-menu-visible')
  menuVisible = menuVisible === null ? menuVisibleDefault : parseInt(menuVisible)
  function setMainMenuState(visible) {
    localStorage.setItem('main-menu-visible', visible ? 1 : 0)
  }
  function toggleMainMenuVisibility(visible) {
    var isVisible = isMainMenuVisible()
    if (visible != isVisible) {
      $('.navbar-toggle').click()
    }
  }
  function isMainMenuVisible() {
    return $('.navbar-collapse').first().hasClass('in')
  }
  $('.navbar-toggle').click(function(e) {
    // wait for menu to transition before setting state
    setTimeout(function() {
      var isVisible = isMainMenuVisible()
      setMainMenuState(isVisible)
    }, 1200)
  })
  toggleMainMenuVisibility(menuVisible)



  // header background fade
  function fadeHeaderBackground() {
    $('.fullscreen-bg__image')
        .css('transition', 'opacity 6000ms')
        .css('opacity', 0)
  }

  video && video.addEventListener('timeupdate', function onVideoTimeUpdate() {
    if (this.currentTime < 2) {
      //fadeHeaderBackground()
      this.removeEventListener('timeupdate', onVideoTimeUpdate)
    }
  })
  
  // fix animation
  function fixAnimation() {
    var isVisible = WOW.prototype.isVisible
    WOW.prototype.isVisible = function(element) {
    if ($(element).css('position') == 'fixed') {
      return true;
    }
    return isVisible.apply(this, arguments)
    }
  }
  fixAnimation()

  /**
   * Create an inline page modal
   * @param {HTMLElement} btnOpen Selector 
   * @param {HTMLElement} btnClose Selector 
   * @param {HTMLElement} modal Selector 
   * @param {function} onOpen 
   * @param {function} onClose 
   */
  function pageInlineModal(btnOpen, btnClose, modal, onOpen, onClose) {
    $(btnOpen).click(function(event) {
      event.preventDefault()
      event.stopPropagation()
      var navBar = $('.landing-page .navbar')
      $('html,body').addClass('no-scroll')
      $(modal).addClass('active')
      navBar.removeClass('navbar-transparent').click(function close() {
        $(btnClose).click()
        navBar.off('click', close)
      })
      if (onOpen) {
        onOpen.apply($(event.target), arguments)
      }
    })
    $(btnClose).click(function(event) {
      $('html,body').removeClass('no-scroll')
      $(modal).removeClass('active')
      if (onClose) {
        onClose.apply($(event.target), arguments)
      }
    })
  }

  // login modal
  function loginModal() {
    pageInlineModal('.btn-login', '#login .btn-reset', '#login')
    
  }
  loginModal()

  function messageModal(title, message, onOpen, onClose) {
    var btn = $('<a></a>')
    pageInlineModal(btn, '#message .btn-reset', '#message', function() {
      $('#message .title').text(title)
      $('#message .description').text(message)
    }, function() {
      location = location.href.replace(/\?.*$/, '')
    })
    $(btn).click()
  }

  // show modal messages when form submissions received
  function onFormReceived() {
    function onClose() {
      location = location.href
    }
    // contact form
    if (searchParams.has('thanks')) {
      messageModal('Thank you!', 'Your message has been sent', null, onClose)
    }
    // register form
    if (searchParams.has('signup')) {
      messageModal(
        'Registration for private beta pending', 
        `Thank you for joining Seedess. 
        Our Network is in private beta. 
        We will contact you shortly when your account is approved for the beta program.`,
        null, onClose)
    }
    // login form
    if (searchParams.has('login')) {
      messageModal('Account Not Ready', 'Your account is not yet approved for the private beta.', null, onClose)
    }
  }
  onFormReceived()


})
