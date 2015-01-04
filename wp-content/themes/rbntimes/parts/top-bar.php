
<div class="top-bar-container contain-to-grid show-for-medium-up">
    <nav class="top-bar" data-topbar role="navigation">
        <ul class="title-area">
            <div id="title">
                <a href="/home">robin </a>x
            </div>

            <div class="form">
                <form action="#" class="search">
                        <input type="text" placeholder="search" data-autosize-input='{ "space": 20 }' onkeydown="if (event.keyCode == 9) get_cat();" size="7" class="filterinput 1st" />
                </form>               
            </div>


            <div class="form sub_cat">
                <form action="#" class="search">
                     <input type="text" placeholder="search"onkeydown="if (event.keyCode == 9) get_cat_sub();" class="filterinput 2nd" />
                </form>                  
            </div>

            <div class="form dest_cat">
                <form action="#" class="search">
                     <input type="text" placeholder="search"onkeydown="if (event.keyCode == 9) get_cat_dest();" class="filterinput 3th" />
                </form>                  
            </div>

        </ul>
        <section class="top-bar-section">
            <?php foundationPress_top_bar_l(); ?>
            <?php foundationPress_top_bar_r(); ?>
        </section>
    </nav>
</div>
            <?php $categories = get_categories(); ?> 
<ul id="category-menu">
    <?php foreach ( $categories as $cat ) { ?>
    <li id="cat-<?php echo $cat->term_id; ?>"><a class="<?php echo $cat->slug; ?> ajax" onclick="cat_ajax_get('<?php echo $cat->term_id; ?>');" href="#"><?php echo $cat->name; ?></a></li>
    <?php } ?>
</ul>

<script>
var ajaxurl = '<?php echo admin_url( 'admin-ajax.php' ); ?>';
</script>