import styles from "./btn.module.css"
import { RiArrowRightSLine } from "react-icons/ri";
const WalletBtn = ()=>{
    return  (
        <div className={styles.btn_container}>
            <button className={styles.Wallet_btn} >CONNECT WALLET
            </button>
            <button className={styles.child_btn}><RiArrowRightSLine/></button>
        </div>
        )
}

export default WalletBtn;