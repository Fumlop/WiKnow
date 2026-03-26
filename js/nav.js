/**
 * WiKnow shared sidebar navigation.
 *
 * Usage: add <nav class="wiki-sidebar" id="wiki-nav"></nav> to your page,
 * then <script src="/js/nav.js"></script> before </body>.
 *
 * Per-page sub-items: set window.wikiSubNav before loading this script:
 *   <script>window.wikiSubNav = [
 *     { hash: '#buckets', label: 'The 4 Buckets' },
 *     { hash: '#diminishing', label: 'Diminishing Returns' }
 *   ];</script>
 */
(function () {
  var sections = [
    {
      title: 'PowerPlay',
      items: [
        { href: '/pcz-guide.html', label: 'PCZ Guide' }
      ]
    },
    {
      title: 'BGS',
      items: [
        { href: '/bgs/influence.html', label: 'Influence' },
        { href: '/bgs/economy-boost.html', label: 'Economy Boost' },
        { href: '/bgs/conflicts.html', label: 'Wars & Elections' },
        { href: '/bgs/expansion-retreat.html', label: 'Expansion & Retreat' },
        { href: '/bgs/states.html', label: 'States Reference' },
        { href: '/bgs/actions.html', label: 'Actions Reference' },
        { href: '/bgs/history-flc-vs-thki.html', label: 'FLC vs THKI' }
      ]
    },
    {
      title: 'Technical Help',
      items: []
    }
  ];

  var nav = document.getElementById('wiki-nav');
  if (!nav) return;

  // Detect current page path
  var path = window.location.pathname;
  // Normalize: remove trailing index.html
  if (path.endsWith('/index.html')) path = path.slice(0, -10);

  // Brand link
  var brand = document.createElement('a');
  brand.href = '/index.html';
  brand.className = 'sidebar-brand';
  brand.textContent = 'EDIntel Wiki';
  nav.appendChild(brand);

  // Build sections
  sections.forEach(function (sec) {
    var div = document.createElement('div');
    div.className = 'sidebar-section';

    var title = document.createElement('div');
    title.className = 'sidebar-section-title';
    title.textContent = sec.title;
    div.appendChild(title);

    var ul = document.createElement('ul');
    ul.className = 'sidebar-nav';

    sec.items.forEach(function (item) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;

      // Active detection
      var isActive = path === item.href ||
        (item.href !== '/' && path.endsWith(item.href));

      if (isActive) a.className = 'active';
      li.appendChild(a);

      // Sub-nav for active page
      if (isActive && window.wikiSubNav && window.wikiSubNav.length) {
        var sub = document.createElement('ul');
        sub.className = 'sub';
        window.wikiSubNav.forEach(function (s) {
          var sli = document.createElement('li');
          var sa = document.createElement('a');
          sa.href = s.hash;
          sa.textContent = s.label;
          sli.appendChild(sa);
          sub.appendChild(sli);
        });
        li.appendChild(sub);
      }

      ul.appendChild(li);
    });

    div.appendChild(ul);
    nav.appendChild(div);
  });
})();
