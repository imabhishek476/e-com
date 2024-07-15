import HeroCard from "./HeroCard";
import men from '../../assets/images/home/hero_men.png'
import women from '../../assets/images/home/hero_women.png'
import kid from '../../assets/images/home/hero_kid.png'

function index() {
  return (
    <div className=" text-black">
      <div className="flex flex-wrap lg:flex-nowrap mx-1">
        <HeroCard  title={"Men's Fashion Collection"} img={men} color={"bg-[#8DB8CB]"}/>
        <HeroCard title={"Women's Fashion Collection"} img={women} color={"bg-[#FEBD00]"}/>
        <HeroCard title={"Kid's wonder Fashion Collection"} img={kid} color={"bg-[#EB268F]"}/>
      </div>
    </div>
  );
}

export default index;