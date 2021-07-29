$(document).ready(function () {

    var $litem = "<li style='width:500px'>ezzz</li>";

    Tipped.create('.demo_tep', $litem, {
        behavior: 'custom-slow',
        skin: 'light',







        // for test
        close: true,
        hideOn: false
      });



    // search-input
    $(".search-input").keyup(function () {
        // debugger;
        var Companyvalue = $(this).val().toLowerCase();
        $(".add-popup .popup-box .item-continer-box .item-box li").filter(function () {
        
            if($(this).toggle($(this).text().toLowerCase().indexOf(Companyvalue) > -1).hasClass("removed_data") !== true){
                $(this).toggle($(this).text().toLowerCase().indexOf(Companyvalue) > -1);
                $(".list-item-controled.removed_data ").hide();
            }if($(this).toggle($(this).text().toLowerCase().indexOf(Companyvalue) > -1).hasClass("removed_data") == true){
                $(".list-item-controled.removed_data ").show();
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
            var checked_Attr = "checked";

            $(".item-box ul.last-one").append('<li class="list-item-controled " data-list="' + datatable + '">' + "<h6 class='title-lable'>" + tdLable + "</h6>" + icone + "</li>");
        } else {
            var checked_Attr = "";
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

        $("." + id_attr)
            .toggleClass("show_lable")
            .toggle();

        $(".list-item-controled[data-list='" + id_attr + "']").toggle().toggleClass("removed_data");
    });

    $(".delet_icone_parrent").click(function () {
        const name_attr = $(this).parent().attr("data-list");

        $("#" + name_attr).click();

        // $("." + name_attr)
        //     .removeClass("show_lable")
        //     .hide();

        // $(this).parent(".list-item-controled").hide();
    });

    $(".closeandsave").click(function () {
        $(".add-popup").fadeOut();
    });
});
