<?php
/**
 * WordPress AJAX Process Execution.
 *
 * @package WordPress
 * @subpackage Administration
 *
 * @link http://codex.wordpress.org/AJAX_in_Plugins
 */

/**
 * Executing AJAX process.
 *
 * @since 2.1.0
 */
define( 'DOING_AJAX', true );
if ( ! defined( 'WP_ADMIN' ) ) {
	define( 'WP_ADMIN', true );
}

/** Load WordPress Bootstrap */
require_once( dirname( dirname( __FILE__ ) ) . '/wp-load.php' );

/** Allow for cross-domain requests (from the frontend). */
send_origin_headers();

// Require an action parameter
if ( empty( $_REQUEST['action'] ) )
	die( '0' );

/** Load WordPress Administration APIs */
require_once( ABSPATH . 'wp-admin/includes/admin.php' );

/** Load Ajax Handlers for WordPress Core */
require_once( ABSPATH . 'wp-admin/includes/ajax-actions.php' );

@header( 'Content-Type: text/html; charset=' . get_option( 'blog_charset' ) );
@header( 'X-Robots-Tag: noindex' );

send_nosniff_header();
nocache_headers();

/** This action is documented in wp-admin/admin.php */
do_action( 'admin_init' );

$core_actions_get = array(
	'fetch-list', 'ajax-tag-search', 'wp-compression-test', 'imgedit-preview', 'oembed-cache',
	'autocomplete-user', 'dashboard-widgets', 'logged-in',
);

$core_actions_post = array(
	'oembed-cache', 'image-editor', 'delete-comment', 'delete-tag', 'delete-link',
	'delete-meta', 'delete-post', 'trash-post', 'untrash-post', 'delete-page', 'dim-comment',
	'add-link-category', 'add-tag', 'get-tagcloud', 'get-comments', 'replyto-comment',
	'edit-comment', 'add-menu-item', 'add-meta', 'add-user', 'closed-postboxes',
	'hidden-columns', 'update-welcome-panel', 'menu-get-metabox', 'wp-link-ajax',
	'menu-locations-save', 'menu-quick-search', 'meta-box-order', 'get-permalink',
	'sample-permalink', 'inline-save', 'inline-save-tax', 'find_posts', 'widgets-order',
	'save-widget', 'set-post-thumbnail', 'date_format', 'time_format', 'wp-fullscreen-save-post',
	'wp-remove-post-lock', 'dismiss-wp-pointer', 'upload-attachment', 'get-attachment',
	'query-attachments', 'save-attachment', 'save-attachment-compat', 'send-link-to-editor',
	'send-attachment-to-editor', 'save-attachment-order', 'heartbeat', 'get-revision-diffs',
	'save-user-color-scheme', 'update-widget', 'query-themes', 'parse-embed', 'set-attachment-thumbnail',
	'parse-media-shortcode'
);

add_action( 'wp_ajax_nopriv_load-filter', 'prefix_load_cat_posts' );
add_action( 'wp_ajax_load-filter', 'prefix_load_cat_posts' );
function prefix_load_cat_posts () {
    $cat_id = $_POST[ 'cat' ];
         $args = array (
        'cat' => $cat_id,
        'posts_per_page' => 10,
        'order' => 'DESC'

    );

    $posts = get_posts( $args );

    ob_start ();
    
    foreach ( $posts as $post ) {
    setup_postdata( $post ); ?>

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

   <?php } wp_reset_postdata();

   $response = ob_get_contents();
   ob_end_clean();

   echo $response;
   die(1);
   }

// Register core Ajax calls.
if ( ! empty( $_GET['action'] ) && in_array( $_GET['action'], $core_actions_get ) )
	add_action( 'wp_ajax_' . $_GET['action'], 'wp_ajax_' . str_replace( '-', '_', $_GET['action'] ), 1 );

if ( ! empty( $_POST['action'] ) && in_array( $_POST['action'], $core_actions_post ) )
	add_action( 'wp_ajax_' . $_POST['action'], 'wp_ajax_' . str_replace( '-', '_', $_POST['action'] ), 1 );

add_action( 'wp_ajax_nopriv_heartbeat', 'wp_ajax_nopriv_heartbeat', 1 );

if ( is_user_logged_in() ) {
	/**
	 * Fires authenticated AJAX actions for logged-in users.
	 *
	 * The dynamic portion of the hook name, $_REQUEST['action'],
	 * refers to the name of the AJAX action callback being fired.
	 *
	 * @since 2.1.0
	 */
	do_action( 'wp_ajax_' . $_REQUEST['action'] );
} else {
	/**
	 * Fires non-authenticated AJAX actions for logged-out users.
	 *
	 * The dynamic portion of the hook name, $_REQUEST['action'],
	 * refers to the name of the AJAX action callback being fired.
	 *
	 * @since 2.8.0
	 */
	do_action( 'wp_ajax_nopriv_' . $_REQUEST['action'] );
}
// Default status
die( '0' );


