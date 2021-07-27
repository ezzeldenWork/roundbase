$(document).ready(function () {
  // datepicke
  $(".date_picker").datepicker();

  // select2
  $(".select2").select2();

  // dropify
  $(".dropify").dropify();

  // blur form

  // dataTable

  if ($("html").attr("dir") == "rtl") {
    var lang = "https://cdn.datatables.net/plug-ins/1.10.24/i18n/Arabic.json";
  } else {
    var lang = "";
  }

  var table = $(".dataTable").DataTable({
    language: {
      url: lang,
    },
  });

  $(".dlete-icone").click(function () {
    $(this).parent("li").remove();
  });

  $(".pop-up-close").click(function () {
    $(".add-popup").fadeOut();
  });

  $(".opne-po-up").click(function () {
    $(".add-popup").fadeIn();
  });
});
