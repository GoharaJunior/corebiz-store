import { Header } from '../components/Header/Header';
import { Fullbanner } from '../components/Fullbanner/Fullbanner';

import '../assets/styles/container.scss';

export function Home() {
    return (
        <>
            <Header />
            <Fullbanner screen={window.innerWidth < 520 ? 'mobile' : 'desktop'} />
        </>
    )
}