function LoadCardList(_cardtype) {
    $.get("/DoiThuong/CardList", { cardtype: _cardtype }, function (data) {

        //$(".nhamang li").removeClass("active");
        //$("." + _cardtype.toLowerCase()).parent().addClass("active");
        $(".menh-gia").html(data);

        cardtype = _cardtype
    })
        .done(function () {
        });
}
var callbacksuccess = function (success, url) {
    if (success) {
        location.href = url;
    } else
        return false;
};
var FLAG_ChangeCard = true;
function ChangeCard(Id) {
    if (!FLAG_ChangeCard)
        return false;
    FLAG_ChangeCard = false;
    $.ajax({
        url: '/DoiThuong/ChangeCard',
        type: 'POST',
        data: { intId: Id },
        beforeSend: function () {
            Loading.Show();
        },
        success: function (e) {
            if (e._status == -1) {
                Popup2.Show("ĐỔI THẺ THẤT BẠI", e._errors, 500);
                FLAG_ChangeCard = true;
                Loading.Hide();
                return false;
            }
            else {
                Popup2.Show("ĐỔI THẺ THÀNH CÔNG", e._errors, 500, 0);
                try {

                    ClientHtmlGameHelper.updateCoin(e._gold);
                } catch (e) {

                }
                return false;
            }

        },
        complete: function () {
            FLAG_ChangeCard = true;
        }
    }).done(Loading.Hide);
    return false;
};
var FLAG_ChangeItem = true;
function ChangeItem(Id) {
    if (!FLAG_ChangeItem)
        return false;
    FLAG_ChangeItem = false;
    $.ajax({
        url: '/DoiThuong/ChangeItem',
        type: 'POST',
        data: { intId: Id },
        beforeSend: function () { Loading.Show(); },
        success: function (e) {
            if (e._status == -1) {
                Alert.Error("ĐỔI VẬT PHẨM THẤT BẠI", e._errors, 400);
                FLAG_ChangeItem = true;
                Loading.Hide();
                return false;
            }
            else {
                Popup.Show("ĐỔI VẬT PHẨM THÀNH CÔNG", e._errors, 500, 0, function () { location.href = "/"; });
            }
            FLAG_ChangeItem = true;
            Loading.Hide();
        }
    });
}
var FLAG_CheckBaoKim = true;

function CheckBaoKim() {
    if (!FLAG_CheckBaoKim)
        return false;
    FLAG_CheckBaoKim = false;
    $("span.error").remove();
    if ($("#accountNo").val() === "") {
        $(".accountNo").append("<span class='error col-sm-6 col-xs-6 no-padding' style='color:red;'>Vui lòng nhập số tài khoản Ngân hàng</span>");
        FLAG_CheckBaoKim = true;
        return false;
    }
    var value = document.getElementById('accountNo').value;
    if (value.length < 10 || value.length > 11) {
        $(".accountNo").append("<span class='error col-sm-6 col-xs-6 no-padding' style='color:red;'>Số điện thoại chỉ gồm số từ 0 đến 9 và có 10 đến 11 số.</span>");
        FLAG_CheckBaoKim = true;
        return false;
    }
    $.ajax({
        url: "/DoiThuong/GetBaoKim",
        type: "POST",
        data: { accountNo: $("#accountNo").val() },
        beforeSend: function () { Loading.Show(); },
        success: function (e) {
            if (e._status === -1) {
                Popup2.Show("Thông Báo", e._errors, 400);
                FLAG_CheckBaoKim = true;
                Loading.Hide();
                return false;
            }
            else if (e._status === -99) {
                Popup2.Show("Thông Báo", e._errors, 400, 0, function () { location.href = "/"; });
            }
            else {
                $("#fullname .fullname").html(e._errors);
                $(".step2").css("display", "block");
                $(".checkbutton").hide();
                $(".accountNo").hide();
            }
            FLAG_CheckBaoKim = true;
            Loading.Hide();
            return false;
        }
    });
    return false;
}
//(function ($) {
//    $("#price")
//        .blur(function () {
//            var xu = changeVtcPaytoXu($(this).val());
//            $(".xu strong").html("Xu bị trừ: " + $.number(xu, 0));
//        });
//    $("#price")
//        .keyup(function () {
//            var xu = changeVtcPaytoXu($(this).val());
//            $(".xu strong").html("Xu bị trừ: " + $.number(xu, 0));
//        });
//    $("#accountNo")
//        .keypress(function (e) {
//            //if the letter is not digit then display error and don't type anything
//            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
//                return false;
//            }
//        });
//})(jQuery);
function myFunction(rate) {
    var val = document.getElementById("price").value;
    document.getElementById("xu-tru").innerHTML = Math.floor(val * rate * 10).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
function PhiBaoKim() {
    var val = document.getElementById("price").value;
    document.getElementById("xu-phi").innerHTML = (val * 0.99).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
var FLAG_ChangeBaoKim = true;
function ChangeBaoKim($form) {
    var data = GetAllFormData($form);
    var accountNo = $form.find('#accountNo');
    var price = $form.find('#price');
    var captcha = $form.find('#captcha');
    var xu = changeBaoKimtoXu(data.price);
    $("span.error").remove();
    if (data.price === '') {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Nhập số xu cần chuyển</span>");
        $(price).focus();
        FLAG_ChangeBaoKim = true;
        return false;
    }
    if (data.price < 10000 || (data.price % 1000) > 0) {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Số xu chuyển phải lớn hơn 10.000 và chia hết cho 1.000</span>");

        return false;
    }
    if (data.captcha === '') {
        $(captcha).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Nhập mã xác nhận</span>");
        $(captcha).focus();
        FLAG_ChangeBaoKim = true;
        return false;
    }

    if (confirm("Bạn đang thực hiện giao dịch rút " + data.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " về . Số Xu bị trừ là " + xu.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " Xu . Bạn có muốn tiếp tục không?")) {
        if (!FLAG_ChangeBaoKim)
            return false;
        FLAG_ChangeBaoKim = false;

        $.ajax({
            url: "/DoiThuong/ChangeBaoKim",
            type: "POST",
            data: data,
            beforeSend: function () { Loading.Show(); },
            success: function (e) {
                $("#imgRegCaptchaVTC").attr("src", $("#imgRegCaptchaVTC").attr("src").substr(0, $("#imgRegCaptchaVTC").attr("src").indexOf("&") + 1) + new Date().getTime());
                //thanh cong
                if (e._status == 0) {
                    Popup2.Show("Thông Báo", e._errors, 400, 0, setTimeout(function () { location.reload(); }, 3000));
                    FLAG_ChangeBaoKim = true;
                    Loading.Hide();
                    return false;
                }
                else {
                    Popup2.Show("Thông Báo", e._errors, 500, 0, function () { location.href = "/"; });
                }
                FLAG_ChangeBaoKim = true;
                Loading.Hide();
                return false;
            }
        });
    }
    return false;
}
function changeBaoKimtoXu(baokim) {
    return (baokim / 0.8) * 10;
}
function DepositMoney($form) {
    var data = GetAllFormData($form);
    var money = $form.find('#Money');
    var captcha = $form.find('#Captcha');
    $("span.error").remove();
    if (data.Money === "") {
        $("#frmBank input[name=Money]").html($("#frmBank input[name=Money]").attr("data-val-required"));
        $(money).parent().append("<span class='error ohyea__color-yellow'>Nhập số cần nạp</span>");
        $("#frmBank input[name=Money]").focus();
        return false;
    }
    if (data.Money < 50000 || data.Money > 500000 || (data.Money % 10000) > 0) {
        $(money).parent().append("<span class='error ohyea__color-yellow'> Số nạp phải lớn từ 50.000 đến 500.000 và chia hết cho 10.000</span>");
        $("#frmBank input[name=Money]").focus();
        return false;
    }
    if (data.Captcha === "") {
        $("#frmBank input[name=Captcha]").html($("#frmBank input[name=Captcha]").attr("data-val-required"));
        $(captcha).parent().append("<span class='error ohyea__color-yellow'>Nhập mã bảo mật</span>");
        $("#frmBank input[name=Captcha]").focus();
        return false;
    }
    $.ajax({
        url: "/Payment/BaoKimDeposit",
        type: "POST",
        async: false,
        data: {
            data: data,
            Money: $("#Money").val(),
            Captcha: data.Captcha
        },
        beforeSend: function () {
            Loading.Show();
        },
        success: function (e) {
            $("#imgRegCaptchaDeposit").attr("src", $("#imgRegCaptchaDeposit").attr("src").substr(0, $("#imgRegCaptchaDeposit").attr("src").indexOf("&") + 1) + new Date().getTime());
            if (e._status === -1) {
                Popup2.Show("THÔNG BÁO", e._errors, 420);
                Loading.Hide();
                return false;
            }
            else {
                Loading.Hide();

                if (e._errors.length == 0) {
                    Popup2.Show("THÔNG BÁO", "Có lỗi trong quá trình thực hiện. Bạn vui lòng thử lại sau!", 420);
                    return false;
                }

                try {
                    if ($('#UrlOpenBK').length > 0) {
                        $('#UrlOpenBK').attr('href', e._errors);
                    }
                    else {
                        $('#frmBank').append('<a id="UrlOpenBK" target="_blank" href="' + e._errors + '"></a>');
                    }

                    $('#UrlOpenBK')[0].click();
                } catch (ex) {
                    window.location.replace(e._errors);
                }

                return false;
            }
        },
        complete: function () {
        }
    }).done(Loading.Hide());
    return false;
}
function myFunctionBaoKim(rate, fee) {
    var val = $("#frmBank input[name=Money]").val();

    if (val >= 50000) {
        $("#frmBank #xu-baokim").html(Math.floor((val * rate * fee) * 10).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $.ajax({
            url: "/Payment/GetRateBonus",
            type: "POST",
            data: {
                type: "BAOKIM",
                amount: val
            },
            success: function (e) {
                if (e.Code == 1) {
                    if ($('#vip-baokim').length > 0) {
                        $('#vip-baokim').html(e.Data.VIP.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    }

                    if ($('#vq-baokim').length > 0) {
                        $('#vq-baokim').html(e.Data.VQ);
                    }
                }
            }
        });
    }
    else {
        $("#frmBank #xu-baokim").html(0);
        if ($('#vip-baokim').length > 0) {
            $('#vip-baokim').html(0);
        }

        if ($('#vq-baokim').length > 0) {
            $('#vq-baokim').html(0);
        }
    }
}

/* TP */
var FLAG_CheckTP = true;
function CheckTP() {
    if (!FLAG_CheckTP)
        return false;
    FLAG_CheckTP = false;
    $("span.error").remove();
    if ($("#accountNo").val() === "") {
        $(".accountNo").append("<span class='error col-sm-6 col-xs-6 no-padding' style='color:red;'>Vui lòng nhập số tài khoản Ngân hàng</span>");
        FLAG_CheckTP = true;
        return false;
    }
    var value = document.getElementById('accountNo').value;
    if (value.length < 10 || value.length > 11) {
        $(".accountNo").append("<span class='error col-sm-6 col-xs-6 no-padding' style='color:red;'>Số điện thoại chỉ gồm số từ 0 đến 9 và có 10 đến 11 số.</span>");
        FLAG_CheckTP = true;
        return false;
    }
    $.ajax({
        url: "/DoiThuong/GetTP",
        type: "POST",
        data: { accountNo: $("#accountNo").val() },
        beforeSend: function () { Loading.Show(); },
        success: function (e) {
            if (e._status === -1) {
                Popup2.Show("Thông Báo", e._errors, 400);
                FLAG_CheckTP = true;
                Loading.Hide();
                return false;
            }
            else if (e._status === -99) {
                Popup2.Show("Thông Báo", e._errors, 400, 0, function () { location.href = "/"; });
            }
            else {
                $("#fullname .fullname").html(e._errors);
                $(".step2").css("display", "block");
                $(".checkbutton").hide();
                $(".accountNo").hide();
            }
            FLAG_CheckTP = true;
            Loading.Hide();
            return false;
        }
    });
    return false;
}
function PhiTP() {
    var val = document.getElementById("price").value;
    document.getElementById("xu-phi").innerHTML = Math.floor(val * 0.99).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

var FLAG_ChangeTP = true;
function ChangeTP($form) {
    var data = GetAllFormData($form);
    var accountNo = $form.find('#accountNo');
    var price = $form.find('#price');
    var captcha = $form.find('#captcha');
    var xu = changeTPtoXu(data.price);
    $("span.error").remove();
    if (data.price === '') {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Nhập số cần chuyển</span>");
        $(price).focus();
        FLAG_ChangeTP = true;
        return false;
    }
    if (data.price < 10000 || (data.price % 1000) > 0) {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Số chuyển phải lớn hơn 10.000 và chia hết cho 1.000</span>");

        return false;
    }
    if (data.captcha === '') {
        $(captcha).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Nhập mã xác nhận</span>");
        $(captcha).focus();
        FLAG_ChangeTP = true;
        return false;
    }

    if (confirm("Bạn đang thực hiện giao dịch rút " + data.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " về Ngân hàng. Số Xu bị trừ là " + xu.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " Xu . Bạn có muốn tiếp tục không?")) {
        if (!FLAG_ChangeTP)
            return false;
        FLAG_ChangeTP = false;

        $.ajax({
            url: "/DoiThuong/ChangeTP",
            type: "POST",
            data: data,
            beforeSend: function () { Loading.Show(); },
            success: function (e) {
                $("#imgRegCaptchaTP").attr("src", $("#imgRegCaptchaVTC").attr("src").substr(0, $("#imgRegCaptchaTP").attr("src").indexOf("&") + 1) + new Date().getTime());
                //thanh cong
                if (e._status == 0) {
                    Popup2.Show("Thông Báo", e._errors, 400, 0, setTimeout(function () { location.reload(); }, 3000));
                    FLAG_ChangeTP = true;
                    Loading.Hide();
                    return false;
                }
                else {
                    Popup2.Show("Thông Báo", e._errors, 500, 0, function () { location.href = "/"; });
                }
                FLAG_ChangeTP = true;
                Loading.Hide();
                return false;
            }
        });
    }
    return false;
}
function changeTPtoXu(TP) {
    return (TP / 0.8) * 10;
}
function DepositTPMoney($form) {
    var data = GetAllFormData($form);
    var money = $form.find('#Money');
    var captcha = $form.find('#Captcha');
    $("span.error").remove();
    if (data.Money === "") {
        $("#frmTP input[name=Money]").html($("#frmTP input[name=Money]").attr("data-val-required"));
        $(money).parent().append("<span class='error ohyea__color-yellow'>Nhập số cần nạp</span>");
        $("#frmTP input[name=Money]").focus();
        return false;
    }
    if (data.Money < 50000 || data.Money > 500000 || (data.Money % 10000) > 0) {
        $(money).parent().append("<span class='error ohyea__color-yellow'> Số nạp phải lớn từ 50.000 đến 500.000 và chia hết cho 10.000</span>");
        $("#frmTP input[name=Money]").focus();
        return false;
    }
    if (data.Captcha === "") {
        $("#frmTP input[name=Captcha]").html($("#frmTP input[name=Captcha]").attr("data-val-required"));
        $(captcha).parent().append("<span class='error ohyea__color-yellow'>Nhập mã bảo mật</span>");
        $("#frmTP input[name=Captcha]").focus();
        return false;
    }
    $.ajax({
        url: "/Payment/TPDeposit",
        type: "POST",
        async: false,
        data: {
            data: data,
            Money: $("#frmTP input[name=Money]").val(),
            Captcha: data.Captcha
        },
        beforeSend: function () {
            Loading.Show();
        },
        success: function (e) {
            $("#imgRegCaptchaDepositTP").attr("src", $("#imgRegCaptchaDepositTP").attr("src").substr(0, $("#imgRegCaptchaDepositTP").attr("src").indexOf("&") + 1) + new Date().getTime());
            if (e._status === -1) {
                Popup2.Show("THÔNG BÁO", e._errors, 420);
                Loading.Hide();
                return false;
            }
            else {
                Loading.Hide();

                if (e._errors.length == 0) {
                    Popup2.Show("THÔNG BÁO", "Có lỗi trong quá trình thực hiện. Bạn vui lòng thử lại sau!", 420);
                    return false;
                }

                try {
                    if ($('#UrlOpenTP').length > 0) {
                        $('#UrlOpenTP').attr('href', e._errors);
                    }
                    else {
                        $('#frmTP').append('<a id="UrlOpenTP" target="_blank" href="' + e._errors + '"></a>');
                    }

                    $('#UrlOpenTP')[0].click();
                } catch (ex) {
                    window.location.replace(e._errors);
                }

                return false;
            }
        },
        complete: function () {
        }
    }).done(Loading.Hide());
    return false;
}
function myFunctionTP(rate, fee) {
    var val = $("#frmTP input[name=Money]").val();

    if (val >= 50000) {
        $("#frmTP #xu-tp").html(Math.floor((val * rate * fee) * 10).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $.ajax({
            url: "/Payment/GetRateBonus",
            type: "POST",
            data: {
                type: "TP",
                amount: val
            },
            success: function (e) {
                if (e.Code == 1) {
                    if ($('#vip-tp').length > 0) {
                        $('#vip-tp').html(e.Data.VIP.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    }

                    if ($('#vq-tp').length > 0) {
                        $('#vq-tp').html(e.Data.VQ);
                    }
                }
            }
        });
    }
    else {
        $("#frmTP #xu-tp").html(0);
        if ($('#vip-tp').length > 0) {
            $('#vip-tp').html(0);
        }

        if ($('#vq-tp').length > 0) {
            $('#vq-tp').html(0);
        }
    }
}
/* TP END */

/* MM */
var FLAG_CheckMM = true;
function CheckMM() {
    if (!FLAG_CheckMM)
        return false;
    FLAG_CheckMM = false;
    $("span.error").remove();
    if ($("#accountNo").val() === "") {
        $(".accountNo").append("<span class='error col-sm-6 col-xs-6 no-padding' style='color:red;'>Vui lòng nhập số tài khoản MOMO</span>");
        FLAG_CheckMM = true;
        return false;
    }
    var value = document.getElementById('accountNo').value;
    if (value.length < 10 || value.length > 11) {
        $(".accountNo").append("<span class='error col-sm-6 col-xs-6 no-padding' style='color:red;'>Số điện thoại chỉ gồm số từ 0 đến 9 và có 10 đến 11 số.</span>");
        FLAG_CheckMM = true;
        return false;
    }
    $.ajax({
        url: "/DoiThuong/GetMM",
        type: "POST",
        data: { accountNo: $("#accountNo").val() },
        beforeSend: function () { Loading.Show(); },
        success: function (e) {
            if (e._status === -1) {
                if (IS_BC3D) {
                    Popup2.Show("Thông báo", e._errors, 500);
                }
                else if (STYLE_POPUP == 2) {
                    PopupOhYea2.Show("Thông báo", e._errors, 0, 0);
                }
                else {
                    Popup2.Show("Thông báo", e._errors, 500);
                }
                FLAG_CheckMM = true;
                Loading.Hide();
                return false;
            }
            else if (e._status === -99) {
                Popup2.Show("Thông Báo", e._errors, 400, 0, function () { location.href = "/"; });
            }
            else {
                $("#fullname .fullname").html(e._errors);
                $(".step2").css("display", "block");
                $(".checkbutton").hide();
                $(".accountNo").hide();
            }
            FLAG_CheckMM = true;
            Loading.Hide();
            return false;
        }
    });
    return false;
}
function PhiMM() {
    var val = document.getElementById("price").value;
    document.getElementById("xu-phi").innerHTML = Math.floor(val * 0.99).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

var FLAG_ChangeMM = true;
function ChangeMM($form) {
    var data = GetAllFormData($form);
    var accountNo = $form.find('#accountNo');
    var price = $form.find('#price');
    var captcha = $form.find('#captcha');
    var xu = changeMMtoXu(data.price);
    $("span.error").remove();
    if (data.price === '') {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Nhập số cần chuyển</span>");
        $(price).focus();
        FLAG_ChangeMM = true;
        return false;
    }
    if (data.price < 10000 || (data.price % 1000) > 0) {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Số chuyển phải lớn hơn 10.000 và chia hết cho 1.000</span>");

        return false;
    }
    if (data.captcha === '') {
        $(captcha).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Nhập mã xác nhận</span>");
        $(captcha).focus();
        FLAG_ChangeMM = true;
        return false;
    }

    if (confirm("Bạn đang thực hiện giao dịch rút " + data.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " về Ngân hàng. Số Xu bị trừ là " + xu.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " Xu . Bạn có muốn tiếp tục không?")) {
        if (!FLAG_ChangeMM)
            return false;
        FLAG_ChangeMM = false;

        $.ajax({
            url: "/DoiThuong/ChangeMM",
            type: "POST",
            data: data,
            beforeSend: function () { Loading.Show(); },
            success: function (e) {
                $("#imgRegCaptchaMM").attr("src", $("#imgRegCaptchaMM").attr("src").substr(0, $("#imgRegCaptchaMM").attr("src").indexOf("&") + 1) + new Date().getTime());
                //thanh cong
                if (e._status == 0) {
                    Popup2.Show("Thông Báo", e._errors, 400, 0, setTimeout(function () { location.reload(); }, 3000));
                    FLAG_ChangeMM = true;
                    Loading.Hide();
                    return false;
                }
                else {
                    Popup2.Show("Thông Báo", e._errors, 500, 0, function () { location.href = "/"; });
                }
                FLAG_ChangeMM = true;
                Loading.Hide();
                return false;
            }
        });
    }
    return false;
}
function changeMMtoXu(MM) {
    return (MM / 0.8) * 10;
}
function DepositMMMoney($form) {
    var data = GetAllFormData($form);
    var money = $form.find('#Money');
    var captcha = $form.find('#Captcha');
    $("span.error").remove();
    if (data.Money === "") {
        $("#frmMM input[name=Money]").html($("#frmMM input[name=Money]").attr("data-val-required"));
        $(money).parent().append("<span class='error ohyea__color-yellow'>Nhập số cần nạp</span>");
        $("#frmMM input[name=Money]").focus();
        return false;
    }
    if (data.Money < 50000 || data.Money > 500000 || (data.Money % 10000) > 0) {
        $(money).parent().append("<span class='error ohyea__color-yellow'> Số nạp phải lớn từ 50.000 đến 500.000 và chia hết cho 10.000</span>");
        $("#frmMM input[name=Money]").focus();
        return false;
    }
    if (data.Captcha === "") {
        $("#frmMM input[name=Captcha]").html($("#frmMM input[name=Captcha]").attr("data-val-required"));
        $(captcha).parent().append("<span class='error ohyea__color-yellow'>*</span>");
        $("#frmMM input[name=Captcha]").focus();
        return false;
    }
    $.ajax({
        url: "/Payment/MMDeposit",
        type: "POST",
        async: false,
        data: {
            data: data,
            Money: data.Money,
            Captcha: data.Captcha
        },
        beforeSend: function () {
            Loading.Show();
        },
        success: function (e) {
            $("#imgRegCaptchaDepositMM").attr("src", $("#imgRegCaptchaDepositMM").attr("src").substr(0, $("#imgRegCaptchaDepositMM").attr("src").indexOf("&") + 1) + new Date().getTime());
            if (e._status === -1) {
                if (IS_BC3D) {
                    Popup2.Show("Thông báo", e._errors, 500);
                }
                else if (STYLE_POPUP == 2) {
                    PopupOhYea2.Show("Thông báo", e._errors, 0, 0);
                }
                else {
                    Popup2.Show("Thông báo", e._errors, 500);
                }
                Loading.Hide();
                return false;
            }
            else {
                Loading.Hide();

                if (e._errors.length == 0) {
                    if (IS_BC3D) {
                        Popup2.Show("Thông báo", "Có lỗi trong quá trình thực hiện. Bạn vui lòng thử lại sau!", 500);
                    }
                    else if (STYLE_POPUP == 2) {
                        PopupOhYea2.Show("Thông báo", "Có lỗi trong quá trình thực hiện. Bạn vui lòng thử lại sau!", 0, 0);
                    }
                    else {
                        Popup2.Show("Thông báo", "Có lỗi trong quá trình thực hiện. Bạn vui lòng thử lại sau!", 500);
                    }

                    return false;
                }

                try {
                    if ($('#UrlOpenMM').length > 0) {
                        $('#UrlOpenMM').attr('href', e._errors);
                    }
                    else {
                        $('#frmMM').append('<a id="UrlOpenMM" target="_blank" href="' + e._errors + '"></a>');
                    }

                    $('#UrlOpenMM')[0].click();
                } catch (ex) {
                    window.location.replace(e._errors);
                }

                return false;
            }
        },
        complete: function () {
        }
    }).done(Loading.Hide());
    return false;
}
function myFunctionMM(rate, fee) {
    var val = $("#frmMM input[name=Money]").val();

    if (val >= 50000) {
        $("#frmMM #xu-mm").html(Math.floor((val * rate * fee) * 10).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        $.ajax({
            url: "/Payment/GetRateBonus",
            type: "POST",
            data: {
                type: "MOMO",
                amount: val
            },
            success: function (e) {
                if (e.Code == 1) {
                    if ($('#vip-mm').length > 0) {
                        $('#vip-mm').html(e.Data.VIP.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    }

                    if ($('#vq-mm').length > 0) {
                        $('#vq-mm').html(e.Data.VQ);
                    }
                }
            }
        });
    }
    else {
        $("#frmMM #xu-mm").html(0);

        if ($('#vip-mm').length > 0) {
            $('#vip-mm').html(0);
        }

        if ($('#vq-mm').length > 0) {
            $('#vq-mm').html(0);
        }
    }
}
/* MM END */

/* BB */
var FLAG_CheckBB = true;
function CheckBB() {
    if (!FLAG_CheckBB)
        return false;
    FLAG_CheckBB = false;
    $("span.error").remove();
    if ($("#accountNo").val() === "") {
        $(".accountNo").append("<span class='error col-sm-6 col-xs-6 no-padding' style='color:red;'>Vui lòng nhập số tài khoản NGÂN HÀNG</span>");
        FLAG_CheckBB = true;
        return false;
    }
    var value = document.getElementById('accountNo').value;
    if (value.length < 10 || value.length > 11) {
        $(".accountNo").append("<span class='error col-sm-6 col-xs-6 no-padding' style='color:red;'>Số điện thoại chỉ gồm số từ 0 đến 9 và có 10 đến 11 số.</span>");
        FLAG_CheckBB = true;
        return false;
    }
    $.ajax({
        url: "/DoiThuong/GetBB",
        type: "POST",
        data: { accountNo: $("#accountNo").val() },
        beforeSend: function () { Loading.Show(); },
        success: function (e) {
            if (e._status === -1) {
                if (IS_BC3D) {
                    Popup2.Show("Thông báo", e._errors, 500);
                }
                else if (STYLE_POPUP == 2) {
                    PopupOhYea2.Show("Thông báo", e._errors, 0, 0);
                }
                else {
                    Popup2.Show("Thông báo", e._errors, 500);
                }
                FLAG_CheckBB = true;
                Loading.Hide();
                return false;
            }
            else if (e._status === -99) {
                Popup2.Show("Thông Báo", e._errors, 400, 0, function () { location.href = "/"; });
            }
            else {
                $("#fullname .fullname").html(e._errors);
                $(".step2").css("display", "block");
                $(".checkbutton").hide();
                $(".accountNo").hide();
            }
            FLAG_CheckBB = true;
            Loading.Hide();
            return false;
        }
    });
    return false;
}
function PhiBB() {
    var val = document.getElementById("price").value;
    document.getElementById("xu-phi").innerHTML = Math.floor(val * 0.99).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

var FLAG_ChangeBB = true;
function ChangeBB($form) {
    var data = GetAllFormData($form);
    var accountNo = $form.find('#accountNo');
    var price = $form.find('#price');
    var captcha = $form.find('#captcha');
    var xu = changeBBtoXu(data.price);
    $("span.error").remove();
    if (data.price === '') {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Nhập số cần chuyển</span>");
        $(price).focus();
        FLAG_ChangeBB = true;
        return false;
    }
    if (data.price < 10000 || (data.price % 1000) > 0) {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Số chuyển phải lớn hơn 10.000 và chia hết cho 1.000</span>");

        return false;
    }
    if (data.captcha === '') {
        $(captcha).parent().append("<span class='error ohyea__color-yellow' style='color:red'>Nhập mã xác nhận</span>");
        $(captcha).focus();
        FLAG_ChangeBB = true;
        return false;
    }

    if (confirm("Bạn đang thực hiện giao dịch rút " + data.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " về Ngân hàng. Số Xu bị trừ là " + xu.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " Xu . Bạn có muốn tiếp tục không?")) {
        if (!FLAG_ChangeBB)
            return false;
        FLAG_ChangeBB = false;

        $.ajax({
            url: "/DoiThuong/ChangeBB",
            type: "POST",
            data: data,
            beforeSend: function () { Loading.Show(); },
            success: function (e) {
                $("#imgRegCaptchaBB").attr("src", $("#imgRegCaptchaBB").attr("src").substr(0, $("#imgRegCaptchaBB").attr("src").indexOf("&") + 1) + new Date().getTime());
                //thanh cong
                if (e._status == 0) {
                    Popup2.Show("Thông Báo", e._errors, 400, 0, setTimeout(function () { location.reload(); }, 3000));
                    FLAG_ChangeBB = true;
                    Loading.Hide();
                    return false;
                }
                else {
                    Popup2.Show("Thông Báo", e._errors, 500, 0, function () { location.href = "/"; });
                }
                FLAG_ChangeBB = true;
                Loading.Hide();
                return false;
            }
        });
    }
    return false;
}
function changeBBtoXu(BB) {
    return (BB / 0.8) * 10;
}
function DepositBBMoney($form) {
    var data = GetAllFormData($form);
    var bank = $form.find('#BankCode');
    var money = $form.find('#Money');
    var captcha = $form.find('#Captcha');
    $("span.error").remove();
    if (data.BankCode === "" || data.BankCode === "0") {
        $("#frmBB select[name=BankCode]").html($("#frmBB select[name=BankCode]").attr("data-val-required"));
        $(bank).parent().append("<span class='error ohyea__color-yellow'>Chọn ngân hàng</span>");
        $("#frmBB select[name=BankCode]").focus();
        return false;
    }
    if (data.Money === "") {
        $("#frmBB input[name=Money]").html($("#frmBB input[name=Money]").attr("data-val-required"));
        $(money).parent().append("<span class='error ohyea__color-yellow'>Nhập số cần nạp</span>");
        $("#frmBB input[name=Money]").focus();
        return false;
    }
    if (data.Money < 10000 || data.Money > 500000 || (data.Money % 10000) > 0) {
        $(money).parent().append("<span class='error ohyea__color-yellow'> Số nạp phải lớn từ 50.000 đến 500.000 và chia hết cho 10.000</span>");
        $("#frmBB input[name=Money]").focus();
        return false;
    }
    if (data.Captcha === "") {
        $("#frmBB input[name=Captcha]").html($("#frmBB input[name=Captcha]").attr("data-val-required"));
        $(captcha).parent().append("<span class='error ohyea__color-yellow'>*</span>");
        $("#frmBB input[name=Captcha]").focus();
        return false;
    }
    $.ajax({
        url: "/Payment/BBDeposit",
        type: "POST",
        async: false,
        data: {
            data: data,
            Money: data.Money,
            BankCode: data.BankCode,
            Captcha: data.Captcha
        },
        beforeSend: function () {
            Loading.Show();
        },
        success: function (e) {
            $("#imgRegCaptchaDepositBB").attr("src", $("#imgRegCaptchaDepositBB").attr("src").substr(0, $("#imgRegCaptchaDepositBB").attr("src").indexOf("&") + 1) + new Date().getTime());
            if (e._status === -1) {
                if (IS_BC3D) {
                    Popup2.Show("Thông báo", e._errors, 500);
                }
                else if (STYLE_POPUP == 2) {
                    PopupOhYea2.Show("Thông báo", e._errors, 0, 0);
                }
                else {
                    Popup2.Show("Thông báo", e._errors, 500);
                }
                Loading.Hide();
                return false;
            }
            else {
                Loading.Hide();

                if (e._errors.length == 0) {
                    if (IS_BC3D) {
                        Popup2.Show("Thông báo", "Có lỗi trong quá trình thực hiện. Bạn vui lòng thử lại sau!", 500);
                    }
                    else if (STYLE_POPUP == 2) {
                        PopupOhYea2.Show("Thông báo", "Có lỗi trong quá trình thực hiện. Bạn vui lòng thử lại sau!", 0, 0);
                    }
                    else {
                        Popup2.Show("Thông báo", "Có lỗi trong quá trình thực hiện. Bạn vui lòng thử lại sau!", 500);
                    }

                    return false;
                }

                try {
                    if ($('#UrlOpenBB').length > 0) {
                        $('#UrlOpenBB').attr('href', e._errors);
                    }
                    else {
                        $('#frmBB').append('<a id="UrlOpenBB" target="_blank" href="' + e._errors + '"></a>');
                    }

                    $('#UrlOpenBB')[0].click();
                } catch (ex) {
                    window.location.replace(e._errors);
                }

                return false;
            }
        },
        complete: function () {
        }
    }).done(Loading.Hide());
    return false;
}
function myFunctionBB(rate, fee) {
    var val = $("#frmBB input[name=Money]").val();

    if (val >= 50000) {
        $("#frmBB #xu-bb").html(ConvertToShortMoney(Math.floor((val * rate * fee) * 10).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")));

        $.ajax({
            url: "/Payment/GetRateBonus",
            type: "POST",
            data: {
                type: "BB",
                amount: val
            },
            success: function (e) {
                if (e.Code == 1) {
                    if ($('#vip-bb').length > 0) {
                        $('#vip-bb').html(e.Data.VIP.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    }

                    if ($('#vq-bb').length > 0) {
                        $('#vq-bb').html(e.Data.VQ);
                    }
                }
            }
        });
    }
    else {
        $("#frmBB #xu-bb").html(0);

        if ($('#vip-bb').length > 0) {
            $('#vip-bb').html(0);
        }

        if ($('#vq-bb').length > 0) {
            $('#vq-bb').html(0);
        }
    }
}
/* BB END */

var FLAG_Transfer = true;
function CheckTransfer() {
    if (!FLAG_Transfer)
        return false;
    FLAG_Transfer = false;
    $("span.error").remove();

    if ($("#accountNoTranfer").val() == "") {
        $(".accountNoTranfer").css("display", "block");
        $(".accountNoTranfer").append("<span class='error col-sm-6 col-xs-6 no-padding' style='color:red;'>Vui lòng nhập số tài khoản nhận xu</span>");
        FLAG_Transfer = true;
        return false;
    }

    $.ajax({
        url: '/DoiThuong/CheckAccountTransferTo',
        type: 'POST',
        data: { accountNo: $("#accountNoTranfer").val() },
        beforeSend: function () { Loading.Show(); },
        success: function (e) {
            if (e._status == -1) {
                if (IS_BC3D) {
                    Popup2.Show("Thông báo", e._errors, 500);
                }
                else if (STYLE_POPUP == 2) {
                    PopupOhYea2.Show("Thông báo", e._errors, 0, 0);
                }
                else {
                    Popup2.Show("Thông báo", e._errors, 500);
                }
                FLAG_Transfer = true;
                Loading.Hide();
                return false;
            }
            else if (e._status == -99) {
                if (IS_BC3D) {
                    Popup2.Show("Thông Báo", e._errors, 420, 0, function () { location.href = "/"; });
                }
                else if (STYLE_POPUP == 2) {
                    PopupOhYea2.Show("Thông báo", e._errors, 0, 0);
                }
                else {
                    Popup2.Show("Thông Báo", e._errors, 420, 0, function () { location.href = "/"; });
                }
            }
            else {
                $(".fullnameTransfer").html(e._errors);
                $(".step-Transfer-2").show();
                $(".checkbuttonTransfer").hide();
                $(".accountNoTranfer").css("display", "none");
                $("#accountNoTranfer").attr("readonly", "readonly");
            }

            FLAG_Transfer = true;
            Loading.Hide();
        }
    });
    return false;
}

function changeMoneyTranfertoXu(money, percentFee) {
    return money * percentFee;
}

function TransferGoldToUser($form, minimum, max, currentGold, percentFee) {
    minimum = minimum * 10;

    max = max * 10;
    currentGold = currentGold * 10;
    var data = GetAllFormData($form);
    var price = $form.find('#priceUserTransfer');
    var captcha = $form.find('#captchaTranfer');
    var userNhan = $form.find('#accountNoTranfer');
    var accountNoTranfer = $(".fullnameTransfer").text();

    if ($("#accountNoTranfer").val() == "") {
        $(".accountNoTranfer").css("display", "block");
        $(".accountNoTranfer").append("<span class='error col-sm-6 col-xs-6 no-padding' style='color:red;'>Vui lòng nhập số tài khoản nhận xu</span>");
        FLAG_Transfer = true;
        return false;
    }
    var xu = parseInt(data.priceUserTransfer, 10) + changeMoneyTranfertoXu(parseInt(data.priceUserTransfer, 10), percentFee);
    $("span.error").remove();
    if (data.priceUserTransfer == '') {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'></br>Nhập số xu cần chuyển</span>");
        FLAG_Transfer = true;
        return false;
    }
    if (xu < minimum) {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'></br>Số xu chuyển phải lớn hơn hoặc bằng " + minimum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "</span>");
        return false;
    }
    if (xu > max && max > 0) {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'></br>Số xu chuyển phải nhỏ hơn hoặc bằng " + max.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "</span>");
        return false;
    }

    if ((xu % 250000) > 0) {
        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'></br>Số xu chuyển phải chia hết cho 250.000!</span>");
        return false;
    }
    /* if (xu > currentGold) {

        $(price).parent().append("<span class='error ohyea__color-yellow' style='color:red'></br>Tổng xu giao dịch lớn hơn số xu hiện có</span>");
        return false;
    } */
    if (data.captchaTranfer == '') {
        $(captcha).parent().append("<span class='error ohyea__color-yellow' style='color:red'></br>Nhập mã xác nhận</span>");
        FLAG_Transfer = true;
        return false;
    }
    if (confirm('Bạn đang thực hiện giao dịch chuyển ' + data.priceUserTransfer.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + ' cho tài khoản ' + accountNoTranfer + ' . Số Xu bị trừ là ' + xu.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '. Bạn có muốn tiếp tục không?')) {
        if (!FLAG_Transfer)
            return false;
        FLAG_Transfer = false;

        $.ajax({
            url: '/DoiThuong/DoAccountTransferTo',
            type: 'POST',
            data: data,
            beforeSend: function () { Loading.Show(); },
            success: function (e) {
                $("#imgRegCaptchaTranfer").attr("src", $("#imgRegCaptchaTranfer").attr("src").substr(0, $("#imgRegCaptchaTranfer").attr("src").indexOf("&") + 1) + new Date().getTime());
                if (e._status == -1) {
                    if (IS_BC3D) {
                        Popup2.Show("Thông báo", e._errors, 420, 0);
                    }
                    else if (STYLE_POPUP == 2) {
                        PopupOhYea2.Show("Thông báo", e._errors, 420, 0);
                    }
                    else {
                        Popup2.Show("Thông báo", e._errors, 420, 0);
                    }
                    FLAG_Transfer = true;
                    Loading.Hide();
                    return false;
                }
                else if (e._status == -99) {
                    if (IS_BC3D) {
                        Popup2.Show("Thông báo", e._errors, 420, 0);
                    }
                    else if (STYLE_POPUP == 2) {
                        PopupOhYea2.Show("Thông báo", e._errors, 420, 0);
                    }
                    else {
                        Popup2.Show("Thông báo", e._errors, 420, 0);
                    }
                }
                else {

                    if (IS_BC3D) {
                        Popup2.Show("Thông báo", e._errors, 420, 0);
                    }
                    else if (STYLE_POPUP == 2) {
                        PopupOhYea2.Show("Thông báo", e._errors, 420, 0);
                    }
                    else {
                        Popup2.Show("Thông báo", e._errors, 420, 0);
                    }
                    ResertFieldTranfer(e._Coin);
                    try {
                        ClientHtmlGameHelper.updateCoin(e._Coin);
                    } catch (e) {

                    }

                }
                FLAG_Transfer = true;
                Loading.Hide();
            }
        });
    }
    return false;
}

function PhiTranfer(percentFee) {
    var val = document.getElementById("priceUserTransfer").value;
    var xuGoc = val;
    var xuPhi = changeMoneyTranfertoXu(xuGoc, percentFee);
    document.getElementById("xu-thuc-chuyen-Tranfer").innerHTML = (xuGoc).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    document.getElementById("xu-phi-Tranfer").innerHTML = (xuPhi).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
function ResertFieldTranfer(_Coin) {
    var temp = _Coin.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    $('#CurrenCoinTranfer').html(temp);
    $("#captchaTranfer").val('');
    $("#priceUserTransfer").val("0");
    $('#xu-thuc-chuyen-Tranfer').html("0");
    $('#xu-phi-Tranfer').html("0");
}
function RegeditHome() {
    location.href = "/";
}
function RegeditNap() {
    location.href = "/w/nap-tien";
}