import React from 'react'
import { About } from './About/About'
import { Advantages } from './Advantages/Advantages'
import { Reviews } from './Reviews/Reviews'

export const MainContent = () => {
    return (
        <main>
            <About />
            <Advantages />
            <Reviews />
        </main>
    )
}
