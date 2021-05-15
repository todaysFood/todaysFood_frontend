document.addEventListener("DOMContentLoaded", function () {
  const gnbBurgerBtn = document.querySelector(".gnb-open-btn-burger");
  const gnbCloseBtn = document.querySelector(".gnb-ope-btn-close");
  const globalNavBar = document.querySelector("#router");
  const header = document.querySelector(".header");
  let prevDep2List = null;
  console.log(gnbBurgerBtn);
  // gnb 햄버거 메뉴버튼 클릭시 gnb 메뉴 보이기
  gnbBurgerBtn.addEventListener("click", function () {
    gnbBurgerBtn.classList.toggle("is-open");
    gnbCloseBtn.classList.toggle("is-open");
    globalNavBar.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
    header.classList.toggle("is-clicked");

    // label 변경
    if (gnbBurgerBtn.classList.contains("is-open")) {
      gnbBurgerBtn.setAttribute("aria-pressed", "true");
      gnbBurgerBtn.setAttribute("aria-label", "메인메뉴 닫기");
    } else {
      gnbBurgerBtn.setAttribute("aria-pressed", "false");
      gnbBurgerBtn.setAttribute("aria-label", "메인메뉴 열기");
    }
  });
});
