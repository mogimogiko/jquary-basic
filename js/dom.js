$(function () {
  // const p = $('p').text();
  // console.log(p);
  // $('p').text('jQueryを勉強しよう');
  // 変数の初期化
  let num = 0;

  // id属性がappendの要素がクリックされたら要素を追加
  $('#append').on('click', function () {
    // numを1ずつ増やす
    num++;
    $('ul').append('<li>appendで追加' + num + '<li/>');
  });
});