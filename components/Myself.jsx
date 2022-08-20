import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Myself() {
    return (
        <main className='flex w-full md:h-screen py-16 items-center'>
            <div className='max-w-[1280px] m-auto md:grid grid-cols-3 gap-8 items-center'>
                <section className='col-span-2'>
                    <h4>This is me</h4>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, tenetur.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis inventore nostrum tempora rerum, eaque, esse modi, sint magnam laudantium quos atque? Cum aperiam necessitatibus distinctio libero illum recusandae autem expedita!</p>
                    <Link href='https://www.linkedin.com/in/franco-dangelo/'><span>See my experience and formation in detail</span></Link>
                </section>
                <div className='w-full h-auto m-auto p-4 rounded-xl items-center justify-center shadow-blue-100 hover-scale-105 ease-in duration-500'>
                    <Image className='rounded-xl' src='/../public/assets/profilepic.jpg' alt="picture of Frano" layout='responsive' width={80} height={80} />
                </div>
            </div>
        </main>
    )
};