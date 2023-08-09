import { render ,screen } from '@testing-library/react'
import Header from './Header'


describe('Header',()=>{
    test('tests correctly',()=>{
    render(<Header/>)

        const textElement =  screen.getByText('TO-DO List')
            expect(textElement).toBeInTheDocument()

            const allHeaderElement = screen.getAllByRole('heading')
            expect(allHeaderElement).toHaveLength(2)

        const headerElement = screen.getByRole('heading',{
            name:'TO-DO List'
        })
        expect(headerElement).toBeInTheDocument()

    
})
})
