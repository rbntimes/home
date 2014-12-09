$( document ).ready(function() {
	$( ".filterinput" ).focus();
});

(function ($) {
  jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };

  //live search function
  function live_search(list) {
    $(".filterinput")
      .keyup( function (e) {
        var code = e.keyCode || e.which;
		var searchtext = $(this).val();
		if(code == 8 && !searchtext) { //backspace keycode			TODO: check if homepage // has to be fully empty
            window.location.href = "index.html" //parent_page
												
          }
        //getting search value
        
        if(searchtext) {
          //finding If content matches with search keyword
          $matches = $(list).find('a:Contains(' + searchtext + ')').parent();
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
	        $searchString = $matches[0].textContent.trim();
          	console.log($searchString);
          	$('.filterinput').val( $searchString );
			gotoPage();		//TODO	has to load next input, only on enter gotoPage
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
    .keyup( function () {
        $(this).change();
    });
  }

  $(function () {
    live_search($("#category"));
  });
}(jQuery));

 function gotoPage(){
  window.location.href = $pageUrl;
 }

