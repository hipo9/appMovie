import React from 'react'
import { ColorRing, RotatingLines, } from 'react-loader-spinner';
import stl from './loadingComponent.module.scss'

export const LoadingComponent = () => {
    return (
        <div className={stl.load}>
            <RotatingLines
                visible={true}
                strokeWidth="3.5"
                width='80'
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                strokeColor='#0ABED2'
            />
        </div>

    )
}



