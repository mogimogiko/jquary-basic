$(function () {

  // 9章部分
  // id属性がfadeOutの要素がクリックされたら
  // $('#fadeOut').on('click', function () {
  //   // フェードアウトする
  //   $('.box').fadeOut();
  // });

  // id属性がfadeInの要素がクリックされたら
  // $('#fadeIn').on('click', function () {
  //   // フェードインする
  //   $('.box').fadeIn();
  // });

  // id属性がfadeToggleの要素がクリックされたら
  // $('#fadeToggle').on('click', function () {
  //   // フェードイン or フェードアウトする
  //   $('.box').fadeToggle();
  // });


  // 10章部分

  $('#fadeOut').on('click', function () {
    // 不透明度を0にする
    $('.box').css('opacity', 0);
  });
  $('#fadeIn').on('click', function () {
    // 不透明度を1にする
    $('.box').css('opacity', 1);
  });
  $('#slideUp').on('click', function () {
    // スライドアップ
    // $('.box').slideUp();
    
    // 高さを0にする（スライドアップ）
    $('.box').css('height', 0);
  });
  
  $('#slideDown').on('click', function () {
    // スライドダウン
    // $('.box').slideDown();

    // 高さを200にする（スライドダウン）
    $('.box').css('height', 200);
  });
  // スライドアップ、スライドダウン
  // $('#slideToggle').on('click', function () {
  //   $('.box').slideToggle();
  // });
});