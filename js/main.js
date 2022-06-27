// jsonファイルに記載されたアニメーションデータを変数に格納
 var animationData = {"v":"5.9.4","fr":30,"ip":0,"op":300,"w":1080,"h":1920,"nm":"コンポ 1","ddd":0,"assets":[],"layers":[],"markers":[]}
var params = {
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    // jsonファイルを読み込まずに直接アニメーションデータを読み込む
    animationData: animationData
    // path: "json/animation.json"
};


var anim = lottie.loadAnimation(params);

const playButton = document.getElementById('playBtn');

playButton.addEventListener('click', function () {

	// JS側で音源鳴らす場合
	// const music = new Audio('magic2.mp3');
	// music.play();
	
	// Audioタグ使って鳴らす場合
	var audio = document.getElementById('audioMagic');
	audio.play();
    
    // Videoの再生
    var video = document.getElementById('testVideo');
    video.play();


});