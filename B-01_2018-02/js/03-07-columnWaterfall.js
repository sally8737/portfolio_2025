$(function() {
  var columnWidth = 300
  var $items = $('.item')
    .each(function() {
      $(this).css({
        width: 100 + '%',
        height: 0,
        paddingTop: ($(this).data('height') / $(this).data('width')) * 100 + '%'
      })
    })
    .remove()

  $(window)
    .on('resize', function() {
      $('.column').remove()
      var num = Math.ceil($(window).width() / columnWidth)
      while (num--) {
        $('body').append('<div class="column"></div>')
      }
      $('.column').css({ width: 100 / $('.column').length + '%' })
      $items.each(function() {
        var $column = $('.column').sort(function(a, b) {
          return $(a).height() - $(b).height()
        })
        $(this).appendTo($column.eq(0))
      })
    })
    .resize()
})

// var columnWidth = 400
//   var windowWidth = 1048

//   var $items = $('.item')
//     .each(function() {
//       $(this).css({
//         width: 100 + '%',
//         height: 0,
//         paddingTop: ($(this).data('height') / $(this).data('width')) * 100 + '%'
//       })
//     })
//     .remove()

//   $('.column')
//     .on('resize', function() {
//       $('.column').remove()
//       var num = Math.ceil(windowWidth / columnWidth)
//       while (num--) {
//         $('body').append('<div class="column"></div>')
//       }
//       $('.column').css({ width: 100 / $('.column').length + '%' })
//       $items.each(function() {
//         var $column = $('.column').sort(function(a, b) {
//           return $(a).height() - $(b).height()
//         })
//         $(this).appendTo($column.eq(0))
//       })
//     })
//     .resize()
