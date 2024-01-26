import { Navbar } from '../components/Navbar';
import stl from './movieLayout.module.scss';

interface Props {
    children: any;
    title: string
}
export const MovieLayout = ({ children, title }: Props) => {
    console.log('en el layout');
    
    return (
        <>
            {/*<Navbar />*/}
            <div className='container'>
                {children}

            </div>
        </>
    );
};
