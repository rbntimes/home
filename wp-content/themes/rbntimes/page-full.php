<?php
/*
Template Name: Full Width
*/
get_header(); ?>
<div class="row">
	<div class="small-12 large-12 columns" role="main">

 
<div id="blog">
<?php if(have_posts()) : ?>
     <?php while(have_posts()) : the_post(); ?>
          <div class="post"> 
              
               <div class="entry">	
                    <?php the_content(); ?>
                    <?php
                    $count_posts = wp_count_posts();
                    $nextpost = 0;
                    $published_posts = $count_posts->publish;
                    $myposts = get_posts(array('posts_per_page'=>$published_posts)); 
	               foreach($myposts as $post) :
                         $nextpost++;
                         setup_postdata($post);?>

                         <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
							<header>
								<h2><?php the_title(); ?></h2>
								<?php FoundationPress_entry_meta(); ?>
							</header>
							<div class="entry-content">
								<?php the_content(__('Continue reading...', 'FoundationPress')); ?>
							</div>

							<hr />
						</article>
                    <?php endforeach; wp_reset_postdata(); ?>
                    </ol>
              </div>
          </div>
     <?php endwhile; ?>
<?php endif; ?>
</div>

	</div>
</div>

<?php get_footer(); ?>
