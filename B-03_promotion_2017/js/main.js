$(function() {
  $('#BTN').on('click', openHandler)
  
  function openHandler() {
    $('#NAV').slideToggle(300)
    // console.log($(this))
  }

  $(window).on('resize', clearStyle)

  function clearStyle() {
    if ($(window).innerWidth() > 768) {
      $('#NAV').removeAttr('style')
    }
  }
})
