const logs = [
  {
    date: '2026-04-07',
    title: '从“功能列表”到“证据叙事”重构',
    tag: '战略',
    excerpt: '项目叙事从功能堆砌转为“问题-架构-证据-里程碑”闭环，面向奖学金评审更清晰。',
    body: [
      '我将展示逻辑重构为四层：问题定义、机制设计、执行证据、下一步路线。',
      '这意味着每个版本迭代都必须留下可复盘、可验证、可传播的工程证据。',
    ],
  },
  {
    date: '2026-04-06',
    title: '双账户演示链路稳定可复现',
    tag: '工程',
    excerpt: 'Order Account 与 Mining Account 的完整路径已稳定：下单、接单、执行、回传、分账。',
    body: [
      '关键改进是把每一步状态显式化，并可视化展示关键金额字段。',
      '最终演示不再是“看运气跑通”，而是可脚本化复现，适合路演和评审。',
    ],
  },
  {
    date: '2026-04-05',
    title: '为什么可验证执行是算力市场护城河',
    tag: '理念',
    excerpt: '如果无法独立验证执行质量，市场规模越大，信任成本越高。',
    body: [
      '现有市场常把“速度/价格”作为核心，但忽略“可解释交付”。',
      'Hyperion 的核心主张是把可验证执行作为协议层原语，而不是附加功能。',
    ],
  },
  {
    date: '2026-04-04',
    title: '结算透明化从功能变成产品原则',
    tag: '产品',
    excerpt: '矿工实收、平台费、财库税不再隐藏在后端逻辑里，而是前端可见。',
    body: [
      '这让系统不仅“可用”，而且“可相信”。',
      '对评审方来说，透明的经济模型是判断项目成熟度的关键信号。',
    ],
  },
]

const archData = {
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

let activeFilter = '全部'

function openLog(item) {
  dialogMeta.textContent = `${item.date} · ${item.tag}`
  dialogTitle.textContent = item.title
  dialogContent.innerHTML = item.body.map((p) => `<p>${p}</p>`).join('')
  dialog.showModal()
}

function renderLogs() {
  const list = activeFilter === '全部' ? logs : logs.filter((i) => i.tag === activeFilter)
  logList.innerHTML = ''

  list.forEach((item) => {
    const node = template.content.cloneNode(true)
    node.querySelector('.log-meta').textContent = item.date
    node.querySelector('h4').textContent = item.title
    node.querySelector('.log-excerpt').textContent = item.excerpt
    node.querySelector('.log-tag').textContent = item.tag
    node.querySelector('button').addEventListener('click', () => openLog(item))
    logList.appendChild(node)
  })
}

function renderFilters() {
  const tags = ['全部', ...new Set(logs.map((i) => i.tag))]
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
  const data = archData[type]
  archPanel.innerHTML = `<h4>${data.title}</h4><p>${data.text}</p>`
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

renderFilters()
renderLogs()
renderArch()
bindArchTabs()
animateCounters()
bindReveal()
bindCursorLight()
