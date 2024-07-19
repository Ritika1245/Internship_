import Link from "next/link"
import Image from 'next/image'
const About=()=>{
    return (
        <>
             <div className="mt-15 " id="about">
                <h1 className="text-white text-4xl text-center font-bold mb-10">OUR TEAM</h1>
                </div>
                <div className="flex gap-20 flex-wrap justify-center my-10">
                
                <div className="image">
                <Image src="/ritika.jpg" alt="Sarthik Bangroo" width={250} height={200}/>
                    <div className="content">
                    <h3 className="text-2xl text-yellow-300 font-serif font-bold mb-5">Ritika Kher</h3>
                    <p className="text-md text-white ">Web Developer / UI UX </p>
                    <Link className="mt-10" href="https://www.linkedin.com/in/sarthik-bangroo-b877a4250/" target='_blank'>
                    <p className=" text-white ">Computer Engineering</p>
                    <p className="text-white mb-2 text-center">2025</p>
                    <div  className="flex justify-center"  style={{ cursor: 'pointer' }}>
                        <Image className='linkedinLogo' src="/linkedin.png" alt="linkedin" width={30} height={30}/>
                    </div>
                    </Link>
                    </div>
                </div>
                
                </div>
        </>
    )
}

export default About;