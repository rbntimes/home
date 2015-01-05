<?php
function prefix_load_cat_posts () {
    $cat_id = $_POST[ 'cat' ];
         $args = array (
        'cat' => $cat_id,
        'posts_per_page' => -1
    );

    $posts = get_posts( $args );

    ob_start ();
  //print_r($posts);
    foreach ( $posts as $post ) {
    setup_postdata( $post ); 
  
    ?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header>
       <div class="row">
            <div class="small-3 columns">
                 <div id="blckblck<?php echo rand(1,4)?>" class="blckblck" >              
                 </div>
                 <?php    
                 global $post;
                 the_title( '<p>' , '<br />' ); 
                 the_category( ' > ', 'multiple'); ?>
                 </p>
            </div>
            <div id="cntntblck" class="entry-content small-9 columns">
                 <?php the_content(__('Continue reading...', 'FoundationPress')); ?>
            </div>
       </div>
  </header>
  <footer>
       <?php $tag = get_the_tags(); if (!$tag) { } else { ?><p><?php the_tags(); ?></p><?php } ?>
  </footer>
  <hr />
</article>

   <?php } wp_reset_postdata();

   $response = ob_get_contents();
   ob_end_clean();

   echo $response;
   die(1);
   }
?>