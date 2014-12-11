<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'rbntms');

/** MySQL database username */
define('DB_USER', 'robin');

/** MySQL database password */
define('DB_PASSWORD', 'pwcqgquk');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Qc.y4E`oPNkmS3CpqnthL+}!al.jLn%R7Jga$V__B~bRYs@? k+1-WvIeniymOb7');
define('SECURE_AUTH_KEY',  '2]+4<vF,q.MvMjwOnZ;]%]XG=$a`<SKs)8{_m`u+H%Q#ay1igepW~2}: {8)-[u^');
define('LOGGED_IN_KEY',    'U}szXEzog_3>x%<ED5UZi2S0$_N$6SbuQ~TR~~N>-j0~|}2di!Le!>P(hUs^zh/i');
define('NONCE_KEY',        ':{|O@v*iZx0RqTj$DVwsBQ-^IStLjC4Z;1C}Wg+YP;cA6<Iri2n:q3=[3-1H:X^a');
define('AUTH_SALT',        '5cKc<svfA^D}N`V8#iE9`Yn,PpYwCk^wfLxJHb#6wu,25OB|xzD]!o~s+kHb1^Cm');
define('SECURE_AUTH_SALT', 'Vf;)gQz3NV+WPLEp;&gQ7(Ht>{-/9|Y}1+uIp}~.~`N3bw)s[?bKe@-8,J.PZ9Zc');
define('LOGGED_IN_SALT',   '&|HW1p@Rc7bk>n7?+EM:,?:DZwv}dQ{|x.nKo[6E-Sr&;n.;;[9{wYl~j_Uq+gTc');
define('NONCE_SALT',       'stm{7hX|UzxKtqtF`c;uJX|-gZs!hexY*{}@OCtjm1`1lO7[RnFY-btNq(fv-+(Z');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
