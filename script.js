const posts = [
  {
    date: '2026-04-07',
    title: '为什么做可验证算力市场',
    excerpt: '我希望把“算力交易”从信任驱动变成证据驱动，让每一次执行都可以被追溯和解释。',
    content:
      '今天重新定义了项目价值主线：不是卖算力，而是提供可验证的算力交付协议。\n\n申请奖学金时，我会重点展示：\n1) 为什么现有方案不够透明；\n2) 我的协议如何给出执行证据；\n3) 对 AI 团队的真实价值。',
  },
  {
    date: '2026-04-06',
    title: '双账户演示模型打通',
    excerpt: 'Order Account 与 Mining Account 的协作路径已可视化，支持下单、接单、结果回传。',
    content:
      '这一阶段重点是可演示性：让流程在前端可见、可解释、可录屏。\n\n关键能力：\n- 免费订单与付费订单都可走通；\n- 任务状态和结果回传可在 UI 追踪；\n- 启动脚本支持本地和 Docker。',
  },
  {
    date: '2026-04-05',
    title: '从“功能堆叠”到“项目叙事”',
    excerpt: '申请材料不是功能列表，而是问题-洞察-执行-证据的闭环叙事。',
    content:
      '我把项目介绍拆成四个层次：\n- Problem: 痛点有多大、谁在被影响。\n- Insight: 反常识判断是什么。\n- Build: 我做了什么可运行系统。\n- Proof: 哪些数据说明我不是在空想。\n\n这个博客就是为了持续积累这些证据。',
  },
]

const postsContainer = document.getElementById('posts')
const template = document.getElementById('post-template')
const dialog = document.getElementById('post-dialog')
const dialogTitle = document.getElementById('dialog-title')
const dialogDate = document.getElementById('dialog-date')
const dialogContent = document.getElementById('dialog-content')
const closeDialogBtn = document.getElementById('close-dialog')

posts.forEach((post) => {
  const node = template.content.cloneNode(true)
  node.querySelector('.meta').textContent = post.date
  node.querySelector('h3').textContent = post.title
  node.querySelector('.excerpt').textContent = post.excerpt
  node.querySelector('button').addEventListener('click', () => {
    dialogTitle.textContent = post.title
    dialogDate.textContent = post.date
    dialogContent.innerHTML = post.content
      .split('\n\n')
      .map((p) => `<p>${p}</p>`)
      .join('')
    dialog.showModal()
  })
  postsContainer.appendChild(node)
})

closeDialogBtn.addEventListener('click', () => dialog.close())
