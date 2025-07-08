$(function() {
  var columnWidth = 300
  var gutter = 5
  var column, size, offsetY

  $('body').css({ overflowY: 'scroll' })
  $(window)
    .on('resize', function() {
      column = Math.ceil($(window).width() / columnWidth)
      size = $(window).width() / column
      offsetY = []
      $('.item')
        .css({ position: 'absolute', padding: gutter, boxSizing: 'border-box' })
        .each(function() {
          var ratio = $(this).data('height') / $(this).data('width')
          var i =
            offsetY.length < column
              ? offsetY.length
              : offsetY.indexOf(Math.min.apply(Math, offsetY))
          if (offsetY.length == i) offsetY.push(gutter)
          itemHeight = (size - gutter * 2) * ratio
          $(this).css({
            width: size - gutter * 2,
            height: itemHeight,
            top: offsetY[i],
            left: size * i + gutter
          })
          offsetY[i] += itemHeight + gutter * 2
        })
    })
    .resize()
})

// var columnWidth = 400
// var windowWidth = 1048
// var gutter = 5
// var column, size, offsetY

// // $('body').css({ overflowY: 'scroll' })
// $('.column')
//   .on('resize', function() {
//     column = Math.ceil(windowWidth / columnWidth)
//     size = windowWidth / column
//     offsetY = []
//     $('.item')
//       .css({ position: 'absolute', padding: gutter, boxSizing: 'border-box' })
//       .each(function() {
//         var ratio = $(this).data('height') / $(this).data('width')
//         var i =
//           offsetY.length < column
//             ? offsetY.length
//             : offsetY.indexOf(Math.min.apply(Math, offsetY))
//         if (offsetY.length == i) offsetY.push(gutter)
//         itemHeight = (size - gutter * 2) * ratio
//         $(this).css({
//           width: size - gutter * 2,
//           height: itemHeight,
//           top: offsetY[i],
//           left: size * i + gutter
//         })
//         offsetY[i] += itemHeight + gutter * 2
//       })
//   })
//   .resize()
