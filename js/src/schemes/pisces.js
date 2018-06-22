$(document).ready(function () {

  var sidebarInner = $('.sidebar-inner');
  //
  var $sidebar = $('#sidebar');
  $sidebar.show();
  // 固定顶部黑条
  $('.headband').css({'position':'fixed', top:0,width:'100%',zIndex:1});
  $headerInner.css({top:0})
  var affix = function() {
    var sidebarTop = $headerInner.height() + 10;
    $('#sidebar').css({ 'margin-top': sidebarTop }).affix();
    if (document.body.clientWidth < 975) {
      $headerInner.css({position: 'static'})
    } else {
      $headerInner.css({position: 'fixed'})
    }
  };
  affix()
  $(window).on('resize', function(){
       affix()
  });
  // shangmianchaode
  // initAffix();
  // resizeListener();

  // function initAffix () {
  //   var headerOffset = getHeaderOffset(),
  //       footerOffset = getFooterOffset(),
  //       sidebarHeight = $('#sidebar').height() + NexT.utils.getSidebarb2tHeight(),
  //       contentHeight = $('#content').height();

      // Not affix if sidebar taller then content (to prevent bottom jumping).
  //   if (headerOffset + sidebarHeight < contentHeight) {
  //     sidebarInner.affix({
  //       offset: {
  //         top: headerOffset - CONFIG.sidebar.offset,
  //         bottom: footerOffset
  //       }
  //     });
  //   }

  //   setSidebarMarginTop(headerOffset).css({ 'margin-left': 'initial' });
  // }

  // function resizeListener () {
  //   var mql = window.matchMedia('(min-width: 991px)');
  //   mql.addListener(function(e){
  //     if(e.matches){
  //       recalculateAffixPosition();
  //     }
  //   });
  // }

  // function getHeaderOffset () {
  //   return $('.header-inner').height() + CONFIG.sidebar.offset;
  // }

  // function getFooterOffset () {
  //   var footerInner = $('.footer-inner'),
  //       footerMargin = footerInner.outerHeight(true) - footerInner.outerHeight(),
  //       footerOffset = footerInner.outerHeight(true) + footerMargin;
  //   return footerOffset;
  // }

  // function setSidebarMarginTop (headerOffset) {
  //   return $('#sidebar').css({ 'margin-top': headerOffset });
  // }

  // function recalculateAffixPosition () {
  //   $(window).off('.affix');
  //   sidebarInner.removeData('bs.affix').removeClass('affix affix-top affix-bottom');
  //   initAffix();
  // }

});
