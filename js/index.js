$(function () {
// multiple是倍数，默认是1，也可以自定义
  function computedFontStyle (
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
  let rootFontStyle = computedFontStyle(clientWidth, 2036);
  console.log('rootFontStyle ---', rootFontStyle);
  docEl.setAttribute('style', `font-size: ${rootFontStyle}px`);
  $('.section').css('height', window.innerHeight)
  window.addEventListener('resize', () => {
    console.log('123123');
    $('.section').css('height', window.innerHeight);
    clientWidth = docEl.clientWidth;
    rootFontStyle = computedFontStyle(clientWidth, 2036);
    docEl.setAttribute('style', `font-size: ${rootFontStyle}px`);
  });

  window.addEventListener('scroll', function (e) {
    const scrollTop = (e.srcElement ? e.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (e.srcElement ? e.srcElement.body.scrollTop : 0);
    if (scrollTop > window.innerHeight) {
      $('.header').css('background', '#fff');
      $('.header').addClass('boxShadow');
      $('.section-1').css('margin-top', '100px');
    } else {
      $('.header').css('background', 'transparent');
      $('.header').removeClass('boxShadow');
      $('.section-1').css('margin-top', 0);
    }
  })

  let index = 1;
  setInterval(function () {
    if (index < 10) {
      $('#image').attr('src', `./img/pics/pop0000000${index}.png`)
    } else if (index < 100) {
      $('#image').attr('src', `./img/pics/pop000000${index}.png`)
    } else {
      $('#image').attr('src', `./img/pics/pop00000${index}.png`)
    }
    index++
    if (index === 240) {
      index = 1
    }
  }, 300);
})