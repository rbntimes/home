$( document ).ready(function() {

//console.log(window.location.pathname);

	$( '.1st, .2nd' ).focus();
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
    $(".1st")
      .keyup( function (e) {
        var code = e.keyCode || e.which;
		    var searchtext = $(this).val();
		    if(code == 8 && !searchtext) { //backspace keycode			TODO: check if homepage // has to be fully empty
            //window.location.href = "index.html" //parent_page				
          }
          //getting search value
        
        if(searchtext) {
          //finding If content matches with search keywordaads asdaasdsdasasdaaasd
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
          	$('.1st').val( $searchString_main );
            //$('.sub_cat').show();
            //$('.sub').focus();aa
          }
          }
          if(searchtext == "help"){
          	$('#category').find("li").slideDown(200);
          }
          if(code == 13){
            //gotoPage();		//goto page pas bij enter
           }
        }
        else {
          //if search keyword is empty then hide all the lists
          $(list).find("li").slideUp(200);
        }
        return false;
      })

    $(".2nd")
    .keyup( function (e) {
      var code = e.keyCode || e.which;
      var searchtext = $('.main').val();
      var searchtext2 = $('.2nd').val();
      if(code == 8 && !searchtext2) { //backspace keycode      TODO: check if homepage // has to be fully empty
          //window.location.href = "index.html" //parent_page       
        }
        //getting search value
      
      if(searchtext2) {
        var currentUrl = window.location.href;
        //var url = currentUrl.toString();
        var lastSegment = currentUrl.split('/');
        var lastEl = lastSegment[lastSegment.length-2];
        //console.log( lastEl );
        //finding If content matches with search keyword
        //$matches = $('ul.top-bar-menu > .menu-item a:Contains(' + searchtext + ')');
        
        $mainCat = $('ul.top-bar-menu > .menu-item > a:Contains(' + lastEl + ')');
        $mainCat2 = $( $mainCat.parent( 'li').children('ul').find('.menu-item > a:Contains(' + searchtext2 + ')'));
        console.log( $mainCat.parent( 'li').children('ul').find('.menu-item > a:Contains(' + searchtext2 + ')'));
        
        //$mainCat2 = $('ul.top-bar-menu > .menu-item > a:Contains(' + lastEl + ')').first();
        //console.log($mainCat2);
        //console.log($($matches).parent().find('ul li a:Contains(' + searchtext2 +')'));
        //$mainCat2.addClass('test');
        //hiding non matching lists
        //$('li', list).not($matches).slideUp();
        //showing matching lists
        //console.log($mainCat2);
        //$matches.slideDown();
        if(code == 8) { //backspace keycode
        //console.log('test');
        }
        else{

        
        $pageUrl = $($mainCat2).attr('href'); //url gotoPage
        $searchIndex2 = searchtext2.length;
        //console.log($searchIndex2);
        console.log($pageUrl);
        if($mainCat2.length == 1 && $searchIndex2 > "2"){
        $searchString_sub = $mainCat2[0].textContent.trim();
        //  console.log($searchString_main);
          
          $('.2nd').val( $searchString_sub );
          //$('.sub_cat').show();
          //$('.sub').focus();
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

