(function ($) {
  jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };

  //live search function
  function live_search(list) {
    $(".filterinput")
      .keyup( function (e) {
        var code = e.keyCode || e.which;
 

        //getting search value
        var searchtext = $(this).val();
        if(searchtext) {
          //finding If content matches with search keyword
          $matches = $(list).find('a:Contains(' + searchtext + ')').parent();
          //hiding non matching lists
          $('li', list).not($matches).slideUp();
          //showing matching lists
          console.log($matches);
          //$matches.slideDown();
          if(code == 8) { //backspace keycode
            console.log('test');
          }
          else{
          $pageA = $matches.html();
          $pageUrl = $($pageA).attr('href');
          $searchIndex = searchtext.length;
          console.log($searchIndex);
          if($matches.length == 1 && $searchIndex > "2"){
	        $searchString = $matches[0].textContent.trim();
          	console.log($searchString);
          	$('.filterinput').val( $searchString );
          }
          }
          if(searchtext == "help"){
          	$(list).find("li").slideDown(200);
          }
          if(code == 13){
            gotoPage();
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
    live_search($("#contents"));
  });
}(jQuery));

 function gotoPage(){
  window.location.href = $pageUrl;
 }

