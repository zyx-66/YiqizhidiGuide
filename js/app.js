/* ============================================
   遗弃之地攻略助手 — 应用主逻辑
   ============================================ */

let currentTab = 'home';

// ── 初始化 ──
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSearch();
    initModal();
    renderPage('home');

    // 点击页面空白处关闭搜索
    document.addEventListener('click', (e) => {
        const searchBox = document.getElementById('headerSearch');
        if (searchBox && !searchBox.contains(e.target)) {
            document.getElementById('searchResults').style.display = 'none';
        }
    });
});

// ── 导航切换 ──
function initNavigation() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    nav.addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-btn');
        if (!btn) return;
        const tab = btn.dataset.tab;
        if (tab) switchTab(tab);
    });
}

function switchTab(tab) {
    currentTab = tab;

    // Update nav active state
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    // Close modal if open
    closeModal();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    renderPage(tab);
}

function renderPage(tab) {
    const main = document.getElementById('mainContent');
    if (!main) return;

    switch (tab) {
        case 'home':
            main.innerHTML = renderHome();
            break;
        case 'levels':
            main.innerHTML = renderLevels();
            break;
        case 'compendium':
            main.innerHTML = renderCompendium(compendiumSubTab || 'tianshu');
            break;
        case 'strategy':
            main.innerHTML = renderStrategy();
            break;
        default:
            main.innerHTML = renderHome();
    }
}

// ── 全局搜索 ──
function initSearch() {
    const input = document.getElementById('globalSearch');
    if (!input) return;

    let debounceTimer;
    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            performGlobalSearch(input.value.trim());
        }, 200);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            input.value = '';
            document.getElementById('searchResults').style.display = 'none';
            input.blur();
        }
    });

    // 键盘快捷键: Ctrl+K 聚焦搜索
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            input.focus();
        }
    });
}

// ── Modal ──
function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');
    if (!overlay) return;

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // ESC 关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            closeModal();
        }
    });
}

// ── 关卡筛选事件（在 renderLevels 后绑定） ──
document.addEventListener('input', (e) => {
    if (e.target.id === 'levelFilter' || e.target.id === 'levelDiffFilter') {
        const filterText = document.getElementById('levelFilter')?.value || '';
        const filterDiff = document.getElementById('levelDiffFilter')?.value || '';
        initLevelGrid(filterText, filterDiff);
    }
});
