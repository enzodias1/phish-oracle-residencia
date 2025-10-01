function setEventGa({ action = 'clicou', category, label } = {}) {
  if (!window.dataLayer) {
    throw 'DataLayer não existe'
  }
  if (!category) {
    throw 'Categoria não definida'
  }
  if (!label) {
    throw 'Rótulo não definido'
  }

  window.dataLayer.push({
    event: 'eventGA',
    action,
    category,
    label
  })
}

function isMobile() {
  const minSize = 0

  if ('maxTouchPoints' in navigator) {
    return navigator.maxTouchPoints > minSize
  }

  if ('msMaxTouchPoints' in navigator) {
    return navigator.msMaxTouchPoints > minSize
  }

  const mQ = window.matchMedia?.('(pointer:coarse)')
  if (mQ?.media === '(pointer:coarse)') {
    return mQ.matches
  }

  if ('orientation' in window) {
    return true
  }

  const UA = navigator.userAgent
  return /\b(BlackBerry|webOS|iPhone|IEMobile|Android|Windows Phone|iPad|iPod)\b/i.test(
    UA
  )
}

/**
 * Formats a text string for use as a menu link by:
 * - Converting to lowercase
 * - Removing leading/trailing whitespace
 * - Removing diacritics (accent marks)
 * - Replacing spaces with hyphens
 * - Removing special characters
 * - Replacing multiple hyphens with single hyphen
 *
 * @param {string} text - The text string to format
 * @returns {string} The formatted text string for use in menu links
 * @example
 * formatLinkText("Meu Dia a Dia") // returns "meu-dia-a-dia"
 * formatLinkText("Produtos & Serviços") // returns "produtos-e-servicos"
 */
function formatLinkText(text) {
  return text
    ?.toLowerCase()
    ?.trim()
    ?.normalize('NFD')
    ?.replace(/[\u0300-\u036f]/g, '')
    ?.replace(/\s+/g, '-')
    ?.replace(/[^a-z0-9-]/g, '')
    ?.replace(/-{2,}/g, '-')
}

/**
 * List of menu items that are allowed and that will be tagged.
 * Used for validating menu clicks and controlling navigation flow.
 *
 * @constant {string[]}
 * @default ['meu-dia-a-dia', 'produtos-e-servicos']
 *
 * @example
 * // Check if menu is allowed
 * if (ALLOWED_MENUS.includes('meu-dia-a-dia')) {
 *   // Handle allowed menu
 * }
 */
const ALLOWED_MENUS = ['meu-dia-a-dia', 'produtos-e-servicos']

function carruselInit() {
  $(function () {
    $().slick &&
      ($('.hero-super').show(),
      $('.hero-super').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        nextArrow:
          '<button type="button" class="slick-next" id="superbanner-next" style="display:none">&#8250;</button>'
      }),
      null != document.querySelector('.hero-super') &&
        $('.hero-super').slick('refresh'),
      $('.importante-slider')
        .not('.slick-initialized')
        .slick({
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false,
          arrows: false,
          dots: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 555,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
        })),
      window.outerWidth > 479 &&
        2 === $('.importante-slider > div > div > div').length &&
        ($('.importante-slider > ul')[0].style.display = 'none')
  })

  setTimeout(function () {
    $().slick &&
      ($('.slider-promocoes')[0].children.length > 1 &&
        $('.slider-promocoes')
          .not('.slick-initialized')
          .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrows: false,
            dots: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              }
            ]
          }),
      $('.slider-empresas')
        .not('.slick-initialized')
        .slick({
          slidesToShow: 6,
          slidesToScroll: 6,
          autoplay: false,
          arrows: true,
          dots: false,
          speed: 100,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
              }
            }
          ]
        }))
  }, 1000)

  loop = setInterval(function () {
    $().slick &&
      window.matchMedia('(max-width: 1024px)').matches &&
      ($('.slider-parceiros-mobile')
        .not('.slick-initialized')
        .slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
          dots: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
        }),
      $('.slider-canais-digitais')
        .not('.slick-initialized')
        .slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
          dots: false,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
              }
            },
            {
              breakpoint: 350,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
        }),
      $('.slider-veja-tambem')
        .not('.slick-initialized')
        .slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
          dots: false,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
        }),
      clearInterval(loop))
  }, 300)
}

function clickhf() {
  $(function () {
    // Footer copy section
    $('.copy-fot h3').click(function () {
      var s = $(this).parent()
      s.hasClass('active')
        ? (s.removeClass('active'), $(this).removeClass('clicked'))
        : (s.addClass('active'), $(this).addClass('clicked'))
    })

    // Hamburger menu
    $('.hamburger.hamburger--squeeze.js-hamburger').click(function () {
      if (
        !$(this).hasClass('is-active') ||
        $('header-internet-banking').hasClass('mobile-app-list-opened')
      ) {
        $('header-internet-banking').removeClass('mobile-app-list-opened')
        $(this).addClass('is-active')
        $('.menu-hidden').addClass('showMenu')
        $('.sub-level').removeClass('is-visible')
      } else {
        $(this).removeClass('is-active')
        $('.menu-hidden').removeClass('showMenu')
      }
    })

    // Menu level handlers
    $('.has-level .link-menu').click(function () {
      $(this).find('+ .sub-level').addClass('is-visible')
      $(this).addClass('is-clicked')
    })

    $('.has-level .link-menu.is-clicked').click(function () {
      $(this).find('+ .sub-level').addClass('is-visible')
      $(this).removeClass('is-clicked')
    })

    // Element prototype polyfills
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector
    }

    if (!Element.prototype.closest) {
      Element.prototype.closest = function (s) {
        var el = this
        if (!document.documentElement.contains(el)) {
          return null
        }
        do {
          if (el.matches(s)) {
            return el
          }
          el = el.parentElement
        } while (el !== null)
        return null
      }
    }

    // Back menu handlers
    $('.back-menu').click(function () {
      $(this).closest('div.sub-level').removeClass('is-visible')
      $(this).closest('.link-menu.is-clicked').removeClass('is-clicked')
      $(this).addClass('is-clicked')
    })

    $('.back-menu.is-clicked').click(function () {
      $(this).closest('div.sub-level').removeClass('is-visible')
    })

    // Search handlers
    $('button > icon-search').click(function () {
      if (
        $('header-internet-banking').hasClass('mobile-app-list-opened') ||
        $('ul.menu-hidden').hasClass('showMenu')
      ) {
        $('header-internet-banking').removeClass('mobile-app-list-opened')
        $('.hamburger.hamburger--squeeze.js-hamburger').removeClass('is-active')
        $('.menu-hidden').removeClass('showMenu')
        $('.bloco-branco').addClass('search-active')
        $('search-input').css('display', 'block')
        $('icon-search').css('display', 'none')
        $('div.close-container > icon-close').css('display', 'flex')
      } else {
        $('.bloco-branco').addClass('search-active')
        $('search-input').css('display', 'block')
        $('icon-search').css('display', 'none')
        $('div.close-container > icon-close').css('display', 'flex')
      }
    })

    // Close icon handler
    $('icon-close').click(function () {
      if ($('.bloco-branco').hasClass('search-active')) {
        $('.bloco-branco').removeClass('search-active')
        $('search-input').css('display', '')
        $('.arrow-container').css('display', 'flex')
        $('icon-search').css('display', '')
        $('div.close-container > icon-close').css('display', '')
      } else {
        $('search-input').css('display', 'block')
      }
    })

    // Lock icon handler
    $('icon-lock').click(function () {
      $('header-internet-banking').hasClass('mobile-app-list-opened')
        ? $('header-internet-banking').removeClass('mobile-app-list-opened')
        : $('header-internet-banking').addClass('mobile-app-list-opened')
    })

    // Dropdown handlers
    $(document).on('click', '.dropbtn2', function () {
      $('.dropbtn2').not(this).next().removeClass('show')
      $(this).next().addClass('show')
      $(this).addClass('clicked')
      $(this).removeClass('show')
      $('.dropbtn2').not(this).removeClass('clicked')
    })

    $(document).on('click', '.dropbtn2.clicked', function () {
      $(this).next().removeClass('show')
      $(this).removeClass('clicked')
      $('.dropbtn2').not(this).next().removeClass('clicked')
    })

    $(document).on('click', function (event) {
      if (!$(event.target).closest('.dropbtn2').length) {
        $('.dropbtn2').next().removeClass('show')
        $('.dropbtn2').removeClass('clicked')
      }
    })

    $(window).scroll(function () {
      $('.dropdown-menu').removeClass('show')
      $('.dropbtn2').removeClass('clicked')
    })
  })
}

function editCookies() {
  const event = new Event('editCookies')
  document.dispatchEvent(event)
}

carruselInit(), clickhf()

$(document).ready(function () {
  const boxes = document.querySelectorAll('.box-novidades')
  boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.classList.add('blog-hover')
    })
    box.addEventListener('mouseout', () => {
      box.classList.remove('blog-hover')
    })
  })
})

const time = 9
let iterator = 0
$(document).ready(function () {
  document.getElementById('play-pause').innerHTML = '❚❚'
  document.getElementById('controler-play').innerHTML = 'pausar'

  const meters = document.querySelectorAll('svg .meter')
  let interval = setInterval(() => {
    timer()
  }, 1000 / 4)
  const timer = () => {
    radialTimerSvg(iterator)
    iterator += 100 / time / 4
    meters.forEach((path) => {
      path.classList.remove('untransition')
    })
    if (iterator > 100) {
      meters.forEach((path) => {
        path.classList.add('untransition')
      })
      iterator = 0
      document.getElementById('superbanner-next').onclick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
      }
      document.getElementById('superbanner-next').click()
      // document.getElementById("superbanner-next").click();
    }
  }
  const radialTimerSvg = () => {
    meters.forEach((path) => {
      let to = path.getTotalLength() * ((100 - iterator) / 100)
      path.getBoundingClientRect()
      path.style.strokeDashoffset = Math.max(0, to)
    })
  }
  const playPause = () => {
    if (document.getElementById('play-pause').innerHTML == '❚❚') {
      document.getElementById('controler-play').innerHTML = 'reproduzir'
      dataLayer.push({
        event: 'eventGA',
        action: 'clicou',
        category: 'portal:home',
        label: 'Pause'
      })
      clearInterval(interval)
    } else if (document.getElementById('play-pause').innerHTML == '►') {
      document.getElementById('controler-play').innerHTML = 'pausar'
      dataLayer.push({
        event: 'eventGA',
        action: 'clicou',
        category: 'portal:home',
        label: 'Play'
      })
      interval = setInterval(() => {
        timer()
      }, 1000 / 4)
    }
  }

  document
    .getElementById('controle-pause')
    .addEventListener('click', ({ currentTarget }) => {
      playPause()

      currentTarget.querySelector('#play-pause').innerHTML == '❚❚'
        ? (currentTarget.querySelector('#play-pause').innerHTML = '►')
        : (currentTarget.querySelector('#play-pause').innerHTML = '❚❚')
    })

  $('.hero-banner .slick-slider').on(
    'afterChange',
    function (event, { slideCount: count }, currentSlide, nextSlide) {
      iterator = 0

      const nextPlay = document.getElementById('play-pause')
      if (nextPlay.innerHTML == '►') {
        nextPlay.innerHTML = '❚❚'
        document.getElementById('controler-play').innerHTML = 'pausar'
        interval = setInterval(() => {
          timer()
        }, 1000 / 4)
      }
    }
  )
})

document.addEventListener('DOMContentLoaded', function () {
  const cardButtons = document.querySelectorAll('#dynamic-cardButton')

  cardButtons?.forEach((button, index) => {
    const element = button.getAttribute('data-gtm-element') || 'link'
    const category = button.getAttribute('data-gtm-category') || 'portal:home'
    const action = button.getAttribute('data-gtm-action') || 'click'
    const label =
      // eslint-disable-next-line no-magic-numbers
      button.getAttribute('data-gtm-label') || `${element}:${index + 1}`

    button.addEventListener('click', function () {
      if (window.dataLayer) {
        setEventGa({
          action: action,
          category: category,
          label: label
        })
      }
    })
  })

  const wpcHomeHeaderElement = document.querySelector(
    'wpc-mfe-home-header-element'
  )
  const shadowRoot = wpcHomeHeaderElement?.shadowRoot

  function getMenuSelectors(deviceType) {
    const menuConfigs = {
      mobile: {
        linkSelector: 'a.dss-flyout-menu__link',
        mainTitleSelector: 'span.submenu-title.dss-flyout-menu__label',
        sectionSelector: 'div',
        sectionTitleSelector: '.subtitle',
        labelSelector: '.dss-flyout-menu__label'
      },
      desktop: {
        linkSelector: '.header-menu-dropdown-link',
        mainTitleSelector: '.menu-desk-title',
        sectionSelector: '.dss-col-3',
        sectionTitleSelector: '.header-menu-dropdown-link.dss-h1',
        labelSelector: null
      }
    }

    return menuConfigs[deviceType]
  }

  function setupMenuEventListener(menuElement, deviceType) {
    if (!menuElement || !deviceType) {
      return
    }

    if (deviceType === 'mobile' && !menuElement.dataset.listenerAttached) {
      menuElement.dataset.listenerAttached = 'true'
    }

    menuElement.addEventListener('click', (event) =>
      handleMenuClick(event, deviceType)
    )
  }

  function isDesktopMenuAllowedAndStore(event, menusSelectors) {
    const menuDeskTitle = event.target
      .closest(menusSelectors.mainTitleSelector)
      ?.textContent?.trim()
    const formattedMenuDeskTitle = formatLinkText(menuDeskTitle)

    if (ALLOWED_MENUS.includes(formattedMenuDeskTitle?.toLowerCase())) {
      window.lastOpenedMainMenu = formattedMenuDeskTitle
      return true
    }
  }

  function getSubMenuInfos(menuLink, menusSelectors) {
    const menuSection = menuLink.closest(menusSelectors.sectionSelector)
    const sectionTitle = menuSection
      ?.querySelector(menusSelectors.sectionTitleSelector)
      ?.textContent?.trim()
    const linkLabel = menusSelectors.labelSelector
      ? menuLink
          .querySelector(menusSelectors.labelSelector)
          ?.textContent?.trim()
      : menuLink.textContent?.trim()

    return { sectionTitle, linkLabel }
  }

  function getMobileMainMenuText(deviceType, menusSelectors) {
    if (deviceType === 'mobile') {
      return (
        shadowRoot
          .querySelector(menusSelectors.mainTitleSelector)
          ?.textContent?.trim() || ''
      )
    }
    return window.lastOpenedMainMenu || ''
  }

  function isValidMenuLink(menuLink, deviceType) {
    const isValidLink =
      menuLink && (deviceType === 'mobile' || menuLink.hasAttribute('href'))

    return isValidLink
  }

  function isAllowedMenu(menuText, deviceType) {
    const formattedText = formatLinkText(menuText)
    return ALLOWED_MENUS.includes(
      deviceType === 'mobile' ? formattedText : menuText
    )
  }

  function handleMenuClick(event, deviceType) {
    const menusSelectors = getMenuSelectors(deviceType)
    const menuLink = event.target.closest(menusSelectors.linkSelector)

    if (deviceType === 'desktop') {
      isDesktopMenuAllowedAndStore(event, menusSelectors)
    }

    const mainMenuText = getMobileMainMenuText(deviceType, menusSelectors)
    const formattedMainMenuText = formatLinkText(mainMenuText)
    const subMenusInfo = getSubMenuInfos(menuLink, menusSelectors)
    const formattedSectionTitle = formatLinkText(subMenusInfo.sectionTitle)
    const formattedLinkLabel = formatLinkText(subMenusInfo.linkLabel)
    const isValidAllowedMenu =
      isValidMenuLink(menuLink, deviceType) ||
      isAllowedMenu(mainMenuText, deviceType)
    let gaLabel = ''

    if (!isValidAllowedMenu) {
      return
    }

    formattedMainMenuText === formattedSectionTitle || !formattedSectionTitle
      ? (gaLabel = `botao:${formattedMainMenuText}:${formattedLinkLabel}`)
      : (gaLabel = `botao:${formattedMainMenuText}:${formattedSectionTitle}:${formattedLinkLabel}`)

    setEventGa({
      category: 'portal:home',
      label: gaLabel
    })
  }

  function initHeaderMenuObserver() {
    if (isMobile()) {
      const observer = new MutationObserver(() => {
        const mobileMenu = shadowRoot.querySelector('.dss-flyout-menu')
        if (mobileMenu && !mobileMenu.dataset.listenerAttached) {
          setupMenuEventListener(mobileMenu, 'mobile')
        }
      })

      observer.observe(shadowRoot, { childList: true, subtree: true })
    } else {
      const desktopMenu = shadowRoot.querySelector('.menu-desk')
      setupMenuEventListener(desktopMenu, 'desktop')
    }
  }

  initHeaderMenuObserver()
})
