<?php
function althea_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'althea-google-fonts', 'https://fonts.googleapis.com/css?family=Abril+Fatface', false );

}
add_action( 'wp_enqueue_scripts', 'althea_enqueue_styles' );


add_action( 'wp_enqueue_scripts', 'althea_scripts' );

function althea_scripts() {
  wp_enqueue_script( 'areamap-script', get_stylesheet_directory_uri() . 'vendor/jquery.rwdImageMaps.min.js', array( 'jquery' ));
  wp_enqueue_script( 'althea-script', get_stylesheet_directory_uri() . '/althea-scripts.js', array( 'jquery' ));
}


/**
* Add SVG Support
*/
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');


/**
* Page Slug Body Class
*/
function add_slug_body_class( $classes ) {
	global $post;
	if ( isset( $post ) ) {
	$classes[] = $post->post_type . '-' . $post->post_name;
	}
	return $classes;
	}
	add_filter( 'body_class', 'add_slug_body_class' );
