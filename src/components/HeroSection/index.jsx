import HeroCard from "./HeroCard";

function index() {
  return (
    <div className="absolute top-14 right-0 text-black w-[80%]">
      <div className="flex">
        <HeroCard  title={"Men's Fashion Collection"} img={"https://img.freepik.com/premium-photo/african-american-young-man-green-t-shirt-wearing-sunglasses-cap-white-wall_220507-15418.jpg"} color={"blue"}/>
        <HeroCard title={"Women's Fashion Collection"} img={"https://i.pinimg.com/736x/74/c4/37/74c437420e58409c84cd40b97feb000d.jpg"} color={"yellow"}/>
        <HeroCard title={"Kid's wonder Fashion Collection"} img={"https://www.fashionmate.in/wp-content/uploads/2016/11/Screen-Shot-2016-11-02-at-10.58.27-PM.png"} color={"pink"}/>
      </div>
    </div>
  );
}

export default index;
