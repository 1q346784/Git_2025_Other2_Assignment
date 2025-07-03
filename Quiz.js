document.addEventListener('DOMContentLoaded', () => {
  // 「解答する」ボタンを取得
  const button = document.querySelector('button[type="button"]');

  button.addEventListener('click', () => {
    // 選択中のラジオボタンを取得
    const selected = document.querySelector('input[name="model"]:checked');
    if (!selected) {
      alert('まず選択肢を選んでください。');
      return;
    }

    // ラベル内のテキストを取得（「プロトタイピング」など）
    const labelText = selected.parentNode.textContent.trim();

    // 正解かどうか判定
    if (labelText === 'プロトタイピング') {
      alert('正解です！🎉');
    } else {
      alert('不正解です…');
    }
  });
});
