import { Button } from '@mantine/core'
import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Employees</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <Button onClick={() => setIsAdding(true)} className='round-button'>Add Button</Button>
            </div>
        </header>
    )
}
export default Header