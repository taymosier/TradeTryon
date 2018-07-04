<?php
/**
 * @package dazzling
 */
?>

<?php
	$background = get_post_meta($post->ID, 'image_url', true);
?>
<?php
	$source = (string) get_field('article_source_logo');
?>
<?php
	$linkUrl = (string) get_field('article_url');

?>
<?php

	switch ($source) {
			case "No Picture":
			$source_image = "";
			break;
	    case "Original":
					$source_image = "wp-content//themes//dazzling-child//images//huskies2.jpg";
	        break;
	    case "Charlotte Observer":
					$source_image = "wp-content//themes//dazzling-child//images//cltobsb.png";
	        break;
	    case "Charlotte Agenda":
					$source_image = "wp-content//themes//dazzling-child//images//ca.png";
	        break;
			case "Charlotte Business Journal":
					$source_image = "wp-content//themes//dazzling-child//images//cbj.png";
					break;
		 	case "WBTV":
					$source_image = "wp-content//themes//dazzling-child//images//wbtv.png";
				 	break;
			case "WCNC":
					$source_image = "wp-content//themes//dazzling-child//images//wcnc.png";
	        break;
	    case "Panthers.com":
					$source_image = "wp-content//themes//dazzling-child//images//panthers.png";
	        break;
	    case "Cat Scratch Reader":
					$source_image = "wp-content//themes//dazzling-child//images//csr.png";
	        break;
			case "Charlotte Five":
					$source_image = "wp-content//themes//dazzling-child//images//c5.png";
					break;
		 	case "Creative Loafing":
					$source_image = "wp-content//themes//dazzling-child//images//creative.png";
				 	break;
			case "Charlotte Magazine":
					$source_image = "wp-content//themes//dazzling-child//images//cltmag.png";
					break;
			case "WSOC":
					$source_image = "wp-content//themes//dazzling-child//images//wsoc.png";
					break;
			case "WJZY Fox 46 Charlotte":
					$source_image = "wp-content//themes//dazzling-child//images//fox46.png";
					break;
			case "Spectrum News":
					$source_image = "wp-content//themes//dazzling-child//images//specnews.png";
					break;
			case "WCCB CW":
					$source_image = "wp-content//themes//dazzling-child//images//wccb.png";
					break;
			case "clture.org":
					$source_image = "wp-content//themes//dazzling-child//images//clture.png";
					break;
			case "Charlotte Stories":
					$source_image = "wp-content//themes//dazzling-child//images//cltstories.png";
					break;
	    default:
					break;
	}
?>

<article id="post-<?php the_ID(); ?>"  <?php post_class(); ?> >
	<div class="image-container">
		<img class="entry-image" src= "<?php echo $source_image;?>" />
	</div>
	<?php if ( $linkUrl ) : ?>
		<h2 class="entry-title-homepage"><a href="<?php echo $linkUrl; ?>" rel="bookmark"><?php the_title(); ?></a></h2>
	<?php else : ?>
		<h2 class="entry-title-homepage"><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
	<?php endif; ?>

	<?php if ( 'post' == get_post_type() ) : ?>
	<div class="entry-meta">
		<!--  If the calendar icon appears, it is because the base template was edited
					and the base template was updated. The dazzling_posted_on() function in the
					custom template-tags.php file needs to be edited
		-->
		<?php dazzling_posted_on(); ?>

	<?php endif; ?>


	<?php if ( is_search() ) : // Only display Excerpts for Search ?>
	<div class="entry-summary">
		<?php the_excerpt(); ?>
		<p><a class="btn btn-default read-more" href="<?php the_permalink(); ?>"><?php _e( 'Continue reading', 'dazzling' ); ?> <i class="fa fa-chevron-right"></i></a></p>
	</div><!-- .entry-summary -->
	<?php else : ?>
	<div class="entry-content">
		<?php if ( has_post_thumbnail()) : ?>
		<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >
		 	<?php the_post_thumbnail( 'dazzling-featured', array( 'class' => 'thumbnail col-sm-6' )); ?>
		</a>

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
		<?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>
			<div class="comments-link-container">
				<span class="comments-link">
					<?php comments_popup_link( __( 'Comments', 'dazzling' ), __( '1 Comment', 'dazzling' ), __( '% Comments', 'dazzling' ) ); ?>
				</span>
			</div>
		<?php endif; ?>
	</div><!-- .entry-content -->
	<?php endif; ?>

</article><!-- #post-## -->
<div class="section-divider"></div>
