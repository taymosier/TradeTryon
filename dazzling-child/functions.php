<?php
/**
 * @package dazzling-child
 */
?>


<?php
function my_theme_enqueue_styles() {

    $parent_style = 'parent-style'; // This is 'dazzling' for the Dazzling theme.

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}


// adds a new custom menu item from dashboard

function wpb_custom_new_menu() {
  register_nav_menu('my-custom-menu',__( 'My Custom Menu' ));
}


function add_main_script(){
  wp_enqueue_script(
    'main',
    get_template_directory_uri() . '/../dazzling-child/inc/js/main.js',
    array('jquery')
  );
}

function add_article_functions(){
  wp_enqueue_script(
    'articles',
    get_template_directory_uri() . '/../dazzling-child/inc/js/articles.js',
    array('jquery')
  );
}

function add_menu_functions(){
  wp_enqueue_script(
    'menu',
    get_template_directory_uri() . '/../dazzling-child/inc/js/menu.js',
    array('jquery')
  );
}

function add_mutation_functions(){
  wp_enqueue_script(
    'mutations',
    get_template_directory_uri() . '/../dazzling-child/inc/js/mutations.js',
    array('jquery')
  );
}

function add_helper_functions(){
  wp_enqueue_script(
    'helpers',
    get_template_directory_uri() . '/../dazzling-child/inc/js/helpers.js',
    array('jquery')
  );
}

function add_pages_functions(){
  wp_enqueue_script(
    'pages',
    get_template_directory_uri() . '/../dazzling-child/inc/js/pages.js',
    array('jquery')
  );
}

function add_contact_functions(){
  wp_enqueue_script(
    'contact',
    get_template_directory_uri() . '/../dazzling-child/inc/js/contact.js',
    array('jquery')
  );
}

function add_about_functions(){
  wp_enqueue_script(
    'about',
    get_template_directory_uri() . '/../dazzling-child/inc/js/about.js',
    array('jquery')
  );
}

add_action( 'init', 'wpb_custom_new_menu' );
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
add_action('wp_enqueue_scripts', 'add_helper_functions' );
add_action('wp_enqueue_scripts', 'add_main_script' );
add_action('wp_enqueue_scripts', 'add_article_functions' );
add_action('wp_enqueue_scripts', 'add_menu_functions' );
add_action('wp_enqueue_scripts', 'add_mutation_functions' );
add_action('wp_enqueue_scripts', 'add_pages_functions' );
add_action('wp_enqueue_scripts', 'add_contact_functions' );
add_action('wp_enqueue_scripts', 'add_about_functions' );



wp_enqueue_script("jquery");

//adds multiple new menu options
// function wpb_custom_new_menu() {
//   register_nav_menus(
//     array(
//       'my-custom-menu' => __( 'My Custom Menu' ),
//       'extra-menu' => __( 'Extra Menu' )
//     )
//   );
// }
// add_action( 'init', 'wpb_custom_new_menu' );

// function wpsites_exclude_latest_post( $query ){
//     if ($query->is_home() && $query->is_main_query() ) {
//       $query->set('offset', '1');
//     }
// }

// add_action('pre_get_posts', 'wpsites_exclude_latest_post', 1);
?>
