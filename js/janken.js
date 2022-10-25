// jqueryの書き方
// $　ドルマークとは？　＝　jQueryを意味している
/*$(".a").on('click', function(){
    // ここにおまじないを書く
    // alert("h1がおされました！");
    $(".a").css("color", "purple");
    $(".a").fadeOut(2000);
    $(".a").fadeIn(2000);
})
*/
//じゃんけん用のSCRIPT
//1.３個のクリックイベントを作成
//2.クリックイベントごとに「なに？」と「勝ち」の乱数を生成
//3.「なに？」のIF分を3個用意["グー"、"チョキ"、"パー"]
//4.「なに？」のIF分の中に$("#pc_hands").html()を使って表示させる
//5.「勝ち」のIF分を3個用意["引き分け"、"あなたの勝ち"、"あなたの負け"]
//6.「勝ち」のIF分の中に$("#judgement").html()を使って表示させる
    
$("#gu_btn").on("click",function(){
    //「なに？」と「勝ち」の乱数をつくる１〜3
    const num = Math.ceil(Math.random() * 3);
       if(num==1){
           // $("#pc_hands").html("グー");
           $("#pc_hands").html('<img src="img/kohacu.com_003300_20210301.png">');
           $("#pc_hands").fadeIn(2000);
           $("#pc_hands").fadeOut(2000);
           // $("#judgement").html("引き分け");
           $("#judgement").html('<img src="img/aseru1.png">');
           $("#judgement").fadeIn(4000);
           $("#judgement").fadeOut(6000);
       }

       if(num==2){
           // $("#pc_hands").html("チョキ");
           $("#pc_hands").html('<img src="img/kohacu.com_003301_20210301.png">');
           $("#pc_hands").fadeIn(2000);
           $("#pc_hands").fadeOut(2000);
           // $("#judgement").html("あなたの勝ち");
           $("#judgement").html('<img src="img/iinee1.png">');
           $("#judgement").fadeIn(4000);
           $("#judgement").fadeOut(6000);
       }

       if(num==3){
           // $("#pc_hands").html("パー");
           $("#pc_hands").html('<img src="img/kohacu.com_003302_20210301.png">');
           $("#pc_hands").fadeIn(2000);
           $("#pc_hands").fadeOut(2000);
           // $("#judgement").html("あなたの負け");
           $("#judgement").html('<img src="img/gakkuri1.png">');
           $("#judgement").fadeIn(4000);
           $("#judgement").fadeOut(6000);
       }
   });
   $("#cho_btn").on("click",function(){
    //「なに？」の乱数をつくる１〜3
    const num = Math.ceil(Math.random() * 3);
       if(num==1){
           // $("#pc_hands").html("グー");
           $("#pc_hands").html('<img src="img/kohacu.com_003300_20210301.png">');
           $("#pc_hands").fadeIn(2000);
           $("#pc_hands").fadeOut(2000);
           // $("#judgement").html("あなたの負け");
           $("#judgement").html('<img src="img/gakkuri1.png">');
           $("#judgement").fadeIn(4000);
           $("#judgement").fadeOut(6000);
       }
       if(num==2){
           // $("#pc_hands").html("チョキ");
           $("#pc_hands").html('<img src="img/kohacu.com_003301_20210301.png">');
           $("#pc_hands").fadeIn(2000);
           $("#pc_hands").fadeOut(2000);
           // $("#judgement").html("引き分け");
           $("#judgement").html('<img src="img/aseru1.png">');
           $("#judgement").fadeIn(4000);
           $("#judgement").fadeOut(6000);
       }
       if(num==3){
           // $("#pc_hands").html("パー");
           $("#pc_hands").html('<img src="img/kohacu.com_003302_20210301.png">');
           $("#pc_hands").fadeIn(2000);
           $("#pc_hands").fadeOut(2000);
           // $("#judgement").html("あなたの勝ち");
           $("#judgement").html('<img src="img/iinee1.png">');
           $("#judgement").fadeIn(4000);
           $("#judgement").fadeOut(6000);
       }
   });
   $("#par_btn").on("click",function(){
    //「なに？」の乱数をつくる１〜3
    const num = Math.ceil(Math.random() * 3);
       if(num==1){
           // $("#pc_hands").html("グー");
           $("#pc_hands").html('<img src="img/kohacu.com_003300_20210301.png">');
           $("#pc_hands").fadeIn(2000);
           $("#pc_hands").fadeOut(2000);
           // $("#judgement").html("あなたの勝ち");
           $("#judgement").html('<img src="img/iinee1.png">');
           $("#judgement").fadeIn(4000);
           $("#judgement").fadeOut(6000);
       }
       if(num==2){
           // $("#pc_hands").html("チョキ");
           $("#pc_hands").html('<img src="img/kohacu.com_003301_20210301.png">');
           $("#pc_hands").fadeIn(2000);
           $("#pc_hands").fadeOut(2000);
           // $("#judgement").html("あなたの負け");
           $("#judgement").html('<img src="img/gakkuri1.png">');
           $("#judgement").fadeIn(4000);
           $("#judgement").fadeOut(6000);
       }
       if(num==3){
           // $("#pc_hands").html("パー");
           $("#pc_hands").html('<img src="img/kohacu.com_003302_20210301.png">');
           $("#pc_hands").fadeIn(2000);
           $("#pc_hands").fadeOut(2000);
           // $("#judgement").html("引き分け");
           $("#judgement").html('<img src="img/aseru1.png">');
           $("#judgement").fadeIn(4000);
           $("#judgement").fadeOut(6000);
       }
   });    
