/**
 * Button Component
 * 汎用ボタンコンポーネント
 */

class Button {
  constructor(label, onClick) {
    this.label = label;
    this.onClick = onClick;
  }

  render() {
    const button = document.createElement('button');
    button.textContent = this.label;
    button.className = 'custom-button';
    button.addEventListener('click', this.onClick);
    return button;
  }
}

export default Button;
