/**
 * 
 * @authors Arafat
 * @date    2017-09-26 15:00:00
 * @version v1.0.0
 */

 

// $("body").on("touchstart", function(e) {

// 　　e.preventDefault();
// 　　startX = e.originalEvent.changedTouches[0].pageX;

// });

// $("body").on("touchmove", function(e) {

//     e.preventDefault();
//     moveEndX = e.originalEvent.changedTouches[0].pageX;
//     X = moveEndX - startX;
//     if ( X > 0 ) {

//         console.log("to left!")

//     }
//     else if ( X < 0 ) {

//     }

// });

// $("body").on("touchend", function(e) {

// 　　e.preventDefault();

// });

 
$('.shareBtn').on("touchend",function(){
    $('.shareDiv').fadeIn(300);
});

$('.shareDiv').on("touchend",function(){
    $('.shareDiv').fadeOut(300);
});

$('.replayBtn').on("touchend",function(){
	window.location.href = window.location.href;
});


var nowNum = 1;
var score = 0;
var optionFlag = 1;
var wrongNum = 0;
$('.option').on("click",function(){

	if (optionFlag==0) {
		return;
	}

	optionFlag = 0;

	var thisId = $(this).data("id");
	var RightId = $(this).parent().data("id");

	if (thisId !== RightId) {

		heroAudio[nowNum-1].stop();
		wrongAudio[wrongNum].play();
		wrongNum = wrongNum+1;
		
		$(this).find('.result').addClass("wrong");



		setTimeout(function(){

			$('.test').eq(nowNum-1).fadeOut(1000);
			nowNum = nowNum+1;
			nextQ(nowNum);//下一题
			console.log("回答错误！");

		},1500);


	}else{

		$(this).find('.result').addClass("correct");

		heroAudio[nowNum-1].stop();
		rightAudio[score].play();

		setTimeout(function(){

			$('.test').eq(nowNum-1).fadeOut(1000);

			score = score+1;

			nowNum = nowNum+1;

			nextQ(nowNum);//下一题

		},1500);

		console.log("回答正确！");
		console.log("得分："+score);
	
	}


	

});


function nextQ(data){

	$('.test').eq(data-1).show().addClass("fadeIn animated0");
	$('.text').eq(data-1).show().addClass("fadeIn animated0");

	$('.test').eq(data-1).find('.option').show().addClass("bounceInUp animated1");

	optionFlag=1;

	if(data>6){

		$('.resultCover').fadeIn(500);
		$('.page2').fadeOut(1000);


		$('.last').addClass("result"+score);
		$('.saveImg')[0].src = "images/saveImg-"+score+".jpg";

		
		if (score>4) {
			prizeTime = 5;
			$(".coupon").addClass("coupon1 pulse");
		}else if (score>2) {
			prizeTime = 3;
			$(".coupon").addClass("coupon2 pulse");
		}else{
			prizeTime = 1;
			$(".coupon").addClass("coupon3 pulse");
		}


		setTimeout(function(){

			$('.resultCover').fadeOut(500);
			$('.page3').show().addClass("fadeIn animated0");
			$('.last').show().addClass("fadeIn animated0");
			$('.lastHero').addClass("question"+Math.floor(Math.random()*25+1)).addClass("fadeInUp animated2");

		},1500);

		switch(score)
		{
		case 0:
		  shareTitle = '【倔强青铜】王者农药·台词大考验';
		  shareDesc = '我还是先去下载游戏吧...';
		  sharethis();
		  break;
		case 1:
		  shareTitle = '【秩序白银】王者农药·台词大考验';
		  shareDesc = '那道题我一定是蒙对的...';
		  sharethis();
		  break;
		case 2:
		  shareTitle = '【荣耀黄金】王者农药·台词大考验';
		  shareDesc = '感觉小学生都能超过我...';
		  sharethis();
		  break;
		case 3:
		  shareTitle = '【尊贵铂金】王者农药·台词大考验';
		  shareDesc = '噢耶！跳出鱼塘分段！';
		  sharethis();
		  break;
		case 4:
		  shareTitle = '【永恒钻石】王者农药·台词大考验';
		  shareDesc = '峡谷的佼佼者，队友的定心丸！';
		  sharethis();
		  break;
		case 5:
		  shareTitle = '【至尊星耀】王者农药·台词大考验';
		  shareDesc = '我离最强王者只有一步之遥！';
		  sharethis();
		  break;
		case 6:
		  shareTitle = '【最强王者】王者农药·台词大考验';
		  shareDesc = '天底下，还有什么题能考倒我？';
		  sharethis();
		  break;
		}
		return

	}

	heroAudio[data-2].stop();
	heroAudio[data-1].play();

	$('.testprs').attr("class","testprs testprs"+data);




}


var bank = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

var choiceBank = [];

var questionBank = [];
var heroAudio =[] ;
var rightAudio =[] ;
var wrongAudio =[] ;

for (var i = 0; i < 6; i++) {
	var thisNum = Math.floor(Math.random()*bank.length);
	questionBank.push(bank[thisNum]);
	$('.test').eq(i).addClass('test'+bank[thisNum]).data("id",bank[thisNum]);//给当前题目一个正确选项id
	$('.text').eq(i).addClass('text'+bank[thisNum]);
	$('.heroAudio').eq(i)[0].src="audio/hero-"+bank[thisNum]+".mp3";

	heroAudio[i] = new Howl({
	    src: ['audio/hero-'+bank[thisNum]+'.mp3'],
	    loop: false
	});

	heroAudio[i].play();
	heroAudio[i].stop();

	var j = i+1;
	rightAudio[i] = new Howl({
	    src: ['audio/1-'+j+'.mp3'],
	    loop: false
	});
	rightAudio[i].play();
	rightAudio[i].stop();

	wrongAudio[i] = new Howl({
	    src: ['audio/2-'+j+'.mp3'],
	    loop: false
	});
	wrongAudio[i].play();
	wrongAudio[i].stop();

	bank.splice(thisNum, 1);



};

for (var i = 0; i < 18; i++) {
	var thisNum = Math.floor(Math.random()*bank.length);
	choiceBank.push(bank[thisNum]);
	bank.splice(thisNum, 1);
};

for (var i = 0; i < 6; i++) {
	var numBank = [0,1,2,3];

	var thisNum = Math.floor(Math.random()*numBank.length);
	$('.option').eq(numBank[thisNum]+i*4).data("id",questionBank[i]).addClass("question"+questionBank[i]);
	$('.option .name').eq(numBank[thisNum]+i*4).addClass("name"+questionBank[i]);
	numBank.splice(thisNum, 1);

	thisNum = Math.floor(Math.random()*numBank.length);
	$('.option').eq(numBank[thisNum]+i*4).data("id",choiceBank[i]).addClass("question"+choiceBank[i*3]);
	$('.option .name').eq(numBank[thisNum]+i*4).addClass("name"+choiceBank[i*3]);
	numBank.splice(thisNum, 1);

	thisNum = Math.floor(Math.random()*numBank.length);
	$('.option').eq(numBank[thisNum]+i*4).data("id",choiceBank[i+7]).addClass("question"+choiceBank[i*3+1]);
	$('.option .name').eq(numBank[thisNum]+i*4).addClass("name"+choiceBank[i*3+1]);
	// console.log($('.option').eq(numBank[thisNum]+i*3));
	numBank.splice(thisNum, 1);

	thisNum = Math.floor(Math.random()*numBank.length);
	$('.option').eq(numBank[thisNum]+i*4).data("id",choiceBank[i+8]).addClass("question"+choiceBank[i*3+2]);
	$('.option .name').eq(numBank[thisNum]+i*4).addClass("name"+choiceBank[i*3+2]);
	// console.log($('.option').eq(numBank[thisNum]+i*3));
	numBank.splice(thisNum, 1);
};


// 点击开始按钮，进入答题部分，出现第一道题
var startFlag = 1;
$("#startBtn").on("click",function(){
	if(startFlag==1){
		// setTimeout(function(){
			$('.page1').fadeOut(1000);
			$('.page2').show().addClass("fadeIn animated0");
        	$('.test').eq(0).show().addClass("fadeIn animated1");
	        $('.page2 .light').addClass("bounceInDown animated1");
	        
	        $('.test .num').eq(0).show().addClass("fadeIn animated1");

	        setTimeout(function(){
	        	$('.page2 .hero3').show().addClass("fadeInUp animated1");
	        	$('.title').show().addClass("fadeIn animated1");
	       		$('.test .text').eq(0).show().addClass("fadeIn animated1");
		        heroAudio[0].play();
		        heroAudio[0].fade(0.8, 1, 1000);
		        $('.test').eq(0).find('.option').show().addClass("bounceInUp animated1");

	        },800);
	    // },3000);
	    startFlag=0;
	}
});


$(".repeat").on("click",function(){
	// console.log("dataid:"+$(this).parent().data("id"));
	heroAudio[nowNum-1].stop();
	heroAudio[nowNum-1].play();
    heroAudio[nowNum-1].fade(0.8, 1, 1000);	
});


$(".light").on("click",function(){
	$(".light").removeClass("lightFlash");
	$(".rules").fadeIn(500);
    welcome.play();
});

$(".goon").on("click",function(){

	$(".rules").fadeOut(500);

});


/*音乐*/
$('.musicinfo').bind('touchend',function(){
    if($('.musicinfo').hasClass('roate')){
        musicStop('bgm');
        $('.musicinfo').removeClass('roate');
    }else {
        audioAutoPlay('bgm');
        $('.musicinfo').addClass('roate');
    }
});




$(".coupon").on("click",function(){
	$(".prize").fadeIn(500);
});



var prizeTime = 1;
// var prizeLink = ['http://quan.suning.com/lqzx_recommend.do?activityId=201710310001763451&activitySecretKey=YGOhONXZFDmwvNVp2RTQpPaS','http://quan.suning.com/lqzx_recommend.do?activityId=201710310001763445&activitySecretKey=EjgSDAyjq702oZdU4vMv4Ny9','http://quan.suning.com/lqzx_recommend.do?activityId=201710310001763452&activitySecretKey=Jp5rixKqCcN3VnBB1A6lAWFi','http://quan.suning.com/lqzx_recommend.do?activityId=201710310001763452&activitySecretKey=Jp5rixKqCcN3VnBB1A6lAWFi'];

function getPrize(){
	$(".reprizeBtn").fadeOut(500);
	$(".prizeBtn").fadeOut(500);
	$(".shiwuBtn").fadeOut(500);
	$(".prizeText").fadeOut(500);
	$(".omingwen").attr("class","omingwen").addClass("mingwenRotate");
	prizeBgm.play();
	// var prizeNum = Math.floor(Math.random()*4+1);
	// prizeTime = prizeTime -1;
	// console.log("prizeNum"+prizeNum);

	setTimeout(function(){
		$(".omingwen").addClass("mwshiwu").on("click",function(){//实物链接
			window.location.href = 'https://cuxiao.m.suning.com/wapdn0005.html';
		});
		
		setTimeout(function(){
			// $(".prizeText").attr("class","prizeText").addClass("prizeText"+prizeNum).fadeIn(1000);
			// $(".prizeBtn").fadeIn(1000).on("click",function(){
			// 	window.location.href = prizeLink[prizeNum-1];
			// });
			// $(".shiwuBtn").fadeIn(1000).on("click",function(){
			// 	window.location.href = 'http://product.suning.com/0000000000/616038507.html';
			// });

			for (prizeTime; prizeTime > 0; prizeTime--) {
				$(".mingwen"+prizeTime).show().addClass("fadeIn animated1");
			};

			if (prizeTime<1) {
				$(".prizemore").fadeIn(1000).on("click",function(){
				window.location.href = 'https://list.suning.com/0-157162-0-0-1.html#second-filter';
			});
			}else{
				// $(".reprizeBtn").fadeIn(1000);
			}
			$(".prizeText").fadeIn(500);
		},2000);
		
	},4000);
	
}

$(".reprizeBtn").on("click",function(){
	getPrize();
});

$(".coupon").on("click",function(){
	$(".prize").fadeIn(1000);
	if (prizeTime>0) {
		getPrize();
	};
});


$(".closeBtn").on("click",function(){
	$(".prize").fadeOut(500);
});



$(".mingwen1").on("click",function(){//1000元优惠券链接
	window.location.href = 'http://quan.suning.com/lqzx_recommend.do?activityId=201710310001763451&activitySecretKey=YGOhONXZFDmwvNVp2RTQpPaS';
});
$(".mingwen2").on("click",function(){//500元优惠券链接
	window.location.href = 'http://quan.suning.com/lqzx_recommend.do?activityId=201711070001792297&activitySecretKey=7Lwl5ecaVcL4c6qlO73stWus';
});
$(".mingwen3").on("click",function(){//200元优惠券链接
	window.location.href = 'http://quan.suning.com/lqzx_recommend.do?activityId=201711070001793812&activitySecretKey=n1uH9agfWDKS5feVdblVwo9V';
});
$(".mingwen4").on("click",function(){//100元优惠券链接
	window.location.href = 'http://quan.suning.com/lqzx_recommend.do?activityId=201711070001793813&activitySecretKey=GBmfLZEYmiXiPmECbB3hRFPZ';
});
$(".mingwen5").on("click",function(){//20元优惠券链接
	window.location.href = 'http://quan.suning.com/lqzx_recommend.do?activityId=201711070001793814&activitySecretKey=jCoPpsiDxLvGa9ZoiHMt5nVF';
});

