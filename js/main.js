/* ============================================
   D:\QClaw\website_complete\js\main.js
   主交互脚本 - 由 QClaw 整理生成
   ============================================ */

// 导航栏高亮当前页面
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.style.background = '#f0f0ff';
      link.style.color = '#764ba2';
    }
  });

  // 平滑滚动（同页面锚点）
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 卡片点击效果
  const cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      card.style.transform = 'scale(0.98)';
      setTimeout(function () {
        card.style.transform = '';
      }, 150);
    });
  });

  console.log('🚀 网站加载完成 - 由 QClaw 驱动');
});
