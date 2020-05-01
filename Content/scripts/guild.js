//Guild
var GuildClientWebHelper = {
    GetInfoGuild: function () {
		window.open('/bang-hoi', '_blank ');
		return;
		
        Loading.Show();
        $.get("/Guild/IndexNoGuild", function (data) {
            PopupOhYeaGuild.Show("THÔNG BÁO", data, 0);
        })
            .done(function () {
                Loading.Hide();
            });
    },
    GetInfoGuildDetail: function (_alias) {
        Loading.Show();
        $.get("/Guild/Index", { alias: _alias }, function (data) {
            PopupOhYeaGuildDetail.Show("THÔNG BÁO", data, 0);
        })
            .done(function () {
                Loading.Hide();
            });
    },
    GetEventDetail: function (id, _case) {        
        Loading.Show();
        $.get("/Guild/EventDetail", { articleId: id, typeEvent: _case }, function (data) {
            if (_case == 0) {
                $('#tblGuildAllEvent').css({ "display": "none" });
                $('#guildAllEvent').append(data);
            } else {
                PopupOhYeaPolicy.Show("CHÍNH SÁCH BANG HỘI", data, 0);
            }
        })
            .done(function () {
                Loading.Hide();
            });
    },
    BackEventAll: function () {
        $('#tblGuildAllEvent').css({ "display": "table" });
        $('#guildEventDetail').remove();
    },
    OnAddComment: function (_alias, _isGuildMaster, _isGuildMember, _isHaveGuild, _guildFactionId) {
        var _txtComment = CKEDITOR.instances['ckeditor_txtComment'].getData();
        //console.log(desc);
        //return
        //var _txtComment = $("#txtComment").val();        
        if (_txtComment.trim() == "") {
            PopupOhYea2.Show("THÔNG BÁO", "Vui lòng nhập nội dung", 0, 0, 0, 0);
            return false;
        }
        else {
            Loading.Show();
            $.post('/Guild/CreateCommentGuild', { alias: _alias, isGuildMaster: _isGuildMaster, isGuildMember: _isGuildMember, txtComment: _txtComment, guildFactionId: _guildFactionId }, function (response) {
                if (response.Code != 0) {
                    PopupOhYea2.Show("THÔNG BÁO", "Tạo thảo luận thất bại", 0, 0, 0, 0);
                }
                Loading.Hide();
            }).complete(function () {
                Loading.Hide();
                AjaxLoadHelper.BoxAllCommentGuild(_alias, _isGuildMaster, _isGuildMember, _isHaveGuild, _guildFactionId);
            });

        }

    },
    OnDeleteComment: function (_alias, _arrCommentId) {
        if (_arrCommentId == "" || _arrCommentId == ",") {
            PopupOhYea2.Show("THÔNG BÁO", "Chưa chọn thảo luận cần xóa", 0, 0, 0, 0);
            return;
        }
        else {
            PopupOhYeaConfirm.YesNo("THÔNG BÁO", "Bạn xóa những thảo luận này?", "Đồng ý", "Hủy", function () {
                Loading.Show();
                $.post('/Guild/DeleteCommentGuild', { alias: _alias, arrCommentId: _arrCommentId }, function (response) {
                    if (response.Code == 0) {
                        $("#rowcomment_" + _arrCommentId).remove();
                    } else {
                        PopupOhYea2.Show("THÔNG BÁO", "Xóa thảo luận thất bại", 0, 0, 0, 0);
                        return;
                    }
                    Loading.Hide();
                }).complete(function () {
                    Loading.Hide();
                });
            }, function () {
            });
        }
    },
    CreateGuild: function () {
        Loading.Show();
        $.get("/Guild/CreateGuild", function (data) {
            PopupOhYeaSm.Show("TẠO BANG", data, 0);
        })
            .done(function () {
                Loading.Hide();
            });
    },

    OnBeginCreateGuildSubmit: function () {
        var name = $("#txtGuildName").val();
        if (name.length < 5 || name.length > 30) {
            $("#txtErrorGuild").html("Tên bang từ 5 đến 30 ký tự");
            return false;
        }

        Loading.Show();
        return true;
    },
    SuccessSubmitUpdate: function (result) {
        Loading.Hide();
        $("#txtErrorGuild").html('* ' + result.Message);
        if (result.Code == 0) {
            Loading.Show();
            PopupOhYeaSm.Hide();
            PopupOhYeaGuild.Hide();
            setTimeout(function () {
                GuildClientWebHelper.GetInfoGuildDetail()
            }, 1500)
        }
    },    
    SearchGuild: function(_keyword, _pageSize, _pageIndex, _guildFactionId) {
        Loading.Show();
        $.get("/Guild/SearchGuild", { keyword: _keyword, pageSize: _pageSize, pageIndex: _pageIndex, guildFactionId: _guildFactionId }, function (data) {
            $('#guild_search').append(data);
        })
            .done(function () {
                Loading.Hide();
            });
    },
    OnBeginSearchGuild: function () {
        Loading.Show();
    },
    OnSuccessSearchGuild: function (result) {
        Loading.Hide();
        $('#guild_search').html(result);
    },
    OnSuccessMemberInGuild: function (result) {
        Loading.Hide();
        $('#guild__useringuild').html(result);
    },    
    OnApproveJoin: function (_alias, _buttonType) {
        Loading.Show();

        var listID = ohyeaApp.getCheckBoxSelected();
        var _ids = listID.join();
        if (_ids == "" || _ids == ",") {
            Loading.Hide();
            PopupOhYea2.Show("THÔNG BÁO", "Chưa có thành viên nào được chọn", 0, 0, 0, 0);
            return
        }

        $.post('/Guild/ApproveOrReject', { alias: _alias, buttonType: _buttonType, ids: _ids }, function (response) {
            if (response.Code == 0) {
                for (var i = 0; i < listID.length; i++) {
                    $("#tr_" + listID[i]).remove();
                }
                Loading.Hide();
                return
            } else {
                Loading.Hide();
                PopupOhYea2.Show("THÔNG BÁO", response.Message, 0, 0, 0, 0);
                return;
            }
        }).complete(function () {
            Loading.Hide();
        });
    },
    UpdateSlogan: function (_alias) {
        Loading.Show();
        var _slogan = $('#txtSloganGuild').val();
        if (_slogan.trim() == "") {
            Loading.Hide();
            PopupOhYea2.Show("THÔNG BÁO", "Vui lòng nhập khẩu hiệu bang", 0, 0, 0, 0);
            return;
        }
        $.post('/Guild/EditSlogan', { alias: _alias, slogan: _slogan }, function (response) {
            if (response.Code == 0) {
                $('#txtSloganGuild').val(_slogan);
                Loading.Hide();
                PopupOhYea2.Show("THÔNG BÁO", "Cập nhật khẩu hiệu bang thành công.", 0, 0, 0, 0);
                return;
            } else {
                Loading.Hide();
                PopupOhYea2.Show("THÔNG BÁO", response.Message, 0, 0, 0, 0);
                return;
            }
        }).complete(function () {
            Loading.Hide();
        });
    },

    UpdateFanpage: function () {
        Loading.Show();
        var _fanpage = $('#txtLinkFanpage').val();
        if (_fanpage.trim() == "") {
            Loading.Hide();
            PopupOhYea2.Show("THÔNG BÁO", "Vui lòng nhập địa chỉ facebook.", 0, 0, 0, 0);
            return;
        }

        var FBurl = /^(http|https)\:\/\/www.facebook.com\/.*/i;
        if (!_fanpage.match(FBurl)) {
            Loading.Hide();
            PopupOhYea2.Show("THÔNG BÁO", "Địa chỉ bạn nhập không phải facebook.", 0, 0, 0, 0);
            return;
        }

        $.post('/Guild/UpdateEditFanpage', { fanpage: _fanpage }, function (response) {
            if (response.Code == 0) {
                $('#txtLinkFanpage').val(_fanpage);
                Loading.Hide();
                PopupOhYea2.Show("THÔNG BÁO", "Cập nhật địa chỉ fanpage thành công.", 0, 0, 0, 0);
                return;
            } else {
                Loading.Hide();
                PopupOhYea2.Show("THÔNG BÁO", response.Message, 0, 0, 0, 0);
                return;
            }
        }).complete(function () {
            Loading.Hide();
        });
    },

    GetProfile: function (_userId) {
        Loading.Show();
        $.get("/Guild/GetProfile", { userId: _userId }, function (data) {
            PopupOhYeaProfileUser.Show("THÔNG BÁO", data, 0);
        })
            .done(function () {
                Loading.Hide();
            });
    },

    ChangeAvatarGuild: function (_input) {

        if (_input.files) {

        } else {
            PopupOhYea2.Show("THÔNG BÁO", "Không đọc được hình. Lỗi này có thể do trình duyệt phiên bản cũ. Vui lòng liên hệ admin để được hỗ trợ.", 0, 0, 0, 0);
            return;
        }

        if (_input.files && _input.files[0]) {
            var file = _input.files[0];

            var sizeImage = byte2Kb(_input.files[0].size);

            if (sizeImage > 500) {
                PopupOhYea2.Show("THÔNG BÁO", "Dung lượng ảnh phải < 500Kb.", 0, 0, 0, 0);
                return;
            }

            if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                var preview = document.querySelector('#imgAvatarGuild');

                var reader = new FileReader();

                reader.addEventListener("load", function () {
                    preview.src = reader.result;
                }, false);

                if (file) {
                    reader.readAsDataURL(file);
                }

                var _base64 = $("#imgAvatarGuild").attr("src");

                setTimeout(function () {
                    $.post('/Guild/UploadAvatar', { base64: $("#imgAvatarGuild").attr("src") }, function (response) {
                        if (response.Code == 0) {
                            Loading.Hide();
                            return
                        } else {
                            Loading.Hide();
                            PopupOhYea2.Show("THÔNG BÁO", response.Message, 0, 0, 0, 0);
                            return;
                        }
                    }).complete(function () {
                        Loading.Hide();
                    });
                }, 1500);
            }
        }
    },
    ChangeBannerGuild: function (_input, _bannerId) {

        if (_input.files) {

        } else {
            PopupOhYea2.Show("THÔNG BÁO", "Không đọc được hình. Lỗi này có thể do trình duyệt phiên bản cũ. Vui lòng liên hệ admin để được hỗ trợ.", 0, 0, 0, 0);
            return;
        }

        if (_input.files && _input.files[0]) {
            var file = _input.files[0];

            var sizeImage = byte2Kb(_input.files[0].size);

            if (sizeImage > 500) {
                PopupOhYea2.Show("THÔNG BÁO", "Dung lượng ảnh phải < 500Kb.", 0, 0, 0, 0);
                return;
            }

            if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                var preview = document.querySelector('#imgBannerGuild');

                var reader = new FileReader();

                reader.addEventListener("load", function () {
                    preview.src = reader.result;
                }, false);

                if (file) {
                    reader.readAsDataURL(file);
                }

                var _base64 = $("#imgBannerGuild").attr("src");

                setTimeout(function () {
                    $.post('/Guild/UploadBanner', { base64: $("#imgBannerGuild").attr("src"), bannerId: _bannerId }, function (response) {
                        if (response.Code == 0) {
                            Loading.Hide();
                            return
                        } else {
                            Loading.Hide();
                            PopupOhYea2.Show("THÔNG BÁO", response.Message, 0, 0, 0, 0);
                            return;
                        }
                    }).complete(function () {
                        Loading.Hide();
                    });
                }, 1500);
            }
        }
    },
    QuitGuild: function (_alias) {
        Loading.Show();
        $.post('/Guild/QuitGuild', { alias: _alias }, function (response) {
            if (response.Code == 1044) {
                PopupOhYeaGuildDetail.Hide();
            }
            Loading.Hide();
            PopupOhYea2.Show("THÔNG BÁO", response.Message, 0, 0, 0, 0);
            return;
        }).complete(function () {
            Loading.Hide();
        });
    },
    JoinGuild: function (_alias) {
        Loading.Show();
        $.post('/Guild/JoinGuild', { alias: _alias }, function (response) {
            if (response.Code == 1036) {
                $('#btnjoinguild').remove()
            }
            Loading.Hide();
            PopupOhYea2.Show("THÔNG BÁO", response.Message, 0, 0, 0, 0);
            return;
        }).complete(function () {
            Loading.Hide();
        });
    },
    KickUser: function (_userId) {
        PopupOhYeaConfirm.YesNo("THÔNG BÁO", "Bạn có muốn kick thành viên này?", "Đồng ý", "Hủy", function () {
            Loading.Show();
            $.post('/Guild/KickUser', { userId: _userId }, function (response) {
                if (response.Code == 0) {
                    $('#trUserInGuild_' + _userId).remove();
                }
                Loading.Hide();
                PopupOhYea2.Show("THÔNG BÁO", response.Message, 0, 0, 0, 0);
                return;
            }).complete(function () {
                Loading.Hide();
            });
        }, function () {
        });
    },
    ChangePagerIndex: function (ctrl, idx) {
        var $form = $(ctrl).parents('form');
        $form.find('input[name=pageIndex]').val(idx);
        $form.submit();
        return false;
    },
    GetPolicy: function (id, _case) {
        Loading.Show();
        $.get("/Guild/EventDetail", { articleId: id, typeEvent: _case }, function (data) {            
            PopupOhYeaPolicy.Show("CHÍNH SÁCH BANG HỘI", data, 0);            
        })
            .done(function () {
                Loading.Hide();
            });
    }
}
var AjaxLoadHelper = {
    BoxAllCommentGuild: function (_alias, _isGuildMaster, _isGuildMember, _isHaveGuild, _guildFactionId) {
        if ($('#guild__comment').length == 0) {
            return;
        }
        $.ajax({
            url: '/Guild/CommentGuild',
            type: "POST",
            data: {
                "alias": _alias,
                "isGuildMaster": _isGuildMaster,
                "isGuildMember": _isGuildMember,
                "isHaveGuild": _isHaveGuild,
                "guildFactionId": _guildFactionId
            },
            beforeSend: function () {

            },
            success: function (res) {
                $('#guild__comment').html(res);
            },
            error: function () {

            },
            complete: function () {

            }
        });
    },
    BoxAllUserJoinGuild: function (_alias, _isGuildMaster, _isGuildMember, _isHaveGuild, _guildFactionId) {
        if ($('#userwaitingallow').length == 0) {
            return;
        }
        $.ajax({
            url: '/Guild/InfoGuildUserJoin',
            type: "POST",
            data: {
                "alias": _alias,
                "isGuildMaster": _isGuildMaster,
                "isGuildMember": _isGuildMember,
                "isHaveGuild": _isHaveGuild,
                "guildFactionId": _guildFactionId
            },
            beforeSend: function () {

            },
            success: function (res) {
                $('#userwaitingallow').html(res);
            },
            error: function () {

            },
            complete: function () {

            }
        });
    },
}
//End Guild

var PopupOhYeaGuild = {
    EventClose: null,
    Show: function (title, content, callbackhiden) {
        //$('#ohyea__md_manageguild .modal-title').html(title);
        $("#ohyea__md_manageguild .modal-body").html(content);
        PopupOhYeaGuild.EventClose = callbackhiden;
        $("#ohyea__md_manageguild").modal("show");
    },
    Hide: function (callback) {
        $("#ohyea__md_manageguild").modal("hide");
        $("#ohyea__md_manageguild .modal-body").html("");
        if (typeof callback == 'function') {
            callback();
        }
    },
};
var PopupOhYeaGuildDetail = {
    EventClose: null,
    Show: function (title, content, callbackhiden) {
        //$('#ohyea__md_manageguild .modal-title').html(title);
        $("#ohyea__md_manageguild_detail .modal-body").html(content);
        PopupOhYeaGuildDetail.EventClose = callbackhiden;
        $("#ohyea__md_manageguild_detail").modal("show");
    },
    Hide: function (callback) {
        $("#ohyea__md_manageguild_detail").modal("hide");
        $("#ohyea__md_manageguild_detail .modal-body").html("");
        if (typeof callback == 'function') {
            callback();
        }
    },
};
var PopupOhYeaEvent = {
    EventClose: null,
    Show: function (title, content, callbackhiden) {
        $('#ohyea__md_guild_event .modal-title').html(title);
        $("#ohyea__md_guild_event .modal-body").html(content);
        PopupOhYeaEvent.EventClose = callbackhiden;
        $("#ohyea__md_guild_event").modal("show");
    },
    Hide: function (callback) {
        $("#ohyea__md_guild_event").modal("hide");
        $("#ohyea__md_guild_event .modal-body").html("");
        if (typeof callback == 'function') {
            callback();
        }
    },
};
var PopupOhYeaSm = {
    EventClose: null,
    Show: function (title, content, callbackhiden) {
        //$('#ohyea__md_sm_guild .modal-title').html(title);
        $("#ohyea__md_sm_guild .modal-body").html(content);
        PopupOhYeaSm.EventClose = callbackhiden;
        $("#ohyea__md_sm_guild").modal("show");
    },
    Hide: function (callback) {
        $("#ohyea__md_sm_guild").modal("hide");
        $("#ohyea__md_sm_guild .modal-body").html("");
        if (typeof callback == 'function') {
            callback();
        }
    },
};
var PopupOhYeaPolicy = {
    EventClose: null,
    Show: function (title, content, callbackhiden) {
        //$('#ohyea__md_createguild .modal-title').html(title);
        $("#ohyea__md_guild_policy .modal-body").html(content);
        PopupOhYeaPolicy.EventClose = callbackhiden;
        $("#ohyea__md_guild_policy").modal("show");
    },
    Hide: function (callback) {
        $("#ohyea__md_guild_policy").modal("hide");
        $("#ohyea__md_guild_policy .modal-body").html("");
        if (typeof callback == 'function') {
            callback();
        }
    },
}
var PopupOhYeaProfileUser = {
    EventClose: null,
    Show: function (title, content, callbackhiden) {
        //$('#ohyea__md_createguild .modal-title').html(title);
        $("#ohyea__md_guildProfileUser .modal-body").html(content);
        PopupOhYeaPolicy.EventClose = callbackhiden;
        $("#ohyea__md_guildProfileUser").modal("show");
    },
    Hide: function (callback) {
        $("#ohyea__md_guildProfileUser").modal("hide");
        $("#ohyea__md_guildProfileUser .modal-body").html("");
        if (typeof callback == 'function') {
            callback();
        }
    },
}

var PopupOhYeaConfirm = {
    EventClose: null,
    YesNo: function (title, content, yesText, noText, yesCallback, noCalback) {
        var body = '<div class="ohyea__modal-small_title"><h4 class="ohyea__subtitle">' + title + '</h4></div>';
        body += '<div class="ohyea__modal-small_contain">'
        body += '<div><label class="ohyea__color-white">' + content + '</label></div>'
        body += '<button style="text-transform: uppercase" id="btnohyeaConfirmYes" class="ohyea__btn ohyea__btn--small ohyea__btn--default ohyea__btn--uppercase"><label>' + yesText + '</label><span class="pattern"></span><span class="overlay"></span><span class="light"></span></button>';
        body += '<button style="text-transform: uppercase" id="btnohyeaConfirm" class="ohyea__btn ohyea__btn--small ohyea__btn--default ohyea__btn--red ohyea__btn--uppercase ohyea-margin-left-24"><label>' + noText + '</label><span class="pattern"></span><span class="overlay"></span><span class="light"></span></button>';
        body += '</div>';

        $("#ohyea__md_confirm .modal-body").html(body);
        $("#ohyea__md_confirm").modal("show");

        $("#btnohyeaConfirmYes").click(function () {
            $("#ohyea__md_confirm").modal("hide");
            if (typeof yesCallback == 'function') {
                yesCallback();
            }
        });
        $("#btnohyeaConfirm").click(function () { 
            $("#ohyea__md_confirm").modal("hide");
            if (typeof noCalback == 'function') {
                noCalback();
            }
        });
    }
}