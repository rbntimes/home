<div class="top-bar-container contain-to-grid show-for-medium-up">
    <nav class="top-bar" data-topbar role="navigation">
        <ul class="title-area">
            <div id="title">
                robin x 
            </div>
            <?php if( is_front_page()) : ?>
            <div class="form">
                <form action="#" class="search">
                     <input type="text" placeholder="." data-autosize-input='{ "space": 20 }' class="filterinput main" />
                </form>
                
            </div>
        <?php else : ?>
            <div class="form sub_cat">
                <form action="#" class="search">
                     <input type="text" placeholder="." data-autosize-input='{ "space": 20 }' class="filterinput sub" />
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
