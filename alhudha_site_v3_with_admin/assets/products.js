// AL HUDHA — Product loader & renderer
// Loads products from data/products.json and renders them dynamically.
// You never have to touch HTML to add/edit products — just edit JSON or use /admin/

(async function () {
  const target = document.getElementById('products-container');
  if (!target) return;

  try {
    const res = await fetch('data/products.json?v=' + Date.now());
    if (!res.ok) throw new Error('Failed to load products.json');
    const data = await res.json();
    renderCategories(target, data.categories);
  } catch (err) {
    console.error('Could not load products:', err);
    target.innerHTML =
      '<div class="container" style="padding:60px 0;text-align:center;color:#7A8278;">' +
      '<p>Products are being updated. Please check back in a moment.</p></div>';
  }

  function renderCategories(container, categories) {
    container.innerHTML = '';
    categories.forEach(function (cat) {
      const section = document.createElement('div');
      section.id = 'cat-' + cat.id;
      section.className = 'product-section';
      section.innerHTML =
        '<div class="section-head left">' +
          '<span class="eyebrow">Collection</span>' +
          '<h2>' + escapeHtml(cat.name) + '</h2>' +
          '<p>' + escapeHtml(cat.subtitle || '') + '</p>' +
        '</div>' +
        '<div class="product-grid">' +
          cat.products.map(productCard).join('') +
        '</div>';
      container.appendChild(section);
    });
  }

  function productCard(p) {
    const discount = p.old_price && p.old_price > p.price
      ? Math.round(((p.old_price - p.price) / p.old_price) * 100)
      : 0;

    const badge = p.badge
      ? '<span class="product-badge ' + p.badge + '">' + badgeLabel(p.badge) + '</span>'
      : '';

    const img = p.image
      ? '<div class="product-img" style="background-image:url(\'' + escapeAttr(p.image) + '\');background-size:cover;background-position:center;"></div>'
      : '<div class="product-img" style="background:linear-gradient(135deg,#F5EBE0 0%,' + (p.color || '#D4AF37') + ' 100%);"></div>';

    const phone = '918098336237'; // WhatsApp click-to-chat
    const waMsg = encodeURIComponent("Hi, I'm interested in " + p.name);

    const priceRow =
      '<div class="price-row">' +
        '<span class="price">₹' + formatPrice(p.price) + '</span>' +
        (p.old_price ? '<span class="old-price">₹' + formatPrice(p.old_price) + '</span>' : '') +
        (discount > 0 ? '<span class="discount">' + discount + '% off</span>' : '') +
      '</div>';

    return (
      '<article class="product">' +
        badge +
        img +
        '<div class="product-body">' +
          '<h4>' + escapeHtml(p.name) + '</h4>' +
          '<p class="meta">' + escapeHtml(p.meta || '') + '</p>' +
          priceRow +
          '<a href="https://wa.me/' + phone + '?text=' + waMsg + '" target="_blank" class="btn-buy">Enquire on WhatsApp</a>' +
        '</div>' +
      '</article>'
    );
  }

  function badgeLabel(b) {
    return {
      sale: 'SALE',
      new: 'NEW',
      featured: '★ Featured',
      bestseller: 'Bestseller'
    }[b] || b.toUpperCase();
  }

  function formatPrice(n) {
    return Number(n).toLocaleString('en-IN');
  }

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, function (m) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
    });
  }
  function escapeAttr(s) { return escapeHtml(s).replace(/`/g, '&#96;'); }
})();
