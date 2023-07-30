import Navbar from '../Navbar';
import {render} from '@testing-library/react'

import {Provider } from 'react-redux'
import store from '../../utils/store'

test('Logo to Load on the render of the Navbar',()=>{
    const navbar = render(
        <Provider store ={store}>
            <Navbar/>
        </Provider>
    )
    console.log(navbar)
})