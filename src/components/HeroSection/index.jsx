import HeroCard from "./HeroCard";

function index() {
  return (
    <div className=" text-black">
      <div className="flex">
        <HeroCard  title={"Men's Fashion Collection"} img={"https://pitamber-ecommerce.netlify.app/static/media/menImg.0615ff7c719713657792.jpg"} color={"blue"}/>
        <HeroCard title={"Women's Fashion Collection"} img={"https://pitamber-ecommerce.netlify.app/static/media/img3.4e7eaedd88d400d20f82.jpg"} color={"yellow"}/>
        <HeroCard title={"Kid's wonder Fashion Collection"} img={"https://pitamber-ecommerce.netlify.app/static/media/img2.f7efd694c019b0daea91.jpg"} color={"pink"}/>
      </div>
    </div>
  );
}

export default index;