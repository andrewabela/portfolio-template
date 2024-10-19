import Intro from "./components/intro";
import CardView from "./components/cardView";


export default function Home() {
  return (
    <div className="h-full">
      <div className="hidden lg:flex">
        {desktop_view()}
      </div>
      <div className="flex lg:hidden">
        {mobile_view()}
      </div>
    </div>
  );
}

export const runtime = 'edge';

function desktop_view() {
  return (
    <div className="overflow-y-auto">
      <div className="flex go-fullscreen ">
        <div className=" align-intro">
            {/* vertical center Intro */}
            <div className="flex flex-col justify-center h-full pl-8">
            <Intro isDesktop={true} />
            </div>
        </div>
        <div className="  align-cards">
          <div className="  flex flex-col justify-center p-6 pl-0">
            <CardView isDesktop={true} />
          </div>
        </div>
      </div>
    </div>
  );
}


function mobile_view() {
  return (
    <div className="p-0">
      <div className="p-4 pb-6">
        <Intro isDesktop={false} />
      </div>
      <div className="w-full p-6">
        <CardView isDesktop={false} />
      </div>
    </div>
  );
}
