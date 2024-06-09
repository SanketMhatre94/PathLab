import React from 'react'
import FeatureCards from './FeatureCards';
import CategoryLab from './CategoryLab';
import "./image.css"
import FeaturesSection from './FeaturesSection';
const Home = () => {
  return (
    <>   
    <div className="container mx-auto p-4 style">
      <div className=" h-[38rem] relative rounded-lg overflow-hidden shadow-lg card " >
        {/* <img 
          src = {icon} // Replace with the correct image URL
          alt="Lab Assistants"
          className="w-full h-auto object-cover "

        /> */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2" >
          <h1 className="text-4xl font-bold text-teal-50 ml-6 ">
          𝔼𝕩𝕡𝕖𝕣𝕥 𝔻𝕠𝕔𝕥𝕠𝕣𝕤 & 𝕃𝕒𝕓 𝔸𝕤𝕤𝕚𝕤𝕥𝕒𝕟𝕥𝕤
          </h1>
          <p className='text-xl text-teal-50'>"ℙ𝕒𝕥𝕙𝕠𝕝𝕠𝕘𝕪 𝕃𝕒𝕓 𝔽𝕚𝕟𝕕𝕖𝕣 𝕚𝕤 𝕪𝕠𝕦𝕣 𝕡𝕣𝕖𝕞𝕚𝕖𝕣 𝕣𝕖𝕤𝕠𝕦𝕣𝕔𝕖 𝕗𝕠𝕣 𝕝𝕠𝕔𝕒𝕥𝕚𝕟𝕘 𝕥𝕠𝕡-𝕢𝕦𝕒𝕝𝕚𝕥𝕪 𝕡𝕒𝕥𝕙𝕠𝕝𝕠𝕘𝕪 𝕝𝕒𝕓𝕤. <br />
        𝔽𝕣𝕠𝕞 𝕣𝕠𝕦𝕥𝕚𝕟𝕖 𝕓𝕝𝕠𝕠𝕕 𝕥𝕖𝕤𝕥𝕤 𝕥𝕠 𝕒𝕕𝕧𝕒𝕟𝕔𝕖𝕕 𝕕𝕚𝕒𝕘𝕟𝕠𝕤𝕥𝕚𝕔𝕤,<br /> 𝕠𝕦𝕣 𝕕𝕚𝕣𝕖𝕔𝕥𝕠𝕣𝕪 𝕒𝕟𝕕 𝕦𝕤𝕖𝕣 𝕣𝕖𝕧𝕚𝕖𝕨𝕤 𝕙𝕖𝕝𝕡 𝕪𝕠𝕦 𝕔𝕙𝕠𝕠𝕤𝕖 𝕥𝕙𝕖 𝕣𝕚𝕘𝕙𝕥 𝕝𝕒𝕓 𝕨𝕚𝕥𝕙 𝕔𝕠𝕟𝕗𝕚𝕕𝕖𝕟𝕔𝕖."</p>
        </div>
      </div>
     
    </div>
    <FeatureCards></FeatureCards>
    <CategoryLab></CategoryLab>
    <FeaturesSection></FeaturesSection>
    </>
  );
};

export default Home;