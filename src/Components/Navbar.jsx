import { UserIcon } from '@heroicons/react/24/solid'



export const Navbar = ()=>{
    return (
        <nav className="h-[33rem] rounded-md bg-gray-900 border-2 border-gray-700 flex flex-col gap-1">
            <ul className='h-12 bg-gray-700 flex gap-1 justify-end'>
                <li className='self-center text-lime-200 font-bold'>27/08/2024 05:12:p.m</li>
            </ul>
            <section className='flex gap-1'>
                <UserIcon className='basis-[40%]'/>
                <div className='flex flex-col gap-1'>
                    <p className='text-lime-200 text-lg font-medium'>
                        <span>kalet.svdev@gmail.com:~$</span>
                        <span className='text-gray-500 font-bold ml-2'>neofetch</span>
                    </p>
                    <h2 className='text-4xl font-bold text-blue-500'>Kalet Adonay Chavez Alas</h2>
                    <p className='flex gap-1 font-black'>
                        <span className='text-lime-200'>Estudios: </span>
                        <span className='text-blue-500'>Tecnico en Ingeniera de software</span>
                    </p>
                    <p className='flex gap-1 font-black'>
                        <span className='text-lime-200'>Disco: </span>
                        <span className='text-blue-500'>Tecnico en Ingeniera de software</span>
                    </p>
                    <p className='flex gap-1 font-black'>
                        <span className='text-lime-200'>Distro: </span>
                        <span className='text-blue-500'>Tecnico en Ingeniera de software</span>
                    </p>
                    <p className='flex gap-1 font-black'>
                        <span className='text-lime-200'>Ram: </span>
                        <span className='text-blue-500'>Tecnico en Ingeniera de software</span>
                    </p>
                </div>
            </section>
        </nav>
    )
}