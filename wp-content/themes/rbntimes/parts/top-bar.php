
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

<div id="prompt" class="reveal-modal" data-reveal>
  <h2>Hi</h2>
  <p class="lead">Dit is alweer mijn 4de stage verslag.</p>
  <p>Ik heb het deze keer iets anders aangepakt dan normaal. Naast mijn stageverslag is hier ook andere persoonlijke content te vinden,
     een soort blog.
    De bedoeling is dat dit in de toekomst nog voor vele functies wordt gebruikt.
   In plaats van een traditioneel klik menu maakt ik gebrukt van een live filter. 
   Dit houd in dat <b>jij</b> zelf moet zoeken naar wat je wilt zien.</p>
  <p><b>TIP:</b> Komt je er niet uit, type dan eens 'help' ;)</p>
  <a class="close-reveal-modal">&#215;</a>
</div>

<script>
var ajaxurl = '<?php echo admin_url( 'admin-ajax.php' ); ?>';
</script>