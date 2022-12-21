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
        I'm a computer engineer with a passion for web development and design. 
        With expertise in languages such as HTML, CSS, JavaScript, and Python, as well as modern frameworks like React.js, Angular, and TypeScript, I have the skills and knowledge to bring your ideas to life. 
        In addition to my technical skills, I also have a strong eye for aesthetics and usability, and am proficient in design tools such as Figma, Adobe XD, and Photoshop. As a freelance software developer, I am always looking for new challenges and opportunities to help bring value to my clients. 
        If you have any questions or projects in mind, don't hesitate to reach out to me on my social media accounts.
        </p>

      </div>
    </div>
  )
}

export default About