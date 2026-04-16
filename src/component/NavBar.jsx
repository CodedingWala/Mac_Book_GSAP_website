import React from 'react'
import { NavLinks } from '../constants'

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src='/logo.svg' alt='apple logo' />
                <ul>
                    {NavLinks.map(({label})=>(
                        <a href={label}>{label}</a> 
                    ))}
                </ul>

                <div className='flex-center gap-3'>
                    <button>
                        <img src="/search.svg" alt="search icon" />
                    </button>
                    <button>
                        <img src="/ cart.svg" alt="cart icon" />
                    </button>
                </div>

            </nav>
        </header>
    )
}

export default NavBar