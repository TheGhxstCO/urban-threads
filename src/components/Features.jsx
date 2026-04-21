import './Features.css'

const products = [
  {
    name: 'Camiseta Basica Urban',
    description: 'Algodon 100% organico',
    price: '€29',
    icon: 'user',
  },
  {
    name: 'Jeans Slim Fit',
    description: 'Denim premium stretch',
    price: '€89',
    icon: 'pants',
  },
  {
    name: 'Sudadera Oversize',
    description: 'Algodon French Terry',
    price: '€65',
    icon: 'hoodie',
  },
  {
    name: 'Chaqueta Bomber',
    description: 'Nylon resistente al agua',
    price: '€120',
    icon: 'bag',
  },
  {
    name: 'Gorra Snapback',
    description: 'Bordado premium',
    price: '€35',
    icon: 'globe',
  },
  {
    name: 'Zapatillas Urban',
    description: 'Suela de goma antideslizante',
    price: '€95',
    icon: 'clock',
  },
]

function ProductIcon({ icon }) {
  if (icon === 'user') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="20" r="8" />
        <path d="M16 46c3-8 10-12 16-12s13 4 16 12" />
      </svg>
    )
  }

  if (icon === 'pants') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="16" y="16" width="14" height="32" rx="4" />
        <rect x="34" y="16" width="14" height="32" rx="4" />
      </svg>
    )
  }

  if (icon === 'hoodie') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 50V26l7-8h14l7 8v24" />
        <path d="M26 34c2-3 4-4 6-4s4 1 6 4" />
      </svg>
    )
  }

  if (icon === 'bag') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M20 24h24l-3 26H23l-3-26z" />
        <path d="M26 24v-6h12v6" />
      </svg>
    )
  }

  if (icon === 'globe') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="16" />
        <path d="M16 32h32M32 16v32M21 21c4 3 18 3 22 0M21 43c4-3 18-3 22 0" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="16" />
      <path d="M32 24v9l6 5" />
    </svg>
  )
}

function Features() {
  return (
    <section id="productos" className="features">
      <div className="products-shell">
        <h2 className="products-title">NUESTRA COLECCIÓN</h2>
        <p className="products-subtitle">Estilo urbano para cada ocasión</p>

        <div className="products-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <div className="product-image">
                <ProductIcon icon={product.icon} />
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-bottom">
                  <span>{product.price}</span>
                  <button type="button">ANADIR</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features