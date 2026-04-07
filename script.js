const i18n = {
  zh: {
    navVision: '理念',
    navFeatures: '功能',
    navVisuals: '图示',
    navStructure: '商业结构图',
    navArchitecture: '架构',
    navRoadmap: '路线图',
    navLogs: '研发日志',
    onePager: '60 秒速览',
    tagline: 'Scholarship-Ready Build Narrative',
    heroTitle: '让每一次算力交付，都有据可查、能被信任。',
    heroSubtitle:
      'Hyperion 关注可验证算力市场：订单、执行、结果与结算全链路可解释。这里不是功能堆砌，而是一条可以复现、可以说明白的产品成长路径。',
    heroCta1: '查看核心功能',
    heroCta2: '阅读研发日志',
    kpi1Label: '可复现演示链路',
    kpi1Desc: '提交订单 -> 接单执行 -> 结果回传 -> 结算可视化',
    kpi2Label: '核心能力模块',
    kpi2Desc: '覆盖订单、任务、审计、风控、分账、矿工行为等',
    kpi3Label: '启动方式',
    kpi3Desc: '本地一键启动与 Docker 部署双路径',
    visionTitle: '项目理念',
    visionDesc: '我们不想只做一个平台，而是把可验证交付做成算力交易的基础能力。',
    v1t: '1. 可验证优先',
    v1d: '交付结果需要可追溯、可审计、可复盘，执行证据本身就是产品资产。',
    v2t: '2. 工程可落地',
    v2d: '坚持用可运行 Demo 验证假设，用真实链路替代纸面想象。',
    v3t: '3. 经济可解释',
    v3d: '矿工收益、平台费用、财库分配透明可见，让长期机制信任可被感知。',
    featuresTitle: '功能全景',
    featuresDesc: '覆盖“下单、执行、验收、结算、治理”的完整产品闭环。',
    f1t: '订单与市场层',
    f1a: '动态定价与订单簿',
    f1b: '免费单/付费单双模式',
    f1c: '双账户角色协作演示',
    f2t: '执行与验收层',
    f2a: '任务状态实时追踪',
    f2b: '结果文件回传与下载',
    f2c: '协议判定与争议处理',
    f3t: '结算与治理层',
    f3a: '矿工收益/平台费/财库税可视化',
    f3b: '账户与 UTXO 追溯',
    f3c: '治理提案与投票接口',
    visualTitle: '科技感图示',
    visualDesc: '用流程图和能力图，把复杂机制讲得更直观，也更友好。',
    flowTitle: '任务执行流程图',
    flow1: '提交订单',
    flow2: '矿工接单',
    flow3: '执行计算',
    flow4: '结果与分账',
    radarTitle: '能力成熟度图',
    r1: '可验证执行',
    r2: '流程可复现',
    r3: '结算可解释',
    r4: '开发迭代速度',
    demoFlowTitle: '演示链路（可录制）',
    d1: 'Order Account 提交任务（可选免费单）',
    d2: 'Mining Account 接单并执行',
    d3: '任务输出自动回传并可下载',
    d4: '分账结果在界面即时展示',
    structureTitle: '商业化技术结构图',
    structureDesc: '从需求进入到交付可信，再到收入沉淀与治理反馈，这张图把业务闭环和技术闭环放在同一视角。',
    bs1Title: '1) 需求与交易入口',
    bs1a: '客户通过 Web / API / SDK 提交任务需求',
    bs1b: '订单簿与动态定价完成供需匹配',
    bs1c: '调度层按成本、信誉、可用性分发任务',
    bs2Title: '2) 可信交付引擎',
    bs2a: '矿工执行、结果回传、验收判定形成交付证据',
    bs2b: '争议仲裁、审计记录、安全策略降低履约风险',
    bs2c: '核心模块：pouw_executor / task_acceptance / arbitration / audit',
    bs3Title: '3) 收入沉淀与治理增长',
    bs3a: '收益分账明确矿工收入、平台费、财库税',
    bs3b: '治理参数反哺定价、风控和调度策略',
    bs3c: '核心模块：revenue_tracking / protocol_fee_pool / dao_treasury / governance',
    bl1: '需求进入',
    bl2: '可信执行',
    bl3: '透明结算',
    bl4: '治理优化',
    structureNote: '商业上，它对应获客-交付-复购；技术上，它对应调度-验证-结算-治理。',
    archTitle: '架构拆解',
    archDesc: '点击切换不同视角，查看系统的协议、运行时和经济模型设计。',
    tab1: '协议层',
    tab2: '运行时层',
    tab3: '经济层',
    roadTitle: '12 个月路线图',
    roadDesc: '从演示可复现，走向真实 workload 试点，再走向可计量验证。',
    q2: '<strong>Q2</strong>：强化稳定性、可观测性与 Demo 可录制性',
    q3: '<strong>Q3</strong>：接入执行证明与 SLA 自动评估',
    q4: '<strong>Q4</strong>：引入外部 workload，进行测试网试点',
    q1: '<strong>Q1</strong>：形成可计量商业验证与早期付费用户',
    logTitle: '研发日志',
    logDesc: '记录关键决策、踩坑复盘和每次迭代留下的证据。',
    footer: 'Hyperion Project Blog · Built for scholarship and investor-level technical review.',
    close: '关闭',
    readMore: '阅读全文',
    allFilter: '全部',
    logs: [
      {
        date: '2026-04-07',
        title: '从“功能列表”到“证据叙事”重构',
        tag: '战略',
        excerpt: '项目叙事从功能堆砌转为“问题-架构-证据-里程碑”闭环，面向奖学金评审更清晰。',
        body: ['我将展示逻辑重构为四层：问题定义、机制设计、执行证据、下一步路线。', '这意味着每个版本迭代都必须留下可复盘、可验证、可传播的工程证据。'],
      },
      {
        date: '2026-04-06',
        title: '双账户演示链路稳定可复现',
        tag: '工程',
        excerpt: 'Order Account 与 Mining Account 的完整路径已稳定：下单、接单、执行、回传、分账。',
        body: ['关键改进是把每一步状态显式化，并可视化展示关键金额字段。', '最终演示不再是“看运气跑通”，而是可脚本化复现，适合路演和评审。'],
      },
      {
        date: '2026-04-05',
        title: '为什么可验证执行是算力市场护城河',
        tag: '理念',
        excerpt: '如果无法独立验证执行质量，市场规模越大，信任成本越高。',
        body: ['现有市场常把“速度/价格”作为核心，但忽略“可解释交付”。', 'Hyperion 的核心主张是把可验证执行作为协议层原语，而不是附加功能。'],
      },
      {
        date: '2026-04-04',
        title: '结算透明化从功能变成产品原则',
        tag: '产品',
        excerpt: '矿工实收、平台费、财库税不再隐藏在后端逻辑里，而是前端可见。',
        body: ['这让系统不仅“可用”，而且“可相信”。', '对评审方来说，透明的经济模型是判断项目成熟度的关键信号。'],
      },
    ],
    archData: {
      protocol: {
        title: '协议层：把执行证据写进流程本身',
        text: '订单元数据、执行状态、结果哈希与争议判定形成统一协议语义。协议层的目标不是跑得更快，而是让每一笔算力交付都可追溯。',
      },
      runtime: {
        title: '运行时层：双角色协同 + 状态可观测',
        text: 'Order 侧和 Mining 侧在同一演示链路下协同运行。任务状态、执行阶段、结果回传和失败处理在 UI 中可见，便于复盘。',
      },
      economics: {
        title: '经济层：收益分配可解释',
        text: '平台费、矿工收益、财库税透明展示，支持后续治理参数化。经济层不是“结算补丁”，而是信任基础设施的一部分。',
      },
    },
  },
  en: {
    navVision: 'Vision',
    navFeatures: 'Features',
    navVisuals: 'Visuals',
    navStructure: 'Business Structure',
    navArchitecture: 'Architecture',
    navRoadmap: 'Roadmap',
    navLogs: 'Build Logs',
    onePager: '60s One Pager',
    tagline: 'Scholarship-Ready Build Narrative',
    heroTitle: 'Make every compute delivery verifiable and genuinely trustworthy.',
    heroSubtitle:
      'Hyperion focuses on a verifiable compute market with end-to-end explainability across orders, execution, results, and settlement. This is less a feature wall, more a clear and replayable build story.',
    heroCta1: 'Explore Core Features',
    heroCta2: 'Read Build Logs',
    kpi1Label: 'Reproducible Demo Pipeline',
    kpi1Desc: 'Submit order -> Accept -> Execute -> Return result -> Visual settlement',
    kpi2Label: 'Core Capability Modules',
    kpi2Desc: 'Covering orders, tasks, audit, risk control, settlement, and miner behavior',
    kpi3Label: 'Startup Modes',
    kpi3Desc: 'One-click local startup and Docker deployment',
    visionTitle: 'Project Vision',
    visionDesc: 'Not just another marketplace, but a foundation where verifiable delivery is built-in.',
    v1t: '1. Verification First',
    v1d: 'Delivery should be traceable, auditable, and replayable. Execution evidence is a core product asset.',
    v2t: '2. Engineering Grounded',
    v2d: 'Validate assumptions through running demos, not abstract slideware.',
    v3t: '3. Explainable Economics',
    v3d: 'Miner payout, platform fee, and treasury split stay transparent to build durable mechanism trust.',
    featuresTitle: 'Feature Landscape',
    featuresDesc: 'A full product loop across ordering, execution, acceptance, settlement, and governance.',
    f1t: 'Order & Market Layer',
    f1a: 'Dynamic pricing and orderbook',
    f1b: 'Free-order and paid-order modes',
    f1c: 'Dual-account role collaboration demo',
    f2t: 'Execution & Acceptance Layer',
    f2a: 'Real-time task status tracking',
    f2b: 'Result file return and download',
    f2c: 'Protocol verdict and dispute handling',
    f3t: 'Settlement & Governance Layer',
    f3a: 'Visualized miner payout/platform fee/treasury tax',
    f3b: 'Account and UTXO tracing',
    f3c: 'Governance proposal and voting APIs',
    visualTitle: 'Tech Visuals',
    visualDesc: 'Flow and capability graphics that explain complex behavior in a calmer way.',
    flowTitle: 'Task Execution Flow',
    flow1: 'Submit Order',
    flow2: 'Miner Accepts',
    flow3: 'Compute Runs',
    flow4: 'Result & Split',
    radarTitle: 'Capability Maturity',
    r1: 'Verifiable Execution',
    r2: 'Process Reproducibility',
    r3: 'Settlement Explainability',
    r4: 'Iteration Velocity',
    demoFlowTitle: 'Demo Chain (Recordable)',
    d1: 'Order account submits task (free-order optional)',
    d2: 'Mining account accepts and executes',
    d3: 'Outputs are returned and downloadable',
    d4: 'Settlement split is displayed instantly',
    structureTitle: 'Commercialized Technical Structure',
    structureDesc: 'From demand intake to trusted delivery, then to revenue capture and governance feedback, this view aligns business and technical loops.',
    bs1Title: '1) Demand & Market Entry',
    bs1a: 'Customers submit workloads through Web / API / SDK',
    bs1b: 'Orderbook and dynamic pricing match supply with demand',
    bs1c: 'Scheduling dispatches tasks by cost, reputation, and availability',
    bs2Title: '2) Trusted Delivery Engine',
    bs2a: 'Miner execution, result return, and acceptance verdicts create delivery evidence',
    bs2b: 'Arbitration, audit trails, and security policies reduce fulfillment risk',
    bs2c: 'Core modules: pouw_executor / task_acceptance / arbitration / audit',
    bs3Title: '3) Revenue Capture & Governance Growth',
    bs3a: 'Settlement clearly splits miner payout, platform fee, and treasury tax',
    bs3b: 'Governance parameters feed back into pricing, risk, and scheduling strategy',
    bs3c: 'Core modules: revenue_tracking / protocol_fee_pool / dao_treasury / governance',
    bl1: 'Demand Intake',
    bl2: 'Trusted Execution',
    bl3: 'Transparent Settlement',
    bl4: 'Governance Optimization',
    structureNote: 'Business-wise, it maps acquisition-delivery-retention. Technically, it maps scheduling-verification-settlement-governance.',
    archTitle: 'Architecture Breakdown',
    archDesc: 'Switch perspectives to inspect protocol, runtime, and economics.',
    tab1: 'Protocol Layer',
    tab2: 'Runtime Layer',
    tab3: 'Economics Layer',
    roadTitle: '12-Month Roadmap',
    roadDesc: 'From reproducible demo to real workload pilots and measurable validation.',
    q2: '<strong>Q2</strong>: Hardening reliability, observability, and demo recordability',
    q3: '<strong>Q3</strong>: Integrate execution attestation and SLA automation',
    q4: '<strong>Q4</strong>: Bring external workloads onto testnet pilots',
    q1: '<strong>Q1</strong>: Turn pilots into measurable commercial validation',
    logTitle: 'Build Logs',
    logDesc: 'Track major decisions, lessons from failures, and evidence from each iteration.',
    footer: 'Hyperion Project Blog · Built for scholarship and investor-level technical review.',
    close: 'Close',
    readMore: 'Read More',
    allFilter: 'All',
    logs: [
      {
        date: '2026-04-07',
        title: 'Reframing from Feature List to Evidence Narrative',
        tag: 'Strategy',
        excerpt: 'Presentation shifted into a problem-architecture-evidence-milestone loop for scholarship clarity.',
        body: ['I restructured the narrative into four layers: problem framing, mechanism design, execution evidence, and next milestones.', 'Each release now needs replayable and auditable engineering proof.'],
      },
      {
        date: '2026-04-06',
        title: 'Dual-Account Demo Flow Is Stable and Repeatable',
        tag: 'Engineering',
        excerpt: 'Order and mining accounts now run a stable, replayable flow: submit, accept, execute, return, settle.',
        body: ['The critical upgrade was explicit stage visibility and visualized payout fields.', 'The demo is now script-reproducible for roadshows and reviewers.'],
      },
      {
        date: '2026-04-05',
        title: 'Why Verifiable Execution Is the Moat',
        tag: 'Thesis',
        excerpt: 'Without independent execution verification, trust costs scale with market size.',
        body: ['Most markets optimize speed and price while neglecting explainable delivery.', 'Hyperion treats verification as a protocol primitive, not a plugin.'],
      },
      {
        date: '2026-04-04',
        title: 'Settlement Transparency Became a Product Principle',
        tag: 'Product',
        excerpt: 'Miner payout, platform fee, and treasury tax are now visible on the UI.',
        body: ['This makes the system not only usable, but also trustable.', 'Transparent economics is a key signal for reviewer confidence.'],
      },
    ],
    archData: {
      protocol: {
        title: 'Protocol Layer: Put Evidence Into the Workflow',
        text: 'Order metadata, execution states, result hashes, and dispute verdicts are unified in protocol semantics. The goal is not just speed, but traceability per delivery.',
      },
      runtime: {
        title: 'Runtime Layer: Dual Roles With Observable States',
        text: 'Order-side and mining-side collaborate in one demo pipeline. Task phases, result return, and failure handling are UI-visible for replay and review.',
      },
      economics: {
        title: 'Economics Layer: Explainable Value Distribution',
        text: 'Platform fee, miner payout, and treasury split are transparent and governable. Economics is treated as trust infrastructure, not an accounting afterthought.',
      },
    },
  },
}

const logList = document.getElementById('log-list')
const logFilters = document.getElementById('log-filters')
const template = document.getElementById('log-item-template')
const dialog = document.getElementById('log-dialog')
const dialogMeta = document.getElementById('dialog-meta')
const dialogTitle = document.getElementById('dialog-title')
const dialogContent = document.getElementById('dialog-content')
const dialogClose = document.getElementById('dialog-close')
const archPanel = document.getElementById('arch-panel')
const archTabs = document.getElementById('arch-tabs')
const cursorLight = document.getElementById('cursor-light')
const langZhBtn = document.getElementById('lang-zh')
const langEnBtn = document.getElementById('lang-en')

let currentLang = 'zh'
let activeFilter = i18n[currentLang].allFilter

function openLog(item) {
  dialogMeta.textContent = `${item.date} · ${item.tag}`
  dialogTitle.textContent = item.title
  dialogContent.innerHTML = item.body.map((p) => `<p>${p}</p>`).join('')
  dialog.showModal()
}

function renderLogs() {
  const data = i18n[currentLang]
  const list = activeFilter === data.allFilter ? data.logs : data.logs.filter((i) => i.tag === activeFilter)
  logList.innerHTML = ''

  list.forEach((item) => {
    const node = template.content.cloneNode(true)
    node.querySelector('.log-meta').textContent = item.date
    node.querySelector('h4').textContent = item.title
    node.querySelector('.log-excerpt').textContent = item.excerpt
    node.querySelector('.log-tag').textContent = item.tag
    node.querySelector('button').textContent = data.readMore
    node.querySelector('button').addEventListener('click', () => openLog(item))
    logList.appendChild(node)
  })
}

function renderFilters() {
  const data = i18n[currentLang]
  const tags = [data.allFilter, ...new Set(data.logs.map((i) => i.tag))]
  logFilters.innerHTML = ''

  tags.forEach((tag) => {
    const btn = document.createElement('button')
    btn.className = `log-filter ${tag === activeFilter ? 'active' : ''}`
    btn.textContent = tag
    btn.addEventListener('click', () => {
      activeFilter = tag
      renderFilters()
      renderLogs()
    })
    logFilters.appendChild(btn)
  })
}

function renderArch(type = 'protocol') {
  const data = i18n[currentLang].archData[type]
  archPanel.innerHTML = `<h4>${data.title}</h4><p>${data.text}</p>`
}

function applyI18n(lang) {
  currentLang = lang
  const data = i18n[lang]
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    if (!key || !(key in data)) return
    if (key.startsWith('q')) {
      el.innerHTML = data[key]
    } else {
      el.textContent = data[key]
    }
  })

  document.querySelectorAll('[data-i18n-svg]').forEach((el) => {
    const key = el.getAttribute('data-i18n-svg')
    if (!key || !(key in data)) return
    el.textContent = data[key]
  })

  langZhBtn.classList.toggle('active', lang === 'zh')
  langEnBtn.classList.toggle('active', lang === 'en')
  activeFilter = data.allFilter
  renderFilters()
  renderLogs()
  renderArch(document.querySelector('.arch-tab.active')?.dataset.arch || 'protocol')
}

function bindArchTabs() {
  archTabs.querySelectorAll('.arch-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      archTabs.querySelectorAll('.arch-tab').forEach((t) => t.classList.remove('active'))
      tab.classList.add('active')
      renderArch(tab.dataset.arch)
    })
  })
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-counter]')
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const target = Number(el.getAttribute('data-counter'))
        let value = 0
        const tick = () => {
          value += Math.max(1, Math.ceil((target - value) / 6))
          if (value >= target) {
            el.textContent = String(target)
            return
          }
          el.textContent = String(value)
          requestAnimationFrame(tick)
        }
        tick()
        io.unobserve(el)
      })
    },
    { threshold: 0.35 },
  )

  counters.forEach((el) => io.observe(el))
}

function bindReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in')
      })
    },
    { threshold: 0.14 },
  )

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
}

function bindCursorLight() {
  window.addEventListener('mousemove', (e) => {
    cursorLight.style.left = `${e.clientX}px`
    cursorLight.style.top = `${e.clientY}px`
  })
}

dialogClose.addEventListener('click', () => dialog.close())
langZhBtn.addEventListener('click', () => applyI18n('zh'))
langEnBtn.addEventListener('click', () => applyI18n('en'))

applyI18n('zh')
bindArchTabs()
animateCounters()
bindReveal()
bindCursorLight()
