import { render ,screen } from '@testing-library/react';
import ListItem from './ListItem';

const mockSetState = jest.fn()
describe('List Item',()=>{

    render(<ListItem item={{id:1, newTask:'' ,
        isDone:false}} todos={[]} setTodos={mockSetState}/>)

    test('list button',()=>{
        const testButton = screen.getAllByRole('button')
        expect(testButton).toHaveLength(2)
    })



})