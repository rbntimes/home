$(document).ready(function(){$('#prompt').foundation('reveal', 'open')});
$( document ).ready(function() {
  $( '.2nd, .3th' ).hide();
	$( '.1st' ).focus();     
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
		    if (code != 8){ 	
        if(searchtext) {
          $matches = $('ul.top-bar-menu > .menu-item > a:Contains(' + searchtext + ')').first();
          $searchIndex = searchtext.length;      
          if($matches.length == 1 && $searchIndex > "2"){
          $searchString_main = $matches[0].textContent.trim();
            $('.1st').val( $searchString_main );
          }
          }
          if(searchtext == "help"){
          }	
          }
        else if(code == 8 && !searchtext){         
          cat_ajax_get();
        }
        return false;
      })

    $(".2nd")
    .keyup( function (e) {
      var code = e.keyCode || e.which;
      var searchtext = $('.main').val();
      var searchtext2 = $('.2nd').val();
      if (code != 8){    
      if(searchtext2) {
        $mainCat = $('.1st').val();
        $mainCat2 = $matches.parent('li').children('ul').find('.menu-item > a:Contains(' + searchtext2 + ')');
          $searchIndex2 = searchtext2.length;
          if($mainCat2.length == 1 && $searchIndex2 > "2"){
          $searchString_sub = $mainCat2[0].textContent.trim();
          $('.2nd').val( $searchString_sub );
        }
          }
          if(searchtext == "help"){
          } 
          }
        else if(code == 8 && !searchtext2){         
          $('.1st').removeAttr( "readonly" );
          $('.1st').val( $searchString_main );
          $('.2nd').hide();
          $('#category-menu > li').find('.' + $searchString_main ).trigger('click');
          $('.1st').focus();
        }
      return false;
    })


      $(".3th")
    .keyup( function (e) {
      var code = e.keyCode || e.which;
      var searchtext = $('.main').val();
      var searchtext2 = $('.2nd').val();
      var searchtext3 = $('.3th').val();
      if (code != 8){   
      if(searchtext3) {
        $mainCat3 = $mainCat2.parent('li').children('ul').find('.menu-item > a:Contains(' + searchtext3 + ')');
          $searchIndex3 = searchtext3.length;
          if($mainCat3.length == 1 && $searchIndex3 > "2"){
          $searchString_dest = $mainCat3[0].textContent.trim();
          $('.3th').val( $searchString_dest );
        }
          }
          if(searchtext == "help"){
          } 
          }
        else if(code == 8 && !searchtext3){         
          $('.2nd').removeAttr( "readonly" );
          $('.2nd').val( $searchString_sub );
          $('.3th').hide();
          $('#category-menu > li').find('.' + $searchString_sub ).trigger('click');
          $('.2nd').focus();
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
  $(function () {
    live_search($("#dest_category"));
  });
}(jQuery));

function get_cat(){
    var zoektekst1st = $('.1st').val();
    $('#category-menu > li').find('.' + zoektekst1st ).trigger('click');
    $( '.1st' ).attr('size',zoektekst1st.length + 2);
    $( '.1st' ).val(zoektekst1st + ' x');
    $( '.1st' ).attr('readonly','readonly');
    $( '.2nd' ).show();
    setTimeout(function() { 
            $( '.2nd' ).focus(); 
        }, 750);  
}

function get_cat_sub(){
    var zoektekst2nd = $('.2nd').val();
    $('#category-menu > li').find('.' + zoektekst2nd ).trigger('click');
    $( '.2nd' ).attr('size',zoektekst2nd.length + 2);
    $( '.2nd' ).val(zoektekst2nd + ' x');
    $( '.2nd' ).attr('readonly','readonly');
    $( '.3th' ).show();
    setTimeout(function() { 
        $( '.3th' ).focus(); 
    }, 750);  
}

function get_cat_dest(){
    var zoektekst3th = $('.3th').val();
    $('#category-menu > li').find('.' + zoektekst3th ).trigger('click');
    $( '.3th' ).attr('size',zoektekst3th.length + 2);
    $( '.3th' ).val(zoektekst3th);
    //$( '.3th' ).attr('readonly','readonly');
}

function cat_ajax_get(catID) {
    jQuery("#loading-animation").show();
    jQuery.ajax({
        type: 'POST',
        url: ajaxurl,
        data: {"action": "load-filter", cat: catID },
        success: function(response) {
            //console.log(response);
            jQuery("#category-post-content").html(response);
            $('iframe').each(function(){
              isrc = $(this).attr('src');
            });
            $('article a').contents().unwrap();
            return false;
        }
    });
}

cat_ajax_get();

$('article a').contents().unwrap();

