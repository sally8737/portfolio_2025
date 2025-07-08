$(function() {
  
  // ==== navbar + maskOut ====
  function maskOut() {
    $('body').removeClass('menuOpen')
    $('.mask').fadeOut(200, function() {
      $(this).remove()
    })
  }
  $('#menu-btn').on('click', function() {
    var $body = $('body')
    if (!$body.hasClass('menuOpen')) {
      $body.addClass('menuOpen').append(
        $('<div class="mask"></div>')
          .hide()
          .fadeIn(500)
      )
    } else {
      maskOut()
    }
  })

  $(document).on('click', '.mask', function() {
    maskOut()
  })

  $('#nav li').on('click', function() {
    console.log($(this).index());
    
    var target = $('.box').eq($(this).index()).offset().top,
    time = Math.abs($(window).scrollTop() - target) / 1000 * 400;
    // console.log(target)
    $('html,body').stop(true).animate({scrollTop:target},time < 400 ? 400 : time)
    maskOut()
    // e.preventDefault() //阻止超連結的預設動作
  })
  // ==== END navbar + maskOut ====
  
  // ==== navbar addClass"active" ====
  $.ajax({
    dataType: 'html'
  }).done(function() {    
    var sallyWebUrl = location.href,
      sallyWebHref = sallyWebUrl.substr(sallyWebUrl.lastIndexOf('#') + 1)
    $('#menu>#nav a[href="' + sallyWebHref + '"]').addClass('active')
  })
  // ==== END navbar addClass"active" ====

  // // =====  手機版位置  =====
  // $('#top-link').click(function(event){
  //   $('html, body').stop().animate({scrollTop:0}, 800);    
  // });
  // $('#portfolio-link').click(function(event){
  //   $('html, body').stop().animate({scrollTop:750}, 800);    
  // });
  // $('#about-link').click(function(event){
  //   $('html, body').stop().animate({scrollTop:2060}, 800);    
  // });
  // $('#contact-link').click(function(event){
  //   $('html, body').stop().animate({scrollTop:2610}, 800);    
  // });

  // =====  桌機版位置  =====
  // $('#top-link').click(function(event){
  //   $('html, body').stop().animate({scrollTop:0}, 800);    
  // });
  // $('#portfolio-link').click(function(event){
  //   $('html, body').stop().animate({scrollTop:700}, 800);    
  // });
  // $('#about-link').click(function(event){
  //   $('html, body').stop().animate({scrollTop:1500}, 800);    
  // });
  // $('#contact-link').click(function(event){
  //   $('html, body').stop().animate({scrollTop:2135}, 800);    
  // });
  
  // ===== portfolio multiple modals  =====
  $(function () {
    function ModalOpen() {
      $(this).parent().next().attr('style', 'display: block;')
    }
    function ModalClose() {
      $(this).parents('.modal').attr('style', '')
    }
    $('.modal-body > img').click(function(e){
      e.stopPropagation();
    });
    //listener for buttons
    $('.modal-open').on('click', ModalOpen);
    $('.modal-content').on('click', ModalClose)

  })
  // ===== END  portfolio multiple modals  =====



})
