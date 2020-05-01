'use strict';

if (window.jQuery) {

    var ohyeaApp = {
        test__btn: '#ohyea__btn_test',
        test__md: 'ohyea__md_test',
        ohyea__md_updateinfo: 'ohyea__md_updateinfo',
        ohyea__md_guild: 'ohyea__md_guild',
        ohyea__md_guild_notloggined: 'ohyea__md_guild_notloggined',
        ohyea__md_manageguild: 'ohyea__md_manageguild',
        open: function open(__id) {
            $('#' + __id).modal('show');
        },
        init: function init() {
            this.test__only();
            this.datePicker();
            this.checkBox('#table1');
            this.checkBox('#table2');
            this.checkBox('#table3');
        },
        test__only: function test__only() {
            // ohyeaApp.open("ohyea__md_small");
            // this.log('you are in test only');

            if ($('#home').length > 0) {
                ohyeaApp.open(ohyeaApp.ohyea__md_updateinfo);
            }
            if ($('#guild').length > 0) {
                ohyeaApp.open(ohyeaApp.ohyea__md_manageguild);
            }

            $(this.test__btn).click(function () {
                ohyeaApp.log('Click to test button');
                ohyeaApp.open(ohyeaApp.test__md);
            });
            $("#ohyea__btn_test_small").click(function () {
                ohyeaApp.log('Click to test button');
                ohyeaApp.open("ohyea__md_small");
            });

            $('body').scrollspy({ target: '.navbar-example' });
            this.input();

            $('#btnAgreetest').click(function () {
                console.log(ohyeaApp.getCheckBoxSelected('#table3'));
            });
        },
        log: function log(message) {
            console.log('OhYea App: ' + message);
        },
        input: function input() {
            $(".ohyea__form_input-float").on('focus', function () {
                ohyeaApp.findInputLabel($(this).attr('id')).css('opacity', '1');
            });
            $(".ohyea__form_input-float").on('blur', function () {
                if ($(this).val() == '') {
                    ohyeaApp.findInputLabel($(this).attr('id')).css('opacity', '0');
                }
            });
            $(".ohyea__form_input-float").each(function () {
                if ($(this).val() != '') {
                    ohyeaApp.findInputLabel($(this).attr('id')).css('opacity', '1');
                }
            });
        },
        datePicker: function datePicker() {
            $('.ohyea__datepicker').datetimepicker({
                format: 'DD/MM/YYYY'
            });
        },
        findInputLabel: function findInputLabel(_id) {
            return $("label[for='" + _id + "']"); //.css('display', 'block');
        },
        checkBox: function checkBox(_id) {
            var allCls = (_id == undefined ? "" : _id) + ".ohyea__table .ohyea__table--thead .ohyea__chk-all",
                itemClas = (_id == undefined ? "" : _id) + ".ohyea__table .ohyea__table--tbody .ohyea__chk-item",
                tdClas = (_id == undefined ? "" : _id) + ".ohyea__table .ohyea__table--tbody .ohyea__table--td:not('a button input')",
                itemLength = $(itemClas).length;

            $(allCls).on('change', function () {
                if (itemLength > 0) {
                    if ($(this).find('input[type="checkbox"]').is(":checked")) {
                        $(itemClas).find('input[type="checkbox"]').prop('checked', true);
                    } else {
                        $(itemClas).find('input[type="checkbox"]').prop('checked', false);
                    }
                }
            });

            $(itemClas).on('click', function () {
                var selectedItemLength = $(itemClas).find('input[type="checkbox"]:checked').length;
                if (selectedItemLength == itemLength) {
                    $(allCls).find('input[type="checkbox"]').prop('checked', true);
                } else {
                    $(allCls).find('input[type="checkbox"]').prop('checked', false);
                }
            });

            // $(tdClas).on('click', function() {
            //     $(this).find('.ohyea__chk-item').find('input[type="checkbox"]').click();
            // });
        },
        getCheckBoxSelected: function getCheckBoxSelected(_id) {
            var itemClas = (_id == undefined ? "" : _id) + ".ohyea__table .ohyea__table--tbody .ohyea__chk-item";
            var _lst = [];
            $(itemClas).find('input[type="checkbox"]:checked').each(function (index, val) {
                _lst.push($(val).data('value'));
            });
            return _lst;
        }
    };

    $(document).ready(function () {
    });
}