import React from 'react'
import LucasPedrozo from "../../assets/lucas Motin.jpg"
export default function About() {
    return (
        <>
            <div className="max-w-[1220px] py-[60px] px-[10px] m-auto">
                <h1 className='text-[3rem] pb-2 font-bold text-center drop-shadow-[0_0_10px_rgba(255,255,255,8]'>
                    Who We Are</h1>
                <section className='flex gap-[50px]  flex-col ' >

                    <div className='bg-[rgba(0,0,0,0.2)] backdrop-blur-xl border-[1px] border-white shadow-[0px_2px_10px_rgba(0,0,0,0.6)]  rounded-[20px] p-[10px]
                    flex flex-col min-[600px]:flex-row gap-[20px] items-center
                    '>
                        <img src={LucasPedrozo}
                            className='w-full rounded-[20px] min-[600px]:w-[26%]'
                        />
                        <div>
                            <h2 className='text-[2rem] font-bold text-center min-[600px]:text-start  min-[600px]:pb-[20px]'>Lucas Pedrozo</h2>
                            <p className='text-[0.875rem]  text-center min-[600px]:text-start'
                            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat eius reprehenderit quod architecto praesentium non, officiis commodi, dicta recusandae vel minima quae deleniti tempore nisi impedit facere fugit nesciunt incidunt.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, consequatur reprehenderit. Nulla, ducimus, dolorem rerum aspernatur ex minima veritatis ipsa inventore aperiam sint modi excepturi totam et provident facere vitae!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias illo esse dolorem, iure modi fugiat dolore repudiandae, sit recusandae nostrum quasi illum ipsam, id odio perferendis odit est nemo.</p>
                        </div>
                    </div>

                    <div className='bg-[rgba(0,0,0,0.2)] backdrop-blur-xl border-[1px] border-white shadow-[0px_2px_10px_rgba(0,0,0,0.6)]  rounded-[20px] p-[10px]
                    flex flex-col min-[600px]:flex-row gap-[20px] items-center
                    '>
                        <img src={LucasPedrozo}
                            className='w-full rounded-[20px] min-[600px]:w-[26%]'
                        />
                        <div>
                            <h2 className='text-[2rem] font-bold text-center min-[600px]:text-start  min-[600px]:pb-[20px]'>Lucas Pedrozo</h2>
                            <p className='text-[0.875rem]  text-center min-[600px]:text-start'
                            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat eius reprehenderit quod architecto praesentium non, officiis commodi, dicta recusandae vel minima quae deleniti tempore nisi impedit facere fugit nesciunt incidunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum minus iste repudiandae, ut facilis obcaecati blanditiis delectus sit dolores voluptatum temporibus quasi qui repellat sapiente fugit magni distinctio reiciendis culpa.
                                Veniam doloremque a repellendus! Voluptatum ea labore enim vero exercitationem molestias vitae pariatur quibusdam aliquam totam possimus repellendus sequi quod corrupti beatae autem non sit, facere necessitatibus laborum adipisci. Fugiat!</p>
                        </div>
                    </div>

                </section >
            </div >
        </>
    )
}

