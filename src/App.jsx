import Random from "./components/Random";
import Tag from  "./components/Tag";
export default function App() {
  return (
  <div className="w-full h-screen flex-col background relative overflow-x-hidden">
      <h1 className="py-5 px-3 bg-white rounded-md text-center mt-[40px] ml-[25px] mr-[25px] text-4xl font-bold">Random Gifs</h1>
      <div className="flex w-full items-center gap-y-10 flex-col mt-[30px] border-black">
      <Random/>
      <Tag/>
      </div>
  </div>
  );
}
