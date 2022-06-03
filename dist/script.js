function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
   : null;
}

let $background2 = "#F67280";
let $background1 = "#364F6B";

let $bearbody2 = "#8675A9";
let $bearbody1 = "#91C788";

let $bearmouth = "#F5F5F5";

let kyniem = [
  'Ùkm!',
  'kem chúi',
  'bánh tiêu',
  'khoai mỡ',
  'trà đào',
  'trà sữa',
  'kem bánh cá',
  'mọi chiều thứ 6 lớp 12',
  'chợ nhật tảo',
  'circle K gần Tam Khôi',
  'vườn sả',
  'lẩu chay trước cổng khoa học tự nhiên',
  'xem điểm đại học trong nhà văn hóa sinh viên',
  'làm cổng trại 26/3',
  'đi mua lồng đèn bị lạc ở bến xe miền đông',
  'lmh chờ mình tới đêm',
  'lồng đèn sáng (hên)',
  'xin lỗi lmh',
  'chạy 150 đưa hồ sơ ở cs1',
  'uống phúc long ăn mừng',
  'làm slides tới 8h',
  'nộp trước deadline 2p (thầy Tuần)',
  'làm sách nổi (cô hồng minh)',
  'làm vlog',
  'hối hận vì làm vlog',
  'làm màn kéo cho vở kịch',
  'nó hoạt động (quá ghê)',
  '(thầy) trí để quên đt',
  'chụp gần 12 tấm hình',
  'giữ 1 tấm',
  'phơi áo ở trường',
  '2 cái áo thể dục lủng lẳng',
  'tắm mưa',
  'bị lmh cấm tắm mưa',
  'vẫn tắm mưa',
  'ở lại trường ban đêm',
  'thắt bím tóc cho lmh nhưng không thành',
  'lmh vui',
  '♡',
  'ôn thi học kì',
  'ngủ trưa trên ghế đá',
  'giả bộ đau tim khi xem r/awww',
  'thích chó',
  'thích toán',
  'thích xem phim ma',
  'sợ ma',
  'thích ở lại trường đêm khuya',
  'sợ ma',
  '...',
  'sợ bố lmh',
  'thích lmh',
  '...',
  'anh chỉ muốn em vui',
  'ngủ ngon'
]

let kn = 0;

function switchHandler() {
  if ($('body').css('background-color') == hexToRgb($background2)) {
    $("body").css("background-color", $background1);
    $(".toggle__handler").css("background-color", $bearbody1);
    $(".bear-body").css("border-bottom", `150px solid ${$bearbody1}`);
    $(".bear-body").removeClass("s2");
    $(".bear-body").addClass("s1");
    $('#hoc').html(kyniem[kn++]);
    $('#iu').css('visibility', 'hidden');
    $('#hoc').css('visibility', 'visible');
    $('#iu').css('opacity', '0');
    $('#hoc').css('opacity', '1');
  } else {
    $("body").css("background-color", $background2);
    $(".toggle__handler").css("background-color", $bearbody2);
    $(".bear-body").css("border-bottom", `150px solid ${$bearbody2}`);
    $(".bear-body").removeClass("s1");
    $(".bear-body").addClass("s2");
    $('#iu').html(kyniem[kn++]);
    $('#hoc').css('visibility', 'hidden');
    $('#iu').css('visibility', 'visible');
    $('#hoc').css('opacity', '0');
    $('#iu').css('opacity', '1');
  }
}

document.querySelector('.toggle').onclick = switchHandler;