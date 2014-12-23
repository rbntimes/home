<?php
/*
Template Name: Page Of Posts with Custom Fields
*/

get_header();
$myposts = get_posts('');
foreach($myposts as $post) :
setup_postdata($post);
?>
  <div class="post-item">
    <div class="post-info">
      <h2 class="post-title">
      <a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>">
      <?php the_title(); ?>
      </a>
      </h2>
      <p class="post-meta">Posted by <?php the_author(); ?></p>
    </div>
    <div class="post-content">
    <?php the_content(); ?>
    </div>
  </div>
<?php comments_template(); ?>
<?php endforeach; wp_reset_postdata(); ?>
<?php get_footer(); ?>