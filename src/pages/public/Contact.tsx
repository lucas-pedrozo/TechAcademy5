function Contact() {
  return (
    <section className="m-auto max-w-[630px] px-[10px] py-[6em]">
      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white p-[20px] w-full rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] animate-once animate-duration-600 animate-ease-out animate-fade-up">
        <h2
          className="text-[2.5rem] font-bold text-center pt-[10px] pb-[30px]"
          style={{ letterSpacing: "6px" }}
        >
          CONTACT
        </h2>
        <form
          action=""
          className="flex flex-col gap-[20px] animate-once animate-duration-600 animate-ease-out animate-fade-up"
        >
          <input
            type="email"
            id="email"
            title="email"
            placeholder="Email"
            className="w-full bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white py-[8px] px-[20px] rounded-[40px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] placeholder-white text-white font-medium animate-fade animate-once animate-duration-500 animate-delay-200 animate-normal placeholder:tracking-wide focus:outline-none focus:border-white"
          />

          <input
            type="name"
            id="name"
            title="name"
            placeholder="name"
            className="w-full bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white py-[8px] px-[20px] rounded-[40px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] placeholder-white text-white font-medium animate-fade animate-once animate-duration-500 animate-delay-250 animate-normal placeholder:tracking-wide focus:outline-none focus:border-white"
          />

          <textarea
            id="message"
            title="messagea"
            placeholder="Enter your message"
            className="w-full bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white py-[8px] px-[20px] rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] min-h-[280px] placeholder-white text-white font-medium animate-fade animate-once animate-duration-500 animate-delay-300 animate-normal placeholder:tracking-wide focus:outline-none focus:border-white"
          ></textarea>
          <div className="flex justify-end pt-[10px]">
            <button
              type="submit"
              className="bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_2px_8px_rgba(255,255,255,0.6)] transition duration-500 transform hover:scale-105 px-[20px] py-[8px] font-bold text-[1rem] rounded-[40px] cursor-pointer animate-fade animate-once animate-duration-500 animate-delay-450 animate-normal"
            >
              to send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
