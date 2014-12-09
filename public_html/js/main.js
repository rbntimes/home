$( document ).ready(function() {
	$( ".main" ).focus();
  $('.sub_cat').hide();
  $('input[type!="button"][type!="submit"], select, textarea')
         .val('')
});



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
          $matches = $('#category').find('a:Contains(' + searchtext + ')').parent();
          //hiding non matching lists
          $('li', list).not($matches).slideUp();
          //showing matching lists
		      //console.log($matches);
          //$matches.slideDown();
          if(code == 8) { //backspace keycode
          //console.log('test');
          }
          else{

          $pageA = $matches.html();
          $pageUrl = $($pageA).attr('href'); //url gotoPage
          $searchIndex = searchtext.length;
          console.log($searchIndex);

          if($matches.length == 1 && $searchIndex > "2"){
	        $searchString_main = $matches[0].textContent.trim();
          	console.log($searchString_main);
          	$('.main').val( $searchString_main );
            $('.sub_cat').show();
            $('.sub').focus();
          }
          }
          if(searchtext == "help"){
          	$(list).find("li").slideDown(200);
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
    var searchtext = $(this).val();
    if(code == 8 && !searchtext) { //backspace keycode      TODO: check if homepage // has to be fully empty
            //window.location.href = "index.html" //parent_page
            $('.sub_cat').hide();
            $('.main').focus(); 
          }
        //getting search value
        
        if(searchtext) {
          //finding If content matches with search keyword
          $searchId = "#" + $searchString_main.trim();
          $matches = $($searchId).find('a:Contains(' + searchtext + ')').parent();
          //hiding non matching lists
          $('li', list).not($matches).slideUp();
          //showing matching lists
          //console.log($matches);
          //$matches.slideDown();
          if(code == 8) { //backspace keycode
          //console.log('test');
          }
          else{
          $pageA = $matches.html();
          $pageUrl = $($pageA).attr('href'); //url gotoPage
          $searchIndex = searchtext.length;
          console.log($searchIndex);
          if($matches.length == 1 && $searchIndex > "2"){
          $searchString_sub = $matches[0].textContent.trim();
            console.log($searchString_sub);
            $('.sub').val( $searchString_sub );
          }
          }
          if(searchtext == "help"){
            $(list).find("li").slideDown(200);
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

