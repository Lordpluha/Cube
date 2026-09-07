jQuery(document).ready(function() {

	// Header
	main_width = screen.width

	butt_menu_close = $('header #left-active .content .close_menu');
	butt_menu = $('header #left .menu');
	time_s = '1s';

	// Плавный переход по якорям
    $("header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 1000);
    });

	if (main_width <= 576) {
		// Header
		butt_menu.click(function(e) {
			// Sidebar
			$('header #left-active').css({
				transition: `width ${time_s} ease-in-out`,
				width: '100%'
			})

			// Content
			function display_content() {
				$('header #left-active .content').css({
					display: 'block'
				})
			};

			setTimeout(display_content, 850);
		});

		butt_menu_close.click(function(e) {
			// Sidebar
			$('header #left-active').css({
				transition: `width ${time_s} ease-in-out 0.s`,
				width: '0%'
			});

			// Content
			$('header #left-active .content').css({
				display: 'none'
			});
		});

		// Article
		
		// Our_process
		lor_eng = 'Lorem ipsum dolor sit amet, conectetur adipiscing elit. Sed varius, velit in aliquam interdum, lorem tortor feugiat elit, vel porttitor ipsum urna ut neque.'
		 
		$('article #Our_process .list .block pre').remove();

		$('article #Our_process .list .block').append('<p>'+ lor_eng +'</p>');

		// Portfolio


		// Stats
		$('#Stats .content').remove();
		$('#Stats').html("<div class=\"header\"><h1>Stats 2014</h1></div><div class=\"f_layer\"><div class=\"block\"><img src=\"documents/article/Stats/pizza.png\" alt=\"\"><h3>94 pizze</h3></div><div class=\"block\"><img src=\"documents/article/Stats/books.png\" alt=\"\"><h3>187 books</h3></div><div class=\"block\"><img src=\"documents/article/Stats/nap.png\" alt=\"\"><h3>476 nap</h3></div></div><div class=\"s_layer\"><div class=\"block\"><img src=\"documents/article/Stats/clients.png\" alt=\"\"><h3>37 clients</h3></div><div class=\"block\"><img src=\"documents/article/Stats/coffee.png\" alt=\"\"><h3>575 coffee</h3></div><div class=\"block\"><img src=\"documents/article/Stats/dog.png\" alt=\"\"><h3>1 dog</h3></div></div>");
	}	

	else {
		butt_menu.click(function(e) {
			// Sidebar
			$('header #left-active').css({
				transition: `width ${time_s} ease-in-out`,
				width: '50%'
			})

			// Content
			function display_content() {
				$('header #left-active .content').css({
					display: 'block'
				})
			};

			setTimeout(display_content, 850);
			
		});
	}

	butt_menu_close.click(function(e) {
		// Sidebar
		$('header #left-active').css({
			transition: `width ${time_s} ease-in-out 0.s`,
			width: '0%'
		});

		// Content
		$('header #left-active .content').css({
			display: 'none'
		});
	});




	// Pseudo slider on Team
	slide_t_1 = $('#Teams .team1')
	slide_t_2 = $('#Teams .team2')

	function set_slide1() {
		slide_t_1.css({
			opacity: 1
		});
		slide_t_2.css({
			opacity: 0
		});
		setTimeout(set_slide2, 8000)
	};

	function set_slide2() {
		slide_t_2.css({
			opacity: 1
		});
		slide_t_1.css({
			opacity: 0
		});
		setTimeout(set_slide1, 8000)
	};
	
	set_slide1();

	// Slider on Aside

	slider_JQ = $('#Firms .content .slider');
	slider_t = '#Firms .content .slider'

	slide1_JQ = $(`${slider_t} .f_slide`);
	slide2_JQ = $(`${slider_t} .s_slide`);

	slide1_t = `${slider_t} .f_slide`;
	slide2_t = `${slider_t} .s_slide`;

	slider_bg = $(`${slider_t} .slider_bg`);

	w_s = $(window).width();

	function move_left_s() {
		x = 0;
		slider_bg.css({
			'margin-left': `${x}px`
		});
	};

	function move_rigt_s() {
		x = -w_s;
		slider_bg.css({
			'margin-left': `${x}px`
		});
	};

	// Actives
	active_but1_b = $('aside #Firms .content .actives .buts .active1');
	active_but2_b = $('aside #Firms .content .actives .buts .active2');

	active_but1_t = 'aside #Firms .content .actives .buts .active1';
	active_but2_t = 'aside #Firms .content .actives .buts .active2';

	time_of_animate = '1s'

	function active_aside_but(index_of_el) {
		$(`${index_of_el} .active`).css({
			display: 'block'
		});

		$(`${index_of_el} .passive`).css({
			display: 'none'
		});
	};

	function passive_aside_but(index_of_el) {
		$(`${index_of_el} .active`).css({
			display: 'none'
		});

		$(`${index_of_el} .passive`).css({
			display: 'block'
		});
	};

	active_but1_b.click(function(e) {
		active_aside_but(active_but1_t);
		passive_aside_but(active_but2_t);
		move_left_s();
	});

	active_but2_b.click(function(e) {
		active_aside_but(active_but2_t);
		passive_aside_but(active_but1_t);
		move_rigt_s();
	});
});
