/* ============================================
   遗弃之地攻略助手 — UI 组件渲染
   ============================================ */

// ── 首页大厅 ──
function renderHome() {
    let html = '';

    // Hero
    html += `
    <div class="hero-card">
        <div class="hero-title">遗弃之地</div>
        <p class="hero-desc">
            中式民俗恐怖 · 横版策略塔防 · Roguelike<br>
            扮演<strong style="color:var(--gold)">修法者</strong>，以符咒为刃，驱鬼除魔，从遗弃之地重返人间
        </p>
        <div class="hero-tags">
            <span class="tag tag-fire">🔥 火系输出</span>
            <span class="tag tag-water">💧 水系控制</span>
            <span class="tag tag-wind">🌪️ 风系击退</span>
            <span class="tag tag-earth">🪨 土系眩晕</span>
        </div>
    </div>`;

    // Quick Nav
    html += `<div class="quick-nav">
        <div class="quick-card" onclick="switchTab('levels')">
            <div class="quick-icon">🗺️</div>
            <div class="quick-label">关卡攻略</div>
            <div class="quick-desc">25关主线 · 全敌人配置</div>
        </div>
        <div class="quick-card" onclick="switchTab('compendium')">
            <div class="quick-icon">📖</div>
            <div class="quick-label">图鉴大全</div>
            <div class="quick-desc">天书 · 鬼仆 · 装备 · 符咒</div>
        </div>
        <div class="quick-card" onclick="switchTab('strategy')">
            <div class="quick-icon">💡</div>
            <div class="quick-label">策略宝典</div>
            <div class="quick-desc">流派 · 养成 · 商店指南</div>
        </div>
    </div>`;

    // Tier List
    html += `<h3 class="section-title">📊 天书强度天梯</h3>
    <p class="section-desc">基于当前版本综合评级</p>
    <div class="tier-list">`;

    const tiers = { T0: [], T1: [], T2: [] };
    tianshuData.forEach(t => tiers[t.tier].push(t));

    for (const [tier, items] of Object.entries(tiers)) {
        if (!items.length) continue;
        html += `<div class="tier-row">
            <div class="tier-label ${tier.toLowerCase()}">${tier}</div>
            <div class="tier-items">`;
        for (const item of items) {
            html += `<span class="tier-item">
                <span class="tier-item-icon">${item.icon}</span>${item.name}
                <span class="tag tag-${item.element === '火' ? 'fire' : item.element === '水' ? 'water' : item.element === '风' ? 'wind' : 'earth'}" style="font-size:9px;padding:1px 5px;margin-left:2px;">${item.element}</span>
            </span>`;
        }
        html += `</div></div>`;
    }
    html += `</div>`;

    // Tips
    html += `<h3 class="section-title" style="margin-top:28px;">🔑 新手避坑指南</h3>
    <ul class="tips-list mt-16">`;
    avoidTips.forEach(tip => {
        html += `<li class="tip-item"><span class="tip-num">${tip.num}</span><span class="tip-text">${tip.text}</span></li>`;
    });
    html += `</ul>`;

    return `<div class="page-section">${html}</div>`;
}

// ── 关卡攻略页 ──
function renderLevels() {
    let html = `<h2 class="section-title">🗺️ 关卡攻略</h2>
    <p class="section-desc">全部25关主线 + 特殊玩法，点击关卡查看详情</p>`;

    // Search filter
    html += `<div class="filter-bar">
        <input type="text" class="filter-input" id="levelFilter" placeholder="🔍 搜索关卡名称或敌人...">
        <select class="filter-select" id="levelDiffFilter">
            <option value="">全部难度</option>
            <option value="简单">简单</option>
            <option value="普通">普通</option>
            <option value="困难">困难</option>
            <option value="极难">极难</option>
        </select>
    </div>`;

    // Level grid
    html += `<div class="level-grid" id="levelGrid"></div>`;

    // Special levels
    html += `<h3 class="section-title" style="margin-top:24px;">🌟 特殊玩法</h3>
    <div class="card-grid mt-16">`;
    specialLevels.forEach(sl => {
        html += `
        <div class="card">
            <div class="card-header">
                <span class="card-title">${sl.icon} ${sl.name}</span>
                <span class="tag tag-red">${sl.limit}</span>
            </div>
            <div class="card-body">${sl.desc}</div>
            <div style="margin-top:8px;font-size:12px;color:var(--gold);">💎 奖励：${sl.rewards}</div>
            <div style="margin-top:4px;font-size:12px;color:var(--text-muted);">💡 ${sl.tips}</div>
        </div>`;
    });
    html += `</div>`;

    // Deferred: level grid will be populated by initLevelGrid()
    setTimeout(() => initLevelGrid(), 0);

    return `<div class="page-section">${html}</div>`;
}

function initLevelGrid(filterText = '', filterDiff = '') {
    const grid = document.getElementById('levelGrid');
    if (!grid) return;

    let filtered = levelData;
    if (filterText) {
        const q = filterText.toLowerCase();
        filtered = filtered.filter(l => l.name.includes(q) || l.enemies.includes(q) || l.tips.includes(q));
    }
    if (filterDiff) {
        filtered = filtered.filter(l => l.difficulty === filterDiff);
    }

    grid.innerHTML = filtered.map(l => `
        <div class="level-card" onclick="showLevelDetail(${l.id})">
            <div class="level-num">${String(l.id).padStart(2,'0')}</div>
            <div class="level-name">${l.name}</div>
            <div class="level-diff">${'⭐'.repeat(l.diffLevel)} ${l.difficulty}</div>
        </div>
    `).join('');
}

function showLevelDetail(id) {
    const level = levelData.find(l => l.id === id);
    if (!level) return;

    const diffStars = '⭐'.repeat(level.diffLevel);

    const content = `
        <div class="modal-title">🗺️ 第${level.id}关 · ${level.name}</div>
        <div class="modal-section">
            <h4>📊 基础信息</h4>
            <p>难度：${diffStars} <span class="tag tag-${level.difficulty === '极难' ? 'red' : level.difficulty === '困难' ? 't1' : level.difficulty === '普通' ? 't2' : 'green'}">${level.difficulty}</span></p>
            <p>敌人：${level.enemies}</p>
            <p>波次：${level.waves}</p>
        </div>
        <div class="modal-section">
            <h4>⭐ 推荐配置</h4>
            <p><strong>天书：</strong>${level.recTianshu}</p>
            <p><strong>鬼仆：</strong>${level.recGuipu}</p>
            <p><strong>符咒：</strong>${level.recTalisman}</p>
        </div>
        <div class="modal-section">
            <h4>💡 通关要点</h4>
            <p>${level.tips}</p>
        </div>
    `;

    showModal(content);
}

// ── 图鉴大全页 ──
let compendiumSubTab = 'tianshu';

function renderCompendium(subTab = 'tianshu') {
    compendiumSubTab = subTab;

    const subTabs = [
        { key: 'tianshu', label: '📿 天书', icon: '' },
        { key: 'guipu', label: '👻 鬼仆', icon: '' },
        { key: 'equipment', label: '⚔️ 装备', icon: '' },
        { key: 'talisman', label: '🪄 符咒', icon: '' },
        { key: 'resource', label: '💎 资源', icon: '' },
    ];

    let html = `<h2 class="section-title">📖 图鉴大全</h2>`;

    // Sub tabs
    html += `<div class="sub-nav" id="compSubNav">`;
    subTabs.forEach(st => {
        const active = st.key === subTab ? ' active' : '';
        html += `<button class="sub-nav-btn${active}" data-subtab="${st.key}" onclick="switchCompendiumTab('${st.key}')">${st.label}</button>`;
    });
    html += `</div>`;

    // Search
    html += `<div class="filter-bar">
        <input type="text" class="filter-input" id="compFilter" placeholder="🔍 在当前分类中搜索..." oninput="filterCompendium()">
    </div>`;

    // Content container
    html += `<div id="compContent"></div>`;

    // Deferred render
    setTimeout(() => renderCompContent(subTab), 0);

    return `<div class="page-section">${html}</div>`;
}

function switchCompendiumTab(subTab) {
    compendiumSubTab = subTab;
    // Update sub nav buttons
    document.querySelectorAll('#compSubNav .sub-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.subtab === subTab);
    });
    // Reset filter
    const filterInput = document.getElementById('compFilter');
    if (filterInput) filterInput.value = '';
    renderCompContent(subTab);
}

function filterCompendium() {
    const query = document.getElementById('compFilter')?.value || '';
    renderCompContent(compendiumSubTab, query);
}

function renderCompContent(subTab, filterQuery = '') {
    const container = document.getElementById('compContent');
    if (!container) return;

    const q = (filterQuery || '').toLowerCase();

    switch (subTab) {
        case 'tianshu': renderTianshu(container, q); break;
        case 'guipu': renderGuipu(container, q); break;
        case 'equipment': renderEquipment(container, q); break;
        case 'talisman': renderTalisman(container, q); break;
        case 'resource': renderResource(container, q); break;
    }
}

function renderTianshu(container, q) {
    const data = q ? tianshuData.filter(d =>
        d.name.includes(q) || d.desc.includes(q) || d.element.includes(q) || d.tags.some(t => t.includes(q))
    ) : tianshuData;

    if (!data.length) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📿</div><div class="empty-state-text">没有找到匹配的天书</div></div>`;
        return;
    }

    container.innerHTML = `<div class="card-grid">${data.map(d => `
        <div class="card">
            <div class="card-header">
                <span class="card-title">${d.icon} ${d.name}</span>
                <span class="tag tag-${d.tier.toLowerCase()}">${d.tier}</span>
            </div>
            <div class="card-subtitle">
                <span class="tag tag-${d.element === '火' ? 'fire' : d.element === '水' ? 'water' : d.element === '风' ? 'wind' : 'earth'}">${d.element}</span>
                ⏱ ${d.cooldown}
                ⭐ ${'★'.repeat(d.rating)}
            </div>
            <div class="card-body mt-8">${d.desc}</div>
            <div class="card-footer">
                ${d.tags.map(t => `<span class="tag tag-gold">${t}</span>`).join(' ')}
            </div>
            <div class="text-muted" style="font-size:11px;margin-top:8px;">📥 ${d.obtain}</div>
        </div>
    `).join('')}</div>`;
}

function renderGuipu(container, q) {
    const data = q ? guipuData.filter(d =>
        d.name.includes(q) || d.desc.includes(q) || d.element.includes(q) || d.tags.some(t => t.includes(q))
    ) : guipuData;

    if (!data.length) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">👻</div><div class="empty-state-text">没有找到匹配的鬼仆</div></div>`;
        return;
    }

    container.innerHTML = `<div class="card-grid">${data.map(d => `
        <div class="card">
            <div class="card-header">
                <span class="card-title">${d.icon} ${d.name}</span>
                <span class="tag tag-${d.color}">${d.quality}</span>
            </div>
            <div class="card-subtitle">${d.element} 系符能激活</div>
            <div class="card-body mt-8">
                <p><strong>技能：</strong>${d.skill}</p>
                <p class="mt-8">${d.desc}</p>
            </div>
            <div class="card-footer">
                <span>推荐：${d.recommend}</span>
                <span class="text-muted" style="font-size:11px;">八字：${d.bazhi}</span>
            </div>
            <div style="margin-top:6px;font-size:11px;">
                ${d.tags.map(t => `<span class="tag tag-purple">${t}</span>`).join(' ')}
            </div>
        </div>
    `).join('')}</div>`;
}

function renderEquipment(container, q) {
    const data = q ? equipmentData.filter(d =>
        d.name.includes(q) || d.effect.includes(q) || d.desc.includes(q) || d.quality.includes(q)
    ) : equipmentData;

    if (!data.length) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">⚔️</div><div class="empty-state-text">没有找到匹配的装备</div></div>`;
        return;
    }

    container.innerHTML = `<div class="card-grid-sm">${data.map(d => `
        <div class="card">
            <div class="card-header">
                <span class="card-title">${d.icon} ${d.name}</span>
                <span class="tag tag-${d.color}">${d.quality}</span>
            </div>
            <div class="card-body mt-8">
                <p><strong>效果：</strong>${d.effect}</p>
                <p class="mt-8 text-muted">${d.desc}</p>
            </div>
            <div class="card-footer">
                <span class="tag tag-gold">${d.priority}</span>
                <span class="text-muted" style="font-size:11px;">来源：${d.source}</span>
            </div>
        </div>
    `).join('')}</div>`;
}

function renderTalisman(container, q) {
    const data = q ? talismanData.filter(d =>
        d.element.includes(q) || d.role.includes(q) || d.desc.includes(q) || d.traits.some(t => t.includes(q))
    ) : talismanData;

    if (!data.length) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🪄</div><div class="empty-state-text">没有找到匹配的符咒</div></div>`;
        return;
    }

    container.innerHTML = data.map(d => `
        <div class="card" style="margin-bottom:16px;">
            <div class="card-header">
                <span class="card-title">${d.icon} ${d.element}系符咒</span>
                <span class="tag tag-${d.color}">${d.role}</span>
            </div>
            <div class="card-body">
                <p>${d.desc}</p>
                <div class="mt-8">
                    <strong>特性：</strong>
                    ${d.traits.map(t => `<span class="tag tag-${d.color}" style="margin:2px;">${t}</span>`).join(' ')}
                </div>
                <div class="mt-8"><strong>✅ 协同：</strong>${d.synergy.map(s => `<p style="margin:0;font-size:12px;color:var(--text-muted);">• ${s}</p>`).join('')}</div>
                <div class="mt-8"><strong>⚠️ 弱点：</strong> <span style="color:var(--red-bright);">${d.weakTo}</span></div>
                <div class="mt-8"><strong>🌿 10级进化：</strong>${d.evolution}</div>
                <div class="mt-8">
                    <div class="synth-tree">
                        <span class="synth-node">3×同阶${d.element}符</span>
                        <span class="synth-arrow">→</span>
                        <span class="synth-node" style="border-color:var(--gold);color:var(--gold);">1×高阶${d.element}符</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderResource(container, q) {
    const data = q ? resourceData.filter(d =>
        d.name.includes(q) || d.usage.includes(q) || d.tips.includes(q)
    ) : resourceData;

    if (!data.length) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">💎</div><div class="empty-state-text">没有找到匹配的资源</div></div>`;
        return;
    }

    container.innerHTML = `<div class="card-grid">${data.map(d => `
        <div class="card">
            <div class="card-header">
                <span class="card-title">${d.icon} ${d.name}</span>
            </div>
            <div class="card-body">
                <p><strong>用途：</strong>${d.usage}</p>
                <p class="mt-8"><strong>获取：</strong>${d.obtain}</p>
            </div>
            <div class="card-footer">
                <span style="color:var(--gold);font-size:12px;">💡 ${d.tips}</span>
            </div>
        </div>
    `).join('')}</div>`;
}

// ── 策略宝典页 ──
function renderStrategy() {
    let html = `<h2 class="section-title">💡 策略宝典</h2>`;

    // Builds
    html += `<h3 class="section-title" style="font-size:18px;margin-top:20px;">🔥 流派推荐</h3>`;
    html += `<div class="card-grid">`;

    buildData.forEach(b => {
        html += `
        <div class="build-card">
            <div class="build-name">${b.icon} ${b.name}</div>
            <div class="build-type"><span class="tag tag-gold">${b.type}</span></div>
            <div class="card-body">${b.desc}</div>
            <div class="build-section"><h4>📿 天书配置</h4><div class="build-items">${b.tianshu.map(t => `<span class="tag tag-t2">${t}</span>`).join(' ')}</div></div>
            <div class="build-section"><h4>👻 鬼仆配置</h4><div class="build-items">${b.guipu.map(g => `<span class="tag tag-purple">${g}</span>`).join(' ')}</div></div>
            <div class="build-section"><h4>⚔️ 装备优先</h4><div class="build-items">${b.equipment.map(e => `<span class="tag tag-gold">${e}</span>`).join(' ')}</div></div>
            <div class="build-section"><h4>🪄 符咒配比</h4><p style="font-size:12px;color:var(--text-muted);">${b.talisman}</p></div>
            <div class="build-section"><h4>💡 操作要点</h4><ul style="font-size:12px;color:var(--text-secondary);padding-left:16px;">${b.tips.map(t => `<li>${t}</li>`).join('')}</ul></div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:6px;">🎯 ${b.suitable}</div>
        </div>`;
    });
    html += `</div>`;

    // 五帝钱优先级
    html += `<h3 class="section-title" style="font-size:18px;margin-top:28px;">💰 五帝钱选择优先级</h3>
    <div class="tier-list mt-16">`;
    wudiqianPriority.forEach(wp => {
        html += `
        <div class="tier-row">
            <div class="tier-label ${wp.tier.toLowerCase()}">${wp.tier}</div>
            <div class="tier-items">
                <span style="font-size:13px;font-weight:600;">${wp.items}</span>
            </div>
        </div>`;
    });
    html += `</div>`;

    // 商店指南
    html += `<h3 class="section-title" style="font-size:18px;margin-top:28px;">🛒 商店购买指南</h3>
    <table class="guide-table mt-16">
        <thead><tr><th>道具</th><th>建议</th></tr></thead>
        <tbody>`;
    shopGuide.forEach(sg => {
        let cls = sg.category === 'buy' ? 'col-buy' : sg.category === 'maybe' ? 'col-maybe' : 'col-skip';
        let label = sg.category === 'buy' ? '✅ 必买' : sg.category === 'maybe' ? '⚡ 可买' : '❌ 不买';
        html += `<tr><td>${sg.icon} ${sg.item}${sg.note ? ` <span style="font-size:10px;color:var(--text-muted);">${sg.note}</span>` : ''}</td><td class="${cls}">${label}</td></tr>`;
    });
    html += `</tbody></table>`;

    // 养成路线
    html += `<h3 class="section-title" style="font-size:18px;margin-top:28px;">🛤️ 养成路线图</h3>
    <div class="roadmap mt-16">`;
    roadmapData.forEach(r => {
        html += `
        <div class="roadmap-step">
            <div class="roadmap-phase">${r.phase}</div>
            <div class="roadmap-title">${r.title}</div>
            <div class="roadmap-desc">${r.desc}</div>
        </div>`;
    });
    html += `</div>`;

    return `<div class="page-section">${html}</div>`;
}

// ── Modal 操作 ──
function showModal(content) {
    const overlay = document.getElementById('modalOverlay');
    const container = document.getElementById('modalContent');
    if (!overlay || !container) return;
    container.innerHTML = content;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    if (!overlay) return;
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

// ── 全局搜索 ──
function performGlobalSearch(query) {
    const resultsDiv = document.getElementById('searchResults');
    if (!resultsDiv) return;

    if (!query || query.length < 1) {
        resultsDiv.style.display = 'none';
        return;
    }

    const q = query.toLowerCase();
    const results = allSearchables.filter(item => {
        const searchStr = [item.name, item.desc, item.effect, item.element, item.tier,
            ...(item.tags || []), ...(item.tianshu || []), ...(item.guipu || [])].join(' ').toLowerCase();
        return searchStr.includes(q);
    }).slice(0, 12);

    if (!results.length) {
        resultsDiv.innerHTML = `<div class="search-result-item"><span style="color:var(--text-muted);">未找到相关内容</span></div>`;
        resultsDiv.style.display = 'block';
        return;
    }

    resultsDiv.innerHTML = results.map(r => `
        <div class="search-result-item" onclick="navigateToSearchResult('${r._type}', '${r.id || ''}', '${r.element || ''}')">
            <span class="search-result-icon">${r._icon || '📄'}</span>
            <div>
                <div class="search-result-title">${highlightMatch(r.name, q)}</div>
                <div class="search-result-sub">${r.desc ? r.desc.substring(0, 40) + '...' : ''}</div>
            </div>
            <span class="search-result-tag tag tag-gold">${r._typeLabel}</span>
        </div>
    `).join('');
    resultsDiv.style.display = 'block';
}

function highlightMatch(text, query) {
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return text.substring(0, idx) + '<strong style="color:var(--gold);">' + text.substring(idx, idx + query.length) + '</strong>' + text.substring(idx + query.length);
}

function navigateToSearchResult(type, id, element) {
    // Close search
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('globalSearch').value = '';

    switch (type) {
        case 'tianshu':
            switchTab('compendium');
            setTimeout(() => { switchCompendiumTab('tianshu'); document.getElementById('compFilter').value = id; filterCompendium(); }, 100);
            break;
        case 'guipu':
            switchTab('compendium');
            setTimeout(() => { switchCompendiumTab('guipu'); }, 100);
            break;
        case 'equipment':
            switchTab('compendium');
            setTimeout(() => { switchCompendiumTab('equipment'); }, 100);
            break;
        case 'level':
            switchTab('levels');
            if (id) setTimeout(() => showLevelDetail(parseInt(id)), 200);
            break;
        case 'build':
            switchTab('strategy');
            break;
        case 'resource':
            switchTab('compendium');
            setTimeout(() => { switchCompendiumTab('resource'); }, 100);
            break;
        case 'special':
            switchTab('levels');
            break;
        default:
            switchTab('compendium');
    }
}
