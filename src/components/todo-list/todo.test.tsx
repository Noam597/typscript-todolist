import { render, screen,fireEvent} from '@testing-library/react'
import InputTask from '../input/Input'
import ListItem from '../listItem/ListItem'
import Todo from './Todo'

const mockFunction = jest.fn()


const addTaskTest = (tasks:string[])=>{
    const inputPlaceHolder = screen.getByPlaceholderText('Add New Task..')   
    const buttonElement = screen.getByRole('button',{
        name:/add task/i
    })
    tasks.forEach(task => {
        fireEvent.change(inputPlaceHolder,{target:{value:task}})
        fireEvent.click(buttonElement)
    });
    
}

describe('To Do Intgeration',()=>{
    test("add task",()=>{
        render(<Todo/>) 
    // const inputPlaceHolder = screen.getByPlaceholderText('Add New Task..')   
    // const buttonElement = screen.getByRole('button',{
    //     name:/add task/i
    // })
    // fireEvent.change(inputPlaceHolder,{target:{value:/my first task/i}})
    // fireEvent.click(buttonElement)
    addTaskTest(["my first task"])
    const listItemDiv = screen.getByText(/my first task/i)
    expect(listItemDiv).toBeInTheDocument()
})
test('test placeholder',()=>{
    render(<Todo/>)
    addTaskTest(["my first task"])
    const listItemDiv = screen.getAllByTestId(/task id/i)
    expect(listItemDiv.length).toBe(listItemDiv.length)
    
})
})