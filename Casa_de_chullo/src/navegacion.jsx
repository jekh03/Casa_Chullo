import { useState, useRef, useEffect } from 'react'


const navItems = [
  { name: 'Inicio', href: '#' },
  { name: 'Galería', href: '#' },
  { name: 'Información', href: '#' },
]

function Encabezado() {
  const [activeItem, setActiveItem] = useState('Inicio')
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const navRef = useRef(null)

  useEffect(() => {
    const updateIndicator = () => {
      const navElement = navRef.current
      const activeElement = navElement.querySelector(`[data-active="true"]`)
      if (activeElement) {
        setIndicatorStyle({
          width: `${activeElement.offsetWidth}px`,
          transform: `translateX(${activeElement.offsetLeft}px)`,
        })
      }
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeItem])

  return (
    <nav className="bg-white shadow-md" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between h-16">
          <div className="flex">
            <div className="flex space-x-8" ref={navRef}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium ${
                    activeItem === item.name
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveItem(item.name)}
                  data-active={activeItem === item.name}
                  aria-current={activeItem === item.name ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 h-1 bg-indigo-500 transition-all duration-300 ease-in-out"
        style={indicatorStyle}
        aria-hidden="true"
      />
    </nav>
  )
}

export default Encabezado;