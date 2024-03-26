import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface HeroPops {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

export default function Hero(props: HeroPops) {
    return (
        <div className="relative h-screen">
            <div className="absolute -z-10 inset-0">
                <Image 
                fill 
                src={props.imgData} 
                alt={props.imgAlt}  
                style={{objectFit: 'cover'}}
                />
                <div className='absolute inset-0 bg-gradient-to-r from-slate-900'></div>
            </div>
            <div className='pt-48 flex justify-center items-center'>
                <h1 className='text-white text-6xl'>
                    {props.title}
                </h1>
            </div>
        </div>
    )
}