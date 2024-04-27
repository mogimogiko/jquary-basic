$(function() {
//   // ボタンがクリックされた場合
//   $('button').on('click', function() {
//     console.log('ボタンがクリックされました');
//   });
// });

  // 複数のイベント処理
  // $('div').on({
  //   'click': () => {
  //     // 背景を赤
  //     $('div').css('background-color', 'red');
  //     // textを「クリック」
  //     $('div').text('click');
  //   },
  //   'dblclick': () => {
  //     // 背景を緑
  //     $('div').css('background-color', 'green');
  //     // テキストを「dbclick」
  //     $('div').text('dblclick');
  //   },
  //   'mouseenter': () => {
  //     // 背景を青
  //     $('div').css('background-color', 'blue');
  //     // テキストを「mouseenter」
  //     $('div').text('mouseenter');
  //   },
  //   'mouseout': () => {
  //     // 背景をグレー
  //     $('div').css('background-color', 'gray');
  //     // テキストを「mouseout」
  //     $('div').text('mouseout');
  //   },
  // });
// 複数のイベント処理を同時に処理
  $(document).on('click keydown', (e) => {
    // クリックされた場合
    if (e.type === 'click') {
      $('div').text('クリックされました!');
    }
    // キーが押された場合
    if (e.type === 'keydown') {
      $('div').text('キーが押されました!');
    }
  })
});