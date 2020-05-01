define(function () {
    var RoomGameConfig = {};
    RoomGameConfig.createConfig = function () {
        var keyText = global.PreLoaderConfig.languageConfig;
        var config = {
            ResourceGameApp: {
                Atlas: [],
                Sounds: [
                    //=InsertAudio
                    //=Sound
                    "banca/BanTrungCaLon.mysound",
                    "banca/BanTrungCaThuong.mysound",
                    "banca/bgmusic1.mysound",
                    "banca/bgmusic2.mysound",
                    "banca/bgmusic3.mysound",
                    "banca/bgmusic4.mysound",
					"banca/bgNoel1.mysound",
                    "banca/bgNoel2.mysound",
                    "banca/bom.mysound",
                    "banca/Boss_Death.mysound",
                    "banca/BrokenGlass.mysound",
                    "banca/CaDoChet.mysound",
                    "banca/CaDoXuatHien.mysound",
                    "banca/ChonVoCa.mysound",
                    "banca/CoinBayVe.mysound",
                    "banca/CoinWin.mysound",
                    "banca/DoiSung.mysound",
                    "banca/Doi_Sung.mysound",
                    "banca/Frozen.mysound",
                    "banca/GayChoang.mysound",
                    "banca/HopQuaMo.mysound",
                    "banca/HopQuaNo.mysound",
                    "banca/KeoCa.mysound",
                    "banca/PoseidonBullet.mysound",
                    "banca/Set.mysound",
                    "banca/SkillActive.mysound",
                    "banca/SkillFull.mysound",
                    "banca/StartWave.mysound",
                    "banca/Stone.mysound",
                    "banca/SungBan.mysound",
                    "banca/SungBan_DoiPhuong.mysound",
                    "banca/SungSkillBan.mysound",
                    "banca/SungSkillBomb.mysound",
                    "banca/SungSkillElectric.mysound",
                    "banca/SungSkillLaser.mysound",
                    "banca/SungSkillSockWave.mysound",
                    "banca/SungSkillTorpedo.mysound",
                    "banca/TomatoExplode.mysound",
                    "banca/TorpedoSpin.mysound",
                    "banca/TrungCa.mysound",
                    "banca/Warning.mysound",
                    "banca/wave.mysound",
                    "banca/XoetDien.mysound",
					"banca/NhanMaChet.mysound",
                    "banca/bosscome.mysound",
					"banca/ButtonClick.mysound",

                    "banca/BossRong_Dan1Vien.mysound",
                    "banca/BossRong_DanBanXoe10Vien.mysound",
                    "banca/BossRong_DanBanXoe18Vien.mysound",
                    "banca/BossRong_DanBanXoe5Vien.mysound",                    
					//"banca/thantai.mysound",
                    //"banca/thantaiden.mysound",
                    //"banca/thangthantai.mysound",				

                    //=EndInsertAudio
                ]
            },
            ResourceGeneralRoom: {
                ResourceInfo: {
                    Atlas: [
                        "banca/AtlasFish0Pack0.json",
                        "banca/AtlasFish1Pack0.json",
                        "banca/AtlasFish2Pack0.json",
                        "banca/AtlasFish3Pack0.json",
                        "banca/AtlasFish4Pack0.json",
                        "banca/AtlasFish5Pack0.json",
                        "banca/AtlasFish6Pack0.json",
                        "banca/AtlasFish7Pack0.json",
                        "banca/AtlasFish8Pack0.json",
                        "banca/AtlasFish9Pack0.json",
                        "banca/AtlasFish10Pack0.json",
                        "banca/AtlasFish11Pack0.json",
                        "banca/AtlasFish12Pack0.json",
                        "banca/AtlasFish13Pack1.json",
                        "banca/AtlasFish14Pack0.json",
                        "banca/AtlasFish15Pack1.json",
                        "banca/AtlasFish16Pack1.json",
                        "banca/AtlasFish17Pack1.json",
                        "banca/AtlasFish18Pack0.json",
                        "banca/AtlasFish19Pack1.json",
                        "banca/AtlasFish20Pack1.json",
                        "banca/AtlasFish21Pack1.json",
                        "banca/AtlasFish22Pack0.json",
                        "banca/AtlasFish23Pack2.json",
                        "banca/AtlasFish24Pack1.json",
                        "banca/AtlasFish25Pack0.json",
                        "banca/AtlasFish26Pack0.json",
                        "banca/AtlasFish27Pack1.json",
                        "banca/AtlasFish29Pack0.json",
                        "banca/AtlasFishStonePack0.json",						
                        "banca/boss/Spine/PowerUpBones.json",
                        "banca/boss/AtlastBossAnglePack19.json",
                        "banca/boss/Spine/AngleDieEffectsBones.json",
                        "banca/boss/Spine/AngleDieEffectsLightBones.json",
                        "banca/boss/Spine/AngleInSideBones.json",
                        //"banca/boss/Santa/AtlasBossSantaPack11.json",
                        //"banca/boss/Spine/SantaEffectBones.json",
						"banca/boss/Ca-Sau/CaSau.json",
                        "banca/boss/Ca-Sau/AtlasBossCaSauPack0.json",
                        "banca/boss/Ca-Sau/CaSauDie.json",
                        //"banca/boss/Than-Tai/AtlasBossThanTaiPack17.json",
                        //"banca/boss/Spine/ThanTaiHuBones.json",
                        //"banca/boss/Spine/ThanTaiVongSangBones.json",
                        //"banca/boss/Spine/ThanTaiDropBones.json",

                    ]
                }
            },
            ResourceGeneralInGame: {
                ResourceInfo: {
                    Atlas: [
                        "banca/AtlasBaseStation.json", 
                        "banca/AtlasBossMiniPack3.json",
						"banca/AtlasEffectsInGamePack4.json",                        
                        "banca/AtlasCompoChatPack0.json",
                        "banca/AtlasExplodeFrozenBones.json",
                        "banca/AtlasCompoItemPack6.json",
                        "banca/AtlasFishItemPack1.json",
                        "banca/AtlasGunPack0.json",
                        "banca/AtlasGun0Pack0.json",
                        "banca/AtlasGun1Pack0.json",
                        "banca/AtlasGun2Pack0.json",
                        "banca/AtlasGun3Pack0.json",
                        "banca/AtlasGun4Pack0.json",
                        "banca/AtlasGun101Pack0.json",   
						"banca/AtlasGun102Pack2.json",
						"banca/AtlasGun103Pack1.json",
                        "banca/AtlasGun201Pack0.json",
                        "banca/AtlasGun202Pack0.json",
                        "banca/AtlasGun203Pack2.json",
                        "banca/AtlasGun204Pack1.json",
                        "banca/AtlasGun205Pack0.json",
                        "banca/AtlasGunSkills.json",
                        "banca/AtlasWavesPack1.json",
                        "banca/GunEffect104Bones.json",
                        "banca/AtlasEyeOcean.json",
                        "banca/laserBones.json",
                        "banca/skillEffectBones.json",
                        "banca/AtlasEffectsPack3.json",

                    ]
                }
            },
            ResourceGeneralRoomBoss: {
                ResourceInfo: {
                    Atlas: [
                        "banca/AtlasFish0Pack0.json",
                        "banca/AtlasFish1Pack0.json",
                        "banca/AtlasFish2Pack0.json",
                        "banca/AtlasFish3Pack0.json",
                        "banca/AtlasFish4Pack0.json",
                        "banca/AtlasFish5Pack0.json",
                        "banca/AtlasFish6Pack0.json",
                        "banca/AtlasFish7Pack0.json",
                        "banca/AtlasFish8Pack0.json",
                        "banca/AtlasFish9Pack0.json",
                        "banca/AtlasFish10Pack0.json",
                        "banca/AtlasFish11Pack0.json",
                        "banca/AtlasFish12Pack0.json",
                        "banca/AtlasFish13Pack1.json",
                        "banca/AtlasFish14Pack0.json",
                        "banca/AtlasFish15Pack1.json",
                        "banca/AtlasFish16Pack1.json",
                        "banca/AtlasFish17Pack1.json",
                        "banca/AtlasFish18Pack0.json",
                        "banca/AtlasFish19Pack1.json",
                        "banca/AtlasFish20Pack1.json",
                        "banca/AtlasFish21Pack1.json",
                        "banca/AtlasFish22Pack0.json",
                        "banca/AtlasFish23Pack2.json",
                        "banca/AtlasFish24Pack1.json",
                        "banca/AtlasFish25Pack0.json",
                        "banca/AtlasFish26Pack0.json",
                        "banca/AtlasFish27Pack1.json",
                        "banca/AtlasFish29Pack0.json",
                        "banca/AtlasFishStonePack0.json",

                        "banca/boss/Spine/PowerUpBones.json",
                    ]
                }
            },
            RoomBattle: {
                kindId: 8,
                port: 1331,
                minCoinPlay: 0,
                minPower: 10,
                maxPower: 1000,
                name: keyText.key_lobby_BINHDAN || 'a',
                textMinCoin: keyText.key_text_min_coin_room_normal,
                ListGunConfig: [
                    {id: 0, power: [10], gunChoisePoint: {x: -100, y: -88}},
                    {id: 1, power: [50], gunChoisePoint: {x: -75, y: -161}},
                    {id: 2, power: [300], gunChoisePoint: {x: 0, y: -182}},
                    {id: 3, power: [500], gunChoisePoint: {x: 75, y: -161}},
                    {id: 4, power: [1000], gunChoisePoint: {x: 100, y: -88}}
                ],
                ResourceInfo: {
                    Atlas: [
                        "banca/AtlasBackgroundBanCaPack0.json",
                        "banca/AtlasBaseStation.json",
                        "banca/AtlasBattlePack1.json",
                        "banca/AtlasBattleEffectPack6.json",
                        "banca/AtlasCompoChatPack0.json",
                        "banca/AtlasEffectsInGamePack4.json",
                        "banca/AtlasEffectsPack3.json",
                        "banca/AtlasExplodeFrozenBones.json",
                        "banca/AtlasCompoItemPack6.json",
                        "banca/battle/AtlasFish0Pack0.json",
                        "banca/battle/AtlasFish10Pack1.json",
                        "banca/battle/AtlasFish11Pack1.json",
                        "banca/battle/AtlasFish12Pack2.json",
                        "banca/battle/AtlasFish13Pack2.json",
                        "banca/battle/AtlasFish14Pack3.json",
                        "banca/battle/AtlasFish15Pack2.json",
                        "banca/battle/AtlasFish16Pack1.json",
                        "banca/battle/AtlasFish17Pack1.json",
                        "banca/battle/AtlasFish18Pack3.json",
                        "banca/battle/AtlasFish19Pack4.json",
                        "banca/battle/AtlasFish1Pack0.json",
                        "banca/battle/AtlasFish20Pack9.json",
                        "banca/battle/AtlasFish21Pack9.json",
                        "banca/battle/AtlasFish22Pack2.json",
                        "banca/battle/AtlasFish23Pack2.json",
                        "banca/battle/AtlasFish24Pack1.json",
                        "banca/battle/AtlasFish25Pack1.json",
                        "banca/battle/AtlasFish26Pack1.json",
                        "banca/battle/AtlasFish27Pack2.json",
                        "banca/battle/AtlasFish29Pack1.json",
                        "banca/battle/AtlasFish2Pack0.json",
                        "banca/battle/AtlasFish3Pack0.json",
                        "banca/battle/AtlasFish4Pack1.json",
                        "banca/battle/AtlasFish5Pack1.json",
                        "banca/battle/AtlasFish6Pack1.json",
                        "banca/battle/AtlasFish7Pack1.json",
                        "banca/battle/AtlasFish8Pack2.json",
                        "banca/battle/AtlasFish9Pack0.json",
                        "banca/battle/AtlasFishStonePack3.json",
                        "banca/AtlasGun0Pack0.json",
                        "banca/AtlasGun101Pack1.json",
                        "banca/AtlasGun102Pack2.json",
                        "banca/AtlasGun103Pack6.json",
                        "banca/AtlasGun104Pack9.json",
                        "banca/AtlasGun105Pack3.json",
                        "banca/AtlasGun106Pack2.json",
                        "banca/AtlasGun107Pack2.json",
                        "banca/AtlasGun1Pack1.json",
                        "banca/AtlasGun201Pack1.json",
                        "banca/AtlasGun202Pack1.json",
                        "banca/AtlasGun203Pack2.json",
                        "banca/AtlasGun204Pack2.json",
                        "banca/AtlasGun205Pack0.json",
                        "banca/AtlasGun2Pack1.json",
                        "banca/AtlasGun3Pack1.json",
                        "banca/AtlasGun4Pack0.json",
                        "banca/AtlasGunPack9.json",
                        "banca/AtlasGunSkills.json",
                        "banca/GunEffect104Bones.json",                        
                        "banca/AtlasBossMedusaBotRightFrezzePack5.json",
                        "banca/AtlasBossMedusaDie.json",
                        "banca/AtlasBossMedusaLeftAttackPack3.json",
                        "banca/AtlasBossMedusaLeftSwimPack3.json",
                        "banca/AtlasBossMedusaRightAttackPack4.json",
                        "banca/AtlasBossMedusaRightSwimPack3.json",
                        "banca/AtlasBossMedusaTopLeftFrezzePack3.json",
                        "banca/AtlasBossMedusaTopRightFrezzePack2.json",
                        "banca/AtlasBossCentaurPack20.json",
                        "banca/AtlasBossSevenSeaFish103Pack65.json",
                        "banca/AtlasBossSevenSeaFish105Pack8.json",
                    ],
                    Sounds: [
                        "banca/BanTrungCaLon.mysound",
                        "banca/BanTrungCaThuong.mysound",
                        "banca/bgmusic1.mysound",
                        "banca/bgmusic2.mysound",
                        "banca/bgmusic3.mysound",
                        "banca/bgmusic4.mysound",
                        "banca/bom.mysound",
                        "banca/boss/bosscome.mysound",
                        "banca/Boss_Death.mysound",
                        "banca/CaDoChet.mysound",
                        "banca/CaDoXuatHien.mysound",
                        "banca/CaTranXuatHien.mysound",
                        "banca/CoinBayVe.mysound",
                        "banca/CoinWin.mysound",
                        "banca/DoiSung.mysound",
                        "banca/GayChoang.mysound",
                        "banca/HopQuaMo.mysound",
                        "banca/HopQuaNo.mysound",
                        "banca/Set.mysound",
                        "banca/SkillActive.mysound",
                        "banca/SkillFull.mysound",
                        "banca/SungBan.mysound",
                        "banca/SungBan_DoiPhuong.mysound",
                        "banca/SungSkillBan.mysound",
                        "banca/TrungCa.mysound",
                        "banca/Warning.mysound",
                        "banca/thantai.mysound",
                        "banca/BrokenGlass.mysound",
                        "banca/SungSkillLaser.mysound",
                        "banca/TomatoExplode.mysound",
                        "banca/PoseidonBullet.mysound",
                        "banca/wave.mysound"
                    ]
                }
            },
            RoomThuong: {
                kindId: 1,
                port: 1331,
                minCoinPlay: 0,
                minPower: 10,
                maxPower: 1000,
                name: keyText.key_lobby_BINHDAN || 'a',
                textMinCoin: keyText.key_text_min_coin_room_normal,
                ListGunConfig: [
                    {id: 0, power: [10], gunChoisePoint: {x: -100, y: -88}},
                    {id: 1, power: [50], gunChoisePoint: {x: -75, y: -161}},
                    {id: 2, power: [100], gunChoisePoint: {x: 0, y: -182}},
                    {id: 3, power: [500], gunChoisePoint: {x: 75, y: -161}},
                    {id: 4, power: [1000], gunChoisePoint: {x: 100, y: -88}}
                ],
                ResourceInfo: {
                    Atlas: [
                        "banca/AtlasBackgroundBanCaPack2.json",
                    ],
                    Sounds: []
                }
            },
            RoomVip: {
                kindId: 3,
                port: 1330,
                minCoinPlay: 10000,
                minPower: 1000,
                maxPower: 10000,
                textMinCoin: keyText.key_text_min_coin_room_vip,
                name: keyText.key_lobby_DAIGIA || 'a',
                ListGunConfig: [
                    {id: 0, power: [1000], gunChoisePoint: {x: -100, y: -88}},
                    {id: 1, power: [2000], gunChoisePoint: {x: -75, y: -161}},
                    {id: 2, power: [5000], gunChoisePoint: {x: 0, y: -182}},
                    {id: 3, power: [8000], gunChoisePoint: {x: 75, y: -161}},
                    {id: 4, power: [10000], gunChoisePoint: {x: 100, y: -88}}
                ],
                ResourceInfo: {
                    Atlas: [
                        "banca/AtlasBackgroundBanCaPack2.json",
                        "banca/AtlasBossSevenSeaFish105Pack8.json",
                        "banca/FireDragonBones.json"
                    ],
                    Sounds: [
                        "banca/BossRong_RongDi.mysound",
                        "banca/BossRong_RongGamGu.mysound",
                        "banca/BossRong_RongGamGuDai.mysound",
                    ]
                }
            },
            RoomMedusa: {
                kindId: 9,
                bossID: 101,
                port: 1330,
                minCoinPlay: 0,
                minPower: 1000,
                maxPower: 10000,
                ListGunConfig: [
                    {id: 0, power: [1000], gunChoisePoint: {x: -100, y: -88}},
                    {id: 1, power: [2000], gunChoisePoint: {x: -75, y: -161}},
                    {id: 2, power: [5000], gunChoisePoint: {x: 0, y: -182}},
                    {id: 3, power: [8000], gunChoisePoint: {x: 75, y: -161}},
                    {id: 4, power: [10000], gunChoisePoint: {x: 100, y: -88}}
                ],
                ResourceInfo: {
                    Atlas: [
                        "banca/battle-boss/AtlasBattleBoss.json",
                        "banca/battle-boss/PhosphorescentProgressBones.json",
                        "banca/battle-boss/medusa/AtlasBackgroundBanCaMedusaPack1.json",
                        "banca/battle-boss/medusa/AtlasBattleBossMedusaPack1.json",
                        "banca/battle-boss/medusa/AtlasBattleBossMedusaEyeAppear.json",
                        "banca/battle-boss/medusa/AtlasBossMedusaPack15.json",
                        "banca/battle-boss/medusa/AtlasEffectBoomMedusaPack4.json",
                        "banca/battle-boss/medusa/AtlasBattleBossMedusaStatueExplosionAfter.json",
                        "banca/battle-boss/medusa/AtlasBattleBossMedusaStatueExplosionPrePack2.json",
                        "banca/battle-boss/medusa/AtlasMedusaAuraPack3.json",
                        "banca/battle-boss/medusa/AtlasMedusaComingPack1.json",
                        "banca/battle-boss/medusa/AtlasMedusaMantra.json",
                        "banca/battle-boss/medusa/EyePerfectlyBones.json",
                        "banca/battle-boss/medusa/LoseBones.json",
                        "banca/battle-boss/medusa/MedusaSkillBones.json",
                        "banca/battle-boss/medusa/MermaidBones.json",
                        "banca/battle-boss/medusa/PedestalBones.json",
                        "banca/battle-boss/medusa/TheEyeBones.json",
                        "banca/battle-boss/medusa/WelcomeBones.json",
                        "banca/battle-boss/medusa/WinBones.json"
                    ],
                    Sounds: [
                        //"banca/bosscome.mysound",
                        "banca/MedusaAbsorbent.mysound",
                        "banca/MedusaArrow.mysound",
                        "banca/MedusaComeIn.mysound",
                        "banca/MedusaComeOut.mysound",
                        "banca/MedusaLose.mysound",
                        "banca/MedusaScream.mysound",
                        "banca/MedusaStatueBroken.mysound",
                        "banca/MedusaTransformRock.mysound",
                        "banca/MedusaWelcome.mysound",
                        "banca/MedusaWin.mysound"
                    ]
                }
            },
            RoomCentaur: {
                kindId: 9,
                bossID: 102,
                port: 1330,
                minCoinPlay: 10000,
                minPower: 1000,
                maxPower: 10000,
                ListGunConfig: [
                    {id: 0, power: [1000], gunChoisePoint: {x: -100, y: -88}},
                    {id: 1, power: [2000], gunChoisePoint: {x: -75, y: -161}},
                    {id: 2, power: [5000], gunChoisePoint: {x: 0, y: -182}},
                    {id: 3, power: [8000], gunChoisePoint: {x: 75, y: -161}},
                    {id: 4, power: [10000], gunChoisePoint: {x: 100, y: -88}}
                ],
                ResourceInfo: {
                    Atlas: [
                        "banca/AtlasBackgroundBanCaCentaur.json",
                        "banca/AtlasBossCentaurPack20.json",
                    ],
                    Sounds: [
                        "banca/NhanMaChet.mysound",
                    ]
                }
            },
			RoomPoseidon: {
                kindId: 9,
                bossID: 103,
                port: 1330,
                minCoinPlay: 10000,
                minPower: 1000,
                maxPower: 10000,
                ListGunConfig: [
                    {id: 0, power: [1000], gunChoisePoint: {x: -100, y: -88}},
                    {id: 1, power: [2000], gunChoisePoint: {x: -75, y: -161}},
                    {id: 2, power: [5000], gunChoisePoint: {x: 0, y: -182}},
                    {id: 3, power: [8000], gunChoisePoint: {x: 75, y: -161}},
                    {id: 4, power: [10000], gunChoisePoint: {x: 100, y: -88}}
                ],
                ResourceInfo: {
                    Atlas: [

                        "banca/AtlasBaseStation.json",
                        "banca/AtlasEffectsInGamePack4.json",
                        "banca/AtlasExplodeFrozenBones.json",
                        "banca/AtlasFishItemPack1.json",
                        "banca/AtlasGunPack0.json",
                        "banca/AtlasGun0Pack0.json",
                        "banca/AtlasGun1Pack0.json",
                        "banca/AtlasGun2Pack0.json",
                        "banca/AtlasGun3Pack0.json",
                        "banca/AtlasGun4Pack0.json",
                        "banca/AtlasGun108Pack2.json",
                        // "banca/AtlasGunSkills.json",
                        "banca/AtlasEffectsPack3.json",

                        "banca/AtlasFish0Pack0.json",
                        "banca/AtlasFish1Pack0.json",
                        "banca/AtlasFish2Pack0.json",
                        "banca/AtlasFish3Pack0.json",
                        "banca/AtlasFish4Pack0.json",
                        "banca/AtlasFish5Pack0.json",
                        "banca/AtlasFish6Pack0.json",
                        "banca/AtlasFish7Pack0.json",
                        "banca/AtlasFish8Pack0.json",
                        "banca/AtlasFish9Pack0.json",
                        "banca/AtlasFish10Pack0.json",
                        "banca/AtlasFish11Pack0.json",
                        "banca/AtlasFish12Pack0.json",
                        "banca/AtlasFish13Pack1.json",
                        "banca/AtlasFish14Pack0.json",
                        "banca/AtlasFish15Pack1.json",
                        "banca/AtlasFish16Pack1.json",
                        "banca/AtlasFish17Pack1.json",
                        "banca/AtlasFish18Pack0.json",
                        "banca/AtlasFish19Pack1.json",
                        "banca/AtlasFish20Pack1.json",
                        "banca/AtlasFish21Pack1.json",
                        "banca/AtlasFish22Pack0.json",
                        "banca/AtlasFish23Pack2.json",
                        "banca/AtlasFish24Pack1.json",
                        "banca/AtlasFish25Pack0.json",
                        "banca/AtlasFish26Pack0.json",
                        "banca/AtlasFish27Pack1.json",
                        "banca/AtlasFish29Pack0.json",
                        // "banca/AtlasFishStonePack0.json",

                        "banca/boss/Spine/PowerUpBones.json",
                        "banca/battle-boss/PhosphorescentProgressBones.json",
                        "banca/battle-boss/AtlasBattleBoss.json",
                        "banca/battle-boss/poseidon/AtlasBackgroundPoseidon.json",
                        "banca/battle-boss/poseidon/AtlasBattleBossPoseidonPack26.json",
                        "banca/battle-boss/poseidon/AtlasBattleHaiMaPack3.json",
                        "banca/battle-boss/poseidon/AtlasBossSevenSeaFish104Pack16.json",
                        "banca/battle-boss/poseidon/WelcomeBones.json",
                        "banca/battle-boss/poseidon/BossSkill.json",
                        "banca/battle-boss/poseidon/AtlasPoseidonComingPack0.json",
                        "banca/battle-boss/poseidon/EffectPoseidonDieBones.json",
                        "banca/battle-boss/poseidon/WinBones.json",
                        "banca/battle-boss/poseidon/AtlasPoseidonEffectPack0.json",

                        "banca/battle-boss/medusa/AtlasBattleBossMedusaPack1.json",

                        // "banca/battle-boss/medusa/MedusaSkillBones.json",

                        "banca/battle-boss/SpineGeneral/LoseBones.json",
                        "banca/battle-boss/SpineGeneral/MermaidBones.json"


                    ],
                    Sounds: [
                        //"banca/NhanMaChet.mysound",
                        "banca/PoseidonAttack.mysound",
                        "banca/SummonPoseidon.mysound",
                    ]
                }
            },
            RoomLifeOfPi: {
                kindId: 9,
                bossID: 103,
                port: 1330,
                minCoinPlay: 10000,
                minPower: 1000,
                maxPower: 10000,
                ListGunConfig: [
                    {id: 0, power: [1000], gunChoisePoint: {x: -100, y: -88}},
                    {id: 1, power: [2000], gunChoisePoint: {x: -75, y: -161}},
                    {id: 2, power: [5000], gunChoisePoint: {x: 0, y: -182}},
                    {id: 3, power: [8000], gunChoisePoint: {x: 75, y: -161}},
                    {id: 4, power: [10000], gunChoisePoint: {x: 100, y: -88}}
                ],
                ResourceInfo: {                                                                                   //can be overwrite by gameConfig to use special loading screen
                    Atlas: [
                        "banca/AtlasBackgroundBanCaLifeOfPi.json",
                        "banca/lifeOfPi/AtlasItemBGPack3.json",
                        "banca/AtlasBossSevenSeaFish103Pack61.json",
                        "banca/AtlasBossSevenSeaFish104Pack26.json"
                    ],
                    Sounds: [
                        "banca/bgMermaid.mysound",
                        "banca/MermaidHarp_1.mysound",
                        "banca/MermaidHarp_10.mysound",
                        "banca/MermaidHarp_11.mysound",
                        "banca/MermaidHarp_12.mysound",
                        "banca/MermaidHarp_13.mysound",
                        "banca/MermaidHarp_2.mysound",
                        "banca/MermaidHarp_3.mysound",
                        "banca/MermaidHarp_4.mysound",
                        "banca/MermaidHarp_5.mysound",
                        "banca/MermaidHarp_6.mysound",
                        "banca/MermaidHarp_7.mysound",
                        "banca/MermaidHarp_8.mysound",
                        "banca/MermaidHarp_9.mysound",
                        "banca/PoseidonGong.mysound",
                        "banca/PoseidonNo.mysound",
                    ]
                }
            },
            RoomOcean: {
                kindId: 9,
                roomGroup: {
                    vip: {
                        id: 0,
                        ListGunConfig: [
                            {id: 0, power: [1000], gunChoisePoint: {x: -100, y: -88}},
                            {id: 1, power: [2000], gunChoisePoint: {x: -75, y: -161}},
                            {id: 2, power: [5000], gunChoisePoint: {x: 0, y: -182}},
                            {id: 3, power: [8000], gunChoisePoint: {x: 75, y: -161}},
                            {id: 4, power: [10000], gunChoisePoint: {x: 100, y: -88}}
                        ]
                    },
                    normal: {
                        id: 1,
                        ListGunConfig: [
                            {id: 0, power: [100], gunChoisePoint: {x: -100, y: -88}},
                            {id: 1, power: [200], gunChoisePoint: {x: -75, y: -161}},
                            {id: 2, power: [300], gunChoisePoint: {x: 0, y: -182}},
                            {id: 3, power: [500], gunChoisePoint: {x: 75, y: -161}},
                            {id: 4, power: [1000], gunChoisePoint: {x: 100, y: -88}}
                        ]
                    }
                },
                minCoinPlay: 10000,
                textMinCoin: keyText.key_text_min_coin_room_ocean,
                name: keyText.key_seven_sea
            },
			RoomFree: {
                kindId: 11,
                minCoinPlay: 0,
                minPower: 10,
                maxPower: 1000,
                name: keyText.key_lobby_BINHDAN || 'a',
                textMinCoin: keyText.key_text_min_coin_room_normal,
                ListGunConfig: [
                    {id: 0, power: [100], gunChoisePoint: {x: -100, y: -88}},
                    {id: 1, power: [200], gunChoisePoint: {x: -75, y: -161}},
                    {id: 2, power: [300], gunChoisePoint: {x: 0, y: -182}},
                    {id: 3, power: [500], gunChoisePoint: {x: 75, y: -161}},
                    {id: 4, power: [1000], gunChoisePoint: {x: 100, y: -88}}
                ],
                ResourceInfo: {
                    Atlas: [
                    ],
                    Sounds: []
                }
            },
        };
        Array.prototype.push.apply(config.ResourceGeneralRoom.ResourceInfo.Atlas, config.ResourceGeneralInGame.ResourceInfo.Atlas);
        Array.prototype.push.apply(config.ResourceGeneralRoomBoss.ResourceInfo.Atlas, config.ResourceGeneralInGame.ResourceInfo.Atlas);
        //Note Room Thuong vs Vip
        Array.prototype.push.apply(config.RoomThuong.ResourceInfo.Atlas, config.ResourceGeneralRoom.ResourceInfo.Atlas);
        Array.prototype.push.apply(config.RoomVip.ResourceInfo.Atlas, config.ResourceGeneralRoom.ResourceInfo.Atlas);
        //Note Room Boss
        Array.prototype.push.apply(config.RoomMedusa.ResourceInfo.Atlas, config.ResourceGeneralRoomBoss.ResourceInfo.Atlas);
        Array.prototype.push.apply(config.RoomCentaur.ResourceInfo.Atlas, config.ResourceGeneralRoomBoss.ResourceInfo.Atlas);
        Array.prototype.push.apply(config.RoomLifeOfPi.ResourceInfo.Atlas, config.ResourceGeneralRoomBoss.ResourceInfo.Atlas);

        //Sounds
        Array.prototype.push.apply(config.RoomThuong.ResourceInfo.Sounds, config.ResourceGameApp.Sounds);
        Array.prototype.push.apply(config.RoomVip.ResourceInfo.Sounds, config.ResourceGameApp.Sounds);

        Array.prototype.push.apply(config.RoomMedusa.ResourceInfo.Sounds, config.ResourceGameApp.Sounds);
        Array.prototype.push.apply(config.RoomCentaur.ResourceInfo.Sounds, config.ResourceGameApp.Sounds);
        Array.prototype.push.apply(config.RoomLifeOfPi.ResourceInfo.Sounds, config.ResourceGameApp.Sounds);
		Array.prototype.push.apply(config.RoomPoseidon.ResourceInfo.Sounds, config.ResourceGameApp.Sounds);
		Array.prototype.push.apply(config.RoomFree.ResourceInfo.Atlas, config.RoomThuong.ResourceInfo.Atlas);
        Array.prototype.push.apply(config.RoomFree.ResourceInfo.Sounds, config.RoomThuong.ResourceInfo.Sounds);

        return config;
    };
    return RoomGameConfig;
});