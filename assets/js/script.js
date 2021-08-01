$(document).ready(function () {
    $(".data-label .item-box").hover(
        function () {
            var img_src = $(this).children(".img-box").children("img").attr("src"),
                box_title = $(this).children(".item-name").text();
            // console.log(img_src);
            Tipped.delegate(
                ".demo_tep",
                "<div class='tipped-box'>" +
                    "<div class='title-box d-flex align-items-center'>" +
                    "<div class='img-box'>" +
                    "<img src='" +
                    img_src +
                    "' class='img-fluid' alt=''>" +
                    "</div>" +
                    "<div class='title-item-box'>" +
                    "<h4 class='title-item text-center'> " +
                    box_title +
                    "</h4>" +
                    "<p class='prag-item'> SoftBank provides fixed-line, mobile telephony, internet, " +
                    "<br> telecommunications, and digital television products.  " +
                    "</p>" +
                    "<div class='list-item text-center'> <a href='#'> tag </a> <a href='#'> tag </a>  <a href='#'> tag </a> " +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "<div class='number-box'> " +
                    "<div class='number-item-box'> " +
                    "<span class='number-title-item'> Lorem </span>" +
                    "<span class='number-item'> 22 </span>" +
                    "</div>" +
                    "<div class='number-item-box'> " +
                    "<span class='number-title-item'> Lorem </span>" +
                    "<span class='number-item'> 22 </span>" +
                    "</div>" +
                    "</div>" +
                    "<hr>" +
                    "<div class='button-box'> " +
                    "<a href='#' class='button-item'>  <i class='fas fa-plus'></i> <span >save</span> </a>" +
                    "</div>" +
                    "</div>",
                {
                    // behavior: 'custom-slow',
                    skin: "light",
                    // for test
                    close: true,
                }
            );
        },
        function () {
            var img_src = "";
            // console.log(img_src);
        }
    );

    // search-input
    $(".search-input").keyup(function () {
        // 7
        var Companyvalue = $(this).val().toLowerCase();
        $(".add-popup .popup-box .item-continer-box .item-box li").filter(function () {
            if (
                $(this)
                    .toggle($(this).text().toLowerCase().indexOf(Companyvalue) > -1)
                    .hasClass("removed_data") !== true
            ) {
                $(this).toggle($(this).text().toLowerCase().indexOf(Companyvalue) > -1);
                $(".list-item-controled.removed_data ").show();
            }
            if (
                $(this)
                    .toggle($(this).text().toLowerCase().indexOf(Companyvalue) > -1)
                    .hasClass("removed_data") == true
            ) {
                $(".list-item-controled.removed_data ").hide();
            }
        });
    });

    // datepicke
    $(".date_picker").datepicker();

    // select2
    $(".select2").select2();

    // blur form

    var table = $(".dataTable").DataTable({ searching: false });

    $(".pop-up-close").click(function () {
        $(".add-popup").fadeOut();
    });

    $(".opne-po-up").click(function () {
        $(".add-popup").fadeIn();
    });

    $("#tadetest thead .min_lable").each(function () {
        const tdLable = $(this).text(),
            datatable = $(this).data("table");

        if ($(this).hasClass("locked") == true) {
            var icone = " <i class='fa fa-lock' aria-hidden='true'></i> ",
                requred_input = "disabled";
        } else {
            var icone = " <i class='fa fa-times delet_icone_parrent ' aria-hidden='true'></i> ",
                requred_input = "";
        }

        if ($(this).hasClass("show_lable") == true) {
            var checked_Attr = "checked",
                added_class = "added_to_list",
                removed_class = "";
        } else {
            var checked_Attr = "",
                added_class = "",
                removed_class = "removed_data";
        }
        $(".item-box ul.last-one").append('<li class="list-item-controled ' + removed_class + " " + added_class + ' " data-list="' + datatable + '">' + "<h6 class='title-lable'>" + tdLable + "</h6>" + icone + "</li>");

        if ($(this).hasClass("show_lable") !== true) {
            $(".item-box ul.last-one .list-item-controled[data-list=" + datatable + "]").hide();
        }

        $(".item-box.sucond-box ul").append(
            " <li>" +
                '<div class="pretty p-default">' +
                '<input id="' +
                datatable +
                '" type="checkbox" class="input-checked" ' +
                checked_Attr +
                " " +
                requred_input +
                "/>" +
                ' <div class="state p-primary p-svg">' +
                " <label> " +
                tdLable +
                "</label>" +
                " </div>" +
                "    </div>" +
                " </li>"
        );
    });

    $(".input-checked").click(function () {
        const id_attr = $(this).attr("id");

        // $("." + id_attr)
        //     .toggleClass("show_lable")
        //     .toggle();

        $(".list-item-controled[data-list='" + id_attr + "']")
            .toggle()
            .toggleClass("added_to_list")
            .toggleClass("removed_data");
    });

    $(".delet_icone_parrent").click(function () {
        var name_attr = $(this).parent().attr("data-list");

        $("#" + name_attr).click();

        // $("." + name_attr)
        //     .removeClass("show_lable")
        //     .hide();

        // $(this).parent(".list-item-controled").hide();
    });

    $(".closeandsave").click(function () {
        $(".add-popup").fadeOut();

        const list_item = $(".add-popup .popup-box .item-continer-box .item-box .last-one li"),
            lable_item = $("#tadetest thead .min_lable");

        for (var i = 0; i < list_item.length; i++) {
            //   console.log(list_item[i]);

            for (var j = 0; j < lable_item.length; j++) {
                //   console.log(lable_item[j]);

                if ($(list_item[i]).attr("data-list") == $(lable_item[j]).attr("data-table")) {
                    if ($(list_item[i]).hasClass("removed_data") == true) {
                        var name_attr = $(list_item[i]).attr("data-list");
                        $("." + name_attr)
                            .removeClass("show_lable")
                            .hide();
                    } else if ($(list_item[i]).hasClass("added_to_list") == true) {
                        var name_attr2 = $(list_item[i]).attr("data-list");
                        $("." + name_attr2)
                            .addClass("show_lable")
                            .show();
                    }
                }
            }
        }
    });
});
 