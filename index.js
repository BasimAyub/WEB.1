$("div.bottom").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("div.top").offset().top
    },
    1000
  );
});
