import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { LoadingComponent } from '../components';
import { useReducer, useRef } from 'react';

interface Props {
    children: any;
}
import stl from './movieLayout.module.scss';
export const MovieLayout = ({ children }: Props) => {
    const { isLoading, } = useSelector((state: RootState) => state.movies);
    const style = useRef(stl.layout);
    console.log(style.current);
    

    return (
        <>
            <div className={stl.layout}>
                {(isLoading) ? <LoadingComponent /> :
                    children
                }
            </div>
        </>
    );
};
