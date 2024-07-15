function changeCopyRightYear(copyrightEle) {
  let nowDate = new Date;
  let hasYear = /202./ig;
  if (hasYear.test($(copyrightEle).text())) {
    let newHtml = $(copyrightEle).html().replace(hasYear, `${nowDate.getFullYear()}`);
    $(copyrightEle).html(newHtml);
  }
}
let copyright = $(".web-state, .copy-right, .copyright");
changeCopyRightYear(copyright);