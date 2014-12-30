<div class="top-bar-container contain-to-grid show-for-medium-up">
    <nav class="top-bar" data-topbar role="navigation">
        <ul class="title-area">
            <div id="title">
                <a href="/home">robin </a>x
            </div>
            <?php $categories = get_categories(); ?> 
            <?php print_r($categories);?>
            <div class="form">
                <form action="#" class="search">
                     <?php if( is_front_page()) : ?>
                        <input type="text" placeholder="search" data-autosize-input='{ "space": 20 }' onkeydown="if (event.keyCode == 13) cat_ajax_get('<?php echo $cat->cat_id; ?>');" class="filterinput 1st" />
                    <?php else : ?>
                        &nbsp;<?php echo get_category_parents( $cat, true, ' x ' , $visited); ?>
                    <?php endif; ?>
                </form>
                
            </div>

        <?php if( !is_front_page()) : ?>
            <div class="form sub_cat">
                <form action="#" class="search">
                     <input type="text" placeholder="search" data-autosize-input='{ "space": 20 }' class="filterinput 2nd" />
                </form>                  
            </div>
        <?php endif; ?>
        </ul>
        <section class="top-bar-section">
            <?php foundationPress_top_bar_l(); ?>
            <?php foundationPress_top_bar_r(); ?>
        </section>
    </nav>
</div>

<ul id="category-menu">
    <?php foreach ( $categories as $cat ) { ?>
    <li id="cat-<?php echo $cat->term_id; ?>"><a class="<?php echo $cat->slug; ?> ajax" onclick="cat_ajax_get('<?php echo $cat->term_id; ?>');" href="#"><?php echo $cat->name; ?></a></li>
    <?php } ?>
</ul>


<script>
function cat_ajax_get(catID) {
    jQuery("a.ajax").removeClass("current");
    jQuery("a.ajax").addClass("current"); //adds class current to the category menu item being displayed so you can style it with css
    jQuery("#loading-animation").show();
    var ajaxurl = '<?php echo admin_url( 'admin-ajax.php' ); ?>';
    jQuery.ajax({
        type: 'POST',
        url: ajaxurl,
        data: {"action": "load-filter", cat: catID },
        success: function(response) {
            console.log(response);
            jQuery("#category-post-content").html(response);
            jQuery("#loading-animation").hide();
            return false;
        }
    });
}
</script>