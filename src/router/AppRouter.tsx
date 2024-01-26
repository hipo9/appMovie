import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'

import { DetailPage } from '../pages/DetailPage'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/home' element={<HomePage />}></Route>
            {/*<Route path='/*' element={<HomePage />}></Route>*/}
            <Route path="movie/:id" element={<DetailPage />} ></Route>
        </Routes>
    )
}
