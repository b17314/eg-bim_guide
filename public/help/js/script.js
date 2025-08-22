// 탭메뉴(이용가이드/EG-TIP)
function selectTab(_id) {
  var tabContents = document.getElementsByClassName("tabContent");
  var tabHeaders = document.getElementsByClassName("tabHeader");
  var tabs = document.querySelectorAll(".tab li");

  for (var i = 0; i < tabContents.length; i++) {
    var id = tabContents[i].getAttribute("id");
    var isHasNone = tabContents[i].classList.contains("d-none");
    if (id === _id) {
      if (isHasNone) {
        tabContents[i].classList.toggle("d-none");
        // tabHeaders[i].classList.toggle("d-none");
        tabs[i].classList.toggle("on");
      }
    } else {
      if (!isHasNone) {
        tabContents[i].classList.toggle("d-none");
        // tabHeaders[i].classList.toggle("d-none");
        tabs[i].classList.toggle("on");
      }
    }
  }
}

// 상위메뉴 접힘 펼침
function toggleGroup(_id) {
  var element = document.getElementById(_id);
  element.classList.toggle("d-none");
  element.parentElement.classList.toggle("on");
}

// 하위메뉴 선택(메뉴 배경)
$(document).ready(function () {
  $(".group_list_depth02 li").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
});

// 컨텐츠 이미지
function selectImg(_id) {
  var menu_list = document.getElementsByClassName("menu_list");
  for (var i = 0; i < menu_list.length; i++) {
    var id = menu_list[i].getAttribute("id");
    var isHasNone = menu_list[i].classList.contains("d-none");
    if (id === _id) {
      if (isHasNone) {
        menu_list[i].classList.toggle("d-none");
      }
    } else {
      if (!isHasNone) {
        menu_list[i].classList.toggle("d-none");
      }
    }
  }
}

// 컨텐츠 내 링크
// 메인화면구성
// *2줄 : 링크 클릭시 현재 화면과 같은 상위메뉴로 이동시
$(".link_homemenu").on("click", function (evt) {
  $(".tab_homemenu").triggerHandler("click");
});
// *3줄 : 링크 클릭시 현재 화면과 다른 상위메뉴로 이동시
$(".link_color").on("click", function (evt) {
  $(".tab_color").triggerHandler("click"); //컨텐츠(Img) 변경
  $(".06_feature").addClass("on"); //상위메뉴 아이콘 + to -
  $("#menuGroup06").removeClass("d-none"); //상위메뉴 펼침 (d-none = display:none;)
});
$(".link_setbar").on("click", function (evt) {
  $(".tab_cmdbar").triggerHandler("click");
  $(".02_customize").addClass("on");
  $("#menuGroup02").removeClass("d-none");
});
$(".link_cmdbar").on("click", function (evt) {
  $(".tab_cmdbar").triggerHandler("click");
  $(".02_customize").addClass("on");
  $("#menuGroup02").removeClass("d-none");
});
$(".link_props").on("click", function (evt) {
  $(".tab_props").triggerHandler("click");
  $(".06_feature").addClass("on");
  $("#menuGroup06").removeClass("d-none");
});
$(".link_cmdall").on("click", function (evt) {
  $(".tab_cmdall").triggerHandler("click");
  $(".04_command").addClass("on");
  $("#menuGroup04").removeClass("d-none");
});
$(".link_print").on("click", function (evt) {
  $(".tab_print").triggerHandler("click");
  $(".09_print").addClass("on");
  $("#menuGroup09").removeClass("d-none");
});
$(".link_layouttab").on("click", function (evt) {
  $(".tab_layouttab").triggerHandler("click");
  $(".03_multi").addClass("on");
  $("#menuGroup03").removeClass("d-none");
});
$(".link_layer").on("click", function (evt) {
  $(".tab_layer").triggerHandler("click");
  $(".07_layer").addClass("on");
  $("#menuGroup07").removeClass("d-none");
});
$(".link_line").on("click", function (evt) {
  $(".tab_line").triggerHandler("click");
  $(".05_style").addClass("on");
  $("#menuGroup05").removeClass("d-none");
});
$(".link_filetab").on("click", function (evt) {
  $(".tab_filetab").triggerHandler("click");
  $(".03_multi").addClass("on");
  $("#menuGroup03").removeClass("d-none");
});
$(".link_mainprops").on("click", function (evt) {
  $(".tab_props").triggerHandler("click");
  $(".06_feature").addClass("on");
  $("#menuGroup06").removeClass("d-none");
});
$(".link_propsbar").on("click", function (evt) {
  $(".tab_props").triggerHandler("click");
  $(".06_feature").addClass("on");
  $("#menuGroup06").removeClass("d-none");
});

$(".link_ggurumi").on("click", function (evt) {
  $(".tab_props").triggerHandler("click");
  $(".12_GGurumi.gra").addClass("on");
  $("#menuGroup12").removeClass("d-none");
});

$(".link_prf").on("click", function (evt) {
  $(".tab_prf").triggerHandler("click");
  $(".02_customize").addClass("on");
  //$("#menuGroup02").removeClass("d-none");
});
$(".link_ctrl").on("click", function (evt) {
  $(".tab_ctrl").triggerHandler("click");
  $(".02_customize").addClass("on");
  $("#menuGroup02").removeClass("d-none");
});
$(".link_mainprf").on("click", function (evt) {
  $(".tab_prf").triggerHandler("click");
  $(".02_customize").addClass("on");
  $("#menuGroup02").removeClass("d-none");
});
$(".link_systm").on("click", function (evt) {
  $(".tab_systm").triggerHandler("click");
  $(".02_customize").addClass("on");
  $("#menuGroup02").removeClass("d-none");
});
$(".link_text").on("click", function (evt) {
  $(".tab_text").triggerHandler("click");
  $(".05_style").addClass("on");
  $("#menuGroup05").removeClass("d-none");
});
$(".link_msmt").on("click", function (evt) {
  $(".tab_msmt").triggerHandler("click");
  $(".05_style").addClass("on");
  $("#menuGroup05").removeClass("d-none");
});

$(".link_cven").on("click", function (evt) {
  $(".tab_cven").triggerHandler("click");
});
$(".link_struc").on("click", function (evt) {
  $(".tab_struc").triggerHandler("click");
});
$(".link_prfall").on("click", function (evt) {
  $(".tab_prf").triggerHandler("click");
});
$(".link_block").on("click", function (evt) {
  $(".tab_block").triggerHandler("click");
});
$(".link_atrbBlock").on("click", function (evt) {
  $(".tab_atrbBlock").triggerHandler("click");
});
$(".link_ref").on("click", function (evt) {
  $(".tab_ref").triggerHandler("click");
});
$(".link_intgBlock").on("click", function (evt) {
  $(".tab_block").triggerHandler("click");
});

$(".link_multiPrint").on("click", function (evt) {
  $(".multiPrint_floorPlan_ggurumi").triggerHandler("click");
});

$(".lik_fix_floorPlan").on("click", function (evt) {
  $(".fix_floorPlan_ggurumi").triggerHandler("click");
  $(".11_fix_floorPlan").addClass("on");
  $("#menuGroup11").removeClass("d-none");
});

$(".link_select_floorPlan").on("click", function (evt) {
  $(".select_floorPlan_ggurumi").triggerHandler("click");
});

// 모달
$(document).ready(function () {
  // 구조/배근 특화명령어 - 철근상세도 작성
  $("#open-modal-1").click(function () {
    $("#modal-1").show();
    $(".dim-background").show();
    var video = $("#modal-1 video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 구조/배근 특화명령어 - 철근재표 작성
  $("#open-modal-2").click(function () {
    $("#modal-2").show();
    $(".dim-background").show();
    var video = $("#modal-2 video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 작업환경설정 - 그리드
  $("#open-modal-grid").click(function () {
    $("#modal-grid").show();
    $(".dim-background").show();
    var video = $("#modal-grid video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 작업환경설정 - 오스냅
  $("#open-modal-osnap").click(function () {
    $("#modal-osnap").show();
    $(".dim-background").show();
    var video = $("#modal-osnap video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 작업환경설정 - 동적입력
  $("#open-modal-dynamicInput").click(function () {
    $("#modal-dynamicInput").show();
    $(".dim-background").show();
    var video = $("#modal-dynamicInput video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 작업환경설정 - 선택 효과 설정
  $("#open-modal-visualEfct").click(function () {
    $("#modal-visualEfct").show();
    $(".dim-background").show();
    var video = $("#modal-visualEfct video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 작업환경설정 - 그립 표시 설정
  $("#open-modal-objectGrip").click(function () {
    $("#modal-objectGrip").show();
    $(".dim-background").show();
    var video = $("#modal-objectGrip video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 작업환경설정 - 등각 투영 작업 모드
  $("#open-modal-isoDrawing").click(function () {
    $("#modal-isoDrawing").show();
    $(".dim-background").show();
    var video = $("#modal-isoDrawing video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 작업환경설정 - 직교 모드
  $("#open-modal-orthoMode").click(function () {
    $("#modal-orthoMode").show();
    $(".dim-background").show();
    var video = $("#modal-orthoMode video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 작업환경설정 - 극좌표 추척
  $("#open-modal-angleSnap").click(function () {
    $("#modal-angleSnap").show();
    $(".dim-background").show();
    var video = $("#modal-angleSnap video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 작업환경설정 - 중복객체 구별선택
  $("#open-modal-overlap").click(function () {
    $("#modal-overlap").show();
    $(".dim-background").show();
    var video = $("#modal-overlap video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 작업환경설정 - 확대 세부설정
  $("#open-modal-zoomDetail").click(function () {
    $("#modal-zoomDetail").show();
    $(".dim-background").show();
    var video = $("#modal-zoomDetail video").get(0);
    video.currentTime = 0;
    video.play();
  });

  // 닫기 버튼 또는 배경 클릭 시
  $(".close, .dim-background").click(function () {
    $(".modal").hide();
    $(".dim-background").hide();
  });
});

// --------------------------------------------------------------------

// 플러스 마이너스 동작
document.querySelectorAll(".plusminus").forEach((button) => {
  button.addEventListener("click", (e) => {
    const listItem = e.target.closest("li.main");
    if (listItem) {
      const groupId = listItem
        .querySelector("a")
        .getAttribute("href")
        .replace("javascript:toggleGroup('", "")
        .replace("')", "");
      toggleGroup(groupId);
      e.target.classList.toggle("active");
    }
  });
});

document.querySelectorAll("li.main > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const listItem = e.target.closest("li.main");
    if (listItem) {
      const plusminus = listItem.querySelector(".plusminus");
      if (plusminus) {
        plusminus.click();
      }
    }
  });
});

function toggleGroup(_id) {
  var element = document.getElementById(_id);
  if (element) {
    element.classList.toggle("d-none");
    element.parentElement.classList.toggle("on");
  }
}

// 페이지 로드 시 실행될 함수
function setDefaultActivePlusMinus() {
  document.querySelectorAll("li.main.on").forEach((listItem) => {
    const plusminus = listItem.querySelector(".plusminus");
    if (plusminus) {
      plusminus.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", setDefaultActivePlusMinus);

// 스크롤 생기면 보더래디우스 이미지 위치 이동
function checkScrollbar() {
  const groupList = document.querySelector(".group_list");
  const tipAfterElement = document.querySelector(".tip-after");

  if (groupList.scrollHeight > groupList.clientHeight) {
    // 스크롤이 생긴 경우
    tipAfterElement.style.left = "69.4px"; // 62px + 7px
  } else {
    // 스크롤이 없는 경우
    tipAfterElement.style.left = "62.5px";
  }
}

// 초기 상태 확인 및 윈도우 로드 시 상태 확인
window.addEventListener("DOMContentLoaded", checkScrollbar);
window.addEventListener("load", checkScrollbar);

// 윈도우 리사이즈에 대한 리스너 추가
window.addEventListener("resize", checkScrollbar);

// DOM 변화 감지를 위한 MutationObserver 추가
const groupList = document.querySelector(".group_list");
const observer = new MutationObserver(checkScrollbar);

// 감시할 대상 노드와 감시 옵션 설정
observer.observe(groupList, {
  attributes: true,
  childList: true,
  subtree: true,
});
