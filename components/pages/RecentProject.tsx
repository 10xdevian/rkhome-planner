"use client"
import React from 'react'

const RecentProject = () => {
  return (
    <div>
        <h1 className='text-5xl font-bold text-center mt-20 mb-10'>Recent Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 mb-20'>
            <div className='border rounded-lg overflow-hidden shadow-lg'>
                <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='Project 1' className='w-full h-48 object-cover'/>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-2'>Modern Living Room</h2>
                    <p className='text-gray-600'>A sleek and contemporary living room design with minimalist furniture and neutral tones.</p>
                </div>
            </div>
            <div className='border rounded-lg overflow-hidden shadow-lg'>
                <img src='https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='Project 2' className='w-full h-48 object-cover'/>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-2'>Cozy Bedroom</h2>
                    <p className='text-gray-600'>A warm and inviting bedroom design with soft lighting and plush bedding.</p>
                </div>
            </div>
            <div className='border rounded-lg overflow-hidden shadow-lg'>
                <img src='https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='Project 3' className='w-full h-48 object-cover'/>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-2'>Outdoor Patio</h2>
                    <p className='text-gray-600'>A stylish outdoor patio design with comfortable seating and ambient lighting for evening gatherings.</p>
                </div>
            </div>
            <div className='border rounded-lg overflow-hidden shadow-lg'>
                <img src='https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='Project 4' className='w-full h-48 object-cover'/>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-2'>Elegant Dining Room</h2>
                    <p className='text-gray-600'>A luxurious dining room design with intricate details and elegant furnishings.</p>
                </div>
            </div>
            <div className='border rounded-lg overflow-hidden shadow-lg'>
                <img src='https://images.unsplash.com/photo-1501183638714-8c2bfb0d6d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='Project 5' className='w-full h-48 object-cover'/>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-2'>Contemporary Kitchen</h2>
                    <p className='text-gray-600'>A modern kitchen design with sleek cabinetry, state-of-the-art appliances, and a functional layout.</p>
                </div>
            </div>
            <div className='border rounded-lg overflow-hidden shadow-lg'>
                <img src='https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='Project 6' className='w-full h-48 object-cover'/>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-2'>Luxurious Bathroom</h2>
                    <p className='text-gray-600'>A spa-like bathroom design with modern fixtures, a freestanding tub, and elegant tile work.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentProject