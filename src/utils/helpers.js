/**
 * Helper Functions
 * 汎用ヘルパー関数
 */

/**
 * 日付をフォーマット
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day);
}

/**
 * 文字列の最初の文字を大文字に
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 配列をランダムにシャッフル
 */
export function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * ディープクローン
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
