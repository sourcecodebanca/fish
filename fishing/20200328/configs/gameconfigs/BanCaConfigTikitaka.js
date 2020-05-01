define(function () {
    var BanCaConfig = {};
    // BanCaConfig.prototype = Object.create(BanCaConfig.prototype);
    // BanCaConfig.prototype.constructor = BanCaConfig;

    // Object.defineProperties(BanCaConfig.prototype, {});

    BanCaConfig.createConfig = function () {

        var keyText = global.PreLoaderConfig.languageConfig;

        var rootURL = global.rootURL || (window.location.protocol + '//' + document.location.host + '/');

        var config = {
            PathToResourceGameClass: 'utils/resourceregister/ResourceBanCa',
            PathToGameClass: 'games/banca/BanCa',
            PathToBattleGameClass: 'games/banca/BattleBanCa',
            GameID: 500,
            MessagesConfig: {
                LoginOtherSessionMessage: keyText.key_login_other_session,
                PopupGetMessageError: keyText.key_get_message_error,
                MessageChangeAvatar: keyText.key_chang_avatar,
                NotActiveMessage: keyText.key_game_kick_user,
                UserKillBossMessage: {
                    51: {Message: keyText.key_diet_BOSS_51},
                    52: {Message: keyText.key_diet_BOSS_52},
                    53: {Message: keyText.key_diet_BOSS_53},
                    54: {Message: keyText.key_diet_BOSS_54},
                    57: {Message: keyText.key_diet_BOSS_57},
                    58: {Message: keyText.key_diet_BOSS_58},
                    59: {Message: keyText.key_diet_BOSS_59},
                    101: {Message: keyText.key_diet_BOSS_101},
                    102: {Message: keyText.key_diet_BOSS_102},
                    103: {Message: keyText.key_diet_BOSS_103},
                    104: {Message: keyText.key_diet_BOSS_104},
                    105: {Message: keyText.key_diet_BOSS_60}
                },
                KickOutGameMessage: keyText.key_KICKGAME,
                BackToLobbyMessage: keyText.left_game_mgs,
                DisconnectMessage: keyText.key_disconnected_from_network,
                NotEnoughCoinToFire: keyText.key_run_out_of_coin,
                NotEnoughCoinToJoin: keyText.key_run_out_of_coin_to_join,
                EndTimeToExitView: keyText.key_time_out_to_view,
                RoomFullToPlay: keyText.key_full_room,
                LockFishToolTip: keyText.key_tit_lock_fish,
                ConfirmLogoutMessage: keyText.logout_mgs,
                NapXuMessage: keyText.key_napthe_tooltp,
                LoginMessage: '',
                LogoutMessage: '',
                LoadShaderError: keyText.key_load_shader_error,
                FeaturesUnopened: keyText.key_features_unopened,
                WarningMission: keyText.key_warning_mission,
                GunBossExpired: keyText.key_boss_gun_expired,
                NoticeReadyGunSkill: keyText.key_noti_ready_gun_skill,
                CannotLoadWS: keyText.key_cannot_load_ws,
                NoticeTimeoutGunSkill: keyText.key_noti_skill_active,
                FileSize: keyText.key_file_size,
                FileName: keyText.key_file_name,
                FileMaxLength: 256,
                FileMaxSize: 2000000,
                FileType: keyText.key_file_type,
                TutorialUseGem: keyText.key_tutorial_gem,
                TutorialUseTicket: keyText.key_tutorial_use_ticket,
                InfoReceive: keyText.key_info_receive,
                NoData: keyText.key_no_data,
                CompleteAllReceive: keyText.key_complete_all_receive,
                GetAllReceive: keyText.key_get_all_receive,
                GetReceiveComplete: keyText.key_get_all_receive_complete
            },
            MessageNotifyLoading: {
                visible: false,
                intervalTime: 5000,
                listMessage: [
                    keyText.key_notify_loading_1,
                    keyText.key_notify_loading_2,
                    keyText.key_notify_loading_3,
                    keyText.key_notify_loading_4,
                    keyText.key_notify_loading_5,
                    keyText.key_notify_loading_6,
                    keyText.key_notify_loading_7
                ]
            },
            currency: keyText.key_currency_coin,            
            ListGunConfig: [],
            ListIDFishHide: [28],
            ListBossInRoom: [51, 52, 53, 54, 58, 59, 102, 103, 104, 105, 60],
            ListCornerBonusGunSpecialConfig: [3.05, 2.55, 2.05, 1.5, 1.05, 0.55, -1],
            ListIDParticleType: [2, 3, 4],
            ListIDParticleTypeBoss: [2],
            ListFishIDStun: [],
            ListFishIDFlip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 22, 1, 2, 3, 7, 9, 11, 20, 21, 23, 35, 57, 59],
            ListFishIDFrozen: [18],
            ListFishAvoidFrozen: [18, 23],
            ListFishIDNoRotateWhenDie: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 32, 33, 51, 52, 53, 54, 57, 58, 59, 101, 102, 103, 104],
            ListFishIDNormalWinParticle: [16, 17, 22, 27, 28, 29, 35],
            ListFishIDBigWinParticle: [18, 19, 20, 21, 24, 25, 26, 32, 33, 35, 51, 52, 53, 54, 57, 58, 59, 101, 102, 103, 104],
            ListFishIDSuperWinParticle: [19, 20, 21, 25, 26, 32, 33, 35, 51, 52, 53, 54, 57, 59, 101, 102, 103, 104],
            ListFishIDVibrate: [16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 32, 33, 51, 52, 53, 54, 57, 59, 101, 103, 104],
            ListFishIDHaveDieTexture: [0, 5, 13, 16, 17, 23, 32, 51],
            ListIDBoss: [51, 52, 53, 54, 57, 58, 59, 101, 102, 103, 104, 105],
            ListBossMini: [35],
            FishHitBulletDefault: 0xf08088,
            ListFishIDHitBullet: {33: 0xff0000, 35: 0xf08088, 51: 0xff0000, 57: 0xff0000},
            ListFishSpine: [],
            ListFishRatio: [
                {type: 0, minRatio: 2, maxRatio: 2},
                {type: 1, minRatio: 2, maxRatio: 2},
                {type: 2, minRatio: 3, maxRatio: 3},
                {type: 3, minRatio: 4, maxRatio: 4},
                {type: 4, minRatio: 5, maxRatio: 5},
                {type: 5, minRatio: 6, maxRatio: 6},
                {type: 6, minRatio: 7, maxRatio: 7},
                {type: 7, minRatio: 8, maxRatio: 8},
                {type: 8, minRatio: 9, maxRatio: 9},
                {type: 9, minRatio: 9, maxRatio: 9},
                {type: 10, minRatio: 10, maxRatio: 10},
                {type: 11, minRatio: 12, maxRatio: 12},
                {type: 12, minRatio: 15, maxRatio: 15},
                {type: 13, minRatio: 18, maxRatio: 18},
                {type: 14, minRatio: 20, maxRatio: 20},
                {type: 15, minRatio: 25, maxRatio: 25},
                {type: 16, minRatio: 30, maxRatio: 30},
                {type: 17, minRatio: 40, maxRatio: 40},
                {type: 18, minRatio: 50, maxRatio: 50},
                {type: 19, minRatio: 100, maxRatio: 100},
                {type: 20, minRatio: 200, maxRatio: 200},
                {type: 21, minRatio: 300, maxRatio: 300},
                {type: 22, minRatio: 9, maxRatio: 45},
                {type: 23, minRatio: 0, maxRatio: 0},
                {type: 24, minRatio: 40, maxRatio: 280},
                {type: 25, minRatio: 100, maxRatio: 250},
                {type: 26, minRatio: 80, maxRatio: 100},
                {type: 27, minRatio: 18, maxRatio: 30},
                {type: 29, minRatio: 32, maxRatio: 60}
            ],
            ListBossRatio: [
                {type: 51, minRatio: 350, maxRatio: 350},
                {type: 52, minRatio: 150, maxRatio: 250},
                {type: 53, minRatio: 350, maxRatio: 350},
                {type: 54, minRatio: 350, maxRatio: 350},
                {type: 57, minRatio: 500, maxRatio: 500},
                {type: 58, minRatio: 350, maxRatio: 350},
                {type: 59, minRatio: 125, maxRatio: 500},
                // {type: 101, minRatio: 350, maxRatio: 350},
                {type: 102, minRatio: 350, maxRatio: 350},
                {type: 103, minRatio: 350, maxRatio: 350},
                {type: 104, minRatio: 350, maxRatio: 350},
                {type: 105, minRatio: 350, maxRatio: 350},
                {type: 60, minRatio: 100, maxRatio: 200}
            ],
            MaxRepeatTimeNotify: 5,
            MaxFireDuplicateCount: 50,
            MaxBulletOnScreen: 20,
            TimeBulletMove: 950,
            TimeIntervalTraceGun: 200,
            TimeIntervalFireGun: 200,
            TimeSpaceBetween2Bullet: 150,
            TimeShowToast: 5000,
            TimeOutWaitToKick: 50000,
            TimeOutViewOut: 48000,
            TimeOutToStartKick: 10000,
            TimeIntervalCheckSocket: 10000,
            TimeStunFish: 10,
            TimeStoneFish: 5,
            TimeFrozenFish: 10,
            TimeFrozenFishInBattle: 1,
            TimeDropFrozenFish: 5,
            TimeRunNotify: 20,
            TimeConnectSever: 20,
            TimeWaveMove: 3,
            TimeUpdateTopBoss: 5000,
            TimeCheckCollision: 40,
            TimeShowToastChat: 5,
            TimeChangBG: 120,
            TimeTweenJackPot: 120,
            TimeGetRoomInfo: {
                enable: false,
                RoomName: ['RoomMedusa', 'RoomCentaur', 'RoomLifeOfPi'],
                timeSpace: 30,
                // timeConfig: [
                //     {timeMin: 14, timeMax: 24, roomName: "RoomMedusa"},
                //     {timeMin: 12, timeMax: 13, roomName: "RoomCentaur"},
                //     {timeMin: 0, timeMax: 13, roomName: "RoomLifeOfPi"}
                // ]
            },
            ItemOfUserOnline: 20,
            DelayInvisibleCompoBoss: 5000,
            BoomDieArea: 2,
            TimeFishMove: [100, 100, 100, 100, 100, 100, 100, 40, 60, 40, 70, 60, 80, 80, 80, 60, 60, 60, 60, 20, 40, 40, 100, 80, 40, 40, 60, 60, 60, 60, 80, 80, 20, 20, 20, 20, 20],
            TimeoutGunSkill: 10,
            TimeCountToStartGame: 1000,
            ConfigPointFishShadow: {x: 15, y: -10},
            ConfigPointFishShadowBattle: {x: 30, y: 20},
            skillInfo: [],
            configCaTran: {
                id: 3,
                idBackground: 0,
                time: 80,
                count: 232,
                fishId: [30392,30393,30394,30395,30396,30397,30398,30399,30400,30401,30402,30403,30404,30405,30406,30407,30408,30409,30410,30411,30412,30413,30414,30415,30416,30417,30418,30419,30420,30421,30422,30423,30424,30425,30426,30427,30428,30429,30430,30431,30432,30433,30434,30435,30436,30437,30438,30439,30440,30441,30442,30443,30444,30445,30446,30447,30448,30449,30450,30451,30452,30453,30454,30455,30456,30457,30458,30459,30460,30461,30462,30463,30464,30465,30466,30467,30468,30469,30470,30471,30472,30473,30474,30475,30476,30477,30478,30479,30480,30481,30482,30483,30484,30485,30486,30487,30488,30489,30490,30491,30492,30493,30494,30495,30496,30497,30498,30499,30500,30501,30502,30503,30504,30505,30506,30507,30508,30509,30510,30511,30512,30513,30514,30515,30516,30517,30518,30519,30520,30521,30522,30523,30524,30525,30526,30527,30528,30529,30530,30531,30532,30533,30534,30535,30536,30537,30538,30539,30540,30541,30542,30543,30544,30545,30546,30547,30548,30549,30550,30551,30552,30553,30554,30555,30556,30557,30558,30559,30560,30561,30562,30563,30564,30565,30566,30567,30568,30569,30570,30571,30572,30573,30574,30575,30576,30577,30578,30579,30580,30581,30582,30583,30584,30585,30586,30587,30588,30589,30590,30591,30592,30593,30594,30595,30596,30597,30598,30599,30600,30601,30602,30603,30604,30605,30606,30607,30608,30609,30610,30611,30612,30613,30614,30615,30616,30617,30618,30619,30620,30621,30622,30623,30624,30625,30626,30627,30628,30629,30630,30631,30632,30633,30634,30635],
                fishType: [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,15,15,25,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,15,15,25,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,15,15,25,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,15,15,25]
            },
            BossConfig: {
                timeShowWarningBossComing: 5,
                timeBossMove: 100,
                timeBoss33MoveToShowEffect: 3,
                timeShowBossHeal: 3000,
                timeBoss33Dance: 10,
                timeBoss33Attractive: 3,
                timeShowCutHead: 5000,
                timeShowFrezzeMedusa: 5000
            },
            phoneSupportTitle: [{
                name: "PhoneSupport",
                number: "Support : support@live777.com",
                link: 'mailto:support@live777.com'
            },
                {name: "ViberSupport", number: "Comming Soon"}
            ],
            DefaultMobileFont: 'Arial',
            DefaultWSProtocal: 'ws://',
            GameSettingConfig: {
                ListButtonSetting: [{
                    isShowWeb: false,
                    enabled: false,
                    name: keyText.key_setting_tab_HUONGDAN
                }, {
                    isShowWeb: false,
                    enabled: false,
                    name: keyText.key_setting_tab_HIS_XU + ' ' + keyText.key_currency_coin
                },{
                    isShowWeb: false,
                    enabled: false,
                    name: keyText.key_setting_tab_NGONNGU
                }, {
                    isShowWeb: false,
                    enabled: false,
                    name: keyText.key_setting_tab_HOTRO
                }, {
                    isShowWeb: true,
                    enabled: true,
                    name: keyText.key_setting_tab_chat_face
                }],
                NoticeText: keyText.key_noti_seting,
                SwitchTextOn: keyText.key_text_game_setting_on,
                SwitchTextOff: keyText.key_text_game_setting_off,
                listSetting: {
                    enableWaveBG: {
                        defaultValue: true,
						enable: false,
                        displayText: keyText.key_seting_wave,
                        name: 'enableWave'
                    },
                    enableFishShadow: {
                        defaultValue: true,
						enable: false,
                        displayText: keyText.key_seting_fish_shadow,
                        name: 'enableShadow'
                    },
                    enableBubbleBullet: {
                        defaultValue: true,
						enable: false,
                        displayText: keyText.key_seting_bubble,
                        name: 'enableBubble'
                    },
                    FPS: {
                        defaultValue: true,
						enable: false,
                        displayText: keyText.key_seting_fps,
                        name: 'FPS',
                        SwitchTextOn: '60',
                        SwitchTextOff: '30'
                    },
                    enableSound: {
                        defaultValue: true,
						enable: true,
                        displayText: keyText.key_setting_AMTHANH,
                        name: 'enableSound'
                    }
                },
				TandP:{
					terms: {
						enable : false,
						text: keyText.key_terms_of_use
					},
					privacy: {
						enable : false,
						text: keyText.key_privacy
					}
				}
            },
            ListPathAvatarReplaceToDefault: ['http://mimg.domain.net/noimage.gif', 'http://mimg.domain.net/Images/avatar/noimage.gif'],
            IsShowUserOnline: true,
            IsShowTopHitBoss: false,
            IsShowLobbyVer2: true,
            IsEnableRoomOcean: true,
            IsEnableArenaRoom: false,
            IsShowButtonGameLather: false,
            IsShowButtonGameBC3D: true,
            IsShowLevel: true,
            IsEnableNewFishMove: true,
            IsEnableGunSkill: true,
            IsEnableButtonDownLoad: false,
            IsEnableButtonBossCountDown: false,
            IsEnableButtonGroupMiniGame: true,
            IsEnablePopupUserLeaveGame: true,
            IsVipInGame: false,
            IsShowNewGun: true,
            IsAutoShowLogin: true,
            IsUsePopupLogin: false,
            IsUseScaleFish: true,
            IsShowButtonDownloadAPK: true,
            IsShowBroadCastInGame: true,
            IsIniciarJuego: true,
            IsNuevaBala: true,
            EnalbeFacebookShare: true,
            EnalbeGoogleShare: true,
            EnableHitFishMessage: false,
            CountGunShow: 7,
            Tikitaka: 1500,
            ListButtonDownLoad: [
                {name: 'android', text: '2D', visible: true, link: 'http://goo.gl/Nw4fEs'},
                {name: 'ios', text: '2D', visible: true, link: 'https://goo.gl/6kTrR9'},
                {name: 'web', text: '3D', visible: false, link: 'http://goo.gl/Nw4fEs'},
                {name: 'androidBC3D', text: '3D', visible: false, link: 'http://goo.gl/Nw4fEs'}
            ],
            ListButtonCompoMiniGame: [
                {
                    name: 'penalty',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: false,
                    texture: 'btnPenalty_Up',
                    link: 'http://' + document.location.host + '/' + 'sut-dzo'
                },
                {
                    name: 'goldenfang',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: false,
                    texture: 'btnGoldenFang_Up',
                    link: 'http://' + document.location.host + '/' + 'rong-vang-slot'
                },
                {
                    name: 'lather',
                    visible: false,
                    requireLogin: false,
                    openNewTab: true,
                    isNew: false,
                    texture: 'btnLather_Up',
                    link: 'http://' + document.location.host + '/' + 'lather'
                },
                {
                    name: 'tamquoc',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: false,
                    texture: 'btnTamQuoc_Up',
                    link: 'http://' + document.location.host + '/' + 'tam-quoc-slot'
                },
                {
                    name: 'doanso',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: false,
                    texture: 'btnDoanSo_Up',
                    link: 'http://' + document.location.host + '/' + 'doan-so'
                },
                {
                    name: 'fortunes88',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: false,
                    texture: 'BtnFortunes_UP',
                    link: 'http://' + document.location.host + '/' + 'fortunes-88'
                },
                {
                    name: 'xenghoaqua',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: false,
                    texture: 'btnXengHoaQua_Up',
                    link: 'http://' + document.location.host + '/' + 'slot-hoa-qua'
                },
                {
                    name: 'xengluxury',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: false,
                    texture: 'btnXengLuxury_Up',
                    link: 'http://' + document.location.host + '/' + 'slot-lucky'
                },
                {
                    name: 'taixiu',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: false,
                    texture: 'btnTaiXiu_Up',
                    link: 'http://' + document.location.host + '/' + 'tai-xiu'
                },
                {
                    name: 'xocdia',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: false,
                    texture: 'btnXocDia_Up',
                    link: 'http://' + document.location.host + '/' + 'xoc-dia'
                },
                {
                    name: 'spinround',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: false,
                    texture: 'BtnSpinRound_UP',
                    link: 'http://' + document.location.host + '/' + 'lucky-spin'
                },
                {
                    name: 'minigame',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'btnMiniGame_Up',
                    link: 'http://domain.net/'
                },
                {
                    name: 'jackpot',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'BtnJackpot_Up',
                    link: 'http://' + document.location.host + '/' + 'jackpot'
                },
                {
                    name: 'thanhphan',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'btnThanhPhan_Up',
                    link: 'http://' + document.location.host + '/' + 'thanh-phan'
                },
                {
                    name: 'pokerslot',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'btnPokerSlot_Up',
                    link: 'http://' + document.location.host + '/' + 'poker-slot'
                },
                {
                    name: 'thanthu',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'btnThanThu_Up',
                    link: 'http://' + document.location.host + '/' + 'than-thu'
                },
                {
                    name: 'bantau',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'btnBanTau_Up',
                    link: 'http://' + document.location.host + '/' + 'ban-tau'
                },
                {
                    name: 'thodan',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'btnThoDan_Up',
                    link: 'http://' + document.location.host + '/' + 'tho-dan-slot'
                },
                {
                    name: 'pachinko',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'btnPaChinKo_Up',
                    link: 'http://' + document.location.host + '/' + 'pachinko-slot'
                },
                {
                    name: 'samurai',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'btnSamurai_Up',
                    link: 'http://' + document.location.host + '/' + 'pachinko-slot'
                },
                {
                    name: 'banca3d',
                    visible: false,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'btnBC3D_Up',
                    link: 'http://' + document.location.host + '/' + 'ban-ca-3d'
                }

                ,
                {
                    name: 'super77',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'BtnSuper77_Up',
                    link: 'http://' + document.location.host + '/' + 'ban-ca-3d'
                },
                {
                    name: 'superf88',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'BtnSuperF88_Up',
                    link: 'http://' + document.location.host + '/' + 'ban-ca-3d'
                },
                {
                    name: 'samloc',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'BtnSamLoc_Up',
                    link: 'http://' + document.location.host + '/' + 'ban-ca-3d'
                },
                {
                    name: 'lieng',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'BtnLieng_Up',
                    link: 'http://' + document.location.host + '/' + 'ban-ca-3d'
                },
                {
                    name: 'phom',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'BtnPhom_Up',
                    link: 'http://' + document.location.host + '/' + 'ban-ca-3d'
                },
                {
                    name: 'maubinh',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'BtnMauBinh_Up',
                    link: 'http://' + document.location.host + '/' + 'ban-ca-3d'
                },
                {
                    name: 'caorua',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'BtnCaoRua_Up',
                    link: 'http://' + document.location.host + '/' + 'ban-ca-3d'
                },
                {
                    name: 'tlmn',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'BtnTLMN_Up',
                    link: 'http://' + document.location.host + '/' + 'ban-ca-3d'
                },
                {
                    name: 'xito',
                    visible: true,
                    requireLogin: true,
                    openNewTab: true,
                    isNew: true,
                    texture: 'BtnXiTo_Up',
                    link: 'http://' + document.location.host + '/' + 'ban-ca-3d'
                },
            ],
            ListButtonVisible: [
                {
                    name: 'napxu',
                    visible: true,
                    text: keyText.key_lobby_NAPXU || 'a',
                    textures: 'btnNapXu',
                    enableToolTip: false,
                    messageToolTip: keyText.key_tooltip_footer_item_no_tooltip
                },
                {
                    name: 'doithuong',
                    visible: false,
                    text: keyText.key_lobby_CUAHANG || 'a',
                    textures: 'btnDoiThuong',
                    enableToolTip: false,
                    messageToolTip: keyText.key_tooltip_footer_item_no_tooltip
                },
                {
                    name: 'nhiemvu',
                    visible: true,
                    text: keyText.key_lobby_NHIEMVU || 'a',
                    textures: 'BtnMission_UP',
                    enableToolTip: false,
                    messageToolTip: keyText.key_tooltip_footer_item_no_tooltip,
                    isHasNoti: true
                },
                {
                    name: 'sukien',
                    visible: true,
                    text: keyText.key_lobby_SUKIEN || 'a',
                    textures: 'btnSuKien',
                    enableToolTip: true,
                    messageToolTip: keyText.key_tooltip_footer_item_event
                },
                {
                    name: 'banghoi',
                    visible: true,
                    text: keyText.key_lobby_BANGHOI || 'a',
                    textures: 'btnGuild',
                    enableToolTip: false,
                    messageToolTip: keyText.key_tooltip_footer_item_guild
                },
                {
                    name: 'diendan',
                    visible: true,
                    text: keyText.key_lobby_DIENDAN || 'a',
                    textures: 'BtnForum_UP',
                    enableToolTip: false,
                    messageToolTip: keyText.key_tooltip_footer_item_fanpage
                },
                {
                    name: 'hopthu',
                    visible: true,
                    text: keyText.key_lobby_HOPTHU || 'a',
                    textures: 'BtnMailBox_UP',
                    enableToolTip: false,
                    messageToolTip: keyText.key_tooltip_footer_item_mail
                },
                {
                    name: 'xephang',
                    visible: true,
                    text: keyText.key_lobby_XEPHANG || 'a',
                    textures: 'BtnRanking_UP',
                    enableToolTip: false,
                    messageToolTip: keyText.key_tooltip_footer_item_rank
                },
                {
                    name: 'quatang',
                    visible: false,
                    text: keyText.key_lobby_HOPQUA || 'a',
                    textures: 'btnQuaTang',
                    enableToolTip: true,
                    messageToolTip: keyText.key_tooltip_footer_item_gif
                },
                {
                    name: 'tuido',
                    visible: true,
                    text: keyText.key_lobby_TUIDO || 'a',
                    textures: 'btnBag',
                    enableToolTip: true,
                    messageToolTip: keyText.key_tooltip_footer_item_bag
                },
                {
                    name: 'bonus',
                    visible: true,
                    text: keyText.key_lobby_THUONG || 'a',
                    textures: 'BtnBonus_Up',
                    enableToolTip: true,
                    messageToolTip: keyText.key_tooltip_footer_item_bonus
                }
            ],
            ListMenuVisible: [
                {name: 'hotro', visible: true, text: keyText.key_setting_tab_HOTRO},
                {name: 'huongdan', visible: true, text: keyText.key_setting_tab_HUONGDAN},
                {name: 'setting', visible: true, text: keyText.key_setting_tab_GIAODIEN},
                {name: 'doiqua', visible: false, text: keyText.key_setting_tab_DOIQUA},
                {name: 'lichsu', visible: false, text: keyText.key_setting_tab_HIS_XU},
                {name: 'zoom', visible: true, text: keyText.key_setting_tab_PHONGTO},
                {name: 'amthanh', visible: true, text: keyText.key_setting_AMTHANH},
                {name: 'settingLanguage', visible: true, text: keyText.key_setting_tab_NGONNGU},
                {name: 'thoat', visible: true, text: keyText.key_title_quit},
                {name: 'dangnhap', visible: true, text: keyText.key_lobby_DANGNHAP},
                {name: 'doithuong', visible: false, text: keyText.key_lobby_CUAHANG},
                {name: 'diendan', visible: false, text: keyText.key_lobby_DIENDAN},
                {name: 'hopthu', visible: false, text: keyText.key_lobby_HOPTHU}
            ],
            ListBtnShareVisible: {
                isShow: true,
                listButton: [
                    {name: 'messenger', visible: true, requireLogin: false},
                    {name: 'facebook', visible: true, requireLogin: false}
                ]
            },
            CompoGetCoinFree: {
                isShow: false,
                TimeTweenCompo: 0.5,
                TimeShowFirstTime: 2,
                HeightDefault: 140,
                PaddingItem: 10,
                ListBtnGetCoin: [
                    {
                        visible: true,
                        text: keyText.key_lobby_THUONG || 'a',
                        textures: 'BtnBonus_Up',
                        isLeft: false,
                        name: 'Online'
                    },
                    {
                        visible: true,
                        text: keyText.key_lobby_HOPQUA || 'a',
                        textures: 'btnQuaTang',
                        isLeft: false,
                        name: 'GiftDaily'
                    },
                    {
                        visible: true,
                        text: keyText.key_lobby_NHIEMVU || 'a',
                        textures: 'BtnMission_UP',
                        isLeft: true,
                        name: 'Mission'
                    },
                    {
                        visible: true,
                        text: keyText.key_lobby_THANHTUU || 'a',
                        textures: 'btnAchievement_Up',
                        isLeft: true,
                        name: 'Achievement'
                    }
                ]
            },            
            ListNoteGunBoss: {
                101: {
                    text: keyText.key_noti_gun_boss_101,
                    bgColor: "0xfffe99",
                    stokeColor: "0x095911",
                    limmitBullet: 5,
                    limmitFish: 1
                },
                102: {
                    text: keyText.key_noti_gun_boss_102,
                    bgColor: "0xfffe99",
                    stokeColor: "0xdc4640",
                    limmitBullet: 5,
                    limmitFish: 5
                },
                103: {
                    text: keyText.key_noti_gun_boss_103,
                    bgColor: "0xfffe99",
                    stokeColor: "0x092a59",
                    limmitBullet: 5,
                    limmitFish: 5
                },
                104: {
                    text: keyText.key_noti_gun_boss_104,
                    bgColor: "0xfffe99",
                    stokeColor: "0xffffff",
                    limmitBullet: 5,
                    limmitFish: 10
                },
                105: {
                    text: keyText.key_noti_gun_boss_105,
                    bgColor: "0xfffe99",
                    stokeColor: "0xff7b13",
                    limmitBullet: 5,
                    limmitFish: 20
                },
                106: {
                    text: keyText.key_noti_gun_boss_105,
                    bgColor: "0xfffe99",
                    stokeColor: "0xff7b13",
                    limmitBullet: 5,
                    limmitFish: 20
                },
                107: {
                    text: keyText.key_noti_gun_boss_107,
                    bgColor: "0xfffe99",
                    stokeColor: "0xff7b13",
                    limmitBullet: 5,
                    limmitFish: 20
                },
                108: {
                    text: keyText.key_noti_gun_boss_108,
                    bgColor: "0xfffe99",
                    stokeColor: "0xff7b13",
                    limmitBullet: 5,
                    limmitFish: 20
                }
            },
            ListMapBossOpen: {
                0: true,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false
            },
            LockFishConfig: {
                enableLock: true,
                listFish: [19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 32, 33, 35, 51, 52, 53, 54, 57, 58, 59, 60, 101, 102, 103, 104, 105],
                enableRedFish: true,
                message: keyText.key_cannot_lock_fish_kind
            },
            CompoMiniGameConfig: {
                bgColor: 0x000000,
                stroke: 0xd98919,
                alpha: 0.5,
                itemPerLine: 4
            },
            AdditionRotationSpin: 12 * Math.PI * 2,
            DeltaRotation: Math.PI / 8 - Math.PI / 16,
            TimeRotationSpin: 15,
            TimeShowSpin: 2,
            RangeOfEachLevel: 3,
            TimeHideDailyMission: 5,
            TimeHideNotiFindTour: 10,
            ListIconGameRowTween: 2,
            MoneyRate: 1,
            TimeDoubleClick: 200,
            AntiAutoClick: {
                Enable: false,                  //Turn on or off check auto click
                TotalTimeCheck: 5,              //Time checking auto click
                MaxItemCheck: 25,               //Total numbers click to check
                TotalClickPerSecond: 5          //Number click per second want check
            },
            DepositConfig: {
                OnlyPlayStore: false,
                NapXuEnable: true,
                PlayStore: true,
                ThirdPartyEnable: true,
                SMSEnable: true
            },

            EventConfig: {
                enable: false,
                startTime: {hours: 17, min: 0},
                endTime: {hours: 20, min: 60}
            },
            ValidatePasswordConfig: {
                passwordConfig: {
                    minLength: 6,
                    maxLength: 25,
                    passwordBlacklist: ['DMCS']
                }
            },
            PlayStoreConfig: [
                {title: "Billing", USD: "1.99$", Coin: 20000},
                {title: "Billing", USD: "3.99$", Coin: 50000},
                {title: "Billing", USD: "4.99$", Coin: 70000}
                /*{title: "Google Biling", USD: "5.99$", Coin: 90000},
                 {title: "Google Biling", USD: "6.99$", Coin: 100000},
                 {title: "Google Biling", USD: "7.99$", Coin: 120000},
                 {title: "Google Biling", USD: "8.99$", Coin: 140000}*/
            ],
            MessageBossComing: {
                Poseidon: keyText.key_noti_boss_coming_103,
                MerMaid: keyText.key_noti_boss_coming_104
            },
            CompoChat: {
                hintText: keyText.key_hint_chat,
                enableChat: false,
                enableEmotion: true,
                timeShowEmotion: 8,
                itemPerLine: 7,
                radius: 20,
                generalStyleNickName: {
                    fontFamily: 'Arial',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    align: 'left',
                    fill: 0x00c8bd
                },
                generalStyleContent: {
                    fontFamily: 'Arial',
                    fontSize: '13px',
                    fill: 0xffffff,
                    align: 'left',
                    wordWrap: true,
                    wordWrapWidth: 170
                },
                myStyleNickName: {
                    fontFamily: 'Arial',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    align: 'left',
                    fill: 0xffe400
                },
                myStyleContent: {
                    fontFamily: 'Arial',
                    fontSize: '13px',
                    fill: 0xffffff,
                    align: 'left',
                    wordWrap: true,
                    wordWrapWidth: 170
                },
                systemStyleNickName: {
                    fontFamily: 'Arial',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    align: 'left',
                    fill: 0xff0000
                },
                systemStyleContent: {
                    fontFamily: 'Arial',
                    fontSize: '13px',
                    fill: 0xffffff,
                    align: 'left',
                    wordWrap: true,
                    wordWrapWidth: 170
                }
            },
            ListCardExChange: [
                {card: 10000, coin: 10000},
                {card: 20000, coin: 20000},
                {card: 50000, coin: 50000},
                {card: 100000, coin: 100000},
                {card: 200000, coin: 200000},
                {card: 500000, coin: 500000}
            ],
            ArraySpriteTutorial: ['TamQuocTutorial.jpg', 'ThanTaiTutorial.jpg', 'ThanThuTutorial.jpg'],
            MiniGameInGameConfig: {
                XocRua: {
                    MessageTitleGame: keyText.key_xocrua_title,
                    CountDownTimer: 10,
                    TimeSwapItem: 0.13,
                    TimeRepeatSwap: 0.1,
                    WinMessage: keyText.key_xocrua_win,
                    LoseMessage: keyText.key_xocrua_lose,
                    AutoChoseMessage: keyText.key_xocrua_autochoose,
                    AttentionMessage: keyText.key_xocrua_attention
                },
                FishArea: {
                    MessageTitleGame: keyText.key_game_DAUTRUONG,
                    MessageReadyGame: keyText.key_game_start_DAUTRUONG,
                    MessageEndGame: keyText.key_game_end_DAUTRUONG,
                    MessageRuleGame: keyText.key_game_note_DAUTRUONG,
                    TextEndGame: keyText.key_game_text_end_DAUTRUONG,
                    TimeSwapItem: 0.13,
                    TimeRepeatSwap: 0.1,
                    WinMessage: keyText.key_game_result_DAUTRUONG,
                    CoinColor: 0x00ff00
                },
                BonusLuckyDragon: {
                    TimeAutoChoice: 20,
                    TextAutoChoice: keyText.key_mini_game_autochoice,
                    TimeAutoChoiceShell: 20,
                    Congratulation: keyText.key_mini_game_congratulation
                }
            },
            EnableBtnShoot: false,
            BlockChat: {
                ListGameNotApply: [],// list id game không dùng chặn chat
                ListTextConvert: ['.net', '.tk', '.com', 'sanrongvang', 'vuasanca'],
                ListTextRemover: ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '{', '[', '}', ']', ':', ';', '"', '<', '>', ',', '.', '?', '/', '|', ' ', "'", '\\'],
                MaxCharCoincident: 2, // số lượng ký tự giống nhau đúng kề nhau
                isCanChat: true,
                timeChat: 2,//thời gian của 1 lần chat
                LenListChatContent: 15,// độ dài tối đa của list chat lưu lại
                MaxCoincidentContentChat: 3,// số lượng tối đa các lần giống nhau trong list chat
                MinChatConvert: 1, // số lượng tối thiểu ký tự để bắt đầu remover ký tự đặc biệt
                PercentTextCoincident: 80 // phần trâm ký tự giống nhau trong câu
            },
            EnableToolTest: false,
            Icon18PlusConfig: {
                enable: false,
                position: {x: 0, y: 10}
            },
            GroupBonusConfig: {
                btnGif: {enable: true, textName: keyText.key_gif},
                btnBonus: {
                    enable: true,
                    textName: keyText.key_bonus,
                    completeText: keyText.key_bonus_complete,
                    completeAll: keyText.key_bonus_complete_all
                },
                btnMission: {enable: false, textName: keyText.key_mission}
            },
            CompoItemConfig: {
                enable: true,
                itemPerLine: 4,
                radius: 20
            },
            TemplateFishTrace: {
                listFile: [
                    '1.json',
                    '2.json',
                    '3.json',
                    '4.json',
                    '5.json',
                    '6.json',
                    '7.json',
                    '8.json',
                    '9.json',
                    '10.json'
                ]
            },
            IsDisableHandlerGem: false,
            enableCompoLanguage: true,
            useGunSpine: false,
            PopupRankConfig: {
                enableArea: false,
                enableEvent: true
            },
			ListBossSpineConfig: {
                53: "FireDragonBones"
            },
            ListTextConfig: {
                Popup_UserOnline: keyText.key_titlePopup_SONGUOIONLINE,
                Popup_OnlineGetReward: keyText.key_titlePopup_ONLINENHANTHUONG,
                Popup_Bet: keyText.key_titlePopup_CHONCUOC,
                Popup_BonusGame: keyText.key_titlePopup_BONUSGAME,
                Popup_Login: keyText.key_titlePopup_DANGNHAP,
                Popup_Register: keyText.key_titlePopup_DANGKY,
                Popup_Notify: keyText.key_titlePopup_THONGBAO,
                Popup_MailBox: keyText.key_titlePopup_HOPTHU,
                Popup_HistoryCoin: keyText.key_titlePopup_LICHSUXU,
                Popup_UserInfo: keyText.key_titlePopup_THONGTINUSER,
                Popup_Tutorial: keyText.key_titlePopup_HUONGDAN,
                Popup_Support: keyText.key_titlePopup_HOTRO,
                Popup_Event: keyText.key_titlePopup_SUKIEN,
                Popup_Rank: keyText.key_titlePopup_XEPHANG,
                Popup_Nap: keyText.key_titlePopup_NAP,
                Popup_Reward: keyText.key_titlePopup_DOITHUONG,
                Popup_Setting: keyText.key_titlePopup_CAIDAT,
                Popup_CreateName: keyText.key_titlePopup_TAOTEN,
                Popup_Statistic: keyText.key_titlePopup_THONGKE,
                Popup_FactorFish: keyText.key_titlePopup_HESOCA,
                Popup_Language: keyText.key_titlePopup_NGONNGU,
                Popup_GiftDaily: keyText.key_titlePopup_GiftDaily,
                Popup_Bag: keyText.key_titlePopup_Bag,
                Popup_EventExchange: keyText.key_titlePopup_EventExchange,
                Popup_Mission: keyText.key_titlePopup_NHIEMVU,
                Popup_ChoiceMode: keyText.key_titlePopup_CHEDO,
                Popup_DailyBonusSpin: keyText.key_spin,
                Popup_DailyBonusCollect: keyText.key_collect,
                Popup_DailyBonusTitle: keyText.key_daily_bonus,
                Popup_DailyBonusLoginCompo: keyText.key_daily_login_combo,
                Popup_DailyBasicAward: keyText.key_daily_basic_award,
                Popup_DailyVipBonus: keyText.key_daily_vip_bonus,
                Popup_DailyLoginCompoBonus: keyText.key_daily_login_combo_bonus,
                Popup_DailyResultBonus: keyText.key_daily_result_bonus,

                BanCa: keyText.key_seting_domain,
                ComingFish: keyText.key_battle_fish_coming,
                ComingBoss: keyText.key_boss_coming,
                OtherRoomUser: keyText.key_other_user,
                TitleBonusLuckyDragon: keyText.key_title_bonus_lucky_dragon,
                Guild: keyText.key_guild,
                Faction: keyText.key_faction,
                Navy: keyText.key_navy,
                Pirate: keyText.key_pirate,
                ShutdownBoss: keyText.key_kill_boss,
                FreeBullet: keyText.key_free_bullet,
                X2Bullet: keyText.key_x2_bullet,
                ExpX2: keyText.key_x2_exp,
                Freeze: keyText.key_freeze,
                SkillLaze: keyText.key_skill_laze,
                SkillSonicWave: keyText.key_skill_sonic,
                SkillBoom: keyText.key_skill_boom,
                Medusa: keyText.key_skill_medusa,
                Centaur: keyText.key_skill_centaur,
                Poseidon: keyText.key_skill_poseidon,
                Mermaid: keyText.key_skill_mermaid,
                MissionComplete: keyText.key_mission_complete,
                Extirpation: keyText.key_kill,
                Boss: keyText.key_boss,
                Fish: keyText.key_fish,
                Fish0: keyText.key_fish0,
                Fish1: keyText.key_fish1,
                Fish2: keyText.key_fish2,
                Fish3: keyText.key_fish3,
                Fish4: keyText.key_fish4,
                Fish5: keyText.key_fish5,
                Fish6: keyText.key_fish6,
                Fish7: keyText.key_fish7,
                Fish8: keyText.key_fish8,
                Fish9: keyText.key_fish9,
                Fish10: keyText.key_fish10,
                Fish11: keyText.key_fish11,
                Fish12: keyText.key_fish12,
                Fish13: keyText.key_fish13,
                Fish14: keyText.key_fish14,
                Fish15: keyText.key_fish15,
                Fish16: keyText.key_fish16,
                Fish17: keyText.key_fish17,
                Fish18: keyText.key_fish18,
                Fish19: keyText.key_fish19,
                Receive: keyText.key_receive,
                Active: keyText.key_active,

                TextToolTip1: keyText.key_mission_tooltip1,
                TextToolTip2: keyText.key_mission_tooltip2,
                TextToolTip3: keyText.key_mission_tooltip3,
                CurrencyUnit: keyText.key_currency_unit,
                Card: keyText.key_card,
                FastBullet: keyText.key_boss_35_fast_bullet,
                JackpotTurn: keyText.key_boss_35_jackpot,
                LuckySpin: keyText.key_boss_35_lucky_spin,
                AccumulationXu: keyText.key_accumulation,
                Ratio: keyText.key_ratio,
                WinXu: keyText.key_win_coin,
                Floor: keyText.key_floor,
                Congratulations: keyText.key_congratulations,
                Point: keyText.key_point,
                RedAlert: keyText.key_red_alert,
                Stun: keyText.key_stun,
                Lather: keyText.Lather,
                ImportMessenger: keyText.key_import_message,
                ClickHere: keyText.key_chat_click_here,
                World: keyText.key_chat_world,
                Hide: keyText.key_chat_hide,
                Guild2: keyText.key_guild2,
                Waiting: keyText.key_message_waitting,
                GameWaiting: keyText.key_game_waitting,
                LoginName: keyText.key_popup_text_login_name,
                PassWord: keyText.key_popup_text_pass,
                DisplayName: keyText.key_popup_text_display_name,
                Captcha: keyText.key_popup_text_captcha,
                LoginError: keyText.key_popup_text_login_error,
                TopShutDownBoss: keyText.key_top_kill_boss,
                Ignore: keyText.key_ignore,
                VipTop: keyText.key_top_vip,
                PlayGameTop: keyText.key_top_kill_fish,
                NormalTop: keyText.key_top_normal,
                Top: keyText.key_top,
                InfoEvent: keyText.key_popup_event_ws_info_event,
                No: keyText.key_no,
                MyXu: keyText.key_my_coin,
                ChangeXu: keyText.key_change_coin,
                Time: keyText.key_text_time,
                Note: keyText.key_text_note,
                All: keyText.key_text_all,
                Email: keyText.key_text_email,
                PhoneNumber: keyText.key_text_phone_number,
                OldPass: keyText.key_text_old_pass,
                NewPass: keyText.key_text_new_pass,
                ErrorPass: keyText.key_text_error_pass,
                ForgotPass: keyText.key_text_fogot_pass,
                ReshowDisplayName: keyText.key_text_create_display_name,
                Import: keyText.key_text_input,
                ShortPass: keyText.key_text_short_pass,
                Characters: keyText.key_text_characters,
                LongPass: keyText.key_text_long_pass,
                DetailSensitive: keyText.key_text_detail_sensitive,
                CantLoginFace: keyText.key_text_premission,
                OtherLogin: keyText.key_text_other_login,
                Title: keyText.key_text_title,
                Sender: keyText.key_text_sender,
                ADMIN: keyText.key_text_admin,
                NoMail: keyText.key_text_no_mail,
                CompleteMissionDaily: keyText.key_text_complete_daily_mission,
                Payment: keyText.key_text_payment,
                SMS: keyText.key_text_sms,
                Seri: keyText.key_text_seri,
                CardCode: keyText.key_text_card_code,
                Confirm: keyText.key_text_card_confirm,
                CardValue: keyText.key_text_card_value,
                Day: keyText.key_text_day,
                NotData: keyText.key_text_not_data,
                Vip: keyText.key_text_popup_rank_vip,
                PlayGame: keyText.key_text_popup_rank_fish,
                Normal: keyText.key_text_popup_rank_normal,
                Name: keyText.key_text_popup_name,
                TotalCard: keyText.key_text_total_card,
                Exchange: keyText.key_text_total_exchange,
                JackpotType: keyText.key_text_jackpot_type,
                CoinWin: keyText.key_text_coin_win_jackpot,
                Change: keyText.key_text_change_now,
                ExchangeCardTop: keyText.key_text_top_exchange,
                Jackpot: keyText.key_text_jackpot,
                CompleteExchange: keyText.key_text_exchange_success,
                Serial: keyText.key_text_serial,
                Cancel: keyText.key_HUY,
                Refresh: keyText.key_THULAI,
                Close: keyText.key_Dong,
                Exit: keyText.key_THOAT,
                Agree: keyText.key_DONGY,
                TotalGem: keyText.key_text_total_gem,
                TotalCoinWinLose: keyText.key_text_total_win_lose,
                Level: keyText.key_text_level,
                LOADING: keyText.key_text_loading,
                ItemTomato: keyText.key_text_item_tomato,
                ItemBrick: keyText.key_text_item_brick,
                SelectLanguage: keyText.key_text_select_language,
                FishCoin: keyText.key_game_tienca,
                Share: keyText.key_text_share,
                ZoomIn: keyText.key_text_zoomin,
                ZoomOut: keyText.key_text_zoomout,
                Menu: keyText.key_text_menu,
                Download: keyText.key_text_down,

                Update: keyText.key_text_update,
                Login: keyText.key_text_login,

                SDT: keyText.key_text_popup_info_phone_number,
                EMail: keyText.key_text_popup_info_mail,
                ID: keyText.key_text_popup_info_id,
                NoGuild: keyText.key_text_popup_info_no_guild,
                NoFaction: keyText.key_text_popup_info_no_faction,
                NapXu: keyText.key_text_popup_info_recharge,
                ErrorUpdateEmail: keyText.key_text_popup_info_error_mail,
                ErrorUpdatePass: keyText.key_text_popup_info_error_pass,
                ErrorUpdatePhone: keyText.key_text_popup_info_error_phone_number,
                ErrorUpdateID: keyText.key_text_popup_info_error_id,
                IDNumber: keyText.key_text_popup_info_id_number,
                Done: keyText.key_text_done,
                ChangeSetting: keyText.key_text_change_language,
                LevelUp: keyText.key_game_levelup,
                CompleteBonusgame: keyText.key_game_complete_bonusgame,
                FreeCoin: keyText.key_text_free_coin,
                TransferCoin: keyText.key_text_transfer_coin,
                OutOffDay: keyText.key_seting_out_off_day,
                DefautTimeGun: keyText.key_dont_have,
                Attacked: keyText.key_user_attack,
                DMG: keyText.key_text_dame,
                BONUS: keyText.key_text_bonus,
                EXP: keyText.key_text_exp,
                NoItem: keyText.key_text_noitem,
                CopyID: keyText.key_text_copy_id,
                MessAutoClick: keyText.key_auto_click,
                Language: keyText.key_setting_tab_NGONNGU,
                NotifyLockFishInLightning: keyText.key_noti_lock_fish_205,
                LevelVip: keyText.key_text_level_vip,
                UnLockText: keyText.key_text_un_lock,
                txtYouGot: keyText.key_you_got,
                txtYouNeed: keyText.key_you_need,
                txtCollect: keyText.key_collect,
                TitleObtained: keyText.key_title_obtained,
                Congratulation: keyText.key_congratulation,
                Lock: keyText.key_lock,
                HoYeah_Today: keyText.key_hoyeah_today,
                HoYeah_Yesterday: keyText.key_hoyeah_yesterday,
                HoYeah_Rank: keyText.key_hoyeah_Rank,
                HoYeah_Profile: keyText.key_hoyeah_profile,
                HoYeah_Round: keyText.key_hoyeah_round,
                HoYeah_Place: keyText.key_hoyeah_place,
                HoYeah_Score: keyText.key_hoyeah_score,
                HoYeah_TotalPrize: keyText.key_hoyeah_total_prize,
                HoYeah_Master: keyText.key_hoyeah_master_league,
                HoYeah_LeaguePoint: keyText.key_hoyeah_league_point,
                HoYeah_LeagueNumber: keyText.key_hoyeah_league_number,
                HoYeah_Attended: keyText.key_hoyeah_attended,
                HoYeah_TotalWin: keyText.key_hoyeah_total_win,
                HoYeah_SingleWin: keyText.key_hoyeah_single_win,
                HoYeah_Winners: keyText.key_hoyeah_winners,
                HoYeah_Detail: keyText.key_hoyeah_detail,
                HoYeah_Player: keyText.key_hoyeah_player,
                HoYeah_Point: keyText.key_hoyeah_point,
                HoYeah_Award: keyText.key_hoyeah_award,
                HoYeah_TimeLeft: keyText.key_hoyeah_time_left,
                HoYeah_Level: keyText.key_hoyeah_level,
                HoYeah_YourRank: keyText.key_hoyeah_your_rank,
                HoYeah_BuyNow: keyText.key_hoyeah_buy_now,
                HoYeah_VipClub: keyText.key_hoyeah_vip_club,
                HoYeah_Vip: keyText.key_hoyeah_vip,
                HoYeah_VipInfo: keyText.key_hoyeah_vip_info,
                TextLogOut: keyText.key_titlePopup_DANGXUAT,
                TextSupport: keyText.key_setting_tab_HOTRO,
                EditProfile: keyText.key_edit_profile,
                Copy: keyText.key_text_copy,
                HoYeah_OverView: keyText.key_hoyeah_title_over_view,
                HoYeah_LatestAchievement: keyText.key_hoyeah_title_latest_achievement,
                HoYeah_New: keyText.key_text_new,
                HoYeah_ShopBuy: keyText.key_shop_buy,
                HoYeah_Shop: keyText.key_shop,
                HoYeah_Reset: keyText.key_reset

            },
            ListPopupInfo: [
                {
                    name: keyText.key_profile,
                    text: keyText.key_profile,
                    show: true
                }, {
                    name: 'VIP',
                    text: keyText.key_text_popup_info_tab_title_vip,
                    show: true
                }, {
                    name: 'Reward',
                    text: keyText.key_text_popup_info_tab_title_reward,
                    show: false
                }, {
                    name: keyText.key_mission,
                    text: keyText.key_mission,
                    show: false,
                    isShowTabAllAchievement: true,
                    isShowTooltip: true
                }
            ],
			PopupInfoConfig:[
                {name :'info',  text: keyText.key_profile, enable: true},
                {name :'vip',  text: keyText.key_text_popup_info_tab_title_vip, enable: true},
                {name :'history',  text: keyText.key_setting_tab_HIS_XU + '\n' + keyText.key_currency_coin, enable: true}
            ],
            LanguageOptionConfig: [                
                {name: keyText.key_language_vietnam || 'Vietnamese', fileName: 'language-vn.json', path: 'language-vn/', key: 'vi'}
            ],
            ChangeTextLanguage: false,
            TextPopupLanguage: {
                'vi': ["Tiếng Việt Nam", "Tiếng Anh", "Tiếng Trung", "Tiếng Cambodia", "Tiếng Thái"],
                'en': ["Vietnamese", "English", "Chinese", "Cambodia", "ThaiLand"],
                'cam': ["វៀតណាម", "អង់គ្លេស", "ចិន", "កម្ពុជា", "ថៃឡិន"],
				'zh': ["越南", "英語", "中國", "柬埔寨", '泰国'],                
                'th': ["เวียตนาม", "อังกฤษ", "ในภาษาจีน", "ขอม", 'ภาษาไทย']
            },
            DefaultLanguage: {
                enable: true,                
				language: {name: keyText.key_language_vietnam || 'Vietnamese', fileName: 'language-vn.json', path: 'language-vn/', key: 'vi'}
            },
            StyleFontRoom: {
                align: "center",
                dropShadow: true,
                dropShadowAngle: 1.3,
                dropShadowColor: 0x4f0803,
                dropShadowDistance: 3,
                fill: [0xfff187, 0xffeb34],
                fillGradientStops: [0.3, 0.5],
                fontFamily: "Tahoma",
                fontSize: 75,
                fontWeight: 900,
                lineJoin: "bevel",
                miterLimit: 5,
                stroke: 0x951900,
                strokeThickness: 8
            },
            StyleCoinWinOtherUser: {
                align: "center",
                dropShadow: true,
                dropShadowAngle: 1.3,
                dropShadowColor: 0x4f0803,
                dropShadowDistance: 3,
                fill: [0xa7a7a7, 0xffffff],
                fillGradientStops: [0.3, 0.5],
                fontFamily: "Tahoma",
                fontSize: 75,
                fontWeight: 900,
                lineJoin: "bevel",
                miterLimit: 5,
                stroke: 0x951900,
                strokeThickness: 8
            },
            StyleHeaderPopup: {
                dropShadow: true,
                dropShadowAlpha: 0.4,
                dropShadowAngle: 1.5707963267948966,
                fill: "#ffeea5",
                fontSize: 40,
                fontWeight: "bold",
                lineJoin: "round",
                padding: 23
            },
            GroundItemBag: {
                isGroundItem: true,
                ListGround: [
                    {Name: keyText.key_bag_ground_Bullet, ListItemId: [1, 2, 3]},
                    {Name: keyText.key_bag_ground_Gun, ListItemId: [8, 9, 10, 11, 14, 15]},
                    {Name: keyText.key_bag_ground_Skill, ListItemId: [5, 6, 7]},
                    {Name: keyText.key_bag_ground_Other, ListItemId: [4, 12, 13]}
                ]
            },
            IsNewLobby: {
                enable: false
            },
            IsLobbyHoYeah: {
                enable: true
            },
            limitShowRatioFish: 999999,
            ShowCoinUserOnline: false,
            ShowFactionHoYeahInfo: false,
            LinkDownGame: [
                {enable: false, linkAndroid: 'abc'},
                {enable: false, linkIOS: ' abc'}
            ],
            DownLoadConfig: {
				enable: true,
                //OpenPageDown: {enable: false, link: 'abc'},
				OpenPageDown: {enable: true, link: 'http://bit.ly/2YrvYeI', texture: 'btnDownLoadAndroid'},
                ConfigDownLoad: {
                    itemPerLine: 2,
                    padding: 10,
                    spacing: 100,
                    // pathTexture: 'ResourceManager.Atlas.AtlasLobbyHoYeah.textures',
                    pathAction: rootURL,
                    listTexture: [
                        {texture: 'btnDownLoadAndroid.png', linkAction: 'http://bit.ly/2YrvYeI'}                        
                    ]
                }
            },
			DownLoadConfig1: {
                OpenPageDown: {enable: false, link: 'abc'},
                ConfigDownLoad: {
                    itemPerLine: 1,
                    padding: 15,
                    spacing: 60,
                    // pathTexture: 'ResourceManager.Atlas.AtlasLobbyHoYeah.textures',
                    pathAction: rootURL,
                    listTexture : PreLoaderConfig.LanguageOptionConfig
                    /*listTexture: [
                        {texture: 'vi', linkAction: 'abc', text : 'Việt Nam'},
                        {texture: 'en', linkAction: 'abc', text : 'Tiếng Anh'}
                    ]*/
                }
            },
            TimeChatConfig: {
                All: 10,
                Guild: 2,
            },
            ShowAbilityItem: false,
            SpinAndJackPot: {
                jackpot: {
                    enable: false,
                    link: 'jackpot'
                },
                spin: {
                    enable: false,
                    link: 'lucky-spin'
                }
            },
            TimeDelayTweenAnimationSpine: 20,
            TimeTweenAnimationSpine: 5,
            TimeTweenBanner: 5,
            ShowVipMonth: false,
            ShowRichVip: false,
            enableBuyManyItem: false,
			roomSevenSeaKind: 0,
            listGameSlotMovieClip: [423],
            ButtonDetail: {
                isShowChatPrivacy: true,
                isShowAddFriend: false
            },
            TournamentConfig: {
                PopupRankDefender: {
                    ListTabName: [keyText.key_tournament_top_user, keyText.key_tournament_complete]
                },
                ListTimeWave: {
                    1: 25,
                    2: 25,
                    3: 25,
                    4: 25,
                    5: 25,
                },
                enableRoom: {
                    RoomThuong: true,
                    RoomVip: true
                },
                TimeEffectBossAttack: 10
            },

            SeasonEvent: {
                EnableEvent: false, // EnableEvent = false off tất cả event và đổi thành background thường
                EventNoel: false
            },            
            LayoutBotConfig: {
                containerLeft: {
                    item: [
                        {name: 'btnForum', enable: true, visible: false, icon: 'iconForum', titleText: PreLoaderConfig.languageConfig.key_lobby_DIENDAN},
                        {name: 'btnVip', enable: true, visible: true, icon: 'iconVip', titleText: PreLoaderConfig.languageConfig.key_hoyeah_vip},
                        {name: 'btnEvent', enable: true, visible: true, icon: 'iconEvent', titleText: PreLoaderConfig.languageConfig.key_lobby_SUKIEN},
                        {name: 'btnRank', enable: true, visible: true, icon: 'iconRank', titleText: PreLoaderConfig.languageConfig.key_lobby_XEPHANG}
                    ]
                },
                containerRight: {
                    item: [
                        {name: 'btnBag', enable: true, icon: 'iconBag', titleText: PreLoaderConfig.languageConfig.key_lobby_TUIDO},
                        {name: 'btnBonus', enable: true, icon: 'iconBonus', titleText: PreLoaderConfig.languageConfig.key_text_bonus},
                        {name: 'btnGuild', enable: true, icon: 'iconGuild', titleText: PreLoaderConfig.languageConfig.key_lobby_BANGHOI},
                        {name: 'btnMail', enable: true, icon: 'iconMail', titleText: PreLoaderConfig.languageConfig.key_lobby_HOPTHU}
                    ]
                },
                SingleButton: {
                    Tour: {enable: false},
                    UserOnline: {enable: true},
                    Recharge: {enable: false}
                }
            },
            ValidChangeCardPoint : true,
            isShowSpinFollowVip : true,
            GameCardConfig: [
				{ name: 'blackjack', visible: true, requireLogin: true, openNewTab: false, isNew: false, texture: 'blackjack', Link: rootURL + 'blackjack'},
				{ name: 'taixiu', visible: true, requireLogin: true, openNewTab: false, isNew: false, texture: 'taixiu', Link: rootURL + 'big-small'},
				{ name: 'baccarat', visible: true, requireLogin: true, openNewTab: false, isNew: true, texture: 'baccarat', Link: rootURL + 'baccarat'},
				{ name: 'xocdia', visible: true, requireLogin: true, openNewTab: false, isNew: false, texture: 'xocdia', Link: rootURL + 'odd-even'},
				{ name: 'poker', visible: false, requireLogin: true, openNewTab: false, isNew: false, texture: 'poker', Link: rootURL + 'poker'},
				{ name: 'bigtwo', visible: false, requireLogin: true, openNewTab: false, isNew: false, texture: 'bigtwo', Link: rootURL + 'big2'},
				{ name: 'xito', visible: false, requireLogin: true, openNewTab: false, isNew: false, texture: 'xito', Link: rootURL + 'hongkong-poker'},
				{ name: 'binh', visible: true, requireLogin: true, openNewTab: false, isNew: true, texture: 'binh', Link: rootURL + 'chinese-poker'},
				{ name: 'doanso', visible: true, requireLogin: true, openNewTab: false, isNew: false, texture: 'doanso', Link: rootURL + 'mystery-num'},				
				{ name: 'tienlen', visible: true, requireLogin: true, openNewTab: false, isNew: false, texture: 'tienlen', Link: rootURL + 'southern-poker'},			
                { name: 'caorua', visible: false, requireLogin: true, openNewTab: false, isNew: false, texture: 'caorua', Link: rootURL + 'three-cards'},                
                { name: 'lieng', visible: false, requireLogin: true, openNewTab: false, isNew: false, texture: 'lieng', Link: rootURL + 'three-cards-poker'},
                { name: 'phom', visible: false, requireLogin: true, openNewTab: false, isNew: false, texture: 'phom', Link: rootURL + 'tala'},
                { name: 'samloc', visible: false, requireLogin: true, openNewTab: false, isNew: false, texture: 'samloc', Link: rootURL + 'northern-poker'},
            ],
			GameSlotConfig: {
                Slot:[
					{ gameID: 406 ,name: 'kimquy',   visible: true,isHot: false, hotTexture: 'kim-quy-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'kim-quy-slot', Link: rootURL + 'golden-turtle'},
					{ gameID: 424 ,name: 'kimcuong', visible: true,isHot: false, hotTexture: 'kim-cuong-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'kim-cuong-slot', Link: rootURL + 'diamonds-link'},
					{ gameID: 421 ,name: 'haitac',   visible: true,isHot: false, hotTexture: 'hai-tac-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'hai-tac-slot', Link: rootURL + 'super-777'},
					{ gameID: 410 ,name: 'rongvang', visible: true,isHot: false, hotTexture: 'rong-vang-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'rong-vang-slot', Link: rootURL + 'golden-dragon'},
					{ gameID: 429 ,name: 'pacman',   visible: false,isHot: false, hotTexture: 'pacman-small', requireLogin: true, openNewTab: false, isNew: true, texture: 'pacman', Link: rootURL + 'pacman'},
					{ gameID: 428 ,name: 'dracula',  visible: true,isHot: false, hotTexture: 'dracula-small', requireLogin: true, openNewTab: false, isNew: true, texture: 'dracula', Link: rootURL + 'dracula'},
					{ gameID: 422 ,name: 'f88mini',  visible: true,isHot: false, hotTexture: 'f88-mini-small', requireLogin: true, openNewTab: false, isNew: true, texture: 'f88-mini', Link: rootURL + 'mini-f88'},					
					{ gameID: 426 ,name: 'keongot',  visible: true,isHot: false, hotTexture: 'keo-ngot-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'keo-ngot-slot', Link: rootURL + 'candy-slot'},
					{ gameID: 423 ,name: 'typhu',    visible: true,isHot: false, hotTexture: 'ty-phu-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'ty-phu-slot', Link: rootURL + 'billionaire'},
					{ gameID: 411 ,name: 'tamquoc',  visible: true,isHot: false, hotTexture: 'tam-quoc-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'tam-quoc-slot', Link: rootURL + 'three-kingdoms'},					
					{ gameID: 419 ,name: 'thodan',   visible: true,isHot: false, hotTexture: 'tho-dan-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'tho-dan-slot', Link: rootURL + 'indian-slot'},
					{ gameID: 417 ,name: 'thantai',  visible: true,isHot: false, hotTexture: 'than-tai-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'than-tai-slot', Link: rootURL + 'god-of-wealth'},
					{ gameID: 416 ,name: 'thanthu',  visible: true,isHot: false, hotTexture: 'than-thu-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'than-thu-slot', Link: rootURL + 'amazing-animals'},
					{ gameID: 420 ,name: 'samurai',  visible: true,isHot: false, hotTexture: 'samurai-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'samurai-slot', Link: rootURL + 'samurai-slot'},
					{ gameID: 418 ,name: 'pachinko', visible: true,isHot: false, hotTexture: 'pachinko-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'pinball-robot', Link: rootURL + 'pinball-robot'},
					{ gameID: 412 ,name: 'poker',    visible: true,isHot: false, hotTexture: 'poker-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'poker-slot', Link: rootURL + 'poker-slot'},
					{ gameID: 402 ,name: 'hoaqua',   visible: true,isHot: false, hotTexture: 'hoa-qua-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'fruit-slot', Link: rootURL + 'fruit-slot'},
					{ gameID: 408 ,name: 'lucky',    visible: true,isHot: false, hotTexture: 'lucky-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'lucky-slot', Link: rootURL + 'lucky-slot'}
				],
            },
			LobbyConfig:{
                ListGameLobbyConfig: {
					New:{
                        title: 'newgame',
                        root: 'new-game',
                        type: 6,
                        enable: true,
                        List:[
                            { gameID: -1 ,name: 'tienlen',   visible: true, hotTexture: 'tien-len-small', requireLogin: true, openNewTab: false, isNew: true, texture: 'tien-len', Link: rootURL + 'teang-leng'},
							{ gameID: -1 ,name: 'ca-tran', visible: false, hotTexture: 'ca-tran-small', requireLogin: true, openNewTab: false, isNew: true, texture: 'ca-tran', Link: rootURL + ''},                            
                            { gameID: -1 ,name: 'poker', visible: true, hotTexture: 'poker-slot', requireLogin: true, openNewTab: false, isNew: true, texture: 'poker-slot', Link: rootURL + 'poker-solo'},
                            { gameID: -1 ,name: 'baccarat', visible: true, hotTexture: 'baccarat', requireLogin: true, openNewTab: false, isNew: true, texture: 'baccarat', Link: rootURL + 'baccarat'},							
							{ gameID: -1 ,name: 'blackjack', visible: true, hotTexture: 'blackjack-small', requireLogin: true, openNewTab: false, isNew: true, texture: 'black-jack', Link: rootURL + 'blackjack'},
							{ gameID: -1 ,name: 'binh',      visible: true, hotTexture: 'binh-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'binh', Link: rootURL + 'sab-sam'},
							{ gameID: -1 ,name: 'big-fish', visible: true, hotTexture: 'big-fish-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'big-fish', Link: rootURL + 'big-fish'}
                        ]
                    },					
					Skill:{
                        title: 'skillgame',
                        root: 'skill-game',
                        type: 4,
                        enable: false,
                        List:[
                            { gameID: -1 ,name: 'ca-tran', visible: true, hotTexture: 'ca-tran-small', requireLogin: true, openNewTab: false, isNew: true, texture: 'ca-tran', Link: rootURL + 'mystery-num'},
                        ]
                    },
                    Bet:{
                        title: 'betgame',
                        root: 'bet-game',
                        type: 3,
                        enable: true,
                        List:[
                            { gameID: -1 ,name: 'bau-cua', visible: true, hotTexture: 'doan-so-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'bau-cua', Link: rootURL + 'kla-klouk'},							
                            { gameID: -1 ,name: 'tai-xiu', visible: true, hotTexture: 'tai-xiu-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'tai-xiu', Link: rootURL + 'big-small'},
                            { gameID: -1 ,name: 'xoc-dia', visible: true, hotTexture: 'xoc-dia-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'xoc-dia', Link: rootURL + 'ses-ku'},														
							{ gameID: -1 ,name: 'doan-so', visible: true, hotTexture: 'doan-so-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'doan-so', Link: rootURL + 'mystery-num'}
							
                        ]
                    },                    
                    Slot:{
                        title: 'slotgame',
                        root: 'slot-game',
                        type: 2,
                        enable: true,
                        List:[						
							{ gameID: 406 ,name: 'kimquy',   visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'kim-quy-slot', Link: rootURL + 'golden-turtle'},							
							{ gameID: 424 ,name: 'kimcuong', visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'kim-cuong-slot', Link: rootURL + 'diamonds-link'},
							{ gameID: 410 ,name: 'rongvang', visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'rong-vang-slot', Link: rootURL + 'golden-dragon'},
							{ gameID: 411 ,name: 'tamquoc',  visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'tam-quoc-slot', Link: rootURL + 'three-kingdoms'},
							{ gameID: 417 ,name: 'thantai',  visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'than-tai-slot', Link: rootURL + 'god-of-wealth'},
							{ gameID: 416 ,name: 'thanthu',  visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'than-thu-slot', Link: rootURL + 'amazing-animals'},							
							{ gameID: 419 ,name: 'thodan',   visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'tho-dan-slot', Link: rootURL + 'indian-slot'},
							{ gameID: 420 ,name: 'samurai',  visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'samurai-slot', Link: rootURL + 'samurai-slot'},
							{ gameID: 423 ,name: 'typhu',    visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'ty-phu-slot', Link: rootURL + 'billionaire'},
							{ gameID: 421 ,name: 'haitac',   visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'hai-tac-slot', Link: rootURL + 'super-777'},
							{ gameID: 422 ,name: 'f88mini',  visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'f88-mini', Link: rootURL + 'mini-f88'},							
							{ gameID: 429 ,name: 'pacman',   visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'pacman', Link: rootURL + 'pacman'},						
							{ gameID: 428 ,name: 'dracula',  visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'dracula', Link: rootURL + 'dracula'},
							{ gameID: 426 ,name: 'keongot',  visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'keo-ngot-slot', Link: rootURL + 'candy-slot'},							
							{ gameID: 418 ,name: 'pachinko', visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'pinball-robot', Link: rootURL + 'pinball-robot'},
							{ gameID: 408 ,name: 'lucky',    visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'lucky-slot', Link: rootURL + 'lucky-slot'},
							{ gameID: 402 ,name: 'hoaqua',   visible: true,requireLogin: true, openNewTab: false, isNew: false, texture: 'fruit-slot', Link: rootURL + 'fruit-slot'}                            
                        ]
                    },
					Card:{
                        title: 'cardgame',
                        root: 'card-game',
                        type: 1,
                        enable: false,
                        List:[                            
                            { gameID: -1 ,name: 'tienlen',   visible: true, hotTexture: 'tien-len-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'tien-len', Link: rootURL + 'teang-len'},							
							{ gameID: -1 ,name: 'blackjack', visible: true, hotTexture: 'blackjack-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'black-jack', Link: rootURL + 'blackjack'},
                            { gameID: -1 ,name: 'baccarat',  visible: true, hotTexture: 'baccarat-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'baccarat', Link: rootURL + 'baccarat'},
                            { gameID: -1 ,name: 'big-two',   visible: false, hotTexture: 'big-two-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'big-two', Link: rootURL + 'big2'},
                            { gameID: -1 ,name: 'binh',      visible: true, hotTexture: 'binh-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'binh', Link: rootURL + 'chinese-poker'},
                            { gameID: -1 ,name: 'poker',      visible: true, hotTexture: 'poker-slot', requireLogin: true, openNewTab: false, isNew: false, texture: 'poker-slot', Link: rootURL + 'poker-slot'},							
                            { gameID: -1 ,name: 'xi-to',     visible: false, hotTexture: 'xito-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'xi-to', Link: rootURL + 'hongkong-poker'},                            
                            { gameID: -1 ,name: 'caorua',    visible: false, hotTexture: 'caorua-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'caorua', Link: rootURL + 'three-cards'},
                            { gameID: -1 ,name: 'lieng',     visible: false, hotTexture: 'lieng-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'lieng', Link: rootURL + 'three-cards-poker'},
                            { gameID: -1 ,name: 'phom',      visible: false, hotTexture: 'phom-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'phom', Link: rootURL + 'tala'},
                            { gameID: -1 ,name: 'samloc',    visible: false, hotTexture: 'sam-loc-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'sam-loc', Link: rootURL + 'northern-poker'}							
                        ]
                    },
					Bonus:{
                        title: 'bonusgame',
                        root: 'bonus-game',
                        type: 5,
                        enable: true,
                        List:[
                            { gameID: -1 ,name: 'ca-tran', visible: false, hotTexture: 'ca-tran-small', requireLogin: true, openNewTab: false, isNew: true, texture: 'ca-tran', Link: rootURL + ''},
                            { gameID: -1 ,name: 'big-fish', visible: true, hotTexture: 'big-fish-small', requireLogin: true, openNewTab: false, isNew: false, texture: 'big-fish', Link: rootURL + 'big-fish'},
                        ]
                    },					
                },
				GameBigFish:{
                    linkTexture : 'bonus-game',
                    name: 'bonus-game',
                    enable: true
                },
                GameBanCa3D:{
                    linkTexture : 'banca-3d',
                    enable: true,
                    Room3DConfig:{
                        openNewTab: false,
						btnRoomThuong: rootURL + 'fishing-3d?id=1',
						btnRoomVip: rootURL + 'fishing-3d?id=2',
						btn7DaiDuong: rootURL + 'fishing-3d?id=3',
                    }
                },
                ListCategoryConfig: {
                    EnableBtnMain: true,
                    textName: keyText.key_main,
                    textNameDeltaY: 170,
                    //todo type 1 : game bài , type 2 : game s lot type 3 : game betting type 4: game kĩ năng
                    CategoryConfig: [
                        {texture: '', titleText: keyText.key_list_game_all, type: 0, enable: true},                        
                        {texture: '', titleText: keyText.key_list_game_new, type: 6, enable: true},                        
                        {texture: '', titleText: keyText.key_list_game_bet, type: 3, enable: true},
						{texture: '', titleText: keyText.key_list_game_slot, type: 2, enable: true},
                        {texture: '', titleText: keyText.key_list_game_card, type: 1, enable: false},
						{texture: '', titleText: keyText.key_list_game_bonus, type: 5, enable: true},
                        {texture: '', titleText: keyText.key_list_game_skill, type: 4, enable: false}
                    ],
                },
                ListGameHot:[
                    { gameID: 428 ,name: 'dracula',  visible: true, requireLogin: true,  openNewTab:  true,  texture:'dracula-small',  Link: rootURL + 'dracula'},
                    { gameID: 421 ,name: 'haitac',   visible: true, requireLogin: true,  openNewTab:  true,  texture:'hai-tac-small',  Link: rootURL + 'super-777'},
                    { gameID: 402 ,name: 'hoaqua',   visible: false, requireLogin: true,  openNewTab:  true,  texture:'fruit-slot-small',  Link: rootURL + 'fruit-slot'},
                    { gameID: 426 ,name: 'keongot',  visible: true, requireLogin: true,  openNewTab:  true,  texture:'keo-ngot-small', Link: rootURL + 'candy-slot'},
                    { gameID: 424 ,name: 'kimcuong', visible: true, requireLogin: true,  openNewTab:  true,  texture:'kim-cuong-small',Link: rootURL + 'diamonds-link'},
                    { gameID: 422 ,name: 'f88mini',  visible: false, requireLogin: true,  openNewTab:  true,  texture:'f88-mini', Link: rootURL + 'mini-f88'},
                    { gameID: 406 ,name: 'kimquy',   visible: true, requireLogin: true,  openNewTab:  true,  texture:'kim-quy-small',  Link: rootURL + 'golden-turtle'},
                    { gameID: 408 ,name: 'lucky',    visible: false, requireLogin: true,  openNewTab:  true,  texture:'lucky-small',    Link: rootURL + 'lucky-slot'},
                    { gameID: 429 ,name: 'pacman',   visible: true, requireLogin: true,  openNewTab:  true,  texture:'pacman-small',   Link: rootURL + 'pacman'},
                    { gameID: 418 ,name: 'pachinko', visible: false, requireLogin: true,  openNewTab:  true,  texture:'pachinko-small', Link: rootURL + 'pinball-robot'},
                    { gameID: 412 ,name: 'poker',    visible: false, requireLogin: true,  openNewTab:  true,  texture:'poker-slot-small',    Link: rootURL + 'poker-slot'},
                    { gameID: 410 ,name: 'rongvang', visible: true, requireLogin: true,  openNewTab:  true,  texture:'rong-vang-small',Link: rootURL + 'golden-dragon'},
                    { gameID: 420 ,name: 'samurai',  visible: true, requireLogin: true,  openNewTab:  true,  texture:'samurai-small',  Link: rootURL + 'samurai-slot'},
                    { gameID: 417 ,name: 'thantai',  visible: true, requireLogin: true,  openNewTab:  true,  texture:'than-tai-small', Link: rootURL + 'god-of-wealth'},
                    { gameID: 416 ,name: 'thanthu',  visible: true, requireLogin: true,  openNewTab:  true,  texture:'than-thu-small', Link: rootURL + 'amazing-animals'},
                    { gameID: 419 ,name: 'thodan',   visible: true, requireLogin: true,  openNewTab:  true,  texture:'tho-dan-small',  Link: rootURL + 'indian-slot'},
                    { gameID: 411 ,name: 'tamquoc',  visible: true, requireLogin: true,  openNewTab:  true,  texture:'tam-quoc-small', Link: rootURL + 'three-kingdoms'},
                    { gameID: 423 ,name: 'typhu',    visible: true, requireLogin: true,  openNewTab:  true,  texture:'ty-phu-small',   Link: rootURL + 'billionaire'},
                ]
            },		
			UseBotConfig: {
                enable: false,
            },
			PlayTweenJackpot: {
                enable: true,
            },
			TrackingUserAction: {
                enable: false,
                actionJoin: {
                    home: '',
                    lobby: 'fishing-lobby',
					lobby_3D: 'fishing-lobby-3D',
                    cardGame: 'fishing-card-game',
                    roomNormal: 'fishing-normal',
                    roomVip: 'fishing-vip',
                    roomSevenSea: 'fishing-seven-sea',
					roomNormal_3D: 'fishing-normal-3D',
                    roomVip_3D: 'fishing-vip-3D',
                    roomSevenSea_3D: 'fishing-seven-sea-3D',
                }

            },
            PopupUserTopJackpot: {
                enable: true,
                tab: [
                    {Title: PreLoaderConfig.languageConfig.key_text_day , enable: true},
                    {Title: PreLoaderConfig.languageConfig.key_text_month , enable: false},
                ]

            },
            GAME_ID_AND_NAME : {
                500: {en: 'Atlantis King', km: 'Atlantis King'},
                433: {en: 'TEANG LEN', km: 'TEANG LEN'},
                432: {en: 'BLACKJACK', km: 'BLACKJACK'},
                431: {en: 'BACCARAT', km: 'BACCARAT'},
                430: {en: 'BIGTWO', km: 'BIGTWO'},
                429: {en: 'PACMAN', km: 'PACMAN'},
                428: {en: 'DRACULA', km: 'DRACULA'},
                426: {en: 'CANDY SLOT', km: 'Candy Slot'},
                425: {en: 'TEXAS HOLD EM POKER', km: 'TEXAS HOLD EM POKER'},
                424: {en: 'DIAMONDS LINK', km: 'ពេជ្រ'},
                423: {en: 'BILLIONAIRE', km: 'មហាសេដ្ឋី'},
                422: {en: 'MINI F88', km: 'MINI F88'},
                421: {en: 'SUPER 777', km: 'SUPER 777'},
                420: {en: 'SAMURAI SLOT', km: 'SAMURAI SLOT'},
                419: {en: 'INDIAN SLOT', km: 'ជនជាតិដើម'},
                418: {en: 'PINBALL', km: 'PINBALL'},
                417: {en: 'GOD OF WEALTH', km: 'ទេពទ្រព្យ'},
                416: {en: 'AMAZING ANIMALS', km: 'សត្វទេព'},
                412: {en: 'POKER SOLO', km: 'POKER SOLO'},
                411: {en: 'THREE KINGDOMS', km: 'សាមកុក'},
                410: {en: 'GOLDEN DRAGON', km: 'នាគមាស'},
                409: {en: 'CAO RUA', km: 'សំណាង'},
                408: {en: 'LUCKY SLOT', km: 'បង្វិលសំណាង'},
                407: {en: 'Hidden Treasure', km: 'Hidden Treasure'},
                406: {en: 'Golden Turtle', km: 'Golden Turtle'},
                402: {en: 'FRUIT SLOT', km: 'ផ្លែឈើ'},
                209: {en: 'ODD EVEN', km: 'ក្រឡុកចាន'},
                208: {en: 'MYSTERY NUM', km: 'ទាយលេខ'},
                201: {en: 'NORTHERN POKER', km: 'សឹមឡុក'},
                200: {en: 'LIENG', km: 'តាយស៊ីវ'},
                48:  {en: 'SICBO', km: 'តាយស៊ីវ'},
                45:  {en: 'BIG SMALL', km: 'BIG SMALL'},
                42:  {en: 'HONGKONG POKER', km: 'ស៊ីតូ'},
                41:  {en: 'TALA', km: 'ផម'},
                40:  {en: 'SOUTHERN POKER', km: 'ទៀនលេន'},
                34:  {en: 'CHINESE POKER', km: 'ម៉ូវប៊ិញ'},
                3:   {en: 'Bonus Wheel', km: 'រង្វង់បង្វិលសំណាង'},
                "-1":   {en: 'Bonus Wheel', km: 'រង្វង់បង្វិលសំណាង'},
            },			
            ListRoomShowHintLoading: [{
                RoomName: 'RoomMedusa',
                listInfoHint: [
                    {
                        key: 'key_hint_medusa1', timeShow: 3,
                        listTexture: [{
                            atlas: 'AtlasBattleBossMedusaHint',
                            texture: ['IconHint1Medusa']
                        }]
                    }, {
                        key: 'key_hint_medusa2', timeShow: 3,
                        listTexture: [{
                            atlas: 'AtlasBattleBossMedusaHint',
                            texture: ['IconHint2Medusa']
                        }]
                    }, {
                        key: 'key_hint_medusa3', timeShow: 3,
                        listTexture: [{
                            atlas: 'AtlasBattleBossMedusaHint',
                            texture: ['IconHint3-1Medusa', 'IconHint3-2Medusa']
                        }]
                    }]
            }, {
                RoomName: 'RoomPoseidon',
                listInfoHint: [
                    {
                        key: 'key_hint_poseidon1', timeShow: 3,
                        listTexture: [{
                            atlas: 'AtlasBattleBossPoseidonHint',
                            texture: ['IconHint1Poseidon']
                        }]
                    }, {
                        key: 'key_hint_poseidon2', timeShow: 3,
                        listTexture: [{
                            atlas: 'AtlasBattleBossPoseidonHint',
                            texture: ['IconHint2Poseidon']
                        }]
                    }, {
                        key: 'key_hint_poseidon3', timeShow: 3,
                        listTexture: [{
                            atlas: 'AtlasBattleBossPoseidonHint',
                            texture: ['IconHint3Poseidon']
                        }]
                    }]
            }],
            TimeShowEffectWinCoin: 10,
            TimeTweenJackpotGame: 30,
			SecondWalletConfig: {
                enable: true,
                limitShow: -1
            },            
			EnabledAreaCollision: false,
            EnabledNotConnect: false
			
        };
		var roomGame = PreLoaderConfig.linkRequireConfigRoomGame;
        var roomGameConfig = roomGame.createConfig();
        if (config)
            Object.assign(config, roomGameConfig);
			
        return config;
    };

    return BanCaConfig;
});