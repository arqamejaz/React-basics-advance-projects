import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Github() {
    const data = useLoaderData()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/arqamejaz')
    //     .then(response => response.json())
    //     .then(data => {
    //         setFollowers(data.followers)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="" width="300" />
    </div>
    
  )
}

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/arqamejaz')
    return response.json()
}