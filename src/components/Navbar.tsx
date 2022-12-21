

type Navbar = {
    title: string | undefined,
    logo: string | undefined,

}


function navbar({ title = 'hello world', logo }: Navbar) {
    return (
        <nav className='sticky top-0 z-50 flex items-center justify-around rounded-2xl gap-4 p-3 border-gray-200 border text-cyan-50 w-6/12 backdrop-blur-sm  bg-white/30'>
            <h3 className="text-grey-300">{logo}</h3>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <div>
                <img src="https://api.blog.production.linktr.ee/wp-content/uploads/2022/06/Avatar-Symbol-Canopy.png" className="rounded-full w-12" alt="" />
            </div>
        </nav>
    )
}

export default navbar