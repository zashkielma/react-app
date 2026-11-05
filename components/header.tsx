import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b bg-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        📚 Librería
      </Link>
      <nav className="flex gap-4 text-sm font-medium">
        <Link href="/catalogo" className="hover:underline">Catálogo</Link>
        <Link href="/libros/1" className="hover:underline">Ver Libro </Link>
        <Link href="/asistente" className="hover:underline">Asistente</Link>
        <Link href="/admin/libros" className="hover:underline">Admin Libros</Link>
        <Link href="/admin/autores" className="hover:underline">Admin Autores</Link>
      </nav>
    </header>
  )
}