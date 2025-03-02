import FilterSounds from "../../components/ui/FilterSounds";

function SoundList() {
  return (
    <>
      <main className="max-w-[1220px] px-[10px] py-[40px] m-auto overflow-hidden">
        <div className="Card bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white p-[15px] rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] h-[670px]  overflow-hidden custom-scrollbar">
          <div className="flex overflow-y-scroll">
            <FilterSounds></FilterSounds>

            <h1>Sound List</h1>
            <p>Here is a list of sounds.</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default SoundList;
