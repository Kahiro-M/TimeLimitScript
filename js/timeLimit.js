 function isOverTimeLimit(){
	// アプリ起動時間と有効期限の判定をする
	var todayObj = new Date();  // new Date('yyyy-mm-ddThh:mm:ss');
	var today   = todayObj.getTime();  // 1970/1/1午前0時からの現在までのミリ秒

	// new Date('2019-09-05T15:57:00');のように0埋めが必要
	var endObj   = new Date('2019-09-30T23:59:59');  // 終了日の指定
	var end   = endObj.getTime();  // 1970/1/1午前0時からの終了日までのミリ秒

	if(today <= end){
		// 有効期限の範囲内
		alert("今日は有効期限より前です。");
	}
	else{
		// 有効期限切れ
		alert("今日は有効期限より後です。\n有効期限は "+endObj.getFullYear()+"/"+(endObj.getMonth()+1)+"/"+endObj.getDate()+" です。");
		// ウィンドウを閉じる
		window.open('','_self').close();
		window.open('about:blank','_self').close();
	}

}