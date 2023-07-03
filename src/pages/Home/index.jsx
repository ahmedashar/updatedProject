import mainBackground from "../../assets/Main.png";
import Navbar from "../../components/Navbar";
import styles from "./home.module.css";
import twitterIcon from "../../assets/twitter.svg";
import discordIcon from "../../assets/2.svg";
import telegramIcon from "../../assets/3.svg";
import WalletBtn from "../../components/WalletBtn";
import ExploreBtn from "../../components/ExploreBtn";

const Home = () => {
  return (
    <div className={styles.home_wrapper}>
      <Navbar />
      {/* xxxxx */}

      <div className={`${styles.home_container} container`}>
        <div className="row mt-0 py-5 mt-lg-5">
          {/* max-992 */}
          <div className="col-7 ">
            <p className={styles.Rpara1 + " " + "normal_para"}>
              Accessible tokenized positions for everyone, earn yield, and give
              power to those who wouldn't normally have it. "Democratize DeFi".
            </p>
          </div>
          {/*  */}
          <div className="col-lg-10 col-md-12 col-sm-12  col-12">
            <p className={styles.main_para + " main_para"}>Welcome to</p>
            <p className={styles.main_para + " main_para " + styles.main_para2}>
              Empureal Exchange
            </p>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12 col-12 text-end">
            <img className={styles.social_icons} src={twitterIcon} alt="" />{" "}
            <br />
            <img
              className={styles.social_icons}
              src={discordIcon}
              alt=""
            />{" "}
            <br />
            <img
              className={styles.social_icons}
              src={telegramIcon}
              alt=""
            />{" "}
            <br />
          </div>
        </div>

        <div className={`${styles.hero_bottom_section} row`}>
          <div className={"col-lg-1 col-md-3 col-sm-3 col-3 "+ styles.para1_div}>
            <p style={{ color: "white" }} className={styles.para1}>
              Welcome &nbsp; &nbsp; .
            </p>
          </div>
          <div className={"col-lg-7 col-md-9 col-sm-9 col-9 " + styles.welcome_status }>
            <p className={styles.para1}>
              Empyreal Exchange (EmpEx) - Complex strategies <br /> made easy
              for everyone
            </p>
            
            <div className={styles.btn_div}>
              <div className={styles.wallet_btn +" "+ styles.btn_group} style={{ display: "inline-block" }}>
                {" "}
                <WalletBtn />{" "}
              </div>
              <div className={styles.explore_btn +" "+ styles.btn_group }  style={{ display: "inline-block" }} >
              {/* <div style={{ display: "inline-block" }}> */}
              <ExploreBtn />
              </div>
              {/* </div> */}
            </div>
            </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <p className={styles.para2 + " " + "normal_para"}>
              Accessible tokenized positions for everyone, earn yield, and give
              power to those who wouldn't normally have it. "Democratize DeFi".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


