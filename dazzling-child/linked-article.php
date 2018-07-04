<?php
/*
* Template Name: Linked-article
* Template Post Type: post, page, product
*/
?>

<?php
	$background = get_post_meta($post->ID, 'image_url', true);
?>

<article id="linked-article" <?php post_class(); ?> style="background-image: url(<?php echo $background;?>);">
	<h2 class="entry-title-link"><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
	<?php if ( is_search() ) : // Only display Excerpts for Search ?>
	<div class="entry-summary-link">
		<?php the_excerpt(); ?>
		<p><a class="btn btn-default read-more" href="<?php the_permalink(); ?>"><?php _e( 'Continue reading', 'dazzling' ); ?> <i class="fa fa-chevron-right"></i></a></p>
	</div><!-- .entry-summary -->
	<?php else : ?>
	<div class="entry-content-link">
		<?php if ( has_post_thumbnail()) : ?>
		<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >
		 	<?php the_post_thumbnail( 'dazzling-featured', array( 'class' => 'thumbnail col-sm-6' )); ?>
		</a>
		<div class="col-sm-6">
			<?php the_excerpt(); ?>
		</div>
		<?php else : ?>
			<!--  add the_excerpt() here to include post text-->
		<?php endif; ?>

		<a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"></a>


		<?php
			wp_link_pages( array(
				'before'            => '<div class="page-links">'.__( 'Pages:', 'dazzling' ),
				'after'             => '</div>',
				'link_before'       => '<span>',
				'link_after'        => '</span>',
				'pagelink'          => '%',
				'echo'              => 1
       		) );
    	?>
	</div><!-- .entry-content -->
	<?php endif; ?>

</article><!-- #post-## -->
