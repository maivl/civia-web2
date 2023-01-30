$(function () {
  // multiple是倍数，默认是1，也可以自定义
  function computedFontStyle(
    clientWidth,
    designWidth,
    multiple = 100) {
    return clientWidth / designWidth * multiple
  }
  computedFontStyle()
  // 获取html对象
  const docEl = document.documentElement;
  // 获取网页宽度
  let clientWidth = docEl.clientWidth;
  if (clientWidth > 768) {
    let rootFontStyle = computedFontStyle(clientWidth, 2036);
    docEl.setAttribute('style', `font-size: ${rootFontStyle}px`);
  } else {
    let rootFontStyle = computedFontStyle(clientWidth, 960);
    docEl.setAttribute('style', `font-size: ${rootFontStyle}px`);
  }
  
  $('.section').css('height', window.innerHeight)
  window.addEventListener('resize', () => {
    $('.section').css('height', window.innerHeight);
    clientWidth = docEl.clientWidth;
    if (clientWidth > 768) {
      rootFontStyle = computedFontStyle(clientWidth, 2036);
      docEl.setAttribute('style', `font-size: ${rootFontStyle}px`);
    } else {
      rootFontStyle = computedFontStyle(clientWidth, 960);
      docEl.setAttribute('style', `font-size: ${rootFontStyle}px`);
    }
    
  });

  window.addEventListener('scroll', function (e) {
    const scrollTop = (e.srcElement ? e.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (e.srcElement ? e.srcElement.body.scrollTop : 0);
    if (scrollTop < window.innerHeight / 20 * 13) {
      $('.header').css('background', 'transparent');
      $('.header').css('box-shadow', '-5px 0 10px rgba(0, 0, 0, 0)')
    } else if (scrollTop < window.innerHeight / 20 * 14) {
      $('.header').css('background', 'rgba(255, 255, 255, 0.15)');
      $('.header').css('box-shadow', '-5px 0 10px rgba(0, 0, 0, 0.01)')
    } else if (scrollTop < window.innerHeight / 20 * 15) {
      $('.header').css('background', 'rgba(255, 255, 255, 0.3)');
      $('.header').css('box-shadow', '-5px 0 10px rgba(0, 0, 0, 0.05)')
    } else if (scrollTop < window.innerHeight / 20 * 16) {
      $('.header').css('background', 'rgba(255, 255, 255, 0.45)');
      $('.header').css('box-shadow', '-5px 0 10px rgba(0, 0, 0, 0.1)')
    } else if (scrollTop < window.innerHeight / 20 * 17) {
      $('.header').css('background', 'rgba(255, 255, 255, 0.6)');
      $('.header').css('box-shadow', '-5px 0 10px rgba(0, 0, 0, 0.15)')
    } else if (scrollTop < window.innerHeight / 20 * 18) {
      $('.header').css('background', 'rgba(255, 255, 255, 0.75)');
      $('.header').css('box-shadow', '-5px 0 10px rgba(0, 0, 0, 0.2)')
    } else if (scrollTop < window.innerHeight / 20 * 19) {
      $('.header').css('background', 'rgba(255, 255, 255, 0.9)');
      $('.header').css('box-shadow', '-5px 0 10px rgba(0, 0, 0, 0.25)')
    } else {
      $('.header').css('background', '#fff');
      $('.header').css('box-shadow', '-5px 0 10px rgba(0, 0, 0, 0.3)')
    }

    function isInViewPortOfTwo(el) {
      const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      const top = el.getBoundingClientRect() && el.getBoundingClientRect().top
      // console.log('top', top)
      return top <= viewPortHeight - 100
    }
    
    for (let i = 1; i < 7;i ++) {
      let title = document.querySelector(`.section-${i} .title`);
      if (isInViewPortOfTwo(title)) {
        $(`.section-${i} .title`).addClass('show');
      }
      let image = document.querySelector(`.section-${i} .image`);
      if (isInViewPortOfTwo(image)) {
        $(`.section-${i} .image`).addClass('show');
        $(`.section-${i} .desc`).addClass('show');
      }
    }
  })
})