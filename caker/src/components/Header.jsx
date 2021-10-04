const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-mygrey p-6">
      <div className="flex items-center flex-shrink-0 text-mygold mr-6 w-1/3">
        <span className="ml-10 text-2xl font-medium tracking-tight">
          <a href="#">LE COIN DES GOURMANDISES</a>
        </span>
      </div>
      <div className="w-1/2 block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow px-5">
          <a
            href="#responsive-header"
            className="mt-4 inline-block text-mygold hover:text-mypurple mr-10"
          >
            ACCUEIL
          </a>
          <a
            href="#responsive-header"
            className="mt-4 inline-block text-mygold hover:text-mypurple mr-10"
          >
            PROFIL
          </a>
          <a
            href="#responsive-header"
            className="mt-4 inline-block text-mygold hover:text-mypurple mr-10"
          >
            TROUVER MON PATISSIER
          </a>
          <a
            href="#responsive-header"
            className="mt-4 inline-block text-mygold hover:text-mypurple"
          >
            VENDS TES PATISSERIES
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-xl mt-4 mr-10 inline-block text-black hover:text-mypurple"
          ></a>
        </div>
      </div>
    </nav>
  )
}

export default Header
