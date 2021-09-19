function init() {
  $("nav a").click(function (e) {
    let btnID = e.currentTarget.id;
    MODEL.getPageContent(btnID);
  });
}

$(document).ready(function () {
  init();
});
