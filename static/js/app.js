function checkSize(){
	if ($("nav").css("text-align") == "right"){
		$(".phone a").removeAttr("href")
	}
};

checkSize();