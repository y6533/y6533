var jjang = (function() {
	var language="kor";
	var addr=location.href;
	var getNameFromPath = function(strFilepath) {
		var objRE = new RegExp(/([^\/\\]+)$/);
		var strName = objRE.exec(strFilepath);
		if (strName == null) {
		   return null;
		}
		else {
			return strName[0].split(".")[0];
		}
	}
	var getParameter = function (strParamName){
		 var arrResult = null;
		 if(strParamName){
			 arrResult = location.search.match(new RegExp("[&?]" + strParamName + "=(.*?)(&|$)"));
		 }
		 return arrResult && arrResult[1] ? arrResult[1] : null;
	}
	var mod = function (a,b){
		if(a%b < 0) {
			return b+a%b;
		} else {
			return a%b;
		}
	}
	var addZero = function (num) {
		if(num<10){
			return "0"+num;
		} else {
			return num;
		}
	}
	var gnb = function() {
		TweenMax.set($("#gnb .cover"),{autoAlpha:0});
		$(".btnAll").on("click",function(e){
			TweenMax.killAll();
			if(!$(this).hasClass("on")){
				$(this).addClass("on");
				$("#gnb").addClass("on");
				$(".logo").addClass("on");
				$(".sns").addClass("on");
				TweenMax.staggerTo($("#gnb > ul > li"),1,{left:0,ease:Quint.easeOut},0.15);
				TweenMax.to($("#gnb .cover"),0.5,{autoAlpha:1});
			} else {
				$(this).removeClass("on");
				$(".logo").removeClass("on");
				$(".sns").removeClass("on");
				TweenMax.staggerTo($("#gnb > ul > li"),1,{left:"100%",ease:Quint.easeOut},0.15,function() {$("#gnb").removeClass("on");});
				TweenMax.to($("#gnb .cover"),0.5,{autoAlpha:0});
			}
			return false;
		})
	}
	var mainVisual = function() {
		var mainVisual = new Swiper ("#mainVisual .visualRolling .mask", {
			loop: true,
			speed:1000,
			effect:"fade",
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: "#mainVisual .btnNext",
				prevEl: "#mainVisual .btnPrev",
			}
		});
	}

	var main = function() {
		$("#main").fullpage({
			navigation: false,
			navigationTooltips: ["01","02","03","04"],
			showActiveTooltip: true,
		});		
	}
	var about = function() {
		$("#about").fullpage({
			navigation: false,
			navigationTooltips: ["01","02","03","04"],
			showActiveTooltip: true,
			onLeave: function(anchorLink, index){
				var loadedSection = $(this);
				if(index == 2){
					$(".btnAll").addClass("blue");
					$(".sns").addClass("blue");
				} else {
					$(".btnAll").removeClass("blue");
					$(".sns").removeClass("blue");
				}
			}
		});		
	}

	var portfolio = function() {
		TweenMax.staggerTo($("#portfolio .snb li"),1,{marginTop:0,delay:0.25,ease:Back.easeOut},0.25)
	}
	var visualDesign = function() {
		TweenMax.staggerTo($("#visualDesign .snb li"),1,{marginTop:0,delay:0.25,ease:Back.easeOut},0.25)
	}

	var portfolioSlide = function() {
		var portfolioSlide = new Swiper ("#portfolio .portfolioSlide", {
			loop: true,
			speed:600,
			slidesPerView:"auto",
			centeredSlides:true,
			spaceBetween: 0,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: "#portfolio .btnNext",
				prevEl: "#portfolio .btnPrev",
			}
		});
	}
	var visualDesignSlide = function() {
		var visualDesignSlide = new Swiper ("#visualDesign02 .visualDesign .mask", {
			loop: true,
			speed:600,
			autoplay: {
				delay: 3000,
			},
			effect:"cube",
			pagination: {
				el:"#visualDesign02 .visualDesign .pager",
				clickable: true,
		        renderBullet: function (index, className) {
		        	return '<span class="' + className + '">' + '<img src="../images/main/thumb0'+(index + 1)+'.jpg">'+'</span>';
		        },
			}
		});
	}

	return {
		gnb:gnb,
		mainVisual:mainVisual,
		main:main,
		about:about,
		portfolio:portfolio,
		visualDesign:visualDesign,
		visualDesignSlide:visualDesignSlide,
	}
}());

$(function(){
	jjang.main();
	jjang.gnb();
	jjang.portfolio();
	jjang.about();
	jjang.visualDesign();
	jjang.visualDesignSlide();
})