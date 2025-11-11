/**
 * Validation Functions
 * バリデーション関数
 */

/**
 * メールアドレスの検証
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * パスワードの検証
 * 最低8文字、英数字を含む
 */
export function validatePassword(password) {
  if (password.length < 8) {
    return { valid: false, message: 'パスワードは8文字以上必要です' };
  }

  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (!hasLetter || !hasNumber) {
    return { valid: false, message: 'パスワードは英字と数字を含む必要があります' };
  }

  return { valid: true, message: '' };
}

/**
 * URLの検証
 */
export function validateURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 電話番号の検証（日本の形式）
 */
export function validatePhoneNumber(phone) {
  const phoneRegex = /^0\d{9,10}$/;
  return phoneRegex.test(phone.replace(/-/g, ''));
}

/**
 * 空文字チェック
 */
export function isNotEmpty(value) {
  return value !== null && value !== undefined && value.trim() !== '';
}
