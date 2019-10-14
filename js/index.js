window.onload = function(){
	$('.right-bottom').load('./pages/home.html');
	$('.nav-menu li').on('click',function(){
		var title = $(this).text().trim();
		switch(title){
			case '首页':
				$('.right-bottom').load('./pages/home.html');
				break;
			case '栏目管理':
				$('.right-bottom').load('./pages/category.html');
				break;
			case '资讯管理':
				$('.right-bottom').load('./pages/info.html');
				break;
			case '用户管理':
				$('.right-bottom').load('./pages/user.html');
				break;
		}
	})
}