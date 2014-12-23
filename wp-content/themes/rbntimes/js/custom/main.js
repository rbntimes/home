$( document ).ready(function() {
	$( ".main" ).focus();
  //$('.sub_cat').hide();
  $('input[type!="button"][type!="submit"], select, textarea')
         .val('')
});
$test12 = $('.menu-item a').html();
//console.log($('.menu-item > ul .menu-item a').html());
$('.menu-item').has('ul').addClass().html();

(function ($) {
  jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };

  //live search function
  function live_search(list) {
    $(".main")
      .keyup( function (e) {
        var code = e.keyCode || e.which;
		    var searchtext = $(this).val();
		    if(code == 8 && !searchtext) { //backspace keycode			TODO: check if homepage // has to be fully empty
            //window.location.href = "index.html" //parent_page				
          }
          //getting search value
        
        if(searchtext) {
          //finding If content matches with search keyword
          $matches = $('ul.top-bar-menu > .menu-item > a:Contains(' + searchtext + ')').first();
          //$matches.addClass('test');
          //hiding non matching lists
          //$('li', list).not($matches).slideUp();
          //showing matching lists
		      //console.log($matches);
          //$matches.slideDown();
          if(code == 8) { //backspace keycode
          //console.log('test');
          }
          else{

          $pageA = $matches.parent();
          $pageUrl = $($pageA).find('a').attr('href'); //url gotoPage
          console.log($pageUrl);
          $searchIndex = searchtext.length;
          //console.log($searchIndex);

          if($matches.length == 1 && $searchIndex > "2"){
	        $searchString_main = $matches[0].textContent.trim();
          	//console.log($searchString_main);
            //alert($searchString_main);
          	$('.main').val( $searchString_main );
            $('.main').attr('disable','disable');
            //$('.sub_cat').show();
            //$('.sub').focus();
          }
          }
          if(searchtext == "help"){
          	$('#category').find("li").slideDown(200);
          }
          if(code == 13){
            gotoPage();		//goto page pas bij enter
           }
        }
        else {
          //if search keyword is empty then hide all the lists
          $(list).find("li").slideUp(200);
        }
        return false;
      })

        $(".sub")
      .keyup( function (e) {
        var code = e.keyCode || e.which;
        var searchtext = $('.main').val();
        var searchtext2 = $(this).val();
        if(code == 8 && !searchtext2) { //backspace keycode      TODO: check if homepage // has to be fully empty
            //window.location.href = "index.html" //parent_page       
          }
          //getting search value
        
        if(searchtext2) {
          //finding If content matches with search keyword
          //$matches = $('ul.top-bar-menu > .menu-item a:Contains(' + searchtext + ')');
          $matchesSecond = $($matches).parent().find('ul li a:Contains(' + searchtext2 +')');
          //console.log($matchesSecond);
          //console.log($($matches).parent().find('ul li a:Contains(' + searchtext2 +')'));
          //$matchesSecond.addClass('test');
          //hiding non matching lists
          //$('li', list).not($matches).slideUp();
          //showing matching lists
          //console.log($matchesSecond);
          //$matches.slideDown();
          if(code == 8) { //backspace keycode
          //console.log('test');
          }
          else{

          $pageA = $matchesSecond.html();
          $pageUrl = $($pageA).attr('href'); //url gotoPage
          $searchIndex = searchtext2.length;
          //console.log($searchIndex);

          if($matchesSecond.length == 1 && $searchIndex > "2"){
          $searchString_main = $matchesSecond[0].textContent.trim();
          //  console.log($searchString_main);
            //alert($searchString_main);
            $('.sub').val( $searchString_main );
            $('.sub_cat').show();
            $('.sub').focus();
          }
          }
          if(searchtext2 == "help"){
            $('#category').find("li").slideDown(200);
          }
          if(code == 13){
            gotoPage();   //goto page pas bij enter
           }
        }
        else {
          //if search keyword is empty then hide all the lists
          $(list).find("li").slideUp(200);
        }
        return false;
      })

    .keyup( function () {
        $(this).change();
    });
  }

  $(function () {
    live_search($("#category"));
  });
  $(function () {
    live_search($("#sub_category"));
  });
}(jQuery));

 function gotoPage(){
  window.location.href = $pageUrl;
 }

