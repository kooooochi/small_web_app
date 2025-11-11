/**
 * Header Component
 * ページヘッダーコンポーネント
 */

class Header {
  constructor(title, navigation = []) {
    this.title = title;
    this.navigation = navigation;
  }

  render() {
    const header = document.createElement('header');
    header.className = 'app-header';

    const titleElement = document.createElement('h1');
    titleElement.textContent = this.title;
    header.appendChild(titleElement);

    if (this.navigation.length > 0) {
      const nav = document.createElement('nav');
      this.navigation.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.label;
        nav.appendChild(link);
      });
      header.appendChild(nav);
    }

    return header;
  }
}

export default Header;
