'use strict';
define(function (require) {
    var gameConfigReQuire = {};
	var roomGameConfigReQuire = {};
    switch (document.getElementById('gameContainer').getAttribute('data-gameID')) {
        case '500':
            gameConfigReQuire = require('./gameconfigs/BanCaConfigTikitaka.js');
			roomGameConfigReQuire = require('./gameconfigs/RoomGameConfigTikitaka.js');
            break;
        default:
            Utilities.log('GameID ' + document.getElementById('gameContainer').getAttribute('data-gameID') + ' is not exist');
            break;
    }
	
    var rootURL = global.rootURL || (window.location.protocol + '//' + document.location.host + '/');
	var locationHost = 'vuasanca.vn';	
	
    var PreLoaderConfig = {
		requirePath: require,
		linkRequireConfigGame: gameConfigReQuire,
		linkRequireConfigRoomGame: roomGameConfigReQuire,
        PathToWebRoot: rootURL,
        PathToLibCode: window.location.protocol + '//static.' + locationHost + '/fishing/20200328/lib/',
		PathToSrcCode: window.location.protocol + '//static.' + locationHost + '/fishing/20200328/src/',
		PathToResource: window.location.protocol + '//static.' + locationHost + '/fishing/20200328/lib/resources/default/',
		PathToResourceSounds: window.location.protocol + '//static.' + locationHost + '/fishing/20200328/lib/resources/default/',
        PathToTemplateFishTrace: window.location.protocol + '//static.' + locationHost + '/fishing/20200328/lib/resources/templates/',
		PathToLanguage: window.location.protocol + '//static.' + locationHost + '/fishing/20200328/lib/resources/language/',
        PathToAvatar: window.location.protocol + '//mimg.' + locationHost + '/Images/Avatar/',
		PathToImage: window.location.protocol + '//mimg.' + locationHost + '/',
        PathToDefaultAvatar: window.location.protocol + '//mimg.' + locationHost + '/Images/Avatar/DefaultAvatar.png',
        PathToFanpage: 'https://www.facebook.com/Live777-2175903695828062',
		PathToForum: 'https://www.facebook.com/Live777-2175903695828062',
		PathToGuild: 'https://live777.com/guild',
        PathToItemBar: rootURL,
        PathToItem: rootURL,
        PathToUpdateInfoPage: rootURL + "cap-nhat-thong-tin-tai-khoan",        
		PathToLoadingClass: 'ui/screens/LoadingScreen',
        PathToResourceGameClass: '',
        PathToGameClass: '',
		PathToBattleGameClass: '',
		PathToJackpotPage: rootURL + 'jackpot',
        PathToLuckySpinPage: rootURL + 'lucky-spin',
		PathToFortunes88Page: rootURL + 'fortunes-88',
        PathToXengHoaQuaPage: rootURL + 'slot-hoa-qua',
        PathToXengLuxuryPage: rootURL + 'slot-lucky',
        PathToLatherPage: rootURL + 'lather',
        PathToBC3DPage: rootURL + 'ban-ca-3d',
        PathToGoldenFangPage: rootURL + 'rong-vang-slot',
        PathToTaiXiuPage: rootURL + 'tai-xiu',
        PathToXocDiaPage: rootURL + 'xoc-dia',
		PathToPenaltyPage: rootURL + 'sut-dzo',
        PathToTamQuocPage: rootURL + 'tam-quoc-slot',
        PathToDoanSoPage: rootURL + 'doan-so',
        PathToPokerSlotPage: rootURL + 'poker-slot',
        PathToThanhPhanPage: rootURL + 'thanh-phan',
		PathToThanThuPage: rootURL + 'than-thu-slot',
		PathToThanTaiPage: rootURL + 'than-tai-slot',
		PathToCapCha: rootURL + 'Common/CaptchaLogin',
        ServerAndPort: '',
        GameID: 0,
        AppRealWidth: 1280,
        AppRealHeight: 720,
        ServerScreenWidth: 1440,
        ServerScreenHeight: 900,
        FPS: 60,
        DefaultMobileFont: 'Arial',
        ListFontRemoveRunInApp: ['OpenSansBold', 'UVNBAISAU', 'TahomaBold'],
        FontResource: {                                                                                                 //can be overwrite by gameConfig to set font special for game
            CoinWin: {
                name: 'CoinWin',
                src: 'CoinWin.fnt',
                type: 1
            },
			CoinWinGreen: {
                name: 'CoinWinGreen',
                src: 'CoinWinGreen.fnt',
                type: 1
            },
            RobotoSlabBold: {
                name: 'RobotoSlab-Bold',
                src: 'RobotoSlab-Bold.ttf',
                type: 0
            },
            CoinWinOther: {
                name: 'CoinWinOther',
                src: 'CoinWinOther.fnt',
                type: 1
            },
            AgudaBlack: {
                name: 'SVN-Aguda Black',
                src: 'SVN-Aguda Black.TTF',
                type: 0
            },
            FontNumberAngel: {
                name: 'FontNumberAngel',
                src: 'FontNumberAngel.fnt',
                type: 1
            },
            UVNBAISAU: {
                name: 'UVNBAISAU',
                src: 'UVNBAISAU_R.TTF',
                type: 0
            },

            SVNKimberley: {
                name: 'SVN-Kimberley',
                src: 'SVN-Kimberley.ttf',
                type: 0
            },
            UTMAzuki: {
                name: 'UTM Azuki',
                src: 'UTM Azuki.ttf',
                type: 0
            },
            UTMColossalis: {
                name: 'UTM Colossalis',
                src: 'UTM Colossalis.ttf',
                type: 0
            },
            UTMHanzel: {
                name: 'UTM Hanzel',
                src: 'UTM Hanzel.ttf',
                type: 0
            },
            UTMHELVE: {
                name: 'UTM Helve',
                src: 'UTM HELVE.TTF',
                type: 0
            },
            UTMROCKWELL: {
                name: 'UTM Rockwell',
                src: 'UTM ROCKWELL.TTF',
                type: 0
            },
            PopupTitle: {
                name: 'PopupTitle',
                src: 'PopupTitle.ttf',
                type: 0
            },
            UTMImpact: {
                name: 'UTM Impact',
                src: 'UTM Impact.ttf',
                type: 0
            },
            UTMHELVETINS: {
                name: 'UTM HELVETINS',
                src: 'UTM HELVETINS.ttf',
                type: 0
            },
            JackpotCoin: {
                name: 'JackpotCoin',
                src: 'JackpotCoin.fnt',
                type: 1
            },
            UTMTHANCHIENTRANH: {
                name: 'UTM THANCHIENTRANH',
                src: 'UTM THANCHIENTRANH.TTF',
                type: 0
            },
            UTMGodWordR: {
                name: 'UTM GodWordR',
                src: 'UTM GodWordR.ttf',
                type: 0
            }
        },

        ResourceLoading: {
            Atlas: [
                "AtlasLoadingDefaultPack0.json",
                "AtlasBattleBossMedusaHint.json",
				"AtlasBattleBossPoseidonHint.json",
            ]
        },
        ResourceGeneral: {                                                                                              //don't overwrite by gameConfig, use ResourceGameApp to set resource for game
            Atlas: [
                "AtlasBanCaGeneralPack0.json",
                "AtlasButtonPack0.json",
                "AtlasCoinWinOtherUserPack0.json",
                "AtlasPopupHoYeahPack0.json",
				"AtlasLobbyHoYeahPack0.json",
                "AtlasPopupMyInfoPack0.json",
                "AtlasPopupPack0.json",
				"AtlasPopupVIPLobbyPack0.json",
                "AtlasLevelPack1.json",
                "AtlasFilpImagePack0.json",
            ],
            Sounds: [
                "LevelUp.mysound",
            ]
        },        
        ResourceLanguageDefine: {
            Atlas: [
                "AtlasCompoLanguagePack0.json",
                "AtlasCompoLanguagePack1.json"
            ]
        },
		ResourceMapOcean: {                                                                                              //don't overwrite by gameConfig, use ResourceGameApp to set resource for game
            Atlas: [
                "AtlasMapOceanPack0.json",
                "AtlasMapOceanPack1.json",
                "AtlasMapOceanPack10.json",
                "AtlasMapOceanPack11.json",
                "AtlasMapOceanPack12.json",
                "AtlasMapOceanPack2.json",
                "AtlasMapOceanPack3.json",
                "AtlasMapOceanPack4.json",
                "AtlasMapOceanPack5.json",
                "AtlasMapOceanPack6.json",
                "AtlasMapOceanPack7.json",
                "AtlasMapOceanPack8.json",
                "AtlasMapOceanPack9.json"
            ]
        },
        ResourceGameApp: [],                                                                                            //can be overwrite by gameConfig to set resource special for game
        MessagesConfig: {},
        HuongDanChoiGameURL: {
            500: 'http://domain.net/huong-dan-choi-game/ban-ca'
        },
        EventSkinConfig: {
            Noel: false,
            LunarYear: false
        },
        PersonalPage: 'http://google.com.vn/{0}',
        LinkNapGold: 'http://domain.net/nap-xu',
        ArrayInvalidText: [],
        isAllowLoadGif: false,
        DefaultUserName: "sonnt6",
        DefaultPassWord: "123456",
        FileMaxlength: 256,
        FileMaxSize: 2000000,
        isDebug: false,
        isUseWS: false,
		isSupportWebP: false,
        isShowTabAllAchievement: true,
        ListSlotGame: [],
        // languageKey: languageConfig,
        languageConfig: {},
        DomainConfig: {
            B: 1,
            C: 2,
            D: 3,
            CurrentDomain: //KhĂ´ng sá»­a
            //=InsertCurrentDomain
            //=Domain
                  1
            //=EndInsertCurrentDomain
        },
        Domain: {
            BanCaDanGian: 1,
            BayDaiDuong: 2,
            CurrentDomain: 2
        },
		SetupCssBody:{
            enable: true,
            classHorizontal: 'landscape',
            classVertical: 'portrait'
        },
        StringGetUrlParam: 'id',
        RoomType: 'type',
        InfoRoomID: {
            RoomThuong: 1,
            RoomVip: 2,
			RoomFree: 11,
            RoomMedusa: 101,
            RoomCentaur: 102,
            RoomPoseidon: 103,
        },
    };
	
	/*if (PreLoaderConfig.EventSkinConfig.Noel) {
		PreLoaderConfig.ResourceGeneral.Atlas.push("AtlasPopupPack3.json");
		
		PreLoaderConfig.PathToResource = window.location.protocol + '//static.' + locationHost + '/banca/20180311/lib/resources/event/';
		PreLoaderConfig.PathToResourceSounds = window.location.protocol + '//static.' + locationHost + '/banca/20180311/lib/resources/event/';
	}
	
	if (PreLoaderConfig.EventSkinConfig.LunarYear) {
		PreLoaderConfig.ResourceGeneral.Atlas.push("AtlasPopupPack3.json");
		
		PreLoaderConfig.PathToResource = window.location.protocol + '//static.' + locationHost + '/banca/20180311/lib/resources/lunaryear/';
		PreLoaderConfig.PathToResourceSounds = window.location.protocol + '//static.' + locationHost + '/banca/20180311/lib/resources/lunaryear/';
	}*/

	global.PreLoaderConfig = PreLoaderConfig;

    var gameConfig = gameConfigReQuire.createConfig();
	
    if (gameConfig.MessagesConfig !== undefined)
        Object.assign(gameConfig.MessagesConfig, PreLoaderConfig.MessagesConfig);

    if (gameConfig.FontResource !== undefined)
        Object.assign(gameConfig.FontResource, PreLoaderConfig.FontResource);

    Object.assign(PreLoaderConfig, gameConfig);

    global.PreLoaderConfig = PreLoaderConfig;	

    return PreLoaderConfig;
});