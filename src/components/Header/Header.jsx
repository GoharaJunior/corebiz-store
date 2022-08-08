import './header.scss';

import Logo from '../../assets/img/corebiz-logo.svg';
import SearchIcon from '../../assets/img/search-icon.svg';
import MyAccountIcon from '../../assets/img/my-account-icon.svg';
import MiniCartIcon from '../../assets/img/minicart-icon.svg';

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <a href="https://www.corebiz.ag/pt/" className="logo" target={'_blank'}>
                    <img src={Logo} alt="Logo da empresa" />
                </a>
                <div className="search-form">
                    <input type="text" placeholder="O que está procurando?" />
                    <button>
                        <img src={SearchIcon} alt="Ícone de uma lupa" />
                    </button>
                </div>
                <nav>
                    <ul>
                        <li className="my-account">
                            <a href="#">
                                <img src={MyAccountIcon} alt="Ícone da sessão, minha conta" />
                                <span>Minha Conta</span>
                            </a>
                        </li>
                        <li className='minicart'>
                            <a href="#">
                                <img src={MiniCartIcon} alt="Ícone de um carrinho" />
                                <span className="amount">0</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}