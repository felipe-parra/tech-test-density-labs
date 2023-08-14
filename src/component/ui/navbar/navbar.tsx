import { Link, useLocation } from "react-router-dom";

const Links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Counter',
    path: '/counter'
  },
  {
    name: 'Todos',
    path: '/todos'
  },
  {
    name: 'Pokemon',
    path: '/pokemon'
  },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isSelected = (path: string) => {
    return pathname === path ? 'text-sky-500' : 'text-slate-100'
  }
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-slate-100 text-sky-500">
      <div className="flex items-center flex-shrink-0  mr-6">
        <span className="font-semibold text-xl tracking-tight">Technical Test</span>
      </div>
      <div className="block sm:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-sky-500 border-sky-500 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <ul className="w-full justify-end sm:flex hidden">
        {
          Links.map((link, index) => (
            <li key={index}>
              <Link className={`${isSelected} mx-2`} to={link.path}>{link.name}</Link>
            </li>
          )
          )
        }
      </ul>
    </nav>

  )
}
