'use strict';
var global = {
    ApiUrl: '/api',
    ApiMobileUrl: 'mobile/api'
};
var OAuthCode = { Success: 0, Failed: 1, NewAccount: 2, SMS: 3, SecureCode: 4, InactiveUser: 5 };
var TypeShowPopupLogin = "";
var methodName = {
    InviteFriend: "InviteFriend",
    ShowMyFriends: "ShowMyFriends",
    GetFriendGmail: "GetFriendGmail",
    SendListEmail: "SendListEmail",
    RemoveFriend: "RemoveFriend",
    LoadInfoUser: "LoadInfoUser",
    LoadNickNameNav: "LoadNickNameNav",
    UserChuaThamGiaBang: "UserChuaThamGiaBang",
    LoadTopDaiGia: "LoadTopDaiGia",
    EditProfile: "EditProfile",
    SavePublicProfile: "SavePublicProfile",
    ViewResultBetLucky: "ViewResultBetLucky",
    ViewPagingHistoryBet: "ViewPagingHistoryBet",
    BetLucky: "BetLucky",
    MyHistoryToday: "MyHistoryToday",
    GetUserCommentProfile: "GetUserCommentProfile",
    InserUserCommentProfile: "InserUserCommentProfile",
    RemoveUserCommentProfile: "RemoveUserCommentProfile",
    UpdateProfile: "UpdateProfile",
    UpdatePassword: "UpdatePassword",
    GetAvatarNotUseOfUser: "GetAvatarNotUseOfUser",
    SaveAvatar: "SaveAvatar",
    ActiveOTP: "ActiveOTP",
    UnActiveOTP: "UnActiveOTP",
    ResetSecureCode: "ResetSecureCode",
    CreateNewSecureCode: "CreateNewSecureCode",
    GiftSearch: "GiftSearch",
    SendGift: "SendGift",
    Inbox: "Inbox",
	CompleteTutorial: "UpdateCompleteTutorial",

    UpdateAlreadyRead: "UpdateAlreadyRead",
    DeleteMessage: "DeleteMessage",
    LoadUserInfoByPubId: "LoadUserInfoByPubId",
    NganLuongCalculateGold: "NganLuongCalculateGold",
    SendEmailFriend: "SendEmailFriend",

    //User
    CheckUserLogin: "CheckUserLogin",
	AvatarListUser: 'LoadAvatarListUser',
	
    //Jackpot2
    Jackpot2CountTicket: "Jackpot2CountTicket",
    Jackpot2StartGame: "Jackpot2StartGame",
    Jackpot2UpdateJackpotType: "Jackpot2UpdateJackpotType",
    Jackpot2OpenCard: "Jackpot2OpenCard",
    Jackpot2GetAllCoin: "Jackpot2GetAllCoin",
    Jackpot2GetAllTop: "Jackpot2GetAllTop",
	
    //BattleShip
    BSUserInfo: "BSUserInfo",
    BSUserExchangeItem: "BSUserExchangeItem",
    BSExchangeGetConfig: "BSExchangeGetConfig",
    BSExchangeUserLog: "BSExchangeUserLog",
    BSUserAttackLog: "BSUserAttackLog",
    BSUserDefenseLog: "BSUserDefenseLog",
    BSUserCollectLog: "BSUserCollectLog",
    BSGetConfig: "BSGetConfig",

    //DailyBonus
    DailyBonusGetList: "EventDailyBonusGetList",
    DailyBonusReceive: "EventDailyBonusReceive",

    //GoldenHours
    GoldenHoursUserInfo: "EventGoldenHoursUserInfo",
    GoldenHoursReceive: "EventGoldenHoursReceive",

    //Kho
    ItemUserGetInfo: "ItemUserGetInfo",
	ItemUserActiveItem: "ItemUserActiveItem",

    //DailyMission
    DailyMissionUserInfo: "EventDailyMissionUserInfo",
    DailyMissionReceive: "EventDailyMissionReceive",

    //Achievement
    AchievementUserInfo: "EventAchievementUserInfo",
    AchievementReceive: "EventAchievementReceive",
    AchievementShare: "EventAchievementShareFacebook",
    AchievementLoginRepeat: "EventAchievementLoginRepeat",
    AchievementLevelUp: "EventAchievementLevelUp",
    AchievementVipUp: "EventAchievementVipUp",
	AchievementUserInfoFillter: "EventAchievementUserInfoFillter",
	AchievementUserInfoFillterVia: "EventAchievementUserInfoFillterVia",
	AchievementFeatured: "EventAchievementFeatured",
	AchievementFeaturedVia: "EventAchievementFeaturedVia",
	AchievementSummary: "EventAchievementSummary",
	AchievementSummaryVia: "EventAchievementSummaryVia",
	AchievementTopUser: "EventAchievementTopUserSuccess",
    
    //BoxTop
    EventBoxTop: "EventBoxTop",
    TopUserCoin: "GetTopPoketVip",

    //PopupUserInfo
    PopupUserInfoLoadInfo: "LoadFullInfoUser",
    PopupUserInfoLoadInfoEmail: "LoadInfoUserEmail",
    PopupUserInfoLoadInfoPhone: "LoadInfoUserPhone",
    PopupUserInfoLoadInfoCMND: "LoadInfoUserCMND",
    PopupUserInfoUpdateEmail: "UpdateInfoUserEmail",
    PopupUserInfoUpdatePhone: "UpdateInfoUserPhone",
    PopupUserInfoUpdateCMND: "UpdateInfoUserCMND",
    PopupUserInfoUpdatePassword: "UpdateInfoChangePassord",
    PopupUserInfoLoadInfoUserViaID: "LoadInfoUserViaID",
    PopupUserAward: "UserShowAward",
    PopupUserAwardBonus: "UserShowAwardBonus",
    PopupUserInfoLoadBonusNewUser: "BonusNewUserWillAward",
	
	GetListGame: "GetListGame",
	GetInfoJackPot: "GetInfoJackPot",
	GetListBannerLobby: "GetListBannerByGameID",

    //ReachLevel
    ReachLevelUserInfo: "EventReachLevelUserInfo",
    ReachLevelReceive: "EventReachLevelReceive",
	
	//Vip
    VipReceiveBonus: "VipReceiveBonus",
    VipInfoUser: "VipInfoUser",
    VipDetail: "VipDetail",
    VipJackPot :"VipJackPotGame",
    VipTopPointMonth :"VipTopPointMonth",
    VipBonusUserPrivate :"VipBonusUserPrivate",
	
	//EventAward
	ShowListAward: "ShowListAward",
    EventAward: 'EventAward',
	EventFreeSpin: 'EventFreeSpin',
	CalendarEvent: 'CalendarEvent',
	
	//CardSpin
    CardSpinUserDetail: "CardSpinUserDetail",
    CardSpinGetItems: "CardSpinGetItems",
    CardSpinGetUserWin: "CardSpinGetUserWin",
    CardSpinGetUserLog: "CardSpinGetUserLog",
    CardSpinDoSpin: "CardSpinDoSpin",
    CardSpinGetItemRemain: "CardSpinGetItemRemain",
    CardSpinGetRemainTicket: "CardSpinGetRemainTicket",
    CardSpinCheckGameStatus: "CardSpinCheckGameStatus",
	CardSpinExportCardInMessage: "CardSpinExportCardInMessage",
	CardSpinRechargeCardInMessage: "CardSpinRechargeCardInMessage",
	
	//ShopOnline
	ShopOnlineGetInfo: "ShopOnlineGetInfo",
	ShopOnlineHistory: "ShopOnlineHistory",
	ShopOnlineBuyItem: "ShopOnlineBuyItem",
};
var CURRENT_SAO = 0;
var STYLE_POPUP = 2;
var DATE_SYSTEM;
var VQ_CONFIG;
var IS_UPDATE_PROFILE = true;
var HTML_WEB_CONFIG = {
	ButtonSupport: 1
};

var createApiRequest = function (obj) {
    return { input: JSON.stringify(obj) };
};

var showBoxLoading = function (obj) {
    var $obj = $(obj);
    if ($obj.find('.api-loading').length == 0) {
        $obj.append('<img class="api-loading" src="/Content/Theme/Default/img/ajax-loader.gif" />');
    }
};
var hideBoxLoading = function (obj) {
    var $obj = $(obj);
    $obj.find('.api-loading').remove();
};

var loadUserInfo = function () {
    Loading.Hide();
    Popup.Hide();
    GetFlashVarBanCa();
    LoadUserLogin();
};

var LoadNickNameNav = function () {
    var request = createApiRequest({
        MethodName: methodName.LoadNickNameNav
    });
    $.ajax({
        type: "POST",
        url: global.ApiUrl,
        data: request,
        dataType: "json",
        done: function () {
        },
        success: function (response) {
            if (response.Data.IsAuthenticated) {
                var textSp = '';
                textSp += '<div class="nick">';
                textSp += '<a href="' + response.Data.ProfileLink + '" title="' + response.Data.NickName + '"> ' + response.Data.NickName + '</a>';
                textSp += '</div>';
                if (response.Data.AssName != null && response.Data.AssName != "") {
                    textSp += '<div class="ass">';
                    textSp += '<a href="' + response.Data.AssLink + '" title="' + response.Data.AssName + '">' + response.Data.AssName + '</a>';
                    textSp += '</div>';
                }
                textSp += '<div class="logout">';
                textSp += '<a href="/home/logout" title="Thoát">Thoát</a>';
                textSp += '</div>';
                $(".box-nickname").html(textSp);
            }
        },
        complete: function () {
        }
    });
};

var myNumber = 4.1;

var CreatePaging = function (pageIndex, totalItem, itemInPage, countDisplayPage, fnName) {
    if (pageIndex <= 0 || totalItem <= 0 || itemInPage <= 1)
        return "";
    if (countDisplayPage == null || countDisplayPage == "" || countDisplayPage == "undefined")
        countDisplayPage = 5;
    var totalPage = Math.ceil(totalItem / itemInPage);
    if (totalItem > itemInPage && totalPage == 1)
        totalPage++;
    if (totalPage <= 1)
        return "";
    var cdp = Math.floor(countDisplayPage / 2);
    var startpage = pageIndex - cdp;
    if (startpage < 1)
        startpage = 1;
    var endpage = startpage + cdp * 2;
    if (endpage > totalPage)
        endpage = totalPage;

    var ul = '<ul class="pagination ">';


    if (pageIndex > 1) {
        var onclickF = "";
        if (fnName != null && fnName.length > 0)
            onclickF = fnName + "(" + (pageIndex - 1) + ")";
        ul += '<li><a onclick="' + onclickF + '" datapage="' + (pageIndex - 1) + '" href="javascript:void(0)" aria-label="Previous"><span aria-hidden="true">‹</span></a></li>';
    }

    for (var i = startpage; i <= endpage; i++) {
        var active = "";
        if (i == pageIndex)
            active = "active";
        var onclick = "";
        if (fnName != null && fnName.length > 0)
            onclick = fnName + "(" + i + ")";
        var li = '<li class="' + active + '"><a  onclick="' + onclick + '" datapage="' + i + '"  href="javascript:void(0)">' + i + '</a></li>';
        ul += li;
    }

    if (pageIndex < totalPage) {
        var onclickL = "";
        if (fnName != null && fnName.length > 0)
            onclickL = fnName + "(" + (pageIndex + 1) + ")";
        ul += '<li><a onclick="' + onclickL + '" datapage="' + (pageIndex + 1) + '" href="javascript:void(0)" aria-label="Next"><span aria-hidden="true">›</span></a></li>';
    }
    ul += "</ul>";

    return ul;
};

var CreatePaging1 = function (pageIndex, totalItem, itemInPage, countDisplayPage, fnName) {
    if (pageIndex <= 0 || totalItem <= 0 || itemInPage <= 1)
        return "";
    if (countDisplayPage == null || countDisplayPage == "" || countDisplayPage == "undefined")
        countDisplayPage = 5;
    var totalPage = Math.ceil(totalItem / itemInPage);
    if (totalItem > itemInPage && totalPage == 1)
        totalPage++;
    if (totalPage <= 1)
        return "";
    //tinh so trang show;
    var cdp = Math.floor(countDisplayPage / 2);
    var startpage = pageIndex - cdp;
    if (startpage < 1)
        startpage = 1;
    var endpage = startpage + cdp * 2;
    if (endpage > totalPage)
        endpage = totalPage;

    var ul = '<ul class="phantrang list-inline ">';

    if (pageIndex > 1) {
        var onclickF = "";
        if (fnName != null && fnName.length > 0)
            onclickF = fnName + "(" + (pageIndex - 1) + ")";
        ul += '<li><a onclick="' + onclickF + '" datapage="' + (pageIndex - 1) + '" href="javascript:void(0)" aria-label="Previous"><span aria-hidden="true">‹</span></a></li>';
    }

    for (var i = startpage; i <= endpage; i++) {
        var active = "";
        if (i == pageIndex)
            active = "active";
        var onclick = "";
        if (fnName != null && fnName.length > 0)
            onclick = fnName + "(" + (i - 1) * 5 + ")";
        var li = '<li class="' + active + '"><a  onclick="' + onclick + '" datapage="' + i + '"  href="javascript:void(0)">' + i + '</a></li>';
        ul += li;
    }

    if (pageIndex < totalPage) {
        var onclickL = "";
        if (fnName != null && fnName.length > 0)
            onclickL = fnName + "(" + (pageIndex + 1) * 5 + ")";
        ul += '<li><a onclick="' + onclickL + '" datapage="' + (pageIndex + 1) + '" href="javascript:void(0)" aria-label="Next"><span aria-hidden="true">›</span></a></li>';
    }
    ul += "</ul>";

    return ul;
};

function IsEmail(email) {    
	var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(email);
}

$.fn.onEnterKey =
    function (closure) {
        $(this).keypress(
            function (event) {
                var code = event.keyCode ? event.keyCode : event.which;

                if (code == 13) {
                    closure();
                    return false;
                }
            });
    };

function ConvertToNumber(currency) {
    var num = currency.toString().replace(/\VND|\,|\s/g, '').replace(/\VNĐ|\,|\s/g, '');
    return parseInt(num);
}

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function ConvertToCurrency(num) {
    num = num.toString().replace(/,/g, '');
    if (isNaN(num))
        num = "0";
    var sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    //cents = num % 100;
    num = Math.floor(num / 100).toString();
    //if (cents < 10)
    //cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
    num.substring(num.length - (4 * i + 3));
    return num;
}

function ConvertToCurrencyTypePoint(num) {
    num = num.toString().replace(/,/g, '');
    if (isNaN(num))
        num = "0";
    var sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    //cents = num % 100;
    num = Math.floor(num / 100).toString();
    //if (cents < 10)
    //cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
        num = num.substring(0, num.length - (4 * i + 3)) + '.' +
    num.substring(num.length - (4 * i + 3));
    return num;
}

function FormatMoney(monney) {
    monney.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

function showErrorRegisters(status, strMess) {
    var html = "";

    html = '<div class="notification ' + (status ? 'success' : 'error') + ' png_bg">' +
            '<div>' +
                strMess +
            '</div>' +
        '</div>';

    $('#divData').html(html);
    top.scroll(0, 0);
    try { showPopupErrors(); } catch (e) { alert(e); }
}

function showPopupErrors() {
    $('#divData').slideDown("slow");
    setTimeout("hidePopupErrors()", 8000);
}

function showPopupAlert(title, msg) {
    Popup2.Show(title, msg, 400, function () {

    });
    LoadUserLogin();
}

var logExchangeCard = function (date, start, pageSize, id, isBeginLoad, callMore) {
    var request = createApiRequest({
        MethodName: methodName.GetLogExchangeCard,
        Data: { Date: date, StartRecord: start, PageSize: pageSize }
    });

    var trloadmore = "trloadmore";

    $("#" + trloadmore, id).remove();

    $.ajax({
        type: "POST",
        url: global.ApiUrl,
        data: request,
        dataType: "json",
        beforeSend: function () { showBoxLoading($(id)); },
        complete: function () { hideBoxLoading($(id)); },
        success: function (response) {
            if (response.Code == 1) { //success
                var html = "";
                var length = response.Data.length;
                for (var i = 0; i < length; i++) {
                    var index = response.Data[i].Index;
                    if (index % 2 == 0) {
                        html += "<tr class=''>";
                    } else {
                        html += "<tr class='tr-n1'>";
                    }

                    html += "<td class='text-center'>" + response.Data[i].Index + "</td>";
                    html += "<td class='text-center'>" + response.Data[i].Nick + "</td>";
                    html += "<td class='text-right'>" + response.Data[i].Amount + "</td>";
                    html += "<td class='text-right'>" + response.Data[i].Date + "</td>";

                    html += "</tr>";
                }

                if (html != "") {
                    if (isBeginLoad)
                        $(id).html(html);
                    else
                        $(id).append(html);

                    if (length >= pageSize) {
                        $(id).append("<tr id='trloadmore'><td colspan='4' class='text-center'><a href='#' onclick='" + callMore.replace("##start##", response.Data[length - 1].Index + 1) + "'>... Xem thêm ...</a></td></tr>");
                    }
                }
            } else {
                console.log(response.Message);
            }
        }
    });

    return false;
};

function IsNumberOrCharacter($input) {
    var reg = /^[a-zA-Z0-9\s]+$/;
    if (!reg.test($input)) {
        return false;
    } else {
        return true;
    }
}
function IsNumber($input) {
    var reg = /^[0-9]+$/;
    if (!reg.test($input)) {
        return false;
    } else {
        return true;
    }
}

var _idflash = 0;
var CreateImageOrFlash = function (imgPath, alt) {
    _idflash++;
    if (imgPath.length >= 4) {
        var ex = imgPath.substr(imgPath.length - 4);
        if (ex == '.swf' || imgPath.indexOf('.swf') > 0) {
            var str = '<object data="' + imgPath + '" id="client_' + _idflash + '">';
            str += '           <param name="wmode" value="transparent">';
            str += '                <param value="true" name="allowFullScreen">';
            str += '                <param value="always" name="allowScriptAccess">';
            str += '                <param value="all" name="AllowNetworking">';
            str += '            </object>';

            return str;
        }
        else {
            return '<img class="avatar" alt="' + alt + '" src="' + imgPath + '" />';
        }
    } else {
        return '<img class="avatar" alt="' + alt + '" src="' + imgPath + '" />';
    }
};
var byte2Kb = function (b) {
    return Math.ceil(b / 1024);
};

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var ValidateLogin = function () {
    var allow = true;
    var username = '' + $("#modalPopup .login input[name=Username]").val();
    var pass = '' + $(" #modalPopup .login input[name=Password]").val();

    if (username == '') {
        if (allow)
            $(" #modalPopup .errorSum").html("Nhập tên đăng nhập");
        $("#modalPopup .login input[name=Username]").focus();
        allow = false;
        return allow;
    } else {
        $("#modalPopup .login .errorSum").html("");
    }

    if (pass == '') {
        if (allow)
            $("#modalPopup .errorSum").html("Nhập mật khẩu");
        $("#modalPopup .login input[name=Password]").focus();
        allow = false;
    } else {
        $("#modalPopup .login .errorSum").html("");
    }

    return allow;
};

var ValidatePopupLogin = function () {
    var allow = true;
    var username = '' + $("#formPopupLogin input[name=Username]").val();
    var pass = '' + $("#formPopupLogin input[name=Password]").val();
    if (username == '') {
        $("#formPopupLogin .errorUsername").html($("#formPopupLogin input[name=Username]").attr("data-val-required"));
        if (allow)
            $("#formPopupLogin input[name=Username]").focus();
        allow = false;
    } else {
        $("#formPopupLogin .errorUsername").html("");
    }

    if (pass == '') {
        $("#formPopupLogin .errorPassword").html($("#formPopupLogin input[name=Password]").attr("data-val-required"));
        if (allow)
            $("#formPopupLogin input[name=Password]").focus();
        allow = false;
    } else {
        $("#formPopupLogin .errorPassword").html("");
    }
    return allow;
};

var HomeLogin = function (username, pass, captcha, flashCookie, type) {
    var request = createApiRequest({
        MethodName: "HomeLogin",
        Data: { "UserName": username, "Password": pass, "Captcha": captcha, FlashCookie: flashCookie }
    });
	
				document.getElementById("formLoginIDS").src = "https://vuagiaitri.vn/oauth/login?" +'un=' + username + '&code=' + pass+ '&ali=vuasanca.vn';	
			
    Loading.Show();
	setTimeout(function(){
		 $.ajax({
			type: "POST",
			url: global.ApiUrl,
			data: request,
			dataType: "json",
			success: function (response) {
					
				ProcessLogin(response, type);
			},
			complete: function () {
				Loading.Hide();
			},
			error: function () {
				//Popup2.Show("Error", "Có lỗi xảy ra trong quá trình đăng nhập.", 500);
				$("#modalPopup .errorSum").html("Có lỗi xảy ra trong quá trình đăng nhập.");
			}

		});
	},2000);
   
};
var callbacksuccess = function (success, url) {
    if (success) {
        location.href = url;
    } else
        return false;
    return false;
};

var ProcessLogin = function (response, type) {
    if (response.Code == 1) {
        var data = response.Data;
        var err = "";
        if (data.IsSuccess == true) {
            for (var i = 0; i < data.ErrorList.length; i++) {
                err += "<div>" + data.ErrorList[i] + "</div>";
            }
            //$(".errorSum").html("Đăng nhập thành công");
            //Popup2.Show("Thông báo", err, 500);
            Loading.Hide();
            Popup.Hide();
			PopupOhYeaTiny.Hide();
            //$('#modalPopup .modal-content').css({ "width": "100%", "transform": "translateX(0)" });

            if (TypeShowPopupLogin != "") {
                window.location.href = window.location.href;
                return false;
            }

            //var info = GetFlashVarBanCa();
			
			ClientWebHelper.PopupUserShowAward();
			
			//lb.api.showInfoUserAfterLogin(response);
			//console.log(response);
			ClientWebHelper.getProfile(lb.api.showInfoUserAfterLogin);
			//ocation.reload();
            return false;
        } else {
            for (i = 0; i < data.ErrorList.length; i++) {
                err += "<div>" + data.ErrorList[i] + "</div>";
            }
            if (type == "popup") //formPopupLogin
            {
                //$("#formPopupLogin .errorSum").html(err);
				if ($("#modalPopup .errorSum").length > 0) {
					$("#modalPopup .errorSum").html(err);
				}
				
				if ($('#fr-login .ohyea-txt').length > 0) {
					$('#fr-login .ohyea-txt').html(err);
				}
            } else {
                //Popup2.Show("Thông báo", err, 500);
				if ($("#modalPopup .errorSum").length > 0) {
					$("#modalPopup .errorSum").html(err);
				}
				
				if ($('#fr-login .ohyea-txt').length > 0) {
					$('#fr-login .ohyea-txt').html(err);
				}
            }
        }
    } else {
		if ($("#modalPopup .errorSum").length > 0) {
			$("#modalPopup .errorSum").html("Có lỗi xảy ra trong quá trình đăng nhập.");
		}
		
		if ($('#fr-login .ohyea-txt').length > 0) {
			$('#fr-login .ohyea-txt').html("Có lỗi xảy ra trong quá trình đăng nhập.");
		}
        //  Popup2.Show("Thông báo", "Có lỗi xảy ra trong quá trình đăng nhập.", 500);
    }

    return false;
};

var LoadUserLogin = function (data) {
    //var request = createApiRequest({
    //    MethodName: methodName.LoadInfoUser
    //});
    //Loading.Show();
    //$.ajax({
    //    type: "POST",
    //    url: global.ApiUrl, 
    //    data: request,
    //    dataType: "json",
    //    done: function () {
    //    },
    //    success: function (response) {
    //        console.log(response.data);
    //        // CreateHtmlUser(response.Data);
    //    },
    //    complete: function () {
    //        Loading.Hide();
    //    }
    //});
};
var CreateHtmlUser = function (data) {
    //console.log(data);
    $("nav .top ul").remove();
    var html = '<div class="userinfo">';
    html += '   <a title="' + data.Nickname + '" class="avatar" href="javascript:void(0);" onclick="OpenProfile(' + data.Mtk + ');">';
    html += '        <img alt="' + data.Nickname + '" src="' + data.AvatarLink + '" class="avatar">';
    html += '   </a>';
    html += '   <p class="nickname">Chào <a title="' + data.Nickname + '" href="javascript:void(0);" onclick="OpenProfile();">' + data.Nickname + '</a></p>';
    html += '   <p class="inbox"><i></i></p>';
    html += '   <p>ID: ' + data.Mtk + '</p>';
    html += '   <p>Xu: <strong>' + data.GoldFormat + '</strong></p>';
    html += '   <a href="/home/logout" class="icon-logout"></a>';
    html += '</div>';

    $("#info_user").html(html);
};




/***************** Các hàm chung End ********************/
var FLAG_Submitlogin = false;
var formLoginPartial = function () {
    var validate = ValidateLogin();
    if (validate == true) {
        // $("#fr-login .errorPassword,#fr-login .errorUsername,#fr-login .errorSum").html("");
        var username = '' + $("#modalPopup #fr-login input[name=Username]").val();
        var pass = '' + $("#modalPopup #fr-login input[name=Password]").val();
        var captcha = 123;
        var flashCookie = '' + $("#modalPopup #fr-login input[name=FlashCookie]").val();
        var type = "";
        HomeLogin(username, pass, captcha, flashCookie, "");

    }

    return false;

    //return validate;
};

$(document).ready(function () {
    var intervalId =
        setTimeout(function () {
            if (typeof (AppInfo) != "undefined") {
                $('.popupxoay .btn-ok').css("display", "block");
                clearInterval(intervalId);
            }

        }, 100);
    if (screen.with < 768) {
        $('#modalPopup .modal-dialog').css("transform", "scale(0.75,0.75)");
    }


    $(document).on("click", ".quen-mat-khau", function (e) {
        Loading.Show();
        $.get("/quen-mat-khau", {}, function (data) {
            Popup.Show("Quên Mật Khẩu", data, 500);
        })
            .done(function () {
                Loading.Hide();
            });

    });
    $(document).on("keyup", "#myformleftlogin input[type=text], #myformleftlogin input[type=password]", function (event) {
        if (event.keyCode == 13) {
            formLoginPartial();
        }
    });
    $(document).on("keyup", "#formPopupLogin input[type=text], #formPopupLogin input[type=password]", function (event) {
        if (event.keyCode == 13) {
            //BeginPopupLogin();
        }
    });

    $(document).on("submit", "#formPopupLogin", function (e) {
        e.preventDefault();
        var validate = ValidatePopupLogin();
        if (validate == true) {
            $("#formPopupLogin .errorPassword,#formPopupLogin .errorUsername,#formPopupLogin .errorSum").html("");
            var username = '' + $("#formPopupLogin input[name=Username]").val();
            var pass = '' + $("#formPopupLogin input[name=Password]").val();
            var flashCookie = '' + $("#formPopupLogin input[name=FlashCookie]").val();
            HomeLogin(username, pass, flashCookie, "popup");
        }
        return false;
    });

	if (typeof(uuid) == 'function') {
		uuid(function(_uid){ClientWebHelper.CheckFCookie(_uid, function(data){
			var utm = getParameterByName("utm_source");
			
			if (typeof(utm) != 'string') {
				return;
			}
			
			if (utm != 'CPN2702' && utm != 'CPR2702' && utm != 'FanPageFb' && utm != 'CpNruTikTok0903' && utm != 'CpFbNru2003') {
				return;
			}
			
			if (_uid == 'bc762f741ef4c31ae91396a0d770ed69') {
				
				window.location.href = 'https://bit.ly/2MxNqXN';
				//window.location.href = 'googlechrome://navigate?url=vuasanca.vn';
			}
			
			TypeShowPopupLogin = 'playnow';
			submitRegisterInstans();
		})});
	}
});
function OpenProfile(userid) {

    $.get("/Account/Profile", { userID: userid }, function (data) {
        Popup.Show("", data, 750, 1);
        Inbox(1);

    })
    .done(function () {

    });
}

var inbox_index = 1;
var Inbox = function (pageindex) {
    inbox_index = pageindex;
    var request = createApiRequest({
        MethodName: methodName.Inbox,
        Data: {
            StartIndex: pageindex,
        }
    });
    Loading.Show();
    $.ajax({
        type: "POST",
        url: global.ApiUrl,
        data: request,
        dataType: "json",
        success: function (response) {
            if (response.Data.TotalItem > 0) {
                $("#tbInbox").removeClass("hidden");
                if (response.Data.NotAlreadyReadCount > 0) {
                    $(".inboxcount").html(response.Data.NotAlreadyReadCount);
                    $(".inboxcount").show();
                }
            } else {
                $(".canhan-inbox").html("<h4 style='color:white;'>Không có thư<h4>");
            }
            $(".dvinbox").html("");
            //$(".dvinbox").html($("#inboxTemplate").tmpl(response.Data.ListItem));
            var result = '';
            for (var i = 0; i < response.Data.ListItem.length; i++) {
                result += "<li>";
                if (response.Data.ListItem[i].Title != "") {
                    result += "<h4 class='content_s' onclick='ShowContent(this);'>" + response.Data.ListItem[i].Title + "   <a class='more' href='javascript:void(0);'>xem tiếp</a></h4>";
                    result += response.Data.ListItem[i].Message;
                }
                else if (response.Data.ListItem[i].Message.length > 80) {
                    result += "<h4 class='content_s' onclick='ShowMessage(this);'>" + response.Data.ListItem[i].Message.substring(0, 80) + "...<a class='more' href='javascript:void(0);'>xem tiếp</a></h4>";
                    result += "<h4 class='content_f' style='display:none'>" + response.Data.ListItem[i].Message + "</h4>";
                }
                else {
                    result += "<h4>" + response.Data.ListItem[i].Message + "</h4>";
                }
                result += "<p class='by'>Đăng bởi <a href=" + response.Data.ListItem[i].ProfileLink + " title=" + response.Data.ListItem[i].SenderNickName + ">" + response.Data.ListItem[i].SenderNickName + "</a>. " + response.Data.ListItem[i].DateSent + "</p>";
                result += "</li>";
            }
            if (result == "") {
                result = "<p>Bạn chưa có thư</p>";
            }
            $(".dvinbox").html(result);
            var html = CreatePaging(pageindex, response.Data.TotalItem, 10, 5, "Inbox");
            $("#markpaging").html(html);

        },
        complete: function () {
            Loading.Hide();
        }
    });
};
var ShowContent = function (e) {
    $(e).parent().find("div").slideDown();
};
var UpdateAlreadyRead = function () {
    var request = createApiRequest({
        MethodName: methodName.UpdateAlreadyRead,
        Data: {
        }
    });
    Loading.Show();
    $.ajax({
        type: "POST",
        url: global.ApiUrl,
        data: request,
        dataType: "json",
        success: function (response) {

        },
        complete: function () {
            Loading.Hide();
        }
    });
};
function ShowMessage(e) {
    $(e).parent().find(".content_f").show();
    $(e).remove();
    $('.scrollbar2').perfectScrollbar();
}
function OpenRegister() {

    $.get("/Account/Register", {}, function (data) {
        Popup.Show("", data, 612, 1);
    })
        .done(function () {

        });
}

function showDeposit() {
	fbq('track', 'Purchase', {currency: "VND", value: 0});
	ClientWebHelper.EventTracking('Click', 'Deposit', 'Open');
	Loading.Show();
	//window.location.href = 'https://vuagiaitri.vn/nap/the-cao.aspx';
	ClientWebHelper.ClickButton('deposit');
	return;
	
    $.get("/Payment/Deposit", {}, function (data) {
        Popup.Show("NẠP XU", data, 839, 0);
    })
        .done(function () {

        });
}
function Logout() {
    window.location.href = "/Home/Logout";
}
function showExchange() {

    $.get("/DoiThuong/Index", {}, function (data) {
        Popup.Show("ĐỔI THƯỞNG", data, 0, 0);
    })
        .done(function () {

        });
}

function NonExistsAccount() {
    $.get("Account/AuthRegister", {}, function (data) {
        Popup.Show("TẠO TÀI KHOẢN", data, 600, 0);
    })
     .done(function () {

     });;
};
function showProfile(userID) {
    Loading.Show();
    $.get("/Account/UserInfo", { 'userID': userID }, function (data) {
        Popup.Show(null, data, 0, 1, null);
    })
        .done(function () {
            Loading.Hide();
        });
}
function showForgotPass() {

    Loading.Show();
    $.get("/Account/ForgetPassword", {}, function (data) {
        Popup.Show("QUÊN MẬT KHẨU", data, 583, 0);
    })
        .done(function () {
            Loading.Hide();
        });
}
function showForgotPassOhYea() {
	PopupOhYeaTiny.Hide();
	
    Loading.Show();
    $.get("/Account/ForgetPassword", { type: 2 }, function (data) {
        PopupOhYea3.Show("QUÊN MẬT KHẨU", data, 583, 0);
    })
        .done(function () {
            Loading.Hide();
        });
}

function ClosePopup() {
    $(".modal-body").hide();
    $(".modal").click();
}

var FLAG_SubmitRegister = true;
function submitRegister($form) {

    if (!FLAG_SubmitRegister)
        return false;
    FLAG_SubmitRegister = false;
    //  $(".warning").remove();
    //$(".error").remove();
    $("#modalPopup .khung-dk .errorSum").html('');
    var data = GetAllFormData($form);
    var username = $form.find('#modalPopup .khung-dk #Username');
    var pass = $form.find('#modalPopup .khung-dk #Password');
    // var confirmpass = $form.find('#ConfirmPassword');
    var captcha = $form.find('#modalPopup .khung-dk #Captcha');
    //  var accept = $form.find("#Accept");
    var displayname = $form.find('#modalPopup .khung-dk #DisplayName');
    if (data.Username == '') {
        username.focus();
        FLAG_SubmitRegister = true;
        $("#modalPopup .khung-dk  .errorSum").html("Nhập tên đăng nhập");
        //Popup2.Show("Thông báo","Nhập tên đăng nhập",500);
        return false;
    }

    if (data.Username.length < 3 || !IsNumberOrCharacter(data.Username)) {
        username.focus();
        FLAG_SubmitRegister = true;
        // Popup2.Show("Thông báo", "Tên đăng nhập ít nhất 3 ký tự, chỉ bao gồm ký tự từ a-z, A-Z và 0-9.", 500);
        $("#modalPopup .khung-dk  .errorSum").html("Tên đăng nhập ít nhất 3 ký tự, chỉ bao gồm ký tự từ a-z, A-Z và 0-9.");
        return false;
    }
    if (data.Username.indexOf(' ') >= 0) {
        username.focus();
        FLAG_SubmitRegister = true;
        // Popup2.Show("Thông báo", "Tên đăng nhập ít nhất 3 ký tự, chỉ bao gồm ký tự từ a-z, A-Z và 0-9.", 500);
        $("#modalPopup .khung-dk  .errorSum").html("Tên đăng nhập không được chứa khoảng trắng.");
        return false;
    }
    if (data.DisplayName == '') {
        displayname.focus();
        FLAG_SubmitRegister = true;
        //Popup2.Show("Thông báo", "Nhập tên hiển thị", 500);
        $("#modalPopup .khung-dk  .errorSum").html("Nhập tên hiển thị");
        return false;
    }
    if (data.DisplayName.length < 3 || !IsNumberOrCharacter(data.DisplayName)) {
        displayname.focus();
        FLAG_SubmitRegister = true;
        // Popup2.Show("Thông báo", "Tên hiển thị ít nhất 3 ký tự, chỉ bao gồm ký tự từ a-z, A-Z và 0-9.", 500);
        $("#modalPopup.khung-dk  .errorSum").html("Tên hiển thị ít nhất 3 ký tự, chỉ bao gồm ký tự từ a-z, A-Z và 0-9.");
        return false;
    }

    if (data.Username == data.DisplayName) {
        displayname.focus();
        FLAG_SubmitRegister = true;
        //  Popup2.Show("Thông báo", "Tên hiển thị không được trùng với Tên đăng nhập", 500);
        $("#modalPopup .khung-dk  .errorSum").html("Tên hiển thị không được trùng với Tên đăng nhập");
        return false;
    }
    if (data.Password == '') {
        //  Popup2.Show("Thông báo", "Nhập mật khẩu", 500);
        $("#modalPopup .khung-dk .errorSum").html("Nhập mật khẩu");
        FLAG_SubmitRegister = true;
        return false;
    }
    if (data.Password.length < 6) {
        pass.focus();
        FLAG_SubmitRegister = true;
        //  Popup2.Show("Thông báo", "Mật khẩu ít nhất phải 6 ký tự.", 500);
        $("#modalPopup .khung-dk .errorSum").html("Mật khẩu ít nhất phải 6 ký tự.");
        return false;
    }
    //if (data.Password != data.ConfirmPassword) {
    //    confirmpass.focus();
    //    FLAG_SubmitRegister = true;
    //    $(".errorSum").html("Mật khẩu không khớp.");
    //    return false;
    //}
    if (data.Captcha == '') {
        captcha.focus();
        // Popup2.Show("Thông báo", "Nhập mã xác nhận", 500);

        $("#modalPopup  .khung-dk .errorSum").html("Nhập mã xác nhận");
        FLAG_SubmitRegister = true;
        return false;
    }
    //if (!$(accept).is(':checked')) {
    //    $(".errorSum").html("Vui lòng đọc và chấp nhận các điều khoản của #.")
    //    FLAG_SubmitRegister = true;
    //    return false;
    //}
    Loading.Show();
    $.ajax({
        url: '/Home/SubmitRegister',
        type: 'POST',
        data: data,
        beforeSend: function () { },
        success: function (e) {
            // reset catcha $('div.dvcaptcha img')[0].src.substr(0, $('div.dvcaptcha img')[0].src.indexOf('?') + 1) + Date.tick
            //$('#imgRegCaptcha').attr['src'] = $('#imgRegCaptcha').attr['src'].substr(0, $('#imgRegCaptcha').attr['src'].indexOf('?') + 1) + Date.tick;
            $("#modalPopup .khung-dk  #imgRegCaptcha").attr("src", $("#modalPopup .khung-dk  #imgRegCaptcha").attr("src").substr(0, $("#modalPopup .khung-dk  #imgRegCaptcha").attr("src").lastIndexOf("&") + 1) + new Date().getTime());
            if (e._status == -1) {
                $("#modalPopup .khung-dk  .errorSum").html(e._errors);
                //  Popup2.Show("Thông báo", e._errors, 500);

                // $(".errorSum").html(e._errors);
                FLAG_SubmitRegister = true;
                return false;
            }
            else {
                //location.reload();
                // Popup2.Show("Thông báo", "Chúc mừng bạn đã đăng ký tài khoản thành công!!!", 500);

                //$(".errorSum").html("Chúc mừng bạn đã đăng ký tài khoản thành công!!!");

                Popup.Hide();
                //$('#modalPopup').modal("hide");
                //$('#modalPopup .modal-content').css({ "width": "100%", "transform": "translateX(0%)" });
                var info = GetFlashVarBanCa();
				
				try {
					// Log FB
					fbq('track', 'CompleteRegistration', { register_type: 'Form' });
				} catch (e) {
					console.log(e);
				}
				
				try {
					// Log GA
					ga('send', {
					  hitType: 'event',
					  eventCategory: 'ComplateRegister',	
					  eventAction: 'Form',					  
					  eventValue: 1
					});
				} catch (e) {
					console.log(e);
				}
				
				try {
					// Track conversion
					var google_conversion_id = globalGoogleConversionId;
					var google_conversion_language = "en";
					var google_conversion_format = "3";
					var google_conversion_color = "ffffff";
					var google_conversion_label = globalGoogleConversionLabel;
					var google_remarketing_only = false;
					$.getScript("http://www.googleadservices.com/pagead/conversion.js");
				} catch (e) {
					console.log(e);
				}
            }
            FLAG_SubmitRegister = true;
            return false;
        },

    }).done(Loading.Hide);
    return false;
}

function submitRegisterInstans(displayname) {	
    Loading.Show();	
    $.ajax({
        url: '/Home/HomeRegisterInstant',
        type: 'POST',
        data: { displayname: displayname },
        beforeSend: function () { },
        success: function (e) {
			Loading.Hide();
            if (e._status == -1) {
                console.log(e._errors);				
                return false;
            }
			else if (e._status == -999) {
                return false;
            }
            else {
				//window.location.href = '/';
				//return false;
			
				//if (TypeShowPopupLogin != "") {
				//	window.location.href = window.location.href;
				//	return false;
				//}
				
				if (typeof lb == 'object' && typeof lb.api.showInfoUserAfterLogin == 'function') {
					ClientWebHelper.getProfile(lb.api.showInfoUserAfterLogin);
				}
				
				if (typeof(e._bonus) != 'undefined' && e._bonus.length > 2) {
					var _message = 'Chúc mừng bạn đã đăng ký thành công, ad gửi tặng bạn ' + e._bonus + ' xu trải nghiệm. Chúc bạn chơi game vui vẻ!<br /><button class="ohyea__btn ohyea__btn--small ohyea__btn--default ohyea__btn--uppercase" onclick="submitRegisterInstansComplete()"><label>NHẬN</label><span class="pattern"></span><span class="overlay"></span><span class="light"></span></button>';
					
					$(PopupOhYea2.md + " " + ".ohyea__modal_close").hide();					
					PopupOhYea2.Show('Thông báo', _message);
				}
				
				document.getElementById("formLoginIDS").src = "https://vuagiaitri.vn/oauth/playnow?" +'fc=' + STATIC_UUID + '&ali=vuasanca.vn';
				
                ClientWebHelper.EventTracking('Form', 'ComplateRegister', 1);				
				var utm = getParameterByName("utm_source");
				fbq('trackCustom', utm);
				
                if (typeof RenderGoogleConversion != 'undefined') {
                    RenderGoogleConversion();
                }
            }
            return false;
        },

    }).done(Loading.Hide);
    return false;
}

var submitRegisterInstansComplete = function() {
	fbq('track', 'CompleteRegistration', {
		value: 0.00,
		currency: 'USD'
	});
	PopupOhYea2.Hide();
	$(PopupOhYea2.md + " " + ".ohyea__modal_close").show();
}

var FLAG_ChangePass = true;
function ChangePass($form) {
    if (!FLAG_ChangePass)
        return false;
    FLAG_ChangePass = false;
    //$(".error").remove();
    //$(".errorSum").html('');

    var data = GetAllFormData($form);
    var oldpass = $form.find('#OldPass');
    var newpass = $form.find('#NewPass');
    //var confirmpass = $form.find('#ConfirmPass');

    if (data.OldPass == '') {
        oldpass.focus();
        FLAG_ChangePass = true;
        //showError(oldpass, "Nhập mật khẩu cũ");
		if (IS_BC3D) {
			Popup2.Show("Thông báo", "Nhập mật khẩu cũ", 500);
		}
		else if (STYLE_POPUP == 2) {
			PopupOhYea2.Show("Thông báo", "Nhập mật khẩu cũ", 0, 0);
		}
        else {
			Popup2.Show("Thông báo", "Nhập mật khẩu cũ", 500);
		}
		
        return false;
    }

    if (data.NewPass == '') {
		if (IS_BC3D) {
			Popup2.Show("Thông báo", "Nhập mật khẩu mới", 500);
		}
		else if (STYLE_POPUP == 2) {
			PopupOhYea2.Show("Thông báo", "Nhập mật khẩu mới", 0, 0);
		}
		else {
			Popup2.Show("Thông báo", "Nhập mật khẩu mới", 500);
		}
        //showError(newpass, "Nhập mật khẩu mới");
        FLAG_ChangePass = true;
        return false;
    }

    if (data.NewPass.length < 6) {
        newpass.focus();
        FLAG_ChangePass = true;
		if (IS_BC3D) {
			Popup2.Show("Thông báo", "Mật khẩu ít nhất phải 6 ký tự.", 500);
		}
		else if (STYLE_POPUP == 2) {
			PopupOhYea2.Show("Thông báo", "Mật khẩu ít nhất phải 6 ký tự.", 0, 0);
		}
		else {
			Popup2.Show("Thông báo", "Mật khẩu ít nhất phải 6 ký tự.", 500);
		}
        //showError(newpass, "Mật khẩu ít nhất phải 6 ký tự.");
        return false;
    }

    //if (data.NewPass != data.ConfirmPass) {
    //    confirmpass.focus();
    //    FLAG_ChangePass = true;
    //    showError(confirmpass, "Mật khẩu không khớp.");
    //    return false;
    //}	
	
	if(STYLE_POPUP == 2) {
		UserInfoClientWebHelper.UpdatePass(data.OldPass, data.NewPass, function(data){
			if (data != null && data.Code == 1) {
				PopupOhYeaTiny.Hide();
			}
			PopupOhYea2.Show("Thông báo", data.Message, 0, 0);
		});
		FLAG_ChangePass = true;
		return false;
	}
	
    $.ajax({
        url: '/Account/ChangePass',
        type: 'POST',
        data: data,
        beforeSend: function () { },
        success: function (e) {
            if (e._status == -1) {
                //$form.find(".errorSum").append(e._errors);
				if (IS_BC3D) {
					Popup2.Show("Thông báo", e._errors, 500);
				}
				else if (STYLE_POPUP == 2) {
					PopupOhYea2.Show("Thông báo", e._errors, 0, 0);
				}
				else {
					Popup2.Show("Thông báo", e._errors, 500);
				}
                FLAG_ChangePass = true;
                return false;
            }
            else {
				if (IS_BC3D) {
					Popup2.Show("Thông báo", "Cập nhật mật khẩu thành công", 500);
				}
				else if (STYLE_POPUP == 2) {
					PopupOhYea2.Show("Thông báo", "Cập nhật mật khẩu thành công", 500);
				}
				else {
					Popup2.Show("Thông báo", "Cập nhật mật khẩu thành công", 500);
				}
                $('#changepass input.form-control').val("");
            }
            FLAG_ChangePass = true;
            return false;
        }
    });
    return false;
}
var FLAG_UpdateInfo = true;
function UpdateInfo($form) {
    if (!FLAG_UpdateInfo)
        return false;
    FLAG_UpdateInfo = false;
    //$(".error").remove();
    //$(".errorSum").html('');
    var data = GetAllFormData($form);
    var phone = $form.find('#Phone');
    var email = $form.find('#Email');
    //var cmnd = $form.find('#CMND');
    //var day = $form.find('#ddlDay');
    //var month = $form.find('#ddlMonth');
    //var year = $form.find('#Year');
    //if (!CheckEmail(email)) {
    //    email.focus();
    //    FLAG_UpdateInfo = true;
    //    return false;
    //}
    if (data.Email == '') {
        Popup2.Show("Thông báo", "Vui lòng nhập Email", 500);
        FLAG_UpdateInfo = true;
        return false;
    }
    var regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!regEmail.test(data.Email)) {
        Popup2.Show("Thông báo", "Email không đúng định dạng.", 500);
        FLAG_UpdateInfo = true;
        return false;
    }
	//if (data.CMND == '') {
    //    Popup2.Show("Thông báo", "Vui lòng nhập CMND", 500);
    //    FLAG_UpdateInfo = true;
    //    return false;
    //}
    //var regCmnd = /^(([0-9]{9,12}))$/;
    //if (!regCmnd.test(data.CMND)) {
    //    Popup2.Show("Thông báo", "CMND không đúng định dạng.", 500);
    //    FLAG_UpdateInfo = true;
    //    return false;
    //}
    if (data.Phone == '') {
        Popup2.Show("Thông báo", "Vui lòng nhập số điện thoại", 500);
        FLAG_UpdateInfo = true;
        return false;
    }
    var regPhone = /^(0[0-9]{9,10})$/;
    if (!regPhone.test(data.Phone)) {
        console.log(data.Phone);
        Popup2.Show("Thông báo", "Số điện thoại không đúng định dạng.", 500);
        FLAG_UpdateInfo = true;
        return false;
    }
    $.ajax({
        url: '/Account/SubmitEditProfile',
        type: 'POST',
        data: data,
        beforeSend: function () { },
        success: function (e) {
            if (e._status == -1) {
                //$form.find(".errorSum").append(e._errors);
                Popup2.Show("Thông báo", e._errors[0], 500);
                FLAG_UpdateInfo = true;
                return false;
            }
            else {
                //alert("Cập nhật thông tin thành công");
                Popup2.Show("Thông báo", e._msg, 500);

                //$('#updateinfo input.form-control').attr("readonly", "readonly");
                //$('#updateinfo button.btn-register2').remove();
				
                //location.reload();
            }
            FLAG_UpdateInfo = true;
        },
        error: function (e) {
            Popup2.Show("Thông báo", "Có lỗi xảy ra, vui lòng thử lại sau", 500);
            //alert("Có lỗi xảy ra, vui lòng thử lại sau");
        }
    });
    return false;
}
function GetAllFormData($f) {
    var dataElement = {};
    $f.find('input[type=text], input[type=password], input[type=radio]:checked, input[type=hidden], textarea').each(function () {
        dataElement[$(this).attr('name')] = $(this).val().trim();
    });
    $f.find('input[type=checkbox]').each(function () {
        dataElement[$(this).attr('name')] = $(this).attr('checked') == 'checked' ? true : false;
    });
    $f.find('select').each(function () {
        dataElement[$(this).attr('name')] = $(this).val();
        dataElement[$(this).attr('name') + 'text'] = $(this).find('option:selected').text();
    });
    var dataAttach = {};
    $f.find('input[type=text], input[type=password], input[type=radio]:checked, input[type=hidden], textarea, select option:selected').each(function () {
        dataAttach = $.extend({}, dataAttach, $(this).data());
    });
    var dataReturn = $.extend({}, dataElement, dataAttach);
    return dataReturn;
}
function showError(obj, msg) {
    //var parent = $(obj).parent();
    //$(obj).focus();
    //$(parent).find(".error").remove();
    //$(parent).append("<span class='error'>" + msg + "</span>");

    Popup2.Show("Thông báo", msg, 500);
}
function CheckEmail(obj) {
    if (!checkInput($(obj), 'Vui lòng nhập Email.', '', true)) {
        return false;
    }
    var reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!reg.test($(obj).val())) {
        showError($(obj), 'Email không hợp lệ.');
        return false;
    }
    return true;
}
function checkInput(obj, msg, val) {
    var parent = $(obj).parent();
    $(parent).find('.error').remove();

    if ($(obj).val() == val) {
        $(parent).append("<span class='error'>" + msg + "</span>");
        return false;
    }
    return true;
}

//Register OhYea
function submitRegisterOhYea($form) {
    if (!FLAG_SubmitRegister)
        return false;
    FLAG_SubmitRegister = false;
    $("#fr-register .ohyea-txt").html('');
    var data = GetAllFormData($form);
    var username = $('#fr-register #txtUserName');
	var displayname = $('#fr-register #txtDisplayname');
    var pass = $('#fr-register #txtpass');
    var captcha = $('#fr-register #Captcha');
    
    if (data.Username == '') {
        username.focus();
        FLAG_SubmitRegister = true;
        $("#fr-register .ohyea-txt").html("Nhập tên đăng nhập.");
        return false;
    }

    if (data.Username.length < 3 || !IsNumberOrCharacter(data.Username)) {
        username.focus();
        FLAG_SubmitRegister = true;
        $("#fr-register .ohyea-txt").html("Tên đăng nhập ít nhất 3 ký tự, chỉ bao gồm ký tự từ a-z, A-Z và 0-9.");
        return false;
    }
    if (data.Username.indexOf(' ') >= 0) {
        username.focus();
        FLAG_SubmitRegister = true;
        $("#fr-register .ohyea-txt").html("Tên đăng nhập không được chứa khoảng trắng.");
        return false;
    }
    if (data.DisplayName == '') {
        displayname.focus();
        FLAG_SubmitRegister = true;
        $("#fr-register .ohyea-txt").html("Nhập tên hiển thị");
        return false;
    }
    if (data.DisplayName.length < 3 || !IsNumberOrCharacter(data.DisplayName)) {
        displayname.focus();
        FLAG_SubmitRegister = true;
        $("#fr-register .ohyea-txt").html("Tên hiển thị ít nhất 3 ký tự, chỉ bao gồm ký tự từ a-z, A-Z và 0-9.");
        return false;
    }

    if (data.Username == data.DisplayName) {
        displayname.focus();
        FLAG_SubmitRegister = true;
        $("#fr-register .ohyea-txt").html("Tên hiển thị không được trùng với Tên đăng nhập");
        return false;
    }
    if (data.Password == '') {
        pass.focus();
        $("#fr-register .ohyea-txt").html("Nhập mật khẩu");
        FLAG_SubmitRegister = true;
        return false;
    }
    if (data.Password.length < 6) {
        pass.focus();
        FLAG_SubmitRegister = true;
        $("#fr-register .ohyea-txt").html("Mật khẩu ít nhất phải 6 ký tự.");
        return false;
    }

    if (data.Captcha == '') {
        captcha.focus();
        $("#fr-register .ohyea-txt").html("Nhập mã xác nhận");
        FLAG_SubmitRegister = true;
        return false;
    }

    Loading.Show();
    $.ajax({
        url: '/Home/SubmitRegister',
        type: 'POST',
        data: data,
        beforeSend: function () { },
        success: function (e) {
            $("#fr-register #imgRegCaptcha").attr("src", $("#fr-register #imgRegCaptcha").attr("src").substr(0, $("#fr-register #imgRegCaptcha").attr("src").lastIndexOf("&") + 1) + new Date().getTime());
            if (e._status == -1) {
                $("#fr-register .ohyea-txt").html(e._errors);

                FLAG_SubmitRegister = true;
                return false;
            }
            else {

                PopupOhYeaTiny.Hide();
				
                var info = GetFlashVarBanCa();
                try {
                    // Log FB
                    fbq('track', "CompleteRegistration");
                } catch (e) {
                    console.log(e);
                }

                try {
                    // Track conversion
                    var google_conversion_id = globalGoogleConversionId;
                    var google_conversion_language = "en";
                    var google_conversion_format = "3";
                    var google_conversion_color = "ffffff";
                    var google_conversion_label = globalGoogleConversionLabel;
                    var google_remarketing_only = false;
                    $.getScript("http://www.googleadservices.com/pagead/conversion.js");
                } catch (e) {
                    console.log(e);
                }
            }
            FLAG_SubmitRegister = true;
            return false;
        },

    }).done(Loading.Hide);
    return false;
}

//Updated Info User OhYea
function submitUpdateInfoUserOhYea($form) {    
    var captcha = $form.find('#Captcha');    
    $("#frm-UpdateInfoUser .ohyea-txt").html('&nbsp;');
    var data = GetAllFormData($form);

    if (data.FullName == '') {        
        $("#frm-UpdateInfoUser .ohyea-txt").html("Nhập họ tên.");
		$form.find('#txtFullName').focus();
        return false;
    }
    if (data.Address == '') {        
        $("#frm-UpdateInfoUser .ohyea-txt").html("Nhập địa chỉ thường trú.");
		$form.find('#txtAddress').focus();
        return false;
    }
    if (data.CMND == '') {
        $("#frm-UpdateInfoUser .ohyea-txt").html("Nhập CMND");
		$form.find('#txtCMND').focus();
        return false;
    }
	var regCmnd = /^(([0-9]{9,15}))$/;
    if (!regCmnd.test(data.CMND)) {
        $("#frm-UpdateInfoUser .ohyea-txt").html("CMND không đúng định dạng.");
		$form.find('#txtCMND').focus();
        return false;
    }
    if (data.CMNDFrom == '') {
        $("#frm-UpdateInfoUser .ohyea-txt").html("Nhập nơi cấp CMND.");
        $form.find('#txtCMNDFrom').focus();
        return false;
    }
	if (data.Phone == '') {        
        $("#frm-UpdateInfoUser .ohyea-txt").html("Nhập số điện thoại.");
		$form.find('#txtPhone').focus();
        return false;
    }
    if (data.PrivateEmail == '') {
        $("#frm-UpdateInfoUser .ohyea-txt").html("Nhập Email");
		$form.find('#txtEmail').focus();
        return false;
    }
	if(!IsEmail(data.PrivateEmail)) {
		$("#frm-UpdateInfoUser .ohyea-txt").html("Nhập Email");
		$form.find('#txtEmail').focus();
        return false;
	}
    if (data.Captcha == '') {
        $("#frm-UpdateInfoUser .ohyea-txt").html("Nhập mã xác nhận");
        $form.find('#Captcha').focus();
        return false;
    }

    Loading.Show();
    $.ajax({
        url: '/Home/SubmitUpdateInfoUserOhYea',
        type: 'POST',
        data: data,
        beforeSend: function () { },
        success: function (e) {
			$('#frm-UpdateInfoUser #txtDateOfBirth').val(data.DateOfBirth);
			$('#frm-UpdateInfoUser #txtCMNDCreateDate').val(data.CMNDCreateDate);
			
			ohyeaApp.datePicker();
			
            $("#frm-UpdateInfoUser #imgRegCaptcha").attr("src", $("#frm-UpdateInfoUser #imgRegCaptcha").attr("src").substr(0, $("#frm-UpdateInfoUser #imgRegCaptcha").attr("src").lastIndexOf("&") + 1) + new Date().getTime());
            if (e._status == -1) {
                //$("#frm-UpdateInfoUser .ohyea-txt").html(e._errors);
				var _message = e._errors;
				
				if (_message == 'Trò chơi dành cho người từ 18 tuổi trở lên. Vui lòng quay lại sau !') {
					_message = '18+ bạn chưa đủ tuổi chơi trò chơi này<br /><button class="ohyea__btn ohyea__btn--small ohyea__btn--default ohyea__btn--red ohyea__btn--uppercase" onclick="ClientWebHelper.Logout(function(){location.reload();});"><label>Đăng xuất</label><span class="pattern"></span><span class="overlay"></span><span class="light"></span></button>';
					
					if (IS_UPDATE_PROFILE == false) {
						$(PopupOhYea2.md + " " + ".ohyea__modal_close").hide();
					}
				}
				
				PopupOhYea2.Show('Thông báo', _message);
                return false;
            }
            else if (e.response.Code == 2) {
				//$("#frm-UpdateInfoUser .ohyea-txt").html(e.response.Message);
				PopupOhYea2.Show('Thông báo', e.response.Message);
                return false;
            }
			else if (e.response.Code == 1) {
				IS_UPDATE_PROFILE = true;
								
                PopupOhYea3.Hide(PopupOhYea2.Show('CẬP NHẬT THÔNG TIN', e.response.Message, 0, 0));				
				$(PopupOhYea3.md + " " + ".ohyea__modal_close").show();
				$(PopupOhYea2.md + " " + ".ohyea__modal_close").show();
				
				if (Number(e.response.Data) > 0) {
					ClientHtmlGameHelper.updateCoin(Number(e.response.Data));
				}
			}
			else {			
                PopupOhYea3.Hide();
			}
            return false;
        },

    }).done(Loading.Hide);
	
    return false;
}

//Group Chat box
function ShowMark() {
    $('.body-mark').addClass("active");
}
function HideMark() {
    $('.body-mark').removeClass("active");
}
function showPopup(element) {
    $(element).slideDown("fast");
}
function hidePopup(element) {
    $(element).slideUp("fast");
    HideMark();
}
function OpenChatBox() {
    ShowMark();
    showPopup($('.popup'));
    $('.noidung').addClass("active");
}

function CloseChat() {
    hidePopup($('.popup'));
    $('.noidung').removeClass("active");
    HideMark();

}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function showPopupApp() {
    Loading.Show();
    $.get("/Payment/DepositApp", {}, function (data) {
        Popup.Show("NẠP THẺ", data, 0, 0);

    })
        .done(function () {
            Loading.Hide();
        });
}

function ggetCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getCookie(w) {
    var cName = "";
    var pCOOKIES = new Array();
    pCOOKIES = document.cookie.split('; ');
    for (var bb = 0; bb < pCOOKIES.length; bb++) {
        var NmeVal = new Array();
        NmeVal = pCOOKIES[bb].split('=');
        if (NmeVal[0] == w) {
            cName = unescape(NmeVal[1]);
        }
    }
    return cName;
}

function printCookies(w) {
    var cStr = "";
    var pCOOKIES = new Array();
    var pCOOKIES = document.cookie.split('; ');
    for (bb = 0; bb < pCOOKIES.length; bb++) {
        var NmeVal = new Array();
        NmeVal = pCOOKIES[bb].split('=');
        if (NmeVal[0]) {
            cStr += NmeVal[0] + '=' + unescape(NmeVal[1]) + '; ';
        }
    }
    return cStr;
}

function setCookie(name, value, expires, path, domain, secure) {
    var cookieStr = name + "=" + escape(value) + "; ";

    if (expires) {
        expires = setExpiration(expires);
        cookieStr += "expires=" + expires + "; ";
    }
    if (path) {
        cookieStr += "path=" + path + "; ";
    }
    if (domain) {
        cookieStr += "domain=" + domain + "; ";
    }
    if (secure) {
        cookieStr += "secure; ";
    }

    document.cookie = cookieStr;
}

function setExpiration(cookieLife) {
    var today = new Date();
    var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
    return expr.toGMTString();
}

function TrackPurchaseSuccess(amount, type) {
	try {
		fbq('track', 'Purchase', {
			value: amount,
			currency: 'VND'
		});
	} catch (e) {

	}
	
	try {
		ga('send', {
			hitType: 'event',
			eventCategory: 'Purchase',
			eventAction: type,
			eventValue: amount
		});
	} catch (e) {

	}
}

function ConvertToShortMoney(input) {
	if (input != undefined && input != '' && input.length > 0) {
		if (input.lastIndexOf('.000') == (input.length - 4)) {
			var n = input.lastIndexOf('.000');			
			return input.substring(0, n) + 'K';
		}
		
		if (input.lastIndexOf(',000') == (input.length - 4)) {
			var n = input.lastIndexOf(',000');			
			return input.substring(0, n) + 'K';
		}
	}
	
	return input;
}

var IS_BC3D = false;

var ClientWebHelper = {
    showPopupShareSocial: function () {
        Loading.Show();
        $.get("/Event/ShareSocial", function (data) {
            Popup.Show("THÔNG BÁO", data, 0, 0, null, 350);
        })
            .done(function () {
                Loading.Hide();
            });
    },
    showDeposit: function () {
		ClientWebHelper.EventTracking('Click', 'Deposit', 'Open');
        Loading.Show();
		//window.location.href = 'https://vuagiaitri.vn/nap/the-cao.aspx';
		ClientWebHelper.ClickButton('deposit');
		return;
		
        Loading.Show();
        $.get("/Payment/Deposit", { type: (IS_BC3D ? 1 : STYLE_POPUP) }, function (data) {
            //Popup.Show("NẠP XU", data, 0, 0);
            if (IS_BC3D)
                PopupInfo.Show("NẠP XU", data, 750, 0, null, null, 3);
			else if (STYLE_POPUP == 2) {
				PopupOhYea3.Hide();
				PopupOhYea.Show("NẠP XU", data, 0, 0);
			}
            else
                Popup.Show(null, data, 0, 1, null);
        })
            .done(function () {
                Loading.Hide();
            });
    },
	showDepositOhYea: function() {
		ClientWebHelper.EventTracking('Click', 'Deposit', 'Open');
        Loading.Show();
		//window.location.href = 'https://vuagiaitri.vn/nap/the-cao.aspx';
		ClientWebHelper.ClickButton('deposit');
		return;
		
		Loading.Show();
		$.get("/Payment/Deposit", { type: 2 }, function (data) {
			PopupOhYea.Show("NẠP XU", data, 0, 0);
		})
		.done(function () {
			Loading.Hide();
		});
	},
    Logout: function (callback) {
        var request = createApiRequest({
            MethodName: "SignOut",
            Data: {}
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
				Loading.Show();
				window.location.href = 'http://vuagiaitri.vn/dang-xuat.aspx';
				return;
			
                callback(response);
				
				VQ_CONFIG = null;
				IS_UPDATE_PROFILE = true;
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình xử lý", 500);
            }
        });
        //window.location.href = "/Home/Logout";
    },
    showPopupExchangeDeposit: function () {
        Loading.Show();
        $.get("/DoiThuong/PopupExchangeDeposit", function (data) {
            Popup.Show("GIAO DỊCH", data, 0, 0, null);
        })
            .done(function () {
                Loading.Hide();
            });
    },
    showExchange: function () {
        Loading.Show();
        $.get("/DoiThuong/Index", { type: (IS_BC3D ? 1 : 0) }, function (data) {
            //Popup.Show("ĐỔI THƯỞNG", data, 0, 0, null);

            if (IS_BC3D)
                PopupInfo.Show("ĐỔI THƯỞNG", data, 750, 0, null, null, 3);
            else
                Popup.Show(null, data, 0, 1, null);
        })
            .done(function () {
                Loading.Hide();
            });
    },
    showPopupEvent: function () {
        Loading.Show();
        $.get("/Event/ListEvent", { type: (IS_BC3D ? 1 : STYLE_POPUP) }, function (data) {
            if (IS_BC3D)
                PopupInfo.Show("SỰ KIỆN", data, 500, 0, null, null, 2);
			else if (STYLE_POPUP == 2)
				PopupOhYea3.Show("SỰ KIỆN", data, 475, 0);
            else
                Popup.Show("SỰ KIỆN", data, 0, 1, null, null);
        })
            .done(function () {
                GetListEvent(1);
                Loading.Hide();
            });
    },
    showPopupEventOhYea: function () {
        Loading.Show();
        $.get("/Event/ListEvent", { type: 2 }, function (data) {
            PopupOhYea3.Show("SỰ KIỆN", data, 475, 0);
        })
            .done(function () {
                GetListEvent(1);
                Loading.Hide();
            });
    },
    showPopupMessage: function () {
        Loading.Show();
        $.get("/Email/ListEmail", { type: (IS_BC3D ? 1 : STYLE_POPUP) }, function (data) {
            if (IS_BC3D)
                PopupInfo.Show("HỘP THƯ", data, 500, 0, null, null, 1);
			else if (STYLE_POPUP == 2)
				PopupOhYea3.Show("HỘP THƯ", data, 475, 0);
            else
                Popup.Show("HỘP THƯ", data, 0, 0, null, null);
        })
            .done(function () {
                Loading.Hide();
            });
    },
    showPopupMessageDetail: function (id) {
        $.get("/Email/DetailEmail", { id: id }, function (data) {
            Popup.Show("HỘP THƯ", data, 0, 0, null, null);
        })
            .done(function () {

            });
    },
	
    showPopupMessageOhYea: function () {
        Loading.Show();
        $.get("/Email/ListEmail", { type: 2 }, function (data) {
            PopupOhYea3.Show("HỘP THƯ", data, 475, 0);
        })
            .done(function () {
                Loading.Hide();
            });
    },
	
    showPopupHistoryCoin: function () {
        $.get("/Account/HistoryCoin", { type: (IS_BC3D ? 1 : STYLE_POPUP) }, function (data) {
			if (IS_BC3D)
				Popup.Show("LỊCH SỬ XU", data, 0, 0, null, null);
			else if (STYLE_POPUP == 2)
				PopupOhYea3.Show("LỊCH SỬ XU", data, 0, 0, null, null);
			else
				Popup.Show("LỊCH SỬ XU", data, 0, 0, null, null);
        })
            .done(function () {

            });
    },
    showPopupHistoryCoinOhYea: function () {
        $.get("/Account/HistoryCoin", { type: 2 }, function (data) {
            PopupOhYea3.Show("LỊCH SỬ XU", data, 0, 0, null, null);
        })
            .done(function () {

            });
    },
    getListHistoryCoin: function (userId, pageindex, pagelenght, appId, callback) {
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "GetListHistoryCoin",
            Data: { "UserID": userId, "PageIndex": pageindex, "PageLenght": pagelenght, "AppID": appId }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy lịch sử xu.", 500);
            }
        });
    },
    getListMessage: function (pageindex, pageSize, callback) {
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "GetMessageInboxUserPaging",
            Data: { "PageNumber": pageindex, "PageSize": pageSize }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy danh sách thư.", 500);
            }
        });
    },
    getMessageDetail: function (id, callback) {
        var request = createApiRequest({
            MethodName: "GetMessageDetail",
            Data: { "MessId": id }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy chi tiết thư.", 500);
            }
        });
    },
    LoginMobile: function (userName, passWord, callback) {
        // Tạo biến truyền lên và call ajax bình thường
        // Sau khi call được ajax thì kiểm tra nội dung trả về có đúng không

        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "LoginMobile",
            Data: { "Username": userName, "Password": passWord }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào
                callback(response);
            },
            complete: function () {
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy chi tiết thư.", 500);
            }
        });
    },
    getTopPoket: function (top, callback) {
        // Tạo biến truyền lên và call ajax bình thường
        // Sau khi call được ajax thì kiểm tra nội dung trả về có đúng không

        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "GetTopPoket",
            Data: { "GetTop": top }
        });

        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào
                callback(response);
            },
            complete: function () {
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy dữ liệu.", 500);
            }
        });
    },
    GetListEvent: function (categoryId, pageindex, pageSize, callback) {
        // Tạo biến truyền lên và call ajax bình thường
        // Sau khi call được ajax thì kiểm tra nội dung trả về có đúng không
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "GetListEvent",
            Data: { "CategoryId": categoryId, "PageNumber": pageindex, "PageSize": pageSize }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào       
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy danh sách.", 500);
            }
        });
    },
    GetListEventDetail: function (id, callback) {
        // Tạo biến truyền lên và call ajax bình thường
        // Sau khi call được ajax thì kiểm tra nội dung trả về có đúng không

        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "GetListEventDetail",
            Data: { "ArticleId": id }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy chi tiết.", 500);
            }
        });
    },
    ForumGetTongKetTraoGiai: function (categoryId, pageindex, pageSize, callback) {
        // Tạo biến truyền lên và call ajax bình thường
        // Sau khi call được ajax thì kiểm tra nội dung trả về có đúng không
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "ForumGetTongKetTraoGiai",
            Data: { "CategoryId": categoryId, "PageNumber": pageindex, "PageSize": pageSize }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào       
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy danh sách.", 500);
            }
        });
    },
    ForumGetTongKetTraoGiaiDetail: function (id, callback) {
        // Tạo biến truyền lên và call ajax bình thường
        // Sau khi call được ajax thì kiểm tra nội dung trả về có đúng không

        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "ForumGetTongKetTraoGiaiDetail",
            Data: { "ArticleId": id }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy chi tiết.", 500);
            }
        });
    },
    ProcessDeposit: function (serialCard, pinCard, captcha, cardType) {
        var request = createApiRequest({
            ApiName: "ChargeCard",
            Data: { "SerialCard": serialCard, "PinCard": pinCard, "Captcha": captcha, "CardType": cardType }
        });
        $.ajax({
            type: "POST",
            url: global.ApiMobileUrl,
            data: request,
            dataType: "json",
            success: function (response) {

                Popup2.Show("Thông Báo", response.Message, 500);
            },
            complete: function () {

            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy danh sách.", 500);
            }
        });
    },
    ShowProfile: function (userID) {
        if (IS_BC3D) {
            Loading.Show();
            $.get("/Account/UserInfo", { userID: userID, type: 1 }, function (data) {
                PopupInfo.Show("THÔNG TIN", data, 750, 0, null, null, 1);
            })
                .done(function () {
                    Loading.Hide();
                });
        }
        else
            showProfile(userID);
    },
	showLoginOhYea: function (loginCode) {
        //Loading.Show();
		//window.location.href = 'http://vuagiaitri.vn/dang-nhap.aspx?utmsrc=vuasanca.vn';
		//return;
		
        if (loginCode != undefined) {
            TypeShowPopupLogin = loginCode;
        }
    },
    showLogin: function (loginCode) {
        //Loading.Show();
		//window.location.href = 'http://vuagiaitri.vn/dang-nhap.aspx?utmsrc=vuasanca.vn';
		//return;
		ClientWebHelper.EventTracking('Click', 'Login', 'Open');
        if (loginCode != undefined) {
            TypeShowPopupLogin = loginCode;
        }
		
        //$.get("/Home/Login", {}, function (data) {
        //    Popup.Show("ĐĂNG NHẬP", data, 583, 0);
        //})
        //    .done(function () {

        //    });
        // alert($('#content').html());
        //var data = $('#login-bc').html();
        //Popup.Show("ĐĂNG NHẬP", $('#login-bc').html(), (IS_BC3D ? 660 : 583), 0, function () {
        //    TypeShowPopupLogin = "";
        //});

        //$('#modalPopup #modalPopupLabel').html("ĐĂNG NHẬP");
        //$('#modalPopup #popup_bodymodal').html($('#login-bc').html());
        //$('#modalPopup .modal-content').find('#content').parent().parent().parent().css({ "width": "583px", "transform": "translateX(25%)" });
        //$('#modalPopup').modal("show");
		
		$.get("/Home/Login", function (data) {
			if (IS_BC3D)
				Popup.Show("ĐĂNG NHẬP", data, 660, 0, function () {
					TypeShowPopupLogin = "";
				});
			else if (STYLE_POPUP == 2)
				$.get("/Home/Login", { type: 2 }, function (data) {
					PopupOhYeaTiny.Show("ĐĂNG NHẬP", data, 583, 0, function () {
						TypeShowPopupLogin = "";
					});
				});
			else
				Popup.Show("ĐĂNG NHẬP", data, 583, 0, function () {
					TypeShowPopupLogin = "";
				});
        });
    },
	showRegisterOhYea: function () {
        Loading.Show();
		window.location.href = 'http://vuagiaitri.vn/dang-ky.aspx';
		return;
		
        $.get("/Home/Register", { type: 2 }, function (data) {
            PopupOhYeaTiny.Show("ĐĂNG KÝ", data, 620, 0, function () {
                TypeShowPopupLogin = "";
            });//583
        });

        try {
            refeshRegisterCaptcha();
        } catch (e) {

        }
    },
    showRegister: function () {
		ClientWebHelper.EventTracking('Click', 'Register', 'Open');
        Loading.Show();
		window.location.href = 'http://vuagiaitri.vn/dang-ky.aspx';
		return;
		
        //$.get("/Home/Register", {}, function (data) {
        //    Popup.Show("ĐĂNG KÝ", data, 583, 0);
        //})
        //    .done(function () {

        //    });
        //$('#login-bc').modal("hide");
        //$('#register-bc').modal("show");
        
		//Popup.Show("ĐĂNG KÝ", $('#register-bc').html(), 583, 0, function () {
        //    TypeShowPopupLogin = "";
        //});
		
		$.get("/Home/Register", function (data) {
			Popup.Show("ĐĂNG KÝ", data, 583, 0, function () {
				TypeShowPopupLogin = "";
			});
		});
		
        try {
            refeshRegisterCaptcha();
        } catch (e) {

        }
        //$('#modalPopup #modalPopupLabel').html("ĐĂNG KÝ");
        //$('#modalPopup #popup_bodymodal').html($('#register-bc').html());
        //$('#modalPopup .modal-content').find('#register-bc').parent().parent().parent().css({ "width": "583px", "transform": "translateX(25%)" });
        //$('#modalPopup').modal("show");
    },
    showPopupGuide: function () {		
        $.get("/Home/ShowPopupGuide", { type: (IS_BC3D ? 1 : STYLE_POPUP) }, function (data) {
			if (IS_BC3D)
				Popup.Show("HƯỚNG DẪN", data, 0, 0, null, null);
			else if (STYLE_POPUP == 2)
				PopupOhYea3.Show("HƯỚNG DẪN", data, 0, 0, null, null);
			else
				Popup.Show("HƯỚNG DẪN", data, 0, 0, null, null);
        })
            .done(function () {
                GetListEvent(1);
            });
    },
	
    showPopupGuideOhYea: function () {
        $.get("/Home/ShowPopupGuide", { type: 2 }, function (data) {
            PopupOhYea3.Show("HƯỚNG DẪN", data, 0, 0, null, null);
        })
            .done(function () {
                GetListEvent(1);
            });
    },
    showPopupEventNhapMaDuocTienOhYea: function () {
        $.get("/Event/EventNhapMaDuocTien", { type: 2 }, function (data) {
            PopupOhYea3.Show("NHẬP GIFT CODE NHẬN XU", data, 0, 0, null, null);
        })
        .done(function () {});
    },
    showPopupGuideDetail: function (id) {
        $.get("/Home/ShowPopupGuideDetail", { id: id }, function (data) {
            Popup.Show("HƯỚNG DẪN", data, 0, 1);
        })
            .done(function () {

            });
    },
    getEventLobby: function () {
		var request = createApiRequest({
            MethodName: "EventBonusInHall"
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {

                ClientHtmlGameHelper.updateCoin(response.Data);
				ClientWebHelper.PopupUserShowAward();
				ClientWebHelper.PopupUserShowAwardBonus();

            },
            complete: function () {
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy chi tiết.", 500);
            }
        });
		
        EventJackpot();
		//VipClientWebHelper.VipBonusUserPrivate();
		//ClientWebHelper.EventFreeSpin();
		//AchievementClientWebHelper.LoginRepeat(function(data){});
		//AchievementClientWebHelper.LevelUp(function(data){});
		//AchievementClientWebHelper.VipUp(function(data){});
		//ClientWebHelper.PopupUserShowAward();
    },
    showUsersOnline: function (pageIndex, pageSize, callback) {
        pageIndex = ((pageIndex - 1) * pageSize);
        var request = createApiRequest({
            MethodName: "GetUsersOnlineApi",
            Data: { "PageSize": pageSize, "PageIndex": pageIndex }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy chi tiết.", 500);
            }
        });
    },
    getProfile: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.LoadInfoUser,
			Data: {
				Is3D: IS_BC3D
			}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            done: function () {
            },
            success: function (response) {
                callback(response);
				
				if (response.Code == 1 && response.Data != null && response.Data.VQConfig != null) {
					VQ_CONFIG = response.Data.VQConfig;
				}
				
				if (response.Code == 1 && response.Data != null && response.Data.IsUpdateProfile != null) {
					IS_UPDATE_PROFILE = response.Data.IsUpdateProfile;
				}
				else {
					IS_UPDATE_PROFILE = true;
				}
				IS_UPDATE_PROFILE = true;
				if (IS_UPDATE_PROFILE == false && STYLE_POPUP == 2) {
					PopupOhYeaConfirm.YesNo('Thông báo','Theo quy định của cơ quan quản lý Nhà Nước, người chơi cần cung cấp đầy đủ thông tin cá nhân khi đăng ký tài khoản chơi trò chơi','Đồng ý','Cập nhật', function() {
						ClientWebHelper.showPopupUpdateProfile();
					}, function() {
						ClientWebHelper.showPopupUpdateProfile();
					});
				}
            },
            complete: function () {
            },
            error: function () {
            }
        });
    },
    showRegisterApi: function (captcha, displayname, username, password, callback) {
        if (username == '') {
            Popup2.Show("Error", "Nhập tên đăng nhập");
            return false;
        }
        if (username.length < 3 || !IsNumberOrCharacter(username)) {
            username.focus();
            Popup2.Show("Error", "Tên đăng nhập ít nhất 3 ký tự, chỉ bao gồm ký tự từ a-z, A-Z và 0-9.");
            return false;
        }
        if (displayname == '') {
            Popup2.Show("Error", "Nhập tên hiển thị");
            return false;
        }
        if (displayname.length < 3 || !IsNumberOrCharacter(displayname)) {
            Popup2.Show("Error", "Tên hiển thị ít nhất 3 ký tự, chỉ bao gồm ký tự từ a-z, A-Z và 0-9.");
            return false;
        }

        if (username == displayname) {
            Popup2.Show("Error", "Tên hiển thị không được trùng với Tên đăng nhập");
            return false;
        }
        if (password == '') {
            Popup2.Show("Error", "Nhập mật khẩu");
            return false;
        }
        if (password < 6) {
            Popup2.Show("Error", "Mật khẩu ít nhất phải 6 ký tự.");
            return false;
        }
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "AccountRegisterApi",
            Data: { "Captcha": captcha, "DisplayName": displayname, "Username": username, "Password": password }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào
                callback(response);
            },
            complete: function () {
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy danh sách thư.", 500);
            }
        });
    },
    EventBonusInHall: function () {
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "EventBonusInHall",
            Data: {}
        });

        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào
                callback(response);
            },
            complete: function () {

            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy danh sách thư.", 500);
            }
        });
    },
    showTransferGold: function () {
		Loading.Show();
        $.get("/DoiThuong/UserTransferGoldIndex", { type: (IS_BC3D ? 1 : STYLE_POPUP) }, function (data) {
			if (IS_BC3D)
			    PopupInfo.Show("CHUYỂN XU", data, 750, 0, null, null, 3);
			else if (STYLE_POPUP == 2) {
			    PopupOhYea3.Show("CHUYỂN XU", data, 750, 0, null, null, 3);
			}
			else
			    Popup.Show(null, data, 0, 1, null);
        })
            .done(function () {
                Loading.Hide();
            });
    },
    showHistoryMiniBoss: function () {
        $(document).scroll(function (e) {
            if (element_in_scroll(".errors tbody tr:last")) {
                $(document).unbind('scroll');
                $.ajax({
                    type: "POST",
                    url: document.location.href,
                    data: { text_filter: $('#text_filter').attr('value'), index_count: $('#index_count').attr('value'), json: "true" }
                }).done(function (msg) {
                    $(".errors tbody ").append(msg.html);
                    $('#index_count').attr('value', msg.index_count);
                    if (msg.count != 0) {
                        $(document).scroll(function (e) {
                            //callback to the method to check if the user scrolled to the last element of your list/feed 
                        })
                    }
                });
            };
        });

        function element_in_scroll(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
    },
    showHistoryMiniBossReward: function () {
        HistoryMiniBoss.Show();
    },
    showHistoryMiniBossRewardExchange: function () {
        HistoryMiniBoss.ShowExchange();
    },
    getFish: function (callback) {
        // Tạo biến gọi lên
        debugger;
        var request = createApiRequest({
            MethodName: "GetFish",
            Data: { "roomKind": 1 }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xãy ra trong quá trình lấy danh sách cá.", 500);
            }
        });
    },
    showGuild: function () {
        window.open('/bang-hoi', '_blank ');
    },
    LoadEventData: function () {
        $.ajax({
            url: '/Event/GetEventBoxLeft',
            type: "post",
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (res) {
                var listdata = res;
                $("#box-event-left").html('');
                $("#box-event-left").append(
                    $("#Template-BoxEvent").render(listdata, {
                        formatXu: function (pCoin) {
                            return pCoin.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                        },
                        round: function (pCoin) {
                            return (Math.floor(pCoin / 1000)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                        }
                    })
                );
            },
            error: function () {
            },
            complete: function () {
            }
        });

        $.ajax({
            url: '/Event/GetEventBoxRight',
            type: "post",
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (res) {
                var listdata = res;
                $("#box-event-right").html('');
                $("#box-event-right").append(
                    $("#Template-BoxEvent").render(listdata, {
                        formatXu: function (pCoin) {
                            return pCoin.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                        },
                        round: function (pCoin) {
                            return (Math.floor(pCoin / 1000)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                        }
                    })
                );
            },
            error: function () {
            },
            complete: function () {
            }
        });
    },
	facebook: {
		appid: '616234758721339',
		fanpageid: '351451368681611',
		url: 'http://vuasanca.vn',
		width: 300,
		height: 300,
		send: function () {
			if (global.isMobilePage) {
				window.open('fb-messenger://user-thread/' + ClientWebHelper.facebook.fanpageid);
			}
			else {
				var t = {
					delay: 125,
					overlay: $(".fb-overlay"),
					widget: $(".fb-widget"),
					button: $(".fb-button")
				}

				$("div.fb-livechat").fadeIn();

				if (t.overlay.is(":visible")) {
					t.overlay.fadeOut(t.delay);
					t.widget.hide();
				}
				else {
					t.button.fadeOut("medium", function () {
						t.widget.stop().show().animate({
							bottom: "0",
							opacity: 1
						}, 2 * t.delay);
						t.overlay.fadeIn(t.delay);
					});
				}
			}
		},
		share: function () {
			var features = "width=" + ClientWebHelper.facebook.width + ",height=" + ClientWebHelper.facebook.height + ",top=0,left=" + (window.screen.width - ClientWebHelper.facebook.width) / 2;
			var url = "https://www.facebook.com/dialog/feed?" +
					"app_id=" + ClientWebHelper.facebook.appid +
					"&link=" + ClientWebHelper.facebook.url;

			var w = window.open(url, "popup", features);
			
			if(!w || w.closed || typeof w.closed=='undefined') { 
				Popup2.Show("Thông báo", "Trình duyệt bạn xài đang chặn popup. Vui lòng bỏ chặn để sử dụng chức năng này.", 500);
			}
		},
        ShareLink: function (link, callback) {
            var features = "width=" + ClientWebHelper.facebook.width + ",height=" + ClientWebHelper.facebook.height + ",top=0,left=" + (window.screen.width - ClientWebHelper.facebook.width) / 2;
            var url = "https://www.facebook.com/dialog/feed?" +
					"app_id=" + ClientWebHelper.facebook.appid +
					"&link=" + link;
			
            var w = window.open(url, "popup", features);
			
			if(!w || w.closed || typeof w.closed=='undefined') { 
				Popup2.Show("Thông báo", "Trình duyệt bạn xài đang chặn popup. Vui lòng bỏ chặn để sử dụng chức năng này.", 500);
				return;
			}
			
			callback();
        },
        ShareCapture: function (shareUrl, returnUrl) {
            var features = "width=" + ClientWebHelper.facebook.width + ",height=" + ClientWebHelper.facebook.height + ",top=0,left=" + (window.screen.width - ClientWebHelper.facebook.width) / 2;
            var url = "https://www.facebook.com/dialog/feed?" +
					"app_id=" + ClientWebHelper.facebook.appid +
					"&link=" + shareUrl +
                    "&redirect_uri=" + returnUrl;

            var w = window.open(url, "popup", features);          

			if(!w || w.closed || typeof w.closed=='undefined') { 
				Popup2.Show("Thông báo", "Trình duyệt bạn xài đang chặn popup. Vui lòng bỏ chặn để sử dụng chức năng này.", 500);
			}
        }
	},
    CompleteTutorial: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.CompleteTutorial
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            done: function () {
            },
            success: function (response) {
				if(callback) {
					callback(response);
				}
            },
            complete: function () {
            },
            error: function () {
            }
        });
    },
    EventBoxTop: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.EventBoxTop
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            done: function () {
            },
            success: function (response) {
                callback(response);
            },
            complete: function () {
            },
            error: function () {
            }
        });
    },
    showPopupUpdateMail: function () {
        var features, top, left
        var width = 500;
        var height = 500;
        left = (window.screen.width - width) / 2;
        top = (window.screen.height - height) / 2;
        features = "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
        var w = window.open('/Account/OpenBonusEmail', '', features);
        w.focus();
    },
    EventTracking: function (action, category, value) {
        try {
			if(category == 'Purchase') {
				fbq('trackCustom', category, { action: action, value: value, currency: 'VND' });
			}
			else {
				fbq('trackCustom', category, { action: action, value: value });
			}            
        } catch (e) {

        }

        try {
            ga('send', {
                hitType: 'event',
                eventCategory: category,
                eventAction: action,
                eventValue: value
            });
        } catch (e) {

        }
		/*
		try {
            database.ref(DATE_SYSTEM.substring(0, 10) + '/Actions/' + category).push({
				'userID': _0x1F.MyInfo.userID,
				'hitType': 'event',
				'eventCategory': category,
				'eventAction': action,
				'eventValue': value,
				'timeTracking': DATE_SYSTEM
			});
        } catch (e) {
			
        }
		*/
    },
    GetInfoOfUserBonusDailyDay: function (callback) {
        var request = createApiRequest({
            MethodName: "GetInfoOfUserBonusDailyDay",
        });
		
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
			
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình kết nối.", 500);
            }
        });
    },
    BonusDailyDay: function (callback) {
        var request = createApiRequest({
            MethodName: "BonusDailyDay",
        });
		
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
			
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình kết nối.", 500);
            }
        });
    },
    PopupUserShowAward: function () {
		return;
        var request = createApiRequest({
            MethodName: methodName.PopupUserAward,
            Data: {
                Is3D: IS_BC3D
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
			timeout: 3000,
            dataType: "json",
            success: function (response) {
				if (response.Code == 1 && ClientHtmlGameHelper.showPopupObtained) {
					ClientHtmlGameHelper.showPopupObtained(response.Data);
				}
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
            }
        });
    },
    PopupUserShowAwardBonus: function () {
		return;
        var request = createApiRequest({
            MethodName: methodName.PopupUserAwardBonus,
            Data: {
                Is3D: IS_BC3D
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
			timeout: 3000,
            dataType: "json",
            success: function (response) {
				if (response.Code == 1 && response.Data != null && response.Data.Award != null && response.Data.Award.length > 0 && ClientHtmlGameHelper.showPopupReward) {
					ClientHtmlGameHelper.showPopupReward(response.Data);
				}
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
            }
        });
    },
	GetListGame: function (callback) {
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: methodName.GetListGame,
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
			
            },
            error: function () {
                
            }
        });
    },
	GetListGameJackpot: function (callback) {
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: methodName.GetInfoJackPot,
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
			
            },
            error: function () {
                
            }
        });
    },
	GetListBannerLobby: function (id, callback) {
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: methodName.GetListBannerLobby,
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
				if (typeof callback == 'function') {
					callback(response);
				}
            },
            complete: function () {
			
            },
            error: function () {
                
            }
        });
    },
	ShowPopupEventDetail: function(id) {
		ClientWebHelper.showPopupEvent();
		setTimeout(function() {
			ClientWebHelper.GetListEventDetail(id, getDetailEvent)
		}, 1000);
	},
	ShowPopUpArticleDetail: function(title, id) {
		Loading.Show();
		$.get("/event/getarticledetail", { id: id }, function (data) {
			var html = '<div id="detailEvent-OhYea"><div class="tab-content ohyea__modal_content-body ohyea__tabs_content"><div class="ohyea__panel"><div class="ohyea__panel-content" id="event-div" style="border-radius: 5px;"><div class="event-content ohyea__panel-inner light" style="height: 426px;overflow-y:auto;">' + data + '</div></div></div></div></div>';			
            PopupOhYea3.Show(title, html, 0, 0);
        })
            .done(function () {
                Loading.Hide();
            });
	},
	showPopupUpdateProfile: function () {
        $.get("/Home/ShowPopupUpdatedInfoUser", { type: (IS_BC3D ? 1 : STYLE_POPUP) }, function (data) {
			if (STYLE_POPUP == 2) {
				PopupOhYea3.Show("CẬP NHẬT THÔNG TIN", data, 0, 0, function() {
					$(PopupOhYea3.md + " " + ".ohyea__modal_close").show();
				}, null);
				
				if (IS_UPDATE_PROFILE == false) {
					$(PopupOhYea3.md + " " + ".ohyea__modal_close").hide();
				}
			}
        })
        .done(function () {

        });
    },
	showPopupChangePass: function () {
        $.get("/Account/ChangePassword", { type: (IS_BC3D ? 1 : STYLE_POPUP) }, function (data) {
            PopupOhYeaTiny.Show("ĐỔI MẬT KHẨU", data, 0, 0);
        });
    },
    TopUserCoin: function (top, callback) {
        var request = createApiRequest({
            MethodName: methodName.TopUserCoin,
			Data: {
                Top: top
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            done: function () {
            },
            success: function (response) {
                callback(response);
            },
            complete: function () {
            },
            error: function () {
            }
        });
    },
    showPopupEventGiftCode: function () {
        Loading.Show();
        $.get("/Event/ListEvent", { type: (IS_BC3D ? 1 : STYLE_POPUP) }, function (data) {
            if (IS_BC3D)
                PopupInfo.Show("SỰ KIỆN", data, 500, 0, null, null, 2);
			else if (STYLE_POPUP == 2)
				PopupOhYea3.Show("SỰ KIỆN", data, 475, 0);
            else
                Popup.Show("SỰ KIỆN", data, 0, 1, null, null);
        })
            .done(function () {
                GetListEvent(1);
				activeTabGiftCode();
                Loading.Hide();
            });
    },
    ShowCalendarEvent: function () {
        $.ajax({
            type: "GET",
            url: "/Event/GetCalendarEvent",
            success: function (response) {                
                var option_fullcalendar = {
                    
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaDay,listWeek'
                    },
                    eventSources: [
                        {
                            events: JSON.parse(response)
                        }
                    ],
                    locale: 'vi',
                    durationEditable: true,
                    editable: false,
                    eventClick: function (calEvent, jsEvent, view) {
                        ClientWebHelper.ShowPopUpArticleDetail(calEvent.title, calEvent.link);
                    }
                };
                
                if ($(window).width() >= 1024) {
                    option_fullcalendar.height = 'parent';
                    option_fullcalendar.eventLimit = false;
                } else {
                    option_fullcalendar.eventLimit = true;
                    option_fullcalendar.views = {
                        agenda: {
                            eventLimit: 2,
                        },
                        month: {
                            eventLimit: 2
                        }
                    }
                }

                $('#ContainerCalendar').fullCalendar(option_fullcalendar);
            },
            complete: function (res) {
                
            },
            error: function (err) {
                
            }
        });
    },
    EventFreeSpin: function () {
        var request = createApiRequest({
            MethodName: methodName.EventFreeSpin,
            Data: {}
        });

        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
            },
            complete: function () {

            },
            error: function () {
              
            }
        });
    },
	LoadAvatarListUser: function(users, callback) {
		var request = createApiRequest({
            MethodName: methodName.AvatarListUser,
            Data: {
				Users: users
			}
        });

        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
				callback(response);
            },
            complete: function () {

            },
            error: function () {
              
            }
        });
	},
	showSendInbox: function (userID) {        
        $.get("/Home/ShowPopupSendInbox", { uid: userID, type: STYLE_POPUP }, function (data) {            
			switch (STYLE_POPUP) {
				default:
					PopupOhYea3.Show("GỬI TIN NHẮN", data, 583, 0);
					break;
			}
			
			if (userID == 0) {
				SendInbox.ReSendInbox();
			}
        });
    },
    DepositFeedbackItem: function (idPayment, serial, cardType, paymentType, cardAmount, errorDate, description, sign) {
        Loading.Show();
        $.ajax({
            type: "POST",
            url: "/Payment/DepositFeedbackItem",
            data: { 
				"idPayment": idPayment, 
				"serial": serial, 
				"cardType": cardType, 
				"paymentType": paymentType, 
				"cardAmount": cardAmount, 
				"errorDate": errorDate, 
				"description": description,
				"sign": sign
			},
            dataType: "json",
            success: function (response) {
                if (response._status == 0) {
                    PopupOhYea2.Show('Thành công', 'Cám ơn bạn đã gửi phản hồi cho chúng tôi !');
                    $("#" + idPayment).html("<b class='ohyea__color-yellow'>Đã gửi</b>");
                }
                else {
                    PopupOhYea2.Show("Lỗi", response._errors);
                }
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {

                PopupOhYea2.Show("Lỗi", "Có lỗi xảy ra trong quá trình xử lý");
            }
        });
    },
	GetCalendarEvent: function (callback) {
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: methodName.CalendarEvent,
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
			
            },
            error: function () {
                
            }
        });
    },
	ClickButtonVQ: function() {
		if (VQ_CONFIG == undefined || VQ_CONFIG == null) {
			return;
		}
		
		if (VQ_CONFIG.Code != 1) {
			ClientHtmlGameHelper.showPopupForWeb(2, VQ_CONFIG.Message);
			return;
		}
		
		ClientHtmlGameHelper.showPopupForWeb(1, '/vong-quay');
	},
	ToggleButtonSupport: function() {
		if($('.ButtonZopimChat:visible').length)
			$('.ButtonZopimChat').removeClass('show').hide();
		else
			$('.ButtonZopimChat').addClass('show').show();
	},	
	ActiveTabReportCardError: function() {
		$('#ButtonReportCardError')[0].click();
	},
	ClickButton: function(name) {
		var request = createApiRequest({
            MethodName: 'LinkRedirect',
			Data: {
				Name: name
			}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                if (response.Code == 1) {
					//ClientHtmlGameHelper.showPopupForWeb(1, response.Data);
					Loading.Hide();
					window.location.href = response.Data;
					return;
					var w = window.open(response.Data, '_blank');
			
					if(!w || w.closed || typeof w.closed=='undefined') { 
						PopupOhYea2.Show("Thông báo", "Trình duyệt bạn xài đang chặn popup. Vui lòng bỏ chặn để sử dụng chức năng này.");
						return;
					}
					
					w.focus();
					
					return;
				}
				
				PopupOhYea2.Show("Thông báo", response.Message);
            },
            complete: function () {
			
            },
            error: function () {
                
            }
        });
	},
	CheckFCookie: function (uuid, callback) {
		var request = createApiRequest({
			MethodName: "CheckFCookie",
			Data: { "fvalue": uuid }
		});
		
		$.ajax({
			type: "POST",
			url: global.ApiUrl,
			data: request,
			dataType: "json",
			success: function (response) {
				callback(response);
			},
			complete: function () {
				
			},
			error: function () {
				
			}
		});
	},
};
/* END ClientWebHelper */

var EventJackpot = function () {
	return;//123456789
    // Tạo biến gọi lên
    $.ajax({
        type: "POST",
        url: "/Event/E1606_Jackpot_Check",
        dataType: "json",
        success: function (response) {

            if (response.Code == 1) {
                $.get("/Event/Jackpot", { "content": response.Data.Description, "Id": response.Data.Id }, function (data) {
                    switch (STYLE_POPUP) {
						case 2:							
							PopupOhYea3.Show("THÔNG BÁO", data, 583, 0);
							break;
						default:
							Popup.Show("THÔNG BÁO", data, 0, 0, null, 285);
							break;
					}
                })
                    .done(function () {
                    });
            }
            //else {
            //    //console.log(response.Message);
            //}
        },
        complete: function () {

        },
        error: function () {
            //Popup2.Show("Error", "Có lỗi xảy ra.", 500);
        }
    });
};
var PhanTrangPopup = function (pageActive, pageSize, totalRow, tottalPagesMax, content, funtionNextPage) {
    var numberPage = 1;
    var phanTrang = "";
    var begginLink = 0;
    numberPage = Math.floor((totalRow / pageSize)); // tổng số dòng để hiện link 1 2 3 ...

    if ((totalRow % pageSize) > 0)
        numberPage++;
    var tottalPages = numberPage;// tổng số dòng thực
    // dấu <
    if (numberPage > tottalPagesMax) // chỉ cho hiện tối da x số
    {
        numberPage = tottalPagesMax;
    }
    begginLink = pageActive;
    numberPage = pageActive + tottalPagesMax - 1;
    if (numberPage >= tottalPages) {
        numberPage = tottalPages;
    }
    if ((numberPage - pageActive) <= tottalPagesMax && numberPage >= tottalPagesMax) {
        begginLink = numberPage - tottalPagesMax;
        if (begginLink == 0)
            begginLink = 1;
    }
    else if (numberPage == tottalPages && numberPage < tottalPagesMax) {
        begginLink = 1;
    }

    if (pageActive > 1 && tottalPages > tottalPagesMax) {
        var temp2 = pageActive - 1;
        phanTrang += "<li onclick=\"" + funtionNextPage + "(" + temp2 + ")\" id=\"phanTrangPre\"><a href=\"#\"    > < </a></li>";
        //// hiện số 1 và ...
        if (begginLink > 2) {
            phanTrang += "<li onclick=\"" + funtionNextPage + "(1)\" id=\"phanTrangBegin\"><a href=\"#\"    > 1 </a></li>";
            phanTrang += "<li id=\"phanTrangDotBegin\"><a href=\"#\"   > ... </a></li>";
        }

    }

    for (var i = begginLink; i <= numberPage; i++) {
        var temp = (i);
        if (pageActive >= i && pageActive < (i + 1)) {
            phanTrang += "<li class=\"active\" onclick=\"" + funtionNextPage + "(" + temp + ")\" id=\"phanTrang" + i + "\"><a href=\"#\"    >" + temp + "</a></li>";
        }
        else {
            phanTrang += "<li onclick=\"" + funtionNextPage + "(" + temp + ")\" id=\"phanTrang" + i + "\"><a href=\"#\"    >" + temp + "</a></li>";
        }
    }

    // dấu >
    if (pageActive < numberPage && numberPage < tottalPages) {
        pageActive = pageActive + 1;
        // hiện số cuối và...
        if (numberPage < (tottalPages - 2)) {
            phanTrang += "<li id=\"phanTrangDotEnd\"><a href=\"#\"   > ... </a></li>";
        }
        phanTrang += "<li  onclick=\"" + funtionNextPage + "(" + tottalPages + ")\" id=\"phanTrangEnd\"><a href=\"#\"   > " + tottalPages + " </a></li>";
        phanTrang += "<li onclick=\"" + funtionNextPage + "(" + pageActive + ")\" id=\"phanTrangNext\"><a href=\"#\"    > > </a></li>";
    }
    $("#" + content).html(phanTrang);
};
var PhanTrangPopupMobile = function (pageActive, pageSize, totalRow, tottalPagesMax, content, funtionNextPage) {
    var numberPage = 1;
    var phanTrang = "";
    var begginLink = 0;
    numberPage = Math.floor((totalRow / pageSize)); // tổng số dòng để hiện link 1 2 3 ...

    if ((totalRow % pageSize) > 0)
        numberPage++;
    var tottalPages = numberPage;// tổng số dòng thực
    // dấu <
    if (numberPage > tottalPagesMax) // chỉ cho hiện tối da x số
    {
        numberPage = tottalPagesMax;
    }
    begginLink = pageActive;
    numberPage = pageActive + tottalPagesMax - 1;
    if (numberPage >= tottalPages) {
        numberPage = tottalPages;
    }
    if ((numberPage - pageActive) <= tottalPagesMax && numberPage >= tottalPagesMax) {
        begginLink = numberPage - tottalPagesMax;
        if (begginLink == 0)
            begginLink = 1;
    }
    else if (numberPage == tottalPages && numberPage < tottalPagesMax) {
        begginLink = 1;
    }

    if (pageActive > 1 && tottalPages > tottalPagesMax) {
        var temp2 = pageActive - 1;
        phanTrang += "<li onclick=\"" + funtionNextPage + "(" + temp2 + ")\" id=\"phanTrangPre\"><a href=\"#\"    > < </a></li>";
        //// hiện số 1 và ...
        //if (begginLink > 2) {
        //    phanTrang += "<li onclick=\""+funtionNextPage+"(1)\" id=\"phanTrangBegin\"><a href=\"#\"    > 1 </a></li>";
        //    phanTrang += "<li id=\"phanTrangDotBegin\"><a href=\"#\"   > ... </a></li>";
        //}

    }

    for (var i = begginLink; i <= numberPage; i++) {
        var temp = (i);
        if (pageActive >= i && pageActive < (i + 1)) {
            phanTrang += "<li class=\"active\" onclick=\"" + funtionNextPage + "(" + temp + ")\" id=\"phanTrang" + i + "\"><a href=\"#\"    >" + temp + "</a></li>";
        }
        else {
            phanTrang += "<li onclick=\"" + funtionNextPage + "(" + temp + ")\" id=\"phanTrang" + i + "\"><a href=\"#\"    >" + temp + "</a></li>";
        }
    }

    // dấu >
    if (pageActive < numberPage && numberPage < tottalPages) {
        pageActive = pageActive + 1;
        // hiện số cuối và...
        //if (numberPage < (tottalPages - 2))
        //{
        //    phanTrang += "<li id=\"phanTrangDotEnd\"><a href=\"#\"   > ... </a></li>";
        //}
        //phanTrang += "<li  onclick=\""+funtionNextPage+"(" + tottalPages + ")\" id=\"phanTrangEnd\"><a href=\"#\"   > " + tottalPages + " </a></li>";
        phanTrang += "<li onclick=\"" + funtionNextPage + "(" + pageActive + ")\" id=\"phanTrangNext\"><a href=\"#\"    > > </a></li>";
    }
    $("#" + content).html(phanTrang);
};
//Phan trang OhYea - style khac PhanTrangPopup
var PhanTrangPopupOhYea = function (pageActive, pageSize, totalRow, tottalPagesMax, content, funtionNextPage) {
    var numberPage = 1;
    var phanTrang = "";
    var begginLink = 0;
    numberPage = Math.floor((totalRow / pageSize)); // tổng số dòng để hiện link 1 2 3 ...

    if ((totalRow % pageSize) > 0)
        numberPage++;
    var tottalPages = numberPage;// tổng số dòng thực
    // dấu <
    if (numberPage > tottalPagesMax) // chỉ cho hiện tối da x số
    {
        numberPage = tottalPagesMax;
    }
    begginLink = pageActive;
    numberPage = pageActive + tottalPagesMax - 1;
    if (numberPage >= tottalPages) {
        numberPage = tottalPages;
    }
    if ((numberPage - pageActive) <= tottalPagesMax && numberPage >= tottalPagesMax) {
        begginLink = numberPage - tottalPagesMax;
        if (begginLink == 0)
            begginLink = 1;
    }
    else if (numberPage == tottalPages && numberPage < tottalPagesMax) {
        begginLink = 1;
    }

    if (pageActive > 1 && tottalPages > tottalPagesMax) {
        var temp2 = pageActive - 1;
        phanTrang += "<a href=\"javascript:void(0)\" class=\"ohyea__pagging--item\" onclick=\"" + funtionNextPage + "(" + temp2 + ")\" id=\"phanTrangPre\"><span> &nbsp;<&nbsp;  </span></a>";
        //// hiện số 1 và ...
        if (begginLink > 2) {
            phanTrang += "<a href=\"javascript:void(0)\" class=\"ohyea__pagging--item\" onclick=\"" + funtionNextPage + "(1)\" id=\"phanTrangBegin\"><span> 1 </span></a>";
            phanTrang += "<a href=\"javascript:void(0)\" class=\"ohyea__pagging--item\" id=\"phanTrangDotBegin\"><span> ... </span></a>";
        }

    }

    for (var i = begginLink; i <= numberPage; i++) {
        var temp = (i);
        if (pageActive >= i && pageActive < (i + 1)) {
            phanTrang += "<a href=\"javascript:void(0)\" class=\"ohyea__pagging--item active\" onclick=\"" + funtionNextPage + "(" + temp + ")\" id=\"phanTrang" + i + "\"><span>" + temp + "</span></a>";
        }
        else {
            phanTrang += "<a href=\"javascript:void(0)\" class=\"ohyea__pagging--item\" onclick=\"" + funtionNextPage + "(" + temp + ")\" id=\"phanTrang" + i + "\"><span>" + temp + "</span></a>";
        }
    }

    // dấu >
    if (pageActive < numberPage && numberPage < tottalPages) {
        pageActive = pageActive + 1;
        // hiện số cuối và...
        if (numberPage < (tottalPages - 2)) {
            phanTrang += "<a href=\"javascript:void(0)\" class=\"ohyea__pagging--item\" id=\"phanTrangDotEnd\"><span> ... </span></a>";
        }
        phanTrang += "<a href=\"javascript:void(0)\" class=\"ohyea__pagging--item\" onclick=\"" + funtionNextPage + "(" + tottalPages + ")\" id=\"phanTrangEnd\"><span> " + tottalPages + " </span></a>";
        phanTrang += "<a href=\"javascript:void(0)\" class=\"ohyea__pagging--item\" onclick=\"" + funtionNextPage + "(" + pageActive + ")\" id=\"phanTrangNext\"><span> &nbsp;>&nbsp; </span></a>";
    }
    $("#" + content).html(phanTrang);
};
function GetFlashVarBanCa() {
    var request = createApiRequest({
        MethodName: "GetFlashVar",
        Data: IS_BC3D ? "ban-ca-3d" : "ban-ca"
    });
    $.ajax({
        type: "POST",
        url: global.ApiUrl,
        data: request,
        dataType: "json",
        done: function () {
        },
        success: function (response) {

            if (response.Code == 1) {

                var info = response.Data;

                ClientHtmlGameHelper.loginMaster(info.userId, info.email, "", info.flashVar);
            }

        },
        complete: function () {
        },
        error: function () {
            return;
        }
    });
}

var LuckySpinWebHelper = {
    NotifyMessage: function (data) { },
    getUserInfo: function (callback) {
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "getUserInfo",
            Data: {}
        });

        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào
                if (response.Code == 1) {
                    callback(response);
                } else {
                    //Popup2.Show("Thông Báo", response.Message);
                    LuckySpinWebHelper.NotifyMessage(response.Message);
                }
            },
            complete: function () {

            },
            error: function () {
                LuckySpinWebHelper.NotifyMessage("Có lỗi xảy ra trong quá trình lấy thông tin user.");
            }
        });
    },
    spin: function (callback, itemUserchoice, matchId) {
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "Spin",
            Data: { "ItemUserchoice": itemUserchoice, "MatchId": matchId }
        });

        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào
                if (response.Code == 1) {
                    callback(response.Data);
                } else {
                    LuckySpinWebHelper.NotifyMessage(response.Message);
                }
            },
            complete: function () {
            },
            error: function () {
                LuckySpinWebHelper.NotifyMessage("Có lỗi xảy ra trong quá trình quay thưởng.");
            }
        });
    },
    buySpin: function (buySpinID, callback) {
        // Tạo biến gọi lên
        //var request = createApiRequest({
        //    MethodName: "BuySpin",
        //    Data: { "BuySpinID": buySpinID }
        //});
        //$.ajax({
        //    type: "POST",
        //    url: global.ApiUrl, 
        //    data: request,
        //    dataType: "json",
        //    success: function (response) {

        //        if (response.Code == 1) {
        //            callback(response.Data);
        //            if (response.Data.Success == 1) {
        //               // Popup2.Show("Thông Báo", response.Message);

        //                LuckySpinWebHelper.NotifyMessage(response.Message);
        //            }
        //        } else {
        //            LuckySpinWebHelper.NotifyMessage(response.Message);
        //        }

        //    },
        //    complete: function () {

        //    },
        //    error: function () {
        //        LuckySpinWebHelper.NotifyMessage("Có lỗi xảy ra trong quá trình mua lượt chơi.");
        //    }
        //});
    },
    showPopupUserInfo: function (userId) {
        showProfile(userId);
    },
    registerBroadcastFunc: function (callback) {
    },
    openPopup: function (Message) {
        Popup2.Show("Thông Báo", Message);
    },
    registerNotifyFunc: function (callback) {
        LuckySpinWebHelper.NotifyMessage = callback;
    },
    showPopupHistorySpin: function () {
        $.get("/Account/HistorySpin", {}, function (data) {
            Popup.Show("LỊCH SỬ VQMM", data, 0, 0, null);
        })
            .done(function () {

            });
    },
    getDepositInfo: function (callback) {
        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "GetDepositInfo",
            Data: {}
        });

        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                //ProcessLogin(response, type);
                // Nếu dữ liệu là hợp lệ [response.Code == 1] thì callback về và truyền dữ liệu vào
                // call back là một method từ ngoài truyền vào
                if (response.Code == 1) {
                    callback(response.Data);
                } else {
                    LuckySpinWebHelper.NotifyMessage(response.Message);
                }
            },
            complete: function () {
            },
            error: function () {
                LuckySpinWebHelper.NotifyMessage("Có lỗi xảy ra trong quá trình quay thưởng.");
            }
        });
    },
    getListHistorySpin: function (userId, pageindex, pagelenght, appId, callback) {

        // Tạo biến gọi lên
        var request = createApiRequest({
            MethodName: "GetListHistorySpin",
            Data: { "UserID": userId, "PageIndex": pageindex, "PageLenght": pagelenght, "AppID": appId }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình lấy lịch sử vòng quay.", 500);
            }
        });
    },
    getTopUserRecent: function (callback) {
        var request = createApiRequest({
            MethodName: "GetTopUserRecent",
            Data: {}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                if (response.Code == 1) {
                    callback(response.Data);
                } else {
                    LuckySpinWebHelper.NotifyMessage(response.Message);
                }
            },
            complete: function () {
            },
            error: function () {
                LuckySpinWebHelper.NotifyMessage("Có lỗi xảy ra trong quá trình lấy danh sách.");
            }
        });
    },
    getTopUserInMonth: function (callback) {
        var request = createApiRequest({
            MethodName: "GetTopUserInMonth",
            Data: {}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                if (response.Code == 1) {
                    callback(response.Data);
                } else {
                    LuckySpinWebHelper.NotifyMessage(response.Message);
                }
            },
            complete: function () {
            },
            error: function () {
                LuckySpinWebHelper.NotifyMessage("Có lỗi xảy ra trong quá trình lấy danh sách.");
            }
        });
    },
    showPopupLuckySpinIntro: function () {
        $.get("/Account/LuckySpinIntro", {}, function (data) {
            Popup.Show("HƯỚNG DẪN", data, 0, 0, null);
        })
            .done(function () {

            });
    },
};

$('.allownumericwithdecimal')
      .keydown(function (e) {
          // Allow: backspace, delete, tab, escape, enter and .
          if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
              // Allow: Ctrl+A
              (e.keyCode == 65 && e.ctrlKey === true) ||
              // Allow: Ctrl+C
              (e.keyCode == 67 && e.ctrlKey === true) ||
              // Allow: Ctrl+X
              (e.keyCode == 88 && e.ctrlKey === true) ||
              // Allow: home, end, left, right
              (e.keyCode >= 35 && e.keyCode <= 39)) {
              // let it happen, don't do anything
              return;
          }
          // Ensure that it is a number and stop the keypress
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
          }
      });

var HistoryMiniBossPage = 1;
var HistoryMiniBossIsExchange = 0;
var HistoryMiniBoss = {
    Init: function () {
        $('.ContainerHistoryMiniBoss').slimScroll({
            width: '100%',
            height: '310px',
            color: '#ffed51',
            railOpacity: 0.1
        });

        if ($('.ContainerHistoryMiniBoss ul.ContainerBlock li').length >= $('.ContainerHistoryMiniBoss ul.ContainerBlock').data('total')) {
            return;
        }

        $('.ContainerHistoryMiniBoss').on('scroll', function () {
            HistoryMiniBossPage = 1;
            HistoryMiniBoss.Load();
        });
    },
    Show: function (type) {
        HistoryMiniBossIsExchange = 0;
        Loading.Show();

        if (type == undefined || type < 0) {
            type = -1;
        }

        $.get("/Account/HistoryMiniBoss", { type: type }, function (data) {
            Popup.Show("HỘP QUÀ", data, 750, 0);

            $('#DropDownListTypeMiniBoss').change(function () {
                HistoryMiniBossPage = 1;
                HistoryMiniBoss.Show($(this).val());
            })
            .val(type);
        })
        .done(function () {
            Loading.Hide();
        }).fail(function () {
            Loading.Hide();
        });
    },
    ShowExchange: function (type) {
        HistoryMiniBossIsExchange = 1;
        Loading.Show();

        if (type == undefined || type < 0) {
            type = -1;
        }

        $.get("/Account/HistoryMiniBoss", { type: type }, function (data) {
            $('#ContainerDataBoxMiniBoss').html(data);

            $('#DropDownListTypeMiniBoss').change(function () {
                HistoryMiniBossPage = 1;
                if (HistoryMiniBossIsExchange == 0) {
                    HistoryMiniBoss.Show($(this).val());
                }
                else {
                    HistoryMiniBoss.ShowExchange($(this).val());
                }
            })
            .val(type);
        })
        .done(function () {
            Loading.Hide();
        }).fail(function () {
            Loading.Hide();
        });
    },
    Reward: function (id, sign) {
        Loading.Show();

        $.ajax({
            type: 'POST',
            url: '/Account/RewardMiniBoss',
            data: { id: id, sign: sign },
            dataType: 'json',
            success: function (result) {
                if (result.code != 1) {
                    Popup2.Show("Error", result.message, 500);
                    return;
                }

                $('#HistoryMiniBossReward' + id).remove();
                Popup2.Show("Thành công", result.message, 500);
            },
            error: function (result) {
                Popup2.Show("Error", "Có lỗi xảy ra trong quá trình xử lý.", 500);
            },
            complete: function (result) {
                Loading.Hide();
            }
        });
    },
    Load: function (type) {
        if (HistoryMiniBoss.element_in_scroll('.ContainerHistoryMiniBoss')) {            
            Loading.Show();
            $('.ContainerHistoryMiniBoss').unbind('scroll');

            $.ajax({
                type: 'POST',
                url: '/Account/GetHistoryMiniBoss',
                data: { type: type, page: (HistoryMiniBossPage + 1) },
                dataType: 'json',
                success: function (result) {
                    if (result.code != 1) {
                        Popup2.Show("Error", "Có lỗi xảy ra trong quá trình xử lý.", 500);
                        Loading.Hide();
                        return;
                    }

                    HistoryMiniBossPage++;

                    if (result.data == null || !result.data.length) {
                        Loading.Hide();
                        return;
                    }

                    var html = '';

                    for (var i = 0; i < result.data.length; i++) {
                        html += '<li style="height:185px;">';
                        html += '<img src="/content/images/miniboss/' + result.data[i].AwardType + '.png" alt="" /><div class="clearfix"></div>';
                        html += result.data[i].AwardName + '<br />';
                        html += result.data[i].KillTime;
                        if (result.data[i].AwardType == 1 && result.data[i].Sign.length > 0) {
                            html += '<a href="javascript:void(0)" onclick="HistoryMiniBoss.Reward(' + result.data[i].ID + ', \"' + result.data[i].Sign + '\")" id="HistoryMiniBossReward' + result.data[i].ID + '">Nhận thưởng</a>';
                        }
                        html += '</li>';
                    }

                    $('.ContainerHistoryMiniBoss ul.ContainerBlock').append(html);

                    if ($('.ContainerHistoryMiniBoss ul.ContainerBlock li').length < $('.ContainerHistoryMiniBoss ul.ContainerBlock').data('total')) {
                        setTimeout(function () {
                            $('.ContainerHistoryMiniBoss').on('scroll', HistoryMiniBoss.Load(type));
                            Loading.Hide();
                        }, 1000);
                    }
                    else {
                        Loading.Hide();
                        $('.ContainerHistoryMiniBoss').unbind('scroll');
                    }
                },
                error: function (result) {
                    $('.ContainerHistoryMiniBoss').unbind('scroll');
                    Popup2.Show("Error", "Có lỗi xảy ra trong quá trình xử lý.", 500);
                    Loading.Hide();
                }
            });
        };
    },
    element_in_scroll: function (elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
};


var CountDownTimer = function (elem) {
    if (elem.data('time').length > 0) {
        var countDownDate = new Date(elem.data('time')).getTime();

        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (days == 0 && hours == 0 && minutes == 0) {
                elem.html(seconds + ' giây ');
            }
            else if (days == 0 && hours == 0) {
                elem.html(minutes + ' phút ' + seconds + ' giây ');
            }
            else if (days == 0) {
                elem.html(hours + ' giờ ' + minutes + ' phút ' + seconds + ' giây ');
            }
            else {
                elem.html(days + ' ngày ' + hours + ' giờ ' + minutes + ' phút ' + seconds + ' giây ');
            }

            if (distance < 0) {
                clearInterval(x);
                elem.html('Hết hạn sử dụng');
            }
        }, 1000);
    }
    else {
        elem.html('Hết hạn sử dụng');
    }
}

var AutoTextFill = function (elem, maxFontSize) {
    setTimeout(function () {
        var fontSize = maxFontSize;
        var ourText = $('span:visible:first', elem);
        var maxHeight = $(elem).height();
        var maxWidth = $(elem).width();
        var textHeight;
        var textWidth;
        do {
            ourText.css('font-size', fontSize);
            textHeight = ourText.height();
            textWidth = ourText.width();
            fontSize = fontSize - 1;
        } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
        elem.css('font-size', fontSize);
        elem.css('height', maxHeight);
        elem.css('line-height', maxHeight + 'px');
    }, 500);
};

//các hàm dành cho game client


var MAX_SIZE_IMG_CLIENT_UPLOAD = 5;

var ClientHelper = {
    UploadImage: function (dataFile, userID, responseData) {
        if (!dataFile || dataFile == null || dataFile == '' || dataFile == undefined || dataFile.indexOf('data:image') < 0) {
            responseData({ code: -1, message: 'Hình tải lên không đúng' });
            return;
        }

        var sizeImage = Math.round(dataFile.length * 3 / 4);

        if (sizeImage <= 0 || (sizeImage / (1024 * 1024)) > MAX_SIZE_IMG_CLIENT_UPLOAD) {
            responseData({ code: -2, message: 'Dung lượng hình tải lên không đúng' });
            return;
        }

        Loading.Show();

        $.ajax({
            type: 'POST',
            url: '/ClientApi/UploadScreen',
            data: { dataFile: dataFile, userID: userID },
            dataType: 'json',
            success: function (result) {
                Loading.Hide();
                if (result.code == 1) {
                    responseData({ code: 1, message: 'Thành công', link: result.link });
                    return;
                }

                responseData({ code: result.code, message: result.message });
                return;
            },
            error: function (result) {
                Loading.Hide();
                responseData({ code: 0, message: 'Có lỗi xảy ra trong quá trình xử lý' });
                return;
            }
        });
    },
    UploadScreenCaptureEvent: function (dataFile, responseData) {
        if (!dataFile || dataFile == null || dataFile == '' || dataFile == undefined || dataFile.indexOf('data:image') < 0) {
            responseData({ code: -1, status: -1, message: 'Hình tải lên không đúng' });
            return;
        }

        var sizeImage = Math.round(dataFile.length * 3 / 4);

        if (sizeImage <= 0 || (sizeImage / (1024 * 1024)) > MAX_SIZE_IMG_CLIENT_UPLOAD) {
            responseData({ code: -2, status: -2, message: 'Dung lượng hình tải lên không đúng' });
            return;
        }

        Loading.Show();

        $.ajax({
            type: 'POST',
            url: '/ClientApi/UploadScreenCaptureEvent',
            data: { dataFile: dataFile },
            dataType: 'json',
            success: function (result) {
                Loading.Hide();
                if (result.code == 1) {
					responseData({ code: 1, status: 1, message: 'Thành công', link: result.link });					
                    ClientWebHelper.facebook.ShareCapture(result.ShareUrl, result.ReturnUrl);
					return;
                }
					
				responseData({ code: result.code, message: result.message });
				return;
            },
            error: function (result) {
                Loading.Hide();
                responseData({ code: 0, status: 0, message: 'Có lỗi xảy ra trong quá trình xử lý' });
                return;
            }
        });
    },
    UploadUserAvatar: function (dataFile, userID, responseData) {
        if (!dataFile || dataFile == null || dataFile == '' || dataFile == undefined || dataFile.indexOf('data:image') < 0) {
            responseData({ code: -1, message: 'Hình tải lên không đúng' });
            return;
        }

        var sizeImage = Math.round(dataFile.length * 3 / 4);

        if (sizeImage <= 0 || (sizeImage / (1024 * 1024)) > MAX_SIZE_IMG_CLIENT_UPLOAD) {
            responseData({ code: -2, message: 'Dung lượng hình tải lên không đúng' });
            return;
        }

        Loading.Show();

        $.ajax({
            type: 'POST',
            url: '/ClientApi/UploadUserAvatar',
            data: { dataFile: dataFile, userID: userID },
            dataType: 'json',
            success: function (result) {
                Loading.Hide();
                if (result.code == 1) {
                    responseData({ code: 1, message: 'Thành công', link: result.link });
                    return;
                }

                responseData({ code: result.code, message: result.message });
                return;
            },
            error: function (result) {
                Loading.Hide();
                responseData({ code: 0, message: 'Có lỗi xảy ra trong quá trình xử lý' });
                return;
            }
        });
    },
    GetListItemTutorial: function (callback) {
        $.ajax({
            type: 'POST',
            url: '/ClientApi/MiniGameGetLink',
            dataType: 'json',
            success: function (result) {
                if (result.code == 1) {
                    callback(result.data);
                    return;
                }
            },
            error: function (result) {
                return;
            }
        });
    },
    GetListItemDetailTutorial: function (id, callback) {
        $.ajax({
            type: 'POST',
            url: '/ClientApi/MiniGameGetDetail',
            data: { id: id },
            dataType: 'json',
            success: function (result) {
                if (result.code == 1) {
                    callback(result.data);
                    return;
                }
            },
            error: function (result) {                
                return;
            }
        });
    },
    getIpInfoService: function (type, callback) {
        $.get("http://ip-api.com/json", function (data) {
            if (data != null && data.countryCode != null && data.countryCode.length > 0) {
                ClientHelper.saveCountryCode(type, data.countryCode, callback);
                return;
            }
        }).error(function (error) {
            $.get("http://freegeoip.net/json/", function (data) {
                if (data != null && data.country_code != null && data.country_code.length > 0) {
                    ClientHelper.saveCountryCode(type, data.country_code, callback);
                    return;
                }
            }).error(function (error) {
                $.get("https://ipinfo.io/json", function (data) {
                    if (data != null && data.country != null && data.country.length > 0) {
                        ClientHelper.saveCountryCode(type, data, callback);
                        return;
                    }
                }).error(function (error) {
                    callback(true, 429);
                    return;
                });
            });
        });
    },
    saveCountryCode: function (type, value, callback) {
		callback(true, 200);
        return;
        $.post("/ClientApi/SaveCountryCode", { type: type, value: value }, function (data) {
            if (data.code > 0) {
                callback(true, 200);
                return;
            }

            callback(true, 200);
            return;
        }).error(function (error) {
            callback(true, 429);
            return;
        });
    },
    checkCountryCode: function (type, callback) {
		callback(true, 200);
        return;
        $.post("/ClientApi/GetIpInfoIoData", { type: type }, function (data) {
            if (data.code == 1) {
                callback(true, 200);
                return;
            }

            ClientHelper.getIpInfoService(type, callback);
        });
    },
    showDoiWithCountry: function (callback) {
		callback("false");
		return;
        ClientHelper.checkCountryCode(0, function (enable, status) {
			if (status == 429) {
                callback("false");
                return;
            }

            if (enable) {
                $.get("/ClientApi/CheckShowDoiWithCountry", function (data) {
                    callback(data);
                });
            }
        });
    },
    showNapWithCountry: function (callback) {
		callback("true");
		return;
        ClientHelper.checkCountryCode(1, function (enable) {
            if (status == 429) {
                callback("false");
                return;
            }

            if (enable) {
                $.get("/ClientApi/CheckShowNapWithCountry", function (data) {
                    callback(data);
                });
            }
        });
    },
    showTinTucWithCountry: function (callback) {
		callback("true");
		return;
        ClientHelper.checkCountryCode(2, function (enable) {
            if (status == 429) {
                callback("false");
                return;
            }

            if (enable) {
                $.get("/ClientApi/CheckShowTinTucWithCountry", function (data) {
                    callback(data);
                });
            }
        });
    },
    showEventWithCountry: function (callback) {
		callback("true");
		return;
        ClientHelper.checkCountryCode(3, function (enable) {
            if (status == 429) {
                callback("false");
                return;
            }

            if (enable) {
                $.get("/ClientApi/CheckShowEventWithCountry", function (data) {
                    callback(data);
                });
            }
        });
    }
};

var HTML5WebHelper = {
    UploadImage: function(dataFile, userID, responseData) {
        ClientHelper.UploadImage(dataFile, userID, responseData);
    },
    UploadUserAvatar: function (dataFile, userID, responseData) {
        ClientHelper.UploadUserAvatar(dataFile, userID, responseData);
    },
    ShowDoiWithCountry: function (responseData) {
        ClientHelper.showDoiWithCountry(responseData);
    },
    ShowNapWithCountry: function (responseData) {
        ClientHelper.showNapWithCountry(responseData);
    },
    ShowTinTucWithCountry: function (responseData) {
        ClientHelper.showTinTucWithCountry(responseData);
    },
    ShowEventWithCountry: function (responseData) {
        ClientHelper.showEventWithCountry(responseData);
    }
}

var MiniGameHTML5 = {
    GetListItemTutorial: function (callback) {
        ClientHelper.GetListItemTutorial(callback);
    },
    GetListItemDetailTutorial: function (id, callback) {
        ClientHelper.GetListItemDetailTutorial(id, callback)
    }
}

var MiniGameMasterHelper = {
    Load: function () {
        $.get('/Game/MasterMiniGameMenuLoad', { parent: window.location.href }, function (response) {
            $('#MasterMiniGameMenuContainer').html(response);
        });

        $.get('/Game/MasterMiniGameLoad', { parent: window.location.href }, function (response) {
            $('#MasterMiniGameContainer').html(response);
        });
    }
}

var EventSubmitCode = {
    OnBegin: function () {
        if ($('#TextBoxCodeEventSubmitCode').val() == '') {
			if (IS_BC3D) {
				Popup2.Show('Thông báo', 'Vui lòng nhập Mã code', 320, 0);
			}
			else if (STYLE_POPUP == 2) {
				PopupOhYea2.Show("Thông báo", "Vui lòng nhập Mã code", 500);
			}
			else {
				Popup2.Show('Thông báo', 'Vui lòng nhập Mã code', 320, 0);
			}
            return false;
        }

        if ($('#TextBoxCaptchaEventSubmitCode').val() == '') {
			if (IS_BC3D) {
				Popup2.Show('Thông báo', 'Vui lòng nhập Mã xác nhận', 320, 0);
			}
			else if (STYLE_POPUP == 2) {
				PopupOhYea2.Show('Thông báo', 'Vui lòng nhập Mã xác nhận', 320);
			}
			else {
				Popup2.Show('Thông báo', 'Vui lòng nhập Mã xác nhận', 320, 0);
			}
            return false;
        }

        Loading.Show();
    },
    OnSuccess: function (result) {
        $('#TextBoxCodeEventSubmitCode').val('');
        $('#TextBoxCaptchaEventSubmitCode').val('');
        $('#ImageCaptchaEventSubmitCode').attr('src', $('#ImageCaptchaEventSubmitCode').data('src') + '&v=' + new Date().getTime());
		
		if (IS_BC3D) {
			Popup2.Show('Thông báo', result.message, 320, 0);
		}
		else if (STYLE_POPUP == 2) {
			PopupOhYea2.Show('Thông báo', result.message, 320);
		}
		else {
			Popup2.Show('Thông báo', result.message, 320, 0);
		}            

        if (result.code == 1) {
            $('#ContainerEventSubmitCode .ContainerEventSubmitCode').remove();
            $('#ContainerEventSubmitCode').html('<div class="tab-content col-xs-12 col-sm-12 ContainerEventSubmitCode" style="margin: 10px 0 15px;"><div class="col-sm-12 col-xs-12 form-group"><span style="color: #fff;">Chúc mừng bạn đã trúng thưởng. 1 nick chỉ được trúng 1 gift code trong ngày</span></div></div>')
        }
    },
    OnComplete: function () {
        Loading.Hide();
    }
};

var Jackpot2 = {
    FlashVar: "",
    JackpotType: -1,	
    Jackpot2GetTop: function (callback, top, type) {
        var request = createApiRequest({
            MethodName: methodName.Jackpot2GetAllTop,
            Data: {
                Top: top, Type: type
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    Jackpot2GetAllCoin: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.Jackpot2GetAllCoin,
            Data: {}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },

    Jackpot2CountTicket: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.Jackpot2CountTicket,
            Data: {}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                if (response.Data != null)
                    Jackpot2.FlashVar = response.Data.ArrMD5;
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    Jackpot2UpdateJackpotType: function (callback, ticketID, jackpotType) {
        var request = createApiRequest({
            MethodName: methodName.Jackpot2UpdateJackpotType,
            Data: {
                TicketID: ticketID,
                JackpotType: jackpotType,
                FlashVar: Jackpot2.FlashVar
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                Jackpot2.JackpotType = jackpotType;
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    Jackpot2OpenCard: function (callback, ticketID, indexOpen) {
        var request = createApiRequest({
            MethodName: methodName.Jackpot2OpenCard,
            Data: {
                TicketID: ticketID,
                IndexOpen: indexOpen,
                FlashVar: Jackpot2.FlashVar,
                JackpotType: Jackpot2.JackpotType
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
}


var BattleShipHelper = {
    FlashVar: "",
    BSUserInfo: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.BSUserInfo,
            Data: {}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    BSUserExchangeItem: function (callback, type, quantity) {
        var request = createApiRequest({
            MethodName: methodName.BSUserExchangeItem,
            Data: {
                Type: type,
                Quantity: quantity
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    BSGetConfig: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.BSGetConfig,
            Data: {}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    BSExchangeGetConfig: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.BSExchangeGetConfig,
            Data: {}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                if (response.Data != null)
                    Jackpot2.FlashVar = response.Data.ArrMD5;
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    BSExchangeUserLog: function (callback, type, fromType, startIndex, pageLength) {
        var request = createApiRequest({
            MethodName: methodName.BSExchangeUserLog,
            Data: {
                Type: type,
                FromType: fromType,
                StartIndex: startIndex,
                PageLength: pageLength
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    BSUserAttackLog: function (callback, isKilled, startIndex, pageLength) {
        var request = createApiRequest({
            MethodName: methodName.BSUserAttackLog,
            Data: {
                IsKilled: isKilled,
                StartIndex: startIndex,
                PageLength: pageLength
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    BSUserDefenseLog: function (callback, isKilled, startIndex, pageLength) {
        var request = createApiRequest({
            MethodName: methodName.BSUserDefenseLog,
            Data: {
                IsKilled: isKilled,
                StartIndex: startIndex,
                PageLength: pageLength
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    BSUserCollectLog: function (callback, startIndex, pageLength) {
        var request = createApiRequest({
            MethodName: methodName.BSUserCollectLog,
            Data: {
                StartIndex: startIndex,
                PageLength: pageLength
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
}

var DailyBonusClientWebHelper = {
    GetList: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.DailyBonusGetList
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    Receive: function (ID, type, callback) {
        var request = createApiRequest({
            MethodName: methodName.DailyBonusReceive,
            Data: {
                ID: ID,
                Type: type
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    }
}

var GoldenHoursClientWebHelper = {
    UserInfo: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.GoldenHoursUserInfo
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    Receive: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.GoldenHoursReceive
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
				
				//if(response.Code == 2) {
				//	Popup2.Show("Thông báo", response.Message, 500);
				//}
            },
            complete: function () {

            },
            error: function () {

            }
        });
    }
}

var ItemUserClientWebHelper = {
    GetInfo: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.ItemUserGetInfo,
            Data: {
                Is3D: IS_BC3D
			}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    UserActiveItem: function (itemID, callback) {
        var request = createApiRequest({
            MethodName: methodName.ItemUserActiveItem,
            Data: {
                ItemID: itemID
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    }
}

var DailyMissionClientWebHelper = {
    UserInfo: function (callback) {
		callback({"Result":2,"Code":2,"Message":"No data","Data":null});
        /*
		var request = createApiRequest({
            MethodName: methodName.DailyMissionUserInfo
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
		*/
    },
    Receive: function (type, callback) {
		callback({"Result":2,"Code":2,"Message":"Error","Data":{"Status":0}});
		/*
        var request = createApiRequest({
            MethodName: methodName.DailyMissionReceive,
            Data: {
                Type: type
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
		*/
    }
}

var AchievementClientWebHelper = {
    UserInfo: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.AchievementUserInfo,
            Data: {
				Is3D: IS_BC3D
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
	UserInfoV2: function (Type,GameId,callback) {
		ClientWebHelper.EventTracking('Click', 'Achi', ('Fillter_' + Type + '_game_' + GameId));		
        var request = createApiRequest({
            MethodName: methodName.AchievementUserInfoFillter,
            Data: {
                Type: Type,
                Gameid:GameId
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
	UserInfoVia: function (UserID,Type,GameId,callback) {
		ClientWebHelper.EventTracking('Click', 'Achi', ('Fillter_' + Type + '_game_' + GameId));		
        var request = createApiRequest({
            MethodName: methodName.AchievementUserInfoFillterVia,
            Data: {
				UserID: UserID,
                Type: Type,
                Gameid:GameId
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    Receive: function (id, star, callback) {
        var request = createApiRequest({
            MethodName: methodName.AchievementReceive,
            Data: {
                ID: id,                
                Star: star,
				Is3D: IS_BC3D
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    ShareFB: function (id, star, callback) {
        var request = createApiRequest({
            MethodName: methodName.AchievementShare,
            Data: {
                ID: id,
                Star: star,
				Is3D: IS_BC3D
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                if (response.Code == 1) {
                    ClientWebHelper.facebook.ShareLink(response.Data.ShareUrl, function(){
						ga('send', 'event', 'Achi', 'Share', (id + '_' + star));
					});					
                }
				
				callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    LoginRepeat: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.AchievementLoginRepeat
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    LevelUp: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.AchievementLevelUp
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    VipUp: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.AchievementVipUp
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    AchievementFeatured: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.AchievementFeatured
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    AchievementFeaturedVia: function (userID, callback) {
        var request = createApiRequest({
            MethodName: methodName.AchievementFeaturedVia,
			Data: {
				UserID: userID
			}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
	AchievementSummary: function (callback) {
		ClientWebHelper.EventTracking('Click', 'Achi', 'Summary');
		
        var request = createApiRequest({
            MethodName: methodName.AchievementSummary
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
	AchievementSummaryVia: function (userID, callback) {
		ClientWebHelper.EventTracking('Click', 'Achi', 'Summary');
		
        var request = createApiRequest({
            MethodName: methodName.AchievementSummaryVia,
			Data: {
				Is3D: IS_BC3D,
				UserID: userID
			}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
	AchievementTopUser: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.AchievementTopUser,
			Data: {
				Top: 10
			}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
}

var UserInfoClientWebHelper = {
    LoadInfo: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.PopupUserInfoLoadInfo,
			Data: {
				Is3D: IS_BC3D
			}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    LoadEmail: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.PopupUserInfoLoadInfoEmail
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    LoadPhone: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.PopupUserInfoLoadInfoPhone
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    LoadCMND: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.PopupUserInfoLoadInfoCMND
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    UpdateEmail: function (value, callback) {
        var request = createApiRequest({
            MethodName: methodName.PopupUserInfoUpdateEmail,
            Data: {
                Value: value
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    UpdatePhone: function (value, callback) {
        var request = createApiRequest({
            MethodName: methodName.PopupUserInfoUpdatePhone,
            Data: {
                Value: value
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    UpdateCMND: function (value, callback) {
        var request = createApiRequest({
            MethodName: methodName.PopupUserInfoUpdateCMND,
            Data: {
                Value: value
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    UpdatePass: function (oldPass, newPass, callback) {
        var request = createApiRequest({
            MethodName: methodName.PopupUserInfoUpdatePassword,
            Data: {
                NewPass: newPass,
                OldPass: oldPass
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    LoadInfoUserViaID: function (userID, callback) {
        var request = createApiRequest({
            MethodName: methodName.PopupUserInfoLoadInfoUserViaID,
            Data: {
                UserID: userID,
				Is3D: IS_BC3D
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    LoadBonusNewUser: function ( callback) {
        var request = createApiRequest({
            MethodName: methodName.PopupUserInfoLoadBonusNewUser
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
	LoadAvatarListUser: function(users, callback) {
		var request = createApiRequest({
            MethodName: methodName.AvatarListUser,
            Data: {
				Users: users
			}
        });

        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
				callback(response);
            },
            complete: function () {

            },
            error: function () {
              
            }
        });
	},
}

var ReachLevelClientWebHelper = {
    UserInfo: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.ReachLevelUserInfo
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    Receive: function (code, callback) {
        var request = createApiRequest({
            MethodName: methodName.ReachLevelReceive,
            Data: {
                Code: code
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    }
}

var VipClientWebHelper = {
    VipReceiveBonus: function (levelVip, callback) {
        var request = createApiRequest({
            MethodName: methodName.VipReceiveBonus,
            Data: {
                LevelVip: levelVip
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    VipInfoUser: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.VipInfoUser
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },

    VipDetail: function (vip,callback) {
        var request = createApiRequest({
            MethodName: methodName.VipDetail,
            Data: {
                Vip: vip
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    JackpotInGame: function (gameId, callback) {
        var request = createApiRequest({
            MethodName: methodName.VipJackPot,
            Data: {
                GameId: gameId
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    VipTopPointMonth: function (top, callback) {
        var request = createApiRequest({
            MethodName: methodName.VipTopPointMonth,
            Data: {
                Top: top
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
			timeout: 3000,
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    VipBonusUserPrivate: function () {
        var request = createApiRequest({
            MethodName: methodName.VipBonusUserPrivate,
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
			timeout: 3000,
            success: function (response) {
				if (response.Code == 1) {
					if (IS_BC3D) {
						Popup2.Show('Thông báo', response.Message, 320, 0);
					}
					else if (STYLE_POPUP == 2) {
						PopupOhYea2.Show('Thông báo', response.Message, 320);
					}
					else {
						Popup2.Show('Thông báo', response.Message, 320, 0);
					}
				}
            },
            complete: function () {

            },
            error: function () {

            }
        });
    }
}

var AllEventWebHelper = {
    UserInfo: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.ShowListAward
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    Receive: function (LogId, callback) {
        var request = createApiRequest({
            MethodName: methodName.EventAward,
            Data: {
                LogId: LogId,
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
}

var CardSpinClientWebHelper = {
    UserDetail: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.CardSpinUserDetail,
            //Data: {
            //    VipLevel: vipLevel
            //}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },

    GetItems: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.CardSpinGetItems,
            //Data: {
            //    VipLevel: vipLevel
            //}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },

    GetUserWin: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.CardSpinGetUserWin,
            //Data: {
            //    VipLevel: vipLevel
            //}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
			async: true,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },

    ChooseDay: function (date, callback) {
        var request = createApiRequest({
            MethodName: methodName.CardSpinGetUserLog,
            Data: {
                Date: date
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },

    GetUserLog: function (date, callback) {
        var request = createApiRequest({
            MethodName: methodName.CardSpinGetUserLog,
            Data: {
                Date: date
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },

    Spin: function (cardType, callback) {
        var request = createApiRequest({
            MethodName: methodName.CardSpinDoSpin,
            Data: {
                CardType: cardType
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },

    GetItemRemain: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.CardSpinGetItemRemain,
            //Data: {
            //    VipLevel: vipLevel
            //}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
	
	Guide: function () {
		ClientWebHelper.showPopupEvent();
		setTimeout(function() {
			ClientWebHelper.GetListEventDetail(19726,getDetailEvent)
		}, 1000);
	},
	
	FAQ: function() {
		PopupOhYeaInfo.Show('HƯỚNG DẪN', '<img src="http://vuasanca.vn/content/images/vsc_vq_c.jpg" style="width:100%; height:100%;" />');
	},

    UserRemainTicket: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.CardSpinGetRemainTicket,
            //Data: {
            //    VipLevel: vipLevel
            //}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },

    CheckGameStatus: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.CardSpinCheckGameStatus,
            //Data: {
            //    VipLevel: vipLevel
            //}
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
	
    GetCardInMessage: function (id) {
        var request = createApiRequest({
            MethodName: methodName.CardSpinExportCardInMessage,
            Data: {
                MessID: id
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                if (response != null && response.Code == 1) {
                    $('#TitleContentEmail').html(response.Message);
                }
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
	
    RechargeCardInMessage: function (id) {
        var request = createApiRequest({
            MethodName: methodName.CardSpinRechargeCardInMessage,
            Data: {
                MessID: id
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                if (response != null && response.Code == 1) {
                    $('#TitleContentEmail').html(response.Message);
                }
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
}

var ShopOnlineClientWebHelper = {
    GetInfo: function (isCheckEvent, callback) {
        var request = createApiRequest({
            MethodName: methodName.ShopOnlineGetInfo,
            Data: {
                IsCheckEvent: isCheckEvent
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    History: function (callback) {
        var request = createApiRequest({
            MethodName: methodName.ShopOnlineHistory,
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
    BuyItem: function (itemID, quantity, type, callback) {
        var request = createApiRequest({
            MethodName: methodName.ShopOnlineBuyItem,
            Data: {
                ItemID: itemID,
                Quantity: quantity,
                Type: type
            }
        });
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {

            },
            error: function () {

            }
        });
    },
}

// #region Ohyea PopUp
var PopupOhYea = {
    title: ".ohyea__modal_title",
    subtitle: ".ohyea__subtitle",
    body: ".ohyea__modal_body",
    content: ".ohyea__modal_content",
    dialog: ".ohyea__modal_dialog",
    small: ".ohyea__modal_dialog--small",
    tiny: ".ohyea__modal_dialog--tiny",
	header: ".ohyea__modal_header",
    md: "#ohyea__md_large",
    EventClose: null,
    Show: function (title, content, width, hideheader, callbackhiden, height) {
        
        $(PopupOhYea.md + " .modal-body").html(content);
        PopupOhYea.EventClose = callbackhiden;
        $(PopupOhYea.md).modal("show");
		$(PopupOhYea.header).show();
    },
    Hide: function (callback) {
        $(PopupOhYea.md).modal("hide");
        setTimeout(function () { 
            $(PopupOhYea.md + " .modal-body").html("");
        }, 300);
        if (typeof callback == 'function') {
            callback();
        }
    },
};

var PopupOhYea2 = {
	header: ".ohyea__modal_header",
    md: "#ohyea__md_small",
    small_text: "#ohyea__md_small__text",
    EventClose: null,
    Show: function (title, content, width, hideheader, callbackhiden, height) {
		
        $(PopupOhYea2.md + " " + PopupOhYea.subtitle).html(title);
        $(PopupOhYea2.md + " " + PopupOhYea.subtitle).attr('data-text', title);
        $(PopupOhYea2.md + " " + PopupOhYea2.small_text).html(content);

        PopupOhYea2.EventClose = callbackhiden;
        $(PopupOhYea2.md).modal("show");
        $(PopupOhYea2.header).show();
    },
    Hide: function (callback) {
        $(PopupOhYea2.md).modal("hide");
        setTimeout(function () { 
            $(PopupOhYea2.md + " " + PopupOhYea.subtitle).html("");
			$(PopupOhYea2.md + " " + PopupOhYea.subtitle).attr('data-text', "");
			$(PopupOhYea2.md + " " + PopupOhYea2.small_text).html("");
        }, 300);
        if (typeof callback == 'function') {
            callback();
        }
    },
};
var PopupBannerBig = {
	header: ".ohyea__modal_header",
    md: "#ohyea__md_bg_banner_big",
    EventClose: null,
    Show: function (hideheader, callbackhiden, height) {       
        PopupBannerBig.EventClose = callbackhiden;
        $(PopupBannerBig.md).modal("show");
    },
    Hide: function (callback) {
        $(PopupOhYea3.md).modal("hide");
			setTimeout(function () {           
        }, 300);
        if (typeof callback == 'function') {
            callback();
        }
    },
};
var PopupOhYea3 = {
	header: ".ohyea__modal_header",
    md: "#ohyea__md_bg",
    EventClose: null,
    Show: function (title, content, width, hideheader, callbackhiden, height) {
        
        $(PopupOhYea3.md + " " + PopupOhYea.title).html(title);
        $(PopupOhYea3.md + " " + PopupOhYea.title).attr('data-text', title);
        $(PopupOhYea3.md + " " + PopupOhYea.body).html(content);
        PopupOhYea3.EventClose = callbackhiden;
        $(PopupOhYea3.md).modal("show");
        $(PopupOhYea3.header).show();
    },
    Hide: function (callback) {
        $(PopupOhYea3.md).modal("hide");
        setTimeout(function () { 
            $(PopupOhYea3.md + " " + PopupOhYea.title).html("");
			$(PopupOhYea3.md + " " + PopupOhYea.title).attr('data-text', "");
			$(PopupOhYea3.md + " " + PopupOhYea.body).html("");
        }, 300);
        if (typeof callback == 'function') {
            callback();
        }
    },
};

var PopupOhYeaInfo = {
	header: ".ohyea__modal_header",
    md: "#ohyea__md_info",
    EventClose: null,
    Show: function (title, content, width, hideheader, callbackhiden, height) {
        
        $(PopupOhYeaInfo.md + " " + PopupOhYea.title).html(title);
        $(PopupOhYeaInfo.md + " " + PopupOhYea.title).attr('data-text', title);
        $(PopupOhYeaInfo.md + " " + PopupOhYea.body).html(content);
        PopupOhYeaInfo.EventClose = callbackhiden;
        $(PopupOhYeaInfo.md).modal("show");
        $(PopupOhYeaInfo.header).show();
    },
    Hide: function (callback) {
        $(PopupOhYeaInfo.md).modal("hide");
        setTimeout(function () { 
            $(PopupOhYeaInfo.md + " " + PopupOhYea.title).html("");
			$(PopupOhYeaInfo.md + " " + PopupOhYea.title).attr('data-text', "");
			$(PopupOhYeaInfo.md + " " + PopupOhYea.body).html("");
        }, 300);
        if (typeof callback == 'function') {
            callback();
        }
    },
};

var PopupOhYeaTiny = {
	header: ".ohyea__modal_header",
    md: "#ohyea__md_tiny",
    EventClose: null,
    Show: function (title, content, width, hideheader, callbackhiden, height) {
        
        $(PopupOhYeaTiny.md + " " + PopupOhYea.title).html(title);
        $(PopupOhYeaTiny.md + " " + PopupOhYea.title).attr('data-text', title);
        $(PopupOhYeaTiny.md + " " + PopupOhYea.body).html(content);
        PopupOhYeaTiny.EventClose = callbackhiden;
        $(PopupOhYeaTiny.md).modal("show");
        $(PopupOhYeaTiny.header).show();
    },
    Hide: function (callback) {
        $(PopupOhYeaTiny.md).modal("hide");
        setTimeout(function () { 
            $(PopupOhYeaTiny.md + " " + PopupOhYea.title).html("");
			$(PopupOhYeaTiny.md + " " + PopupOhYea.title).attr('data-text', "");
			$(PopupOhYeaTiny.md + " " + PopupOhYea.body).html("");
        }, 300);
        if (typeof callback == 'function') {
            callback();
        }
    },
};

function HidePopUpOhYeah(_id, callback) {
    $("#" + _id).modal("hide");
    $("#" + _id + " " + PopupOhYea.body).html("");
    if (typeof callback == 'function') {
        callback();
    }
}
// #endregion

var ValidateLoginOhYea = function () {
    var allow = true;
    var username = '' + $("#ohyea__md_tiny input[name=Username]").val();
    var pass = '' + $(" #ohyea__md_tiny input[name=Password]").val();

    if (username == '') {
        if (allow)
            $("#ohyea__md_tiny .ohyea-txt").html("Nhập tên đăng nhập");
        $("#ohyea__md_tiny input[name=Username]").focus();
        allow = false;
        return allow;
    } else {
        $("#ohyea__md_tiny .ohyea-txt").html("");
    }

    if (pass == '') {
        if (allow)
            $("#ohyea__md_tiny .ohyea-txt").html("Nhập mật khẩu");
        $("#ohyea__md_tiny .login input[name=Password]").focus();
        allow = false;
    } else {
        $("#ohyea__md_tiny .ohyea-txt").html("");
    }

    return allow;
};
var formLoginPartialOhYea = function () {

    var validate = ValidateLoginOhYea();
    if (validate == true) {
        // $("#fr-login .errorPassword,#fr-login .errorUsername,#fr-login .errorSum").html("");
        var username = '' + $("#ohyea__md_tiny #fr-login input[name=Username]").val();
        var pass = '' + $("#ohyea__md_tiny #fr-login input[name=Password]").val();
        var captcha = 123;
        var flashCookie = '' + $("#ohyea__md_tiny #fr-login input[name=FlashCookie]").val();
        var type = "";
        HomeLogin(username, pass, captcha, flashCookie, "");

    }

    return false;

    //return validate;
};

/* SEND INBOX */
var SendInbox = {	
    CheckInbox: function (userID, __id) {
        var _uid = $(__id).val();
        if (_uid !== undefined && _uid !== '') {
            if (isNaN(_uid)) {
                return this.Inbox_SetError('Mã tài khoản không hợp lệ, vui lòng kiểm tra lại...', '#txtSendInBox_ToAccount');
            } else {			
                if (+_uid == userID) {
                    return this.Inbox_SetError('Bạn không thể gửi tin nhắn cho chính bạn...', '#txtSendInBox_ToAccount');
                }

                $.ajax({
                    url: '/Home/CheckAccountInboxTo',
                    type: 'POST',
                    data: { toAccount: _uid },
                    beforeSend: function () {
                        $('.inbox_step1-loading').removeClass('hide');
                        SendInbox.Inbox_SetError('Đang kiểm tra...');
                    },
                    success: function (e) {
                        setTimeout(function () {
                            if (e.Code === 2) {
                                SendInbox.Inbox_SetError(e.Message, '#txtSendInBox_ToAccount');
                            }
                            else {
                                if (e.Code === 1) {
                                    $('.inbox_step1').addClass('hide');
                                    $('#fullnameInbox').html(e._errors);
                                    $('.inbox_step2').removeClass('hide');
                                    SendInbox.Inbox_SetError('');

                                    if (e.Data != null) {
                                        var _data = e.Data;
                                        $('#InboxReceive_DisplayName').html(_data.DisplayName);
                                        $('#InboxReceive_ID').html(_data.UserID);
                                        $('#InboxReceive_Email').html(_data.Email);
                                    }
                                    $('.inbox_step1__layout').removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                                    $('.inbox_step1__layout-2').removeClass('col-md-8 col-lg-8').addClass('col-md-6 col-lg-6');
                                    $('.send_inbox__error-step1').addClass('hide');
                                    $('.send_inbox__error-step2').removeClass('hide');
                                }
                            }
                            $('.inbox_step1-loading').addClass('hide');
                        }, 500);
                    }
                });
            }
        } else {
            return this.Inbox_SetError('Vui lòng nhập mã tài khoản nhận tin nhắn...', '#txtSendInBox_ToAccount');
        }
    },
    SendInbox: function () {
        var captchaInbox = $('#txtCaptchaInbox').val();
        var ToUserId = $('#txtSendInBox_ToAccount').val();
        var Message = $('#inbox_mess').val();
        var Title = $('#inbox_title').val();

        var _check = SendInbox.Check_SendInbox(Title, captchaInbox, Message);
        if (_check) {
            $.ajax({
                url: '/Home/SendInbox',
                type: 'POST',
                data: { fromAccount: 0, toAccount: ToUserId, message: Message, title: Title, captcha: captchaInbox },
                beforeSend: function () {
                    // Loading.Show();
                    $('#form_send_inbox').addClass('hide');
                    $('#form_sending_inbox').removeClass('hide');
                    // SendInbox.Inbox_SetError('Đang gửi tin nhắn của bạn...');
                },
                success: function (e) {
                    setTimeout(function () {
                        if (e._status === -1) {
                            SendInbox.Inbox_SetError(e._errors);
                            $('#form_sending_inbox').addClass('hide');
                            $('#form_send_inbox').removeClass('hide');
                        }
                        else {
                            if (e._status === 0) {
                                // gửi thành công
                                SendInbox.Inbox_SetError('');
                                // SendInbox.ResetInbox();
                                $('#form_sending_inbox').addClass('hide');
                                $('#form_send_inbox').addClass('hide');
                                $('#form_sent_inbox').removeClass('hide');
                                $('#form_sent_inbox_text').html(e._errors);
                            }
                        }
                    }, 500);
                },
                complete: function () {
                    refeshInboxCaptcha();
                }
            });
        }

        return false;
    },
    ReSendInbox: function () {
        // SendInbox.ResetInbox();
        $('#form_sending_inbox').addClass('hide');
        $('#form_send_inbox').removeClass('hide');
        $('#form_sent_inbox').addClass('hide');

        $('#form_send_inbox').find('input').val('');
        $('#form_send_inbox').find('textarea').val('');
        $('.inbox_step1__layout').removeClass('col-md-6 col-lg-6').addClass('col-md-4 col-lg-4');
        $('.inbox_step1__layout-2').removeClass('col-md-6 col-lg-6').addClass('col-md-8 col-lg-8');
        $('.inbox_step1').removeClass('hide');
        $('.inbox_step2').addClass('hide');
        $('.send_inbox__error-step1').removeClass('hide');
        $('.send_inbox__error-step2').addClass('hide');

        SendInbox.Inbox_SetError('', '#txtSendInBox_ToAccount');
        refeshInboxCaptcha();
    },
    Check_SendInbox: function (Title, captchaInbox, Message) {
        if (Title == undefined || Title === '' || Title.length == 0) {
            SendInbox.Inbox_SetError('Vui lòng nhập tiêu đề tin nhắn...', '#inbox_title');
            return false;
        }
        if (Title.length < 3) {
            SendInbox.Inbox_SetError('Tiêu đề tin nhắn quá ngắn...', '#inbox_title');
            return false;
        }
        if (Message == undefined || Message === '' || Message.length == 0) {
            SendInbox.Inbox_SetError('Vui lòng nhập nội dung tin nhắn...', '#inbox_mess');
            return false;
        }
        if (Title.length < 3) {
            SendInbox.Inbox_SetError('Nội dung tin nhắn quá ngắn...', '#inbox_mess');
            return false;
        }
        if (captchaInbox == undefined || captchaInbox === '' || captchaInbox.length < 3) {
            SendInbox.Inbox_SetError('Vui lòng kiểm tra lại mã xác nhận...', '#txtCaptchaInbox');
            return false;
        }
        return true;
    },
    ResetInbox: function () {
        $('#captchaInbox').val('');
        $('#toAccount').val('');
        $('#inbox_mess').val('');
        $('#inbox_title').val('');
        $('.inbox_step2').hide();
        $('.inbox_step1').show();
    },
    Inbox_SetError: function (__error, __focusId) {
        $('.send_inbox__error').html(__error);
        if (__focusId !== undefined && __focusId != '') {
            $(__focusId).focus();
        }
    }	
}
/* END SENDINBOX */

/* DEFENDER */
var ClientDefenderHelper = {
    UserCurrentResource: function (callback) {
        var request = createApiRequest({
            MethodName: "DefenderUserCurrentResource",
            Data: {},
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                //Popup2.Show("Error", "Có lỗi xảy ra trong quá trình đăng nhập.", 500);
                $("#modalPopup .errorSum").html("Có lỗi xảy ra trong quá trình khởi tạo.");
            }

        });
    },
    ListUpdateGun: function (GunKind, callback) {
        var request = createApiRequest({
            MethodName: "DefenderListUpdateGun",
            Data: { "GunKind": GunKind }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                //Popup2.Show("Error", "Có lỗi xảy ra trong quá trình đăng nhập.", 500);
                $("#modalPopup .errorSum").html("Có lỗi xảy ra trong quá trình khởi tạo.");
            }

        });
    },
    UserListGun: function (callback) {
        var request = createApiRequest({
            MethodName: "DefenderListGun",
            Data: {}
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                //Popup2.Show("Error", "Có lỗi xảy ra trong quá trình đăng nhập.", 500);
                $("#modalPopup .errorSum").html("Có lỗi xảy ra trong quá trình khởi tạo.");
            }

        });
    },
    UserListSkill: function (callback) {
        var request = createApiRequest({
            MethodName: "DefenderListSkill",
            Data: {}
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                //Popup2.Show("Error", "Có lỗi xảy ra trong quá trình đăng nhập.", 500);
                $("#modalPopup .errorSum").html("Có lỗi xảy ra trong quá trình khởi tạo.");
            }

        });
    },
    ActiveGun: function (listGun, callback) {
        var request = createApiRequest({
            MethodName: "DefenderActiveGun",
            Data: { "ActionGuns": JSON.stringify(listGun) }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                //Popup2.Show("Error", "Có lỗi xảy ra trong quá trình đăng nhập.", 500);
                $("#modalPopup .errorSum").html("Có lỗi xảy ra trong quá trình khởi tạo.");
            }

        });
    },
    ActiveSkill: function (listSkill, callback) {
        var request = createApiRequest({
            MethodName: "DefenderActiveSkill",
            Data: { "ActionSkills": JSON.stringify(listSkill) }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                //Popup2.Show("Error", "Có lỗi xảy ra trong quá trình đăng nhập.", 500);
                $("#modalPopup .errorSum").html("Có lỗi xảy ra trong quá trình khởi tạo.");
            }

        });
    },
    UpdateGun: function (GunKind, listResource, callback) {
        var request = createApiRequest({
            MethodName: "DefenderUpdateGun",
            Data: { "GunKind": GunKind, "ListResource": JSON.stringify(listResource) }
        });
        Loading.Show();
        $.ajax({
            type: "POST",
            url: global.ApiUrl,
            data: request,
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            complete: function () {
                Loading.Hide();
            },
            error: function () {
                //Popup2.Show("Error", "Có lỗi xảy ra trong quá trình đăng nhập.", 500);
                $("#modalPopup .errorSum").html("Có lỗi xảy ra trong quá trình khởi tạo.");
            }

        });
    },
};
/* END DEFENDER */
var lStorageHelper={read:function(e,r,t){if(this.check()){if(this.checkKey(e)){var o=localStorage.getItem(e);if(o&&null!=o&&""!=o)try{return r?JSON.parse(o):o}catch(e){t&&console.error("lStorage_ERROR: your data is broken")}return!1}return t&&console.error("lStorage_ERROR: your key is empty"),!1}},write:function(e,r,t,o){if(this.check()){if(!this.checkKey(e)||!r||null==r)return o&&console.log("lStorage_ERROR: key & value is not allowed empty!"),!1;console.log(r);try{return localStorage.setItem(e,t?JSON.stringify(r):r),!0}catch(e){return["QuotaExceededError","NS_ERROR_DOM_QUOTA_REACHED"].includes(e.name),console.log(e),!1}}},remove:function(e){if(this.check()&&this.checkKey())try{return localStorage.removeItem("key"),!0}catch(e){return["QuotaExceededError","NS_ERROR_DOM_QUOTA_REACHED"].includes(e.name),!1}},checkKey:function(e){return e&&""!=e},check:function(){return window.localStorage||localStorage||"undefined"!=typeof localStorage},clear:function(){if(this.check())try{return localStorage.clear(),!0}catch(e){return["QuotaExceededError","NS_ERROR_DOM_QUOTA_REACHED"].includes(e.name),!1}}};