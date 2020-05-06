// JavaScript Document


window.onresize = function(){
	var body = document.getElementById("body");
	body.style.visibility = "visible";
	// body.style.visibility = "hidden";
	win_scale();
	// first_page();
	// gallery();
	// btn_press();
	// self_btn_press();
	self_introduction();
	// footer_page();
	// display();
	AOS.refresh();
	AOS.init();
	body.style.visibility = "visible";

}
window.onload = function(){
	var body = document.getElementById("body");
	body.style.visibility = "visible";
	// body.style.visibility = "hidden";
	win_scale();
	// first_page();
	// gallery();
	// btn_press();
	// self_btn_press();
	self_introduction();
	// footer_page();
	// display();
	AOS.refresh();
	AOS.init();


	body.style.visibility = "visible";
}


window.addEventListener("scroll", win_scale());


function self_btn_press(){

	var page_minus = document.getElementById("page_minus");
	var page_add = document.getElementById("page_add");
	var small_self_pic = document.getElementsByClassName("small_self_pic");
	var big_self_pic = document.getElementsByClassName("big_self_pic");
	var current_page_num = document.getElementById("current_page_num");
	var total_page_num = document.getElementById("total_page_num");
	var self_name_info = document.getElementsByClassName("self_name_info");
	var count = 0;
	var page;
	var max_value = 0;

	// for (var i = 0; i < small_self_pic.length; i++) {
	// 	self_name_info[i].style.display = "block";
	// 	if (self_name_info[i].clientHeight >= max_value){
	// 		max_value = self_name_info[i].clientHeight;
	// 	}
	// 	console.log("every", self_name_info[i].clientHeight)
	// }

	// console.log("max", max_value)
	// self_name_info[0].style.display = "block";
	// for (var i = 1; i < small_self_pic.length; i++) {
	// 	self_name_info[i].style.height = self_name_info[0].clientHeight + "px";
	// 	console.log(self_name_info[i].style.height, self_name_info[0].clientHeight);
	// }

	for (var i = 0; i < small_self_pic.length; i++) {
		small_self_pic[i].classList.remove("opacity_100");
		small_self_pic[i].classList.add("opacity_30");
		big_self_pic[i].style.display = "none";
		self_name_info[i].style.display = "none";
	}

	small_self_pic[count].classList.remove("opacity_30");
	small_self_pic[count].classList.add("opacity_100");
	big_self_pic[count].style.display = "block";
	self_name_info[count].style.display = "block";


	//total page num <= 10
	total_page_num.innerHTML = "0" + small_self_pic.length.toString();


	page_minus.onclick = function() {


		if (count <= 0){
			count = 0;
		}
		else{
			
			self_name_info[count - 1].style.display = "block";
			self_name_info[count].style.display = "none";
			big_self_pic[count - 1].style.display = "block";
			big_self_pic[count].style.display = "none";
			small_self_pic[count].classList.remove("opacity_100");
			small_self_pic[count].classList.add("opacity_30");
			small_self_pic[count - 1].classList.remove("opacity_30");
			small_self_pic[count - 1].classList.add("opacity_100");
			count -= 1;
			page = count + 1;
			current_page_num.innerHTML = "0" + page.toString();
		}

		
	};

	page_add.onclick = function() {


		if (count >= (small_self_pic.length - 1)){
			count = small_self_pic.length - 1;
		}
		else{
			self_name_info[count + 1].style.display = "block";
			self_name_info[count + 1].style.height = self_name_info[count].clientHeight + "px";
			self_name_info[count].style.display = "none";
			big_self_pic[count + 1].style.display = "block";
			big_self_pic[count].style.display = "none";
			small_self_pic[count].classList.remove("opacity_100");
			small_self_pic[count].classList.add("opacity_30");
			small_self_pic[count + 1].classList.remove("opacity_30");
			small_self_pic[count + 1].classList.add("opacity_100");
			count += 1;
			page = count + 1;
			current_page_num.innerHTML = "0" + page.toString();
		}

	};

}



function btn_press(){

	var previous_pic = document.getElementById("previous_pic");
	var next_pic = document.getElementById("next_pic");
	var gimg_holder = document.getElementsByClassName("gimg_holder");
	var gallery_pic = document.getElementsByClassName("gallery_pic");
	var count = 0;
	var holder_margin = 0;
	var gallery_pic_width_small = [];

	for (var i = 0; i < gallery_pic.length; i++) {
		gallery_pic[i].classList.remove("big_pic");
		gallery_pic[i].classList.add("small_pic");

	}

	for (var i = 0; i < gallery_pic.length; i++) {
		gallery_pic_width_small.push(gallery_pic[i].clientWidth);

	}

	// pic 1 must have same width as pic 2
	gallery_pic_width_small[0] = gallery_pic_width_small[1];
	gallery_pic[0].classList.remove("small_pic");
	gallery_pic[0].classList.add("big_pic");



	gimg_holder[0].style.marginLeft = holder_margin + "px";


	previous_pic.onclick = function() {

		if (count <= 0){
			count = 0;
		}
		else{
			gallery_pic[count].classList.remove("big_pic");
			gallery_pic[count].classList.add("small_pic");
			gallery_pic[count - 1].classList.remove("small_pic");
			gallery_pic[count - 1].classList.add("big_pic");

			holder_margin += (gallery_pic_width_small[count]);
			gimg_holder[0].style.marginLeft = holder_margin + "px";
			count -= 1;
		}

		
	};

	next_pic.onclick = function() {

		if (count >= (gallery_pic.length - 1)){
			count = gallery_pic.length - 1;
		}
		else{
			gallery_pic[count].classList.remove("big_pic");
			gallery_pic[count].classList.add("small_pic");
			gallery_pic[count + 1].classList.remove("small_pic");
			gallery_pic[count + 1].classList.add("big_pic");

			holder_margin -= (gallery_pic_width_small[count]);
			gimg_holder[0].style.marginLeft = holder_margin + "px";
			count += 1;
		}
	};

}








function win_scale(){
	document.addEventListener('touchstart', (event) => {
		if (event.touches.length > 1) {
			event.preventDefault();
		}
	}, { passive: false });

	let lastTouchEnd = 0;
	document.addEventListener('touchend', (event) => {
	const now = (new Date()).getTime();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	}, false);

}


function first_page(){
	
	var gadgethi = document.getElementById("gadgethi");
	var home_page_main_img = document.getElementById("home_page_main_img");
	var img_holder = document.getElementsByClassName("img_holder");
	var meet_our_team = document.getElementsByClassName("meet_our_team");
	
	var screen_width = window.innerWidth;
	var screen_height = window.innerHeight;
	

	slogan.style.visibility = "visible";

	if (screen_height <= 600){
		screen_height = 600;
		slogan.style.visibility = "hidden";
	}

	

	body.style.width = screen_width + "px";
	slogan.style.top = screen_height / 2 + slogan.clientWidth / 2 + "px";

	

	
	
	

	if (screen_width >= 960){


		home_page_main_img.classList.add("width_100");
		home_page_main_img.classList.remove("height_100");

		if (home_page_main_img.clientHeight < screen_height - 160){
			home_page_main_img.classList.remove("width_100");
			home_page_main_img.classList.add("height_100");

		}

		
		//page_1 layout
		gadgethi.style.paddingTop = 80 + "px";
		gadgethi.style.paddingBottom = 0 + "px";
		gadgethi.style.height = screen_height - 160 + "px";
		
		img_holder[0].style.height = screen_height - 160 + "px";
		img_holder[0].style.width = screen_width - 160 + "px";
		img_holder[0].style.marginLeft = 80 + "px";
		img_holder[0].style.marginRight = 80 + "px";

		meet_our_team[0].style.paddingRight = screen_width / 4 + "px";
		meet_our_team[0].style.paddingLeft = screen_width / 4 + "px";
		meet_our_team[0].style.width = screen_width / 2 + "px";


		
		
	}
	
	else if (screen_width >= 510 && screen_width < 960){

		home_page_main_img.classList.add("width_100");
		home_page_main_img.classList.remove("height_100");

		if (home_page_main_img.clientHeight < screen_height - 160){
			home_page_main_img.classList.remove("width_100");
			home_page_main_img.classList.add("height_100");

		}


		img_holder[0].style.marginLeft = 80 + "px";
		img_holder[0].style.marginRight = 80 + "px";
		gadgethi.style.height = screen_height - 160 + "px";
		gadgethi.style.paddingTop = 80 + "px";
		gadgethi.style.paddingBottom = 0 + "px";
		img_holder[0].style.height = screen_height - 160 + "px";
		img_holder[0].style.width = screen_width - 160 + "px";

		meet_our_team[0].style.paddingRight = screen_width / 4 + "px";
		meet_our_team[0].style.paddingLeft = screen_width / 4 + "px";
		meet_our_team[0].style.width = screen_width / 2 + "px";
		
	}
	
	else if (screen_width < 510){

		home_page_main_img.classList.add("width_100");
		home_page_main_img.classList.remove("height_100");

		if (home_page_main_img.clientHeight < screen_height){
			home_page_main_img.classList.remove("width_100");
			home_page_main_img.classList.add("height_100");

		}



		img_holder[0].style.margin = 0 + "px";
		gadgethi.style.paddingTop = 0 + "px";
		gadgethi.style.paddingBottom = 0 + "px";
		gadgethi.style.height = screen_height + "px";
		img_holder[0].style.height = screen_height + "px";
		img_holder[0].style.width = screen_width + "px";

		meet_our_team[0].style.paddingRight = screen_width / 10 + "px";
		meet_our_team[0].style.paddingLeft = screen_width / 10 + "px";
		meet_our_team[0].style.width = screen_width * 4 / 5 + "px";
		
		
		
		
		
	}

	console.log(screen_width, meet_our_team[0].clientWidth, meet_our_team[0].style.padding);

	
	

}

function gallery(){
	
	var gallery = document.getElementsByClassName("gallery");
	var gimg_holder = document.getElementsByClassName("gimg_holder");
	var gallery_pic = document.getElementsByClassName("gallery_pic");
	
	var screen_width = window.innerWidth;
	var screen_height = window.innerHeight;
	
	if (screen_height <= 600){
		screen_height = 600;
	}

	
	gallery[0].style.height = 600 + "px";

	var gallery_width = 0;

	for (var i = 0; i < gallery_pic.length; i++) {
		gallery_width += gallery_pic[i].clientWidth;
	}

	gimg_holder[0].style.width = gallery_width + gallery_pic[0].clientWidth * 3 + "px";
	gimg_holder[0].style.height = 600 + "px";
	
	

}

function self_introduction(){
	var self_introduction = document.getElementsByClassName("self_introduction");
	var self_pic_holder = document.getElementsByClassName("self_pic_holder");
	var short_info = document.getElementsByClassName("short_info");
	var name_and_info = document.getElementsByClassName("name_and_info");
	
	
	var screen_width = window.innerWidth;
	var screen_height = window.innerHeight;

	if (screen_height <= 900){
		screen_height = 900;
	}


	if (screen_width >= 960){

		


		self_introduction[0].style.height = screen_height + "px";

		self_pic_holder[0].style.width = screen_width / 2 + "px";
		self_pic_holder[0].style.height = screen_height + "px";
		short_info[0].style.width = screen_width / 2 + "px";
		short_info[0].style.top = 0 + "px";
		name_and_info[0].style.paddingLeft = short_info[0].clientWidth * 1 / 5 + "px";
		name_and_info[0].style.paddingRight = short_info[0].clientWidth * 1 / 10 + "px";
		short_info[0].style.paddingTop = 0;
		short_info[0].style.paddingTop = (screen_height - short_info[0].clientHeight + 50) / 2 + "px";
	}

	else if (screen_width >= 510 && screen_width < 960){

		short_info[0].style.width = screen_width + "px";
		short_info[0].style.top = self_pic_holder[0].clientHeight + "px";
		self_pic_holder[0].style.width = screen_width + "px";
		self_pic_holder[0].style.height = "auto";
		name_and_info[0].style.paddingLeft = short_info[0].clientWidth * 1 / 5 + "px";
		name_and_info[0].style.paddingRight = short_info[0].clientWidth * 1 / 5 + "px";
		short_info[0].style.paddingTop = 50 + "px";

		self_introduction[0].style.height = short_info[0].clientHeight + self_pic_holder[0].clientHeight + "px";
	}

	else if (screen_width < 510){

		short_info[0].style.width = screen_width + "px";
		short_info[0].style.top = self_pic_holder[0].clientHeight + "px";
		self_pic_holder[0].style.width = screen_width + "px";
		self_pic_holder[0].style.height = "auto";
		name_and_info[0].style.paddingLeft = short_info[0].clientWidth * 1 / 8 + "px";
		name_and_info[0].style.paddingRight = short_info[0].clientWidth * 1 / 8 + "px";
		short_info[0].style.paddingTop = 50 + "px";

		self_introduction[0].style.height = short_info[0].clientHeight + self_pic_holder[0].clientHeight + "px";
	}

}




function footer_page(){
	var contact_us = document.getElementById("contact_us");
	var email_section = document.getElementsByClassName("email_section");
	var footer_logo = document.getElementsByClassName("footer_logo");
	var contact_input = document.getElementById("contact_input");
	var input_submit_btn = document.getElementsByClassName("input_submit_btn");
	
	var screen_width = window.innerWidth;
	var screen_height = window.innerHeight;
	
	contact_input.style.width = 230 + "px";
	
	
	if (screen_width >= 960){
		
		//footer
		email_section[0].style.width = screen_width * 2 / 7 + "px";
		// contact_us.style.height = email_section[0].clientHeight + "px";
		email_section[0].style.left = screen_width / 2 + "px";
		footer_logo[0].style.left = screen_width / 5 + "px";
		footer_logo[0].style.width = screen_width * 1 / 5 + "px";
		footer_logo[0].style.top = (email_section[0].clientHeight - footer_logo[0].clientHeight) / 2 + "px";

		contact_input.style.width = 230 + "px";
		input_submit_btn[0].style.left = 240 + "px";
		
		
	}

	else if (screen_width >= 510 && screen_width < 960){
		
		//footer
		email_section[0].style.width = screen_width * 3 / 5 + "px";
		// contact_us.style.height = email_section[0].clientHeight + "px";
		email_section[0].style.left = screen_width / 5 + "px";

		if (screen_width * 3 / 5 <= contact_input.clientWidth + input_submit_btn[0].clientWidth){
			contact_input.style.width = screen_width * 3 / 5 - input_submit_btn[0].clientWidth - 30 + "px";

		}
		input_submit_btn[0].style.left = contact_input.clientWidth + "px";


	}

	else if (screen_width < 510){
		
		//footer
		email_section[0].style.width = screen_width * 3 / 5 + "px";
		// contact_us.style.height = email_section[0].clientHeight + "px";
		email_section[0].style.left = screen_width / 5 + "px";

		if (screen_width * 3 / 5 <= contact_input.clientWidth + input_submit_btn[0].clientWidth){
			contact_input.style.width = screen_width * 3 / 5 - input_submit_btn[0].clientWidth - 30 + "px";

		}
		input_submit_btn[0].style.left = contact_input.clientWidth + "px";


	}

	
	
	
	
	
}

function display() {
	var w = window.innerWidth;
	var nav_display = document.getElementById("nav_bar");

	if (w >= 960) {
		nav_display.style.display = "block";
	}
	else {
		nav_display.style.display = "none";
	}
}	


