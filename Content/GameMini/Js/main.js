function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

/**
 * Xu ly khi click vao nut mini game
 * @param {Object} obj: Doi tuong duoc click
 * @param {Object} ulobj: Doi tuong hien thi
 */
function OpenMiniGame(obj, ulobj) {
    if ($(obj).hasClass("expand-game")) {
        $(obj).removeClass("expand-game");

        $(ulobj).slideUp("fast", function () {
            $(ulobj).removeClass("expand-icon");
        });
    } else {
        $(obj).addClass("expand-game");
        $(ulobj).slideDown("fast", function () {
            $(ulobj).addClass("expand-icon");
        });
    }

    return false;
}

function ShowBoxMenuGame() {
    $('#menuminigame').show();

    $("#menuminigame .mini-game-icons").css("display", "none");
    $("#menuminigame .mini-game-button a").removeClass("expand-game");
}

var MinigameTaiXiu = {
    MiniGameContainerId: "miniGameTaiXiuContainer",
    MiniGameId: 415,
    IsOpened: false,
    IsContruction: false,
    MaxRowLength: 13,
    GetMiniGameId: function () { return "#" + this.MiniGameContainerId; },
    GetClockId: function () { return "#clock-" + this.MiniGameId; },
    OpenGame: function () {
        var containerId = this.GetMiniGameId();
        if (!this.IsContruction) {
            this.ShowLoading();
            this.Connect();
        }
        if (!this.IsOpened) {
            this.IsContruction = true;
            $(containerId).draggable();
        }
        if (this.IsOpened == false) {
            this.IsOpened = true;
            
			if(global.miniGameScaleMin) {
				$(containerId).css({visibility: 'visible', opacity: 0}).velocity({
					opacity: 1,
					scale: global.miniGameScaleMin,
					rotateZ: global.rotateTransform
				}, {
					duration: 1000,
					easing: 'ease-out'
				});
			}
			else {
				$(containerId).css({visibility: 'visible', left: '10%', top: '150px', opacity: 0}).velocity({
					left: '15%',
					opacity: 1
				}, {
					duration: 1000,
					easing: 'ease-out'
				});
			}
			
            this.HideLoading();
        }
    },
    CloseGame: function () {
        var containerId = this.GetMiniGameId();
        if (this.IsOpened) {
            this.IsOpened = false;

            $(containerId).css({ visibility: 'hidden' });
            //this.Timer();
        }
    },
    Timer: function (secondsGame) {
        var clockId = this.GetClockId();
        $(clockId).show();
        if (secondsGame == null || secondsGame == "undefined") {
            secondsGame = 0;
        }

        var minutes = parseInt(secondsGame / 60) % 60;
        var seconds = secondsGame % 60;
        var result = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        $(clockId).html(result);
        if (secondsGame <= 0) {
            setTimeout(function () { $(clockId).hide(); }, 1000);
        }
    },
    ShowLoading: function () {
        Loading.Show();
    },
    HideLoading: function () {
        Loading.Hide();
    },
    Connect: function () {
        MiniGameHelper.taiXiu.connect();
    }
};

var MinigameXeng = {
    MiniGameContainerId: "miniGameXengContainer",
    MiniGameId: 402,
    IsOpened: false,
    IsContruction: false,
    MaxRowLength: 13,
    GetMiniGameId: function () { return "#" + this.MiniGameContainerId; },
    GetClockId: function () { return "#clock-" + this.MiniGameId; },
    OpenGame: function () {
        var containerId = this.GetMiniGameId();
        if (!this.IsContruction) {
            this.ShowLoading();
            this.Connect();
        }
        if (!this.IsOpened) {
            this.IsContruction = true;
            $(containerId).draggable();
        }
        if (this.IsOpened == false) {
            this.IsOpened = true;
            
			if(global.miniGameScaleMin) {
				$(containerId).css({visibility: 'visible', opacity: 0}).velocity({
					opacity: 1,
					scale: global.miniGameScaleMin
				}, {
					duration: 1000,
					easing: 'ease-out'
				});
			}
			else {
				$(containerId).css({visibility: 'visible', left: '10%', top: Math.ceil(Math.random() * (55 - 25 + 1) + 25) + 'px', opacity: 0}).velocity({
					left: '5%',
					opacity: 1
				}, {
					duration: 1000,
					easing: 'ease-out'
				});
			}
			
            this.HideLoading();
        }
    },
    CloseGame: function () {
        var containerId = this.GetMiniGameId();
        if (this.IsOpened) {
            this.IsOpened = false;

            $(containerId).css({ visibility: 'hidden' });
            //this.Timer();
        }
    },
    Timer: function (secondsGame) {
        var clockId = this.GetClockId();
        $(clockId).show();
        if (secondsGame == null || secondsGame == "undefined") {
            secondsGame = 0;
        }

        var minutes = parseInt(secondsGame / 60) % 60;
        var seconds = secondsGame % 60;
        var result = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        $(clockId).html(result);
        if (secondsGame <= 0) {
            setTimeout(function () { $(clockId).hide(); }, 1000);
        }
    },
    ShowLoading: function () {
        Loading.Show();
    },
    HideLoading: function () {
        Loading.Hide();
    },
    Connect: function () {
        MiniGameHelper.xeng.connect();
    }
};

var MinigameXocDia = {
    MiniGameContainerId: "miniGameXocDiaContainer",
    MiniGameId: 401,
    IsOpened: false,
    IsContruction: false,
    MaxRowLength: 13,
    GetMiniGameId: function () { return "#" + this.MiniGameContainerId; },
    GetClockId: function () { return "#clock-" + this.MiniGameId; },
    OpenGame: function () {
        var containerId = this.GetMiniGameId();
        if (!this.IsContruction) {

            this.IsContruction = true;
            $(containerId).draggable();
            this.Connect();
        }
        if (this.IsOpened == false) {
            this.IsOpened = true;
            $(containerId).velocity('transition.slideRightBigIn');



        }
    },
    CloseGame: function () {
        var containerId = this.GetMiniGameId();
        if (this.IsOpened) {
            this.IsOpened = false;

            $(containerId).hide();
            //this.Timer();
        }
    },
    Timer: function (secondsGame) {
        var clockId = this.GetClockId();
        $(clockId).show();
        if (secondsGame == null || secondsGame == "undefined") {
            secondsGame = 0;
        }

        var minutes = parseInt(secondsGame / 60) % 60;
        var seconds = secondsGame % 60;
        var result = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        $(clockId).html(result);
        if (secondsGame <= 0) {
            setTimeout(function () { $(clockId).hide(); }, 1000);
        }
    },
    Connect: function () {
        MiniGameHelper.connectXocDiaMini();
    }
};


var MinigameBauCua = {
    MiniGameContainerId: "miniGameBauCuaContainer",
    MiniGameId: 403,
    IsOpened: false,
    IsContruction: false,
    MaxRowLength: 13,
    GetMiniGameId: function () { return "#" + this.MiniGameContainerId; },
    GetClockId: function () { return "#clock-" + this.MiniGameId; },
    OpenGame: function () {
        var containerId = this.GetMiniGameId();
        if (!this.IsContruction) {

            this.IsContruction = true;
            $(containerId).draggable();
            this.Connect();
        }
        if (this.IsOpened == false) {
            this.IsOpened = true;
            $(containerId).velocity('transition.slideRightBigIn');



        }
    },
    CloseGame: function () {
        var containerId = this.GetMiniGameId();
        if (this.IsOpened) {
            this.IsOpened = false;

            $(containerId).hide();
            //this.Timer();
        }
    },
    Timer: function (secondsGame) {
        var clockId = this.GetClockId();
        $(clockId).show();
        if (secondsGame == null || secondsGame == "undefined") {
            secondsGame = 0;
        }

        var minutes = parseInt(secondsGame / 60) % 60;
        var seconds = secondsGame % 60;
        var result = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        $(clockId).html(result);
        if (secondsGame <= 0) {
            setTimeout(function () { $(clockId).hide(); }, 1000);
        }
    },
    Connect: function () {
        MiniGameHelper.connectBauCuaMini();        
    }
};

var MinigamePenalty = {
    MiniGameContainerId: "miniGamePenaltyContainer",
    MiniGameId: 404,
    IsOpened: false,
    IsContruction: false,
    MaxRowLength: 13,
    GetMiniGameId: function () { return "#" + this.MiniGameContainerId; },
    GetClockId: function () { return "#clock-" + this.MiniGameId; },
	OpenGame: function () {
		var containerId = this.GetMiniGameId();
        if (!this.IsContruction) {
            this.ShowLoading();
            this.Connect();
        }
        if (!this.IsOpened) {
            this.IsContruction = true;
            $(containerId).draggable();
        }
        if (this.IsOpened == false) {
            this.IsOpened = true;
            //$(containerId).velocity('transition.slideRightBigIn');
            if(global.miniGameScaleMin) {
				$(containerId).css({visibility: 'visible', opacity: 0}).velocity({
					opacity: 1,
					scale: global.miniGameScaleMin
				}, {
					duration: 1000,
					easing: 'ease-out'
				});
			}
			else {
				$(containerId).css({visibility: 'visible', left: '10%', top: Math.ceil(Math.random() * (55 - 25 + 1) + 25) + 'px', opacity: 0}).velocity({
					left: '5%',
					opacity: 1
				}, {
					duration: 1000,
					easing: 'ease-out'
				});
			}
			
            this.HideLoading();
        }
    },
    CloseGame: function () {
        var containerId = this.GetMiniGameId();
        if (this.IsOpened) {
            this.IsOpened = false;

            $(containerId).css({visibility: 'hidden'});
            //this.Timer();
        }
    },
    Timer: function (secondsGame) {
        var clockId = this.GetClockId();
        $(clockId).show();
        if (secondsGame == null || secondsGame == "undefined") {
            secondsGame = 0;
        }

        var minutes = parseInt(secondsGame / 60) % 60;
        var seconds = secondsGame % 60;
        var result = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        $(clockId).html(result);
        if (secondsGame <= 0) {
            setTimeout(function () { $(clockId).hide(); }, 1000);
        }
    },
    ShowLoading: function () {
        Loading.Show();
    },
    HideLoading: function () {
        Loading.Hide();
    },
    Connect: function () {
        MiniGameHelper.penalty.connect();
    }
};

var MiniFortune88 = {
    MiniGameContainerId: "miniGameFortunes88Container",
    MiniGameId: 406,
    IsOpened: false,
    IsContruction: false,
    MaxRowLength: 13,
    GetMiniGameId: function () { return "#" + this.MiniGameContainerId; },
    GetClockId: function () { return "#clock-" + this.MiniGameId; },
    OpenGame: function () {
        var containerId = this.GetMiniGameId();
        if (!this.IsContruction) {
            this.ShowLoading();
            this.Connect();
        }
        if (!this.IsOpened) {
            this.IsContruction = true;
            $(containerId).draggable();
        }
        if (this.IsOpened == false) {
            this.IsOpened = true;
			
			if(global.miniGameScaleMin) {
				$(containerId).css({visibility: 'visible', opacity: 0}).velocity({
					opacity: 1,
					scale: global.miniGameScaleMin,
					rotateZ: global.rotateTransform
				}, {
					duration: 1000,
					easing: 'ease-out'
				});
			}
			else {
				$(containerId).css({visibility: 'visible', left: '10%', top: Math.ceil(Math.random() * (55 - 25 + 1) + 25) + 'px', opacity: 0}).velocity({
					left: '5%',
					opacity: 1
				}, {
					duration: 1000,
					easing: 'ease-out'
				});
			}
			
            this.HideLoading();
        }
    },
    CloseGame: function () {
        var containerId = this.GetMiniGameId();
        if (this.IsOpened) {
            this.IsOpened = false;

            $(containerId).css({ visibility: 'hidden' });
            //this.Timer();
        }
    },
    Timer: function (secondsGame) {
        var clockId = this.GetClockId();
        $(clockId).show();
        if (secondsGame == null || secondsGame == "undefined") {
            secondsGame = 0;
        }

        var minutes = parseInt(secondsGame / 60) % 60;
        var seconds = secondsGame % 60;
        var result = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        $(clockId).html(result);
        if (secondsGame <= 0) {
            setTimeout(function () { $(clockId).hide(); }, 1000);
        }
    },
    ShowLoading: function () {
        Loading.Show();
    },
    HideLoading: function () {
        Loading.Hide();
    },
    Connect: function () {
        MiniGameHelper.fortunes88.connect();
    }
};

var MiniLuckySlot = {
    MiniGameContainerId: "miniGameLuckySlotContainer",
    MiniGameId: 408,
    IsOpened: false,
    IsContruction: false,
    MaxRowLength: 13,
    GetMiniGameId: function () { return "#" + this.MiniGameContainerId; },
    GetClockId: function () { return "#clock-" + this.MiniGameId; },
    OpenGame: function () {
        var containerId = this.GetMiniGameId();
        if (!this.IsContruction) {
            this.ShowLoading();
            this.Connect();
        }
        if (!this.IsOpened) {
            this.IsContruction = true;
            $(containerId).draggable();
        }
        if (this.IsOpened == false) {
            this.IsOpened = true;
			
			if(global.miniGameScaleMin) {
				$(containerId).css({visibility: 'visible', opacity: 0}).velocity({
					opacity: 1,
					scale: global.miniGameScaleMin,
					rotateZ: global.rotateTransform
				}, {
					duration: 1000,
					easing: 'ease-out'
				});
			}
			else {
				$(containerId).css({visibility: 'visible', left: '10%', top: Math.ceil(Math.random() * (55 - 25 + 1) + 25) + 'px', opacity: 0}).velocity({
					left: '5%',
					opacity: 1
				}, {
					duration: 1000,
					easing: 'ease-out'
				});
			}
			
            this.HideLoading();
        }
    },
    CloseGame: function () {
        var containerId = this.GetMiniGameId();
        if (this.IsOpened) {
            this.IsOpened = false;

            $(containerId).css({ visibility: 'hidden' });
            //this.Timer();
        }
    },
    Timer: function (secondsGame) {
        var clockId = this.GetClockId();
        $(clockId).show();
        if (secondsGame == null || secondsGame == "undefined") {
            secondsGame = 0;
        }

        var minutes = parseInt(secondsGame / 60) % 60;
        var seconds = secondsGame % 60;
        var result = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        $(clockId).html(result);
        if (secondsGame <= 0) {
            setTimeout(function () { $(clockId).hide(); }, 1000);
        }
    },
    ShowLoading: function () {
        Loading.Show();
    },
    HideLoading: function () {
        Loading.Hide();
    },
    Connect: function () {
        MiniGameHelper.luckyslot.connect();
    }
};
