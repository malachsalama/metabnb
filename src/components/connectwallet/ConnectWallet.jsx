import { FaAngleRight, FaTimes } from "react-icons/fa";
import "./connectwallet.css";
import metamask from "../../images/walletMetaMask.svg";
import walletconnect from "../../images/walletConnect.svg";

const ConnectWallet = ({ setOpen }) => {
    return (
        <div className="connect-wallet">
            <div className="header">
                <h3>Connect Wallet</h3>
                <FaTimes onClick={() => setOpen(false)}/>
            </div>
            <ul>
            <p>Choose your preferred wallet</p>
                <li>
                    <div className="title">
                        <img src={metamask} alt="metamask" width="30px"/>
                        <h4>Metamask</h4>
                    </div>
                    <FaAngleRight />
                </li>

                <li>
                    <div className="title">
                        <img src={walletconnect} alt="metamask" width="30px"/>
                        <h4>WalletConnect</h4>
                    </div>
                    <FaAngleRight />
                </li>
            </ul>
        </div>
    )
}

export default ConnectWallet;