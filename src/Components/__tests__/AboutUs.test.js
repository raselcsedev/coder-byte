import {render,screen,cleanup} from '@testing-library/react'
// import { render } from 'react-dom'
import About from '../AboutUs/AboutUs'

afterEach(()=>{
    cleanup()
})

test('should render AboutUs component',()=>{
    render(<About></About>)

    const AboutUsElement = screen.getByTestId("aboutUs-1")

    expect(AboutUsElement).toBeInTheDocument()
    expect(AboutUsElement).toHaveTextContent("Welcome to coderAccess community")
    expect(AboutUsElement).toContainHTML('h1')
})