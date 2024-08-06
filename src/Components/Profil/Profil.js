import React from "react";
import imgProfil from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

function Profil() {
  return (
    <div className="ml-[55px] mt-[45px] ">
      <img className="w-[15%] rounded-[90px]  " src={imgProfil} alt="profil" />
      <div className="connect text-[white] mt-[40px] ">
        <h1>
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            I'm Aytaj Mursalzade
          </span>
          , frontend developer based in Azerbaijan
        </h1>
        <p>I am a frontend developer from Baku.</p>
        <div className="connect_part flex gap-[60px] items-center pt-[10px] ">
          <Link to="/connectwithme"><div className="profil_action p-[7px] rounded-[50px] pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 px-[25px] ">Connect with me</div></Link>
          <Link to="/myresume"><div className="profil_resume p-[7px] px-[20px] rounded-[50px] pointer border border-fuchsia-500 ">My resume</div></Link>
        </div>
      </div>
    </div>
  );
}

export default Profil;
