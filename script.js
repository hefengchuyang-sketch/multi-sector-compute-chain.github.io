const posts = [
  {
    date: '2026-04-07',
    title: 'From Demo Scripts to Repeatable Product Narrative',
    tag: 'Narrative',
    excerpt:
      'Reframed the project from a feature checklist into a scholarship-ready story: problem, architecture, evidence, milestones.',
    body: [
      'The biggest shift this week was communication design, not just code changes. I stopped presenting isolated features and started publishing a coherent execution trail.',
      'Current narrative sequence: pain point -> system design -> measurable delivery -> roadmap. This page is now structured as a public proof log.',
    ],
  },
  {
    date: '2026-04-06',
    title: 'Dual-Account Compute Flow Is Stable',
    tag: 'Milestone',
    excerpt:
      'Order account and miner account now complete an end-to-end cycle with visible state transitions and result retrieval.',
    body: [
      'Validated the full path: submit order, accept order, execute task, return result file, and display settlement details.',
      'Both local startup and Docker startup paths are documented, making demos reproducible for reviewers.',
    ],
  },
  {
    date: '2026-04-05',
    title: 'Why Verifiability Matters in Compute Markets',
    tag: 'Insight',
    excerpt:
      'A compute market cannot scale with trust assumptions alone. It needs protocol-level evidence that anyone can inspect.',
    body: [
      'Most current offerings optimize for throughput and pricing, but ignore independent verification of execution quality.',
      'Hyperion treats evidence as a first-class output, not an afterthought. That is the long-term differentiation thesis.',
    ],
  },
  {
    date: '2026-04-04',
    title: 'Settlement Visibility Became a Product Requirement',
    tag: 'Product',
    excerpt:
      'Fee split and payout fields are no longer hidden implementation details; they are now UI-visible trust signals.',
    body: [
      'Users now expect transparency in how value flows between miner payout, platform fee, and treasury allocation.',
      'By exposing these numbers in the workflow, the product became easier to explain and audit for non-technical stakeholders.',
    ],
  },
]

const featured = posts[0]

const featuredTitle = document.getElementById('featured-title')
const featuredExcerpt = document.getElementById('featured-excerpt')
const openFeaturedBtn = document.getElementById('open-featured')
const postList = document.getElementById('post-list')
const tagFilters = document.getElementById('tag-filters')
const archiveList = document.getElementById('archive-list')
const postTemplate = document.getElementById('post-item-template')

const dialog = document.getElementById('post-dialog')
const dialogMeta = document.getElementById('dialog-meta')
const dialogTitle = document.getElementById('dialog-title')
const dialogBody = document.getElementById('dialog-body')
const dialogClose = document.getElementById('dialog-close')

let activeTag = 'All'

function openPost(post) {
  dialogMeta.textContent = `${post.date} · ${post.tag}`
  dialogTitle.textContent = post.title
  dialogBody.innerHTML = post.body.map((paragraph) => `<p>${paragraph}</p>`).join('')
  dialog.showModal()
}

function renderPosts() {
  const visiblePosts = activeTag === 'All' ? posts : posts.filter((post) => post.tag === activeTag)
  postList.innerHTML = ''

  visiblePosts.forEach((post) => {
    const node = postTemplate.content.cloneNode(true)
    node.querySelector('.meta').textContent = post.date
    node.querySelector('h4').textContent = post.title
    node.querySelector('.post-excerpt').textContent = post.excerpt
    node.querySelector('.tag').textContent = post.tag
    node.querySelector('button').addEventListener('click', () => openPost(post))
    postList.appendChild(node)
  })
}

function renderTags() {
  const tags = ['All', ...new Set(posts.map((post) => post.tag))]
  tagFilters.innerHTML = ''

  tags.forEach((tag) => {
    const button = document.createElement('button')
    button.className = `tag-btn ${tag === activeTag ? 'active' : ''}`
    button.textContent = tag
    button.addEventListener('click', () => {
      activeTag = tag
      renderTags()
      renderPosts()
    })
    tagFilters.appendChild(button)
  })
}

function renderArchives() {
  const archiveMap = posts.reduce((acc, post) => {
    const month = post.date.slice(0, 7)
    acc[month] = (acc[month] || 0) + 1
    return acc
  }, {})

  archiveList.innerHTML = Object.entries(archiveMap)
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .map(([month, count]) => `<div class="archive-item"><span>${month}</span><span>${count}</span></div>`)
    .join('')
}

featuredTitle.textContent = featured.title
featuredExcerpt.textContent = featured.excerpt
openFeaturedBtn.addEventListener('click', () => openPost(featured))
dialogClose.addEventListener('click', () => dialog.close())

renderTags()
renderPosts()
renderArchives()
