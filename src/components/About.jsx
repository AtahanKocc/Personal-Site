import React from 'react'

const About = () => {
  return (
    <div name="about" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        Hi, I'm Atahan. I'm a computer engineer. 
        I am interested in the fields of web development and web design. 
        I am currently working as a Freelance Software Developer. 
        Besides my passion for software, I am interested in screenwriting, taking photos and playing video games.  
        If you have any questions about frontend and design, you can contact me on my social media accounts.
        </p>

      </div>
    </div>
  )
}

export default About