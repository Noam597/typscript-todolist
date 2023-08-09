import {useState} from 'react'
import { render ,screen,renderHook, act, fireEvent } from '@testing-library/react'
import InputTask from './Input'






const mockFunction = jest.fn();

describe.only('Input',()=>{

    test('input test correct',async()=>{
        render(<InputTask todo={''} setTodo={mockFunction}  addTask={mockFunction}/>)

        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeInTheDocument()
    })

        test('test button',()=>{
            render(<InputTask todo={''} setTodo={mockFunction}  addTask={mockFunction}/>)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })
    test('test placeholder',()=>{
        render(<InputTask todo={''} setTodo={mockFunction}  addTask={mockFunction}/>)
        const testPlaceHolder = screen.getByPlaceholderText('Add New Task..')
        fireEvent.change(testPlaceHolder,{target: {value:/test the list to see if it works/i}})
        expect(testPlaceHolder).toBeInTheDocument()
    })
})

