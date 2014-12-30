<?php
/**
 * The default template for displaying content. Used for both single and index/archive/search.
 *
 * @subpackage FoundationPress
 * @since FoundationPress 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header>
       <div class="row">
            <div class="small-3 columns">
                 <div id="blckblck<?php echo rand(1,4)?>" class="blckblck" >
                 	
                 </div>
                 <?php the_title( '<p>' , '<br />' ); ?>
                 
                      <?php the_category( ' > ', 'multiple' ); ?>
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
