$(document).ready(function () {
    // page dir
    if ($("html").attr("dir") == "ltr") {
        var lang = "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json",
            reorder_Dir = "-";
    }
    if ($("html").attr("dir") == "rtl") {
        var lang = "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Arabic.json",
            reorder_Dir = "+";
    }



    // opne filter 
    $(".filter_opne_button .opne_botton").click(function(){
        $(".filter-box-aside").slideDown();
    });
    $(".filter-box-aside .close-button").click(function(){
        $(".filter-box-aside").slideUp();
    });



    // table tooltep
    Tipped.delegate(
        ".demo_tep",

        function (element) {
            var srcimg = $(element).children(".img-box").children("img").attr("src");
            var content = $(element).children(".item-name").text();
            return (
                "<div class='tipped-box'>" +
                "<div class='title-box d-flex align-items-center'>" +
                "<div class='img-box'>" +
                "<img src='" +
                srcimg +
                "' class='img-fluid' alt=''>" +
                "</div>" +
                "<div class='title-item-box'>" +
                "<h4 class='title-item text-center'> " +
                content +
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
                "<a href='#' class='button-item'>  <span >save</span> </a>" +
                "</div>" +
                "</div>"
            );
        },

        {
            cache: false,
            behavior: "custom-slow",
            skin: "light",
            // for test
            close: true,
        }
    );
    // filter tooltep
    Tipped.create(".exclamation-mark", {
        position: "bottomright",
        skin: "gray",
    });

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

    // DataTable
    var table = $(".dataTable").DataTable({
        searching: false,
        sort: false,
        // responsive: true,
        colReorder: true,
        language: {
            url: lang,
        },
    });

    // pop up loop
    $(".min_lable .th_content select").on("change", function () {
        // debugger;
        var curntly_index = $(this).parent(".th_content").parent(".min_lable").index(),
            length_Index = $(".min_lable").length - 1;

        // debugger;
        if ($(this).val() == "left") {
            if (curntly_index == 0) {
            } else {
                if ($("html").attr("dir") == "ltr") {
                    var reorder = curntly_index - 1;
                    table.colReorder.move(curntly_index, reorder);
                }
                if ($("html").attr("dir") == "rtl") {
                    var reorder = curntly_index + 1;
                    table.colReorder.move(curntly_index, reorder);
                }
            }
        }
        if ($(this).val() == "right") {
            if (curntly_index == length_Index) {
            } else {
                // var reorder = curntly_index + 1;
                // table.colReorder.move(curntly_index, reorder);

                if ($("html").attr("dir") == "ltr") {
                    var reorder = curntly_index + 1;
                    table.colReorder.move(curntly_index, reorder);
                }
                if ($("html").attr("dir") == "rtl") {
                    var reorder = curntly_index - 1;
                    table.colReorder.move(curntly_index, reorder);
                }
            }
        }
        if ($(this).val() == "toStart") {
            var reorder = 0;
            table.colReorder.move(curntly_index, reorder);
        }
        if ($(this).val() == "toEnd") {
            var reorder = length_Index - 1;
            table.colReorder.move(curntly_index, reorder);
        }
        $(this).val("");

        //  table.colReorder.move( curntly_index, reorder );
    });

    $(".pop-up-close").click(function () {
        $(".add-popup").fadeOut();
    });

    $(".opne-po-up").click(function () {
        $(".add-popup").fadeIn();
    });

    $("#tadetest thead .min_lable").each(function () {
        const tdLable = $(this).children(".th_content").children(".textTitle").text(),
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

    // has-input chked box
    $(".has-input").click(function () {
        const date_type = $(this).children("input"),
            real = $(this).children("input").data("input"),
            box = $("#" + real).attr("id");
        var boxs = "#" + box;
        // console.log(boxs)
        // .data("input")

        if ($(this).hasClass("hasReal") == true) {
            $("#" + box).show();
        } else if ($(this).hasClass("hasnt-input") == true) {
            $(this).siblings(".duple_input").hide();
        }
    });

    $(".filter_collapse ul li").click(function () {
        $(this).siblings().children(".filter-box-content").addClass("collapse").removeClass("show");
        $(this).siblings().children(".collopse-link").attr("aria-expanded", false);
    });
    // filter more bottom
    $(".more-bottom").click(function () {
        $(this).siblings(".more-box:gt(2), .less-bottom").show();
        $(this).hide();
    });
    // filter less bottom
    $(".less-bottom").click(function () {
        $(".more-bottom").show();
        $(this).siblings(".more-box:gt(2)").hide();
        $(this).hide();
    });









    

    
    $("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "div",
        autoFocus: true,
        skip: true,
        saveState: true,
        // enableKeyNavigation: false,
        // enablePagination: false,    
        transitionEffect : 'fade' ,
        labels: {
            current: ""
        }
    });



    $(".boxs_componant .next_step").click(function () {
        $("a[href='#next']").click();
    }); 
    $(".boxs_componant .opne_new_box").click(function () {
        $(".hiddin_form_new").show();
    }); 






    // sliderEx
    const sliderEz = document.getElementById("sliderEx");

    noUiSlider.create(sliderEz, {
        start: [0, 1000],
        connect: true,
        // snap: true,
        tooltips: [true, true],
        range: {
            min: 0,
            max: 1000,
        },
    });
});
