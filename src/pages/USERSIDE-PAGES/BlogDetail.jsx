import { articleImg1, articleImg3, blogBg } from "../../assets/media";
import { socialIcons } from "../../constant";
import TouriestReviews from "../../sections/TouriestReviews";
import WriteComment from "../../sections/WriteComment";

function BlogDetail() {
  return (
    <div className="main-container">
      <div
        className="h-screen w-full bg-no-repeat bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${blogBg})` }}
      >
        <div className="absolute inset-0 items-center  gap-10 column max-md:inset-28 max-width ">
          <div className="text-center text-white mt-28  ">
            <h1 className="text-7xl font-semibold max-xl:text-5xl max-sm:text-4xl px-5 ">
              Into the Wild: An Unforgettable Safari Journey
            </h1>
            <p className="mt-8 text-md ">
              From creepy coach rides with comedic theatrics to somber strolls
              through tragic neighborhoods.
            </p>
          </div>
        </div>
      </div>
      <div className="px-40 py-10 space-y-5 max-lg:px-10 max-sm:text-center max-sm:px-5 max-lg:text-sm ">
        <h2 className="text-[#08083c] text-4xl font-semibold">
          The Brazen Head
        </h2>
        <p className="text-lg text-slate-800">
        Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam
          phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus
          gravida quis blandit. Arcu cursus vitae congue mauris. Nunc mattis
          enim ut tellus elementum sagittis vitae et leo. Semper risus in
          hendrerit gravida rutrum quisque non. At urna condimentum mattis
          pellentesque id nibh tortor. A erat nam at lectus urna duis convallis
          convallis tellus. Sit amet mauris commodo quis imperdiet massa. Vitae
          congue eu consequat ac felis.
        </p>
        <ul className="text-lg text-slate-800 space-y-3">
          <li className=" list-disc ml-4 ">
            Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
          </li>
          <li className="list-disc ml-4">
            At urna condimentum mattis pellentesque id nibh. Laoreet non
            curabitur
          </li>
          <li className="list-disc ml-4">
            Magna etiam tempor orci eu lobortis elementum.
          </li>
          <li className="list-disc ml-4">
            Bibendum est ultricies integer quis. Semper eget duis at tellus.
          </li>
        </ul>
        <div className="w-full bg-[#eaded8] p-8 text-center text-xl text-slate-800 rounded-xl ">
          <p className="text-lg text-slate-800">
            “Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
            Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet
            purus gravida quis blandit. Arcu cursus vitae congue mauris.“
          </p>
        </div>
        <p className="border-b border-slate-400 text-lg text-slate-800 pb-6 ">
          Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a,
          tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper
          lectus aliquet nullam tempus id. Dignissim convallis quam aliquam
          rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus
          pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh
          lobortis elementum mus velit tincidunt elementum. Ridiculus eu
          convallis eu mattis iaculis et, in dolor. Sem libero, tortor
          suspendisse et, purus euismod posuere sit. Risus dui ut viverra
          venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi.
          Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus
          rhoncus nec adipiscing tristique sed facilisis velit.
        </p>
        <p className="text-lg text-slate-800">
          Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus
          dictum sit euismod cum id. Dictum integer ultricies arcu fermentum
          fermentum sem consectetur. Consectetur eleifend aenean eu neque
          euismod amet parturient turpis vitae. Faucibus ipsum felis et duis
          fames.
        </p>
        <div className="flex justify-between items-center w-full gap-16 ">
          <div className="space-y-3 text-lg text-slate-800 w-1/2 ">
            <img src={articleImg1} alt="" className="w-full rounded-xl" />
            <p>Donec purus posuere nullam lacus aliquam.</p>
          </div>
          <div className="space-y-3 text-lg text-slate-800 w-1/2">
            <img src={articleImg3} alt="" className="w-full rounded-xl" />
            <p>Donec purus posuere nullam lacus aliquam.</p>
          </div>
        </div>
        <p className="text-lg text-slate-800">
          Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a,
          tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper
          lectus aliquet nullam tempus id. Dignissim convallis quam aliquam
          rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus
          pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh
          lobortis elementum mus velit tincidunt elementum. Ridiculus eu
          convallis eu mattis iaculis et, in dolor. Sem libero, tortor
          suspendisse et, purus euismod posuere sit. Risus dui ut viverra
          venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi.
          Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus
          rhoncus nec adipiscing tristique sed facilisis velit.
        </p>
        <p className="text-lg text-slate-800">
          Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus
          dictum sit euismod cum id. Dictum integer ultricies arcu fermentum
          fermentum sem consectetur. Consectetur eleifend aenean eu neque
          euismod amet parturient turpis vitae. Faucibus ipsum felis et duis
          fames.
        </p>
        <div className="flex items-center justify-between max-lg:flex-col-reverse max-lg:gap-4 ">
          <div className="flex items-center gap-5">
            <p className="text-[#08083c] text-xl">Follow Us:</p>
            <div className="gap-1 center ">
              {socialIcons.map((icons) => (
                <div
                  className=" h-8 w-8 hover:bg-[#EB662B] rounded-full center duration-200 cursor-pointer "
                  key={icons.id}
                >
                  <img src={icons.icon} alt="" className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <button className="border border-slate-500 bg-transparent rounded-full px-6 py-3 hover:bg-[#EB662B] cursor-pointer hover:border-[#EB662B] hover:text-white duration-200">
              Adventure
            </button>
            <button className="border border-slate-500 bg-transparent rounded-full px-6 py-3 hover:bg-[#EB662B] cursor-pointer hover:border-[#EB662B] hover:text-white duration-200">
              Nature
            </button>
            <button className="border border-slate-500 bg-transparent rounded-full px-6 py-3 hover:bg-[#EB662B] cursor-pointer hover:border-[#EB662B] hover:text-white duration-200">
              Culture
            </button>
          </div>
        </div>
        <div>
          <TouriestReviews />
          <WriteComment />
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
