import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/portfolioStyle.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
          <title>Portfolio</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
      </Head>
      <div className="bg-white p-12 m-24 rounded-xl shadow-xl">
          <div className="content">
                  <div className="profile">
                      <img src="/profile.jpg" alt="profile" className="center border-dashed border-2 border-gray-600 p-2 transform transition duration-300 hover:scale-105 hover:rotate-180"/>
                  </div>
                  <div className="my-10">
                      <div className="text-center text-3xl font-bold text-gray-600">
                          Pattawut Biakrathok (Benz) 
                      </div>
                          <p className="text-center text-xl text-gray-600">
                              I'm is Information Systems 4th year student with a focus on front-end programming, <br/> 
                              I'm hardworking, diligent, and dedicated all qualities I put forward in everything I do.
                          </p>
                  </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-md shadow-xl transform transition duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-white text-center text-red bg-gray-600 -mt-3 p-3 rounded-md">
                      <i className="fa-solid fa-user mr-2"></i>
                          Personal Skills
                      </div>
                          <p className="m-6 text-gray-600">
                              <i className="fa-sharp fa-solid fa-gauge-high  mr-2"></i>
                              Fast learner <br/>
                              <i className="fa-solid fa-paintbrush  mr-2"></i>
                              Creative spirit <br/>
                              <i className="fa-solid fa-people-group  mr-2"></i>
                              Team player <br/>
                              <i className="fa-solid fa-hourglass-start  mr-2"></i>
                              Time management <br/>
                          </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-xl transform transition duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-white text-center text-red bg-gray-600 -mt-3 p-3 rounded-md">
                      <i className="fa-solid fa-bolt-lightning  mr-2"></i>
                          Skills
                      </div>
                          <p className="m-6 text-gray-600">
                              HTML/CSS - Intermediate <br/> 
                              PHP - Intermediate <br/> 
                              Javascript - Beginner <br/> 
                              C# - Beginner <br/> 
                              Python - Beginner <br/> 
                              SQL - Intermediate <br/> 
                          </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-xl transform transition duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-white text-center text-red bg-gray-600 -mt-3 p-3 rounded-md">
                      <i className="fa-solid fa-address-card  mr-2"></i>
                          Contact
                      </div>
                          <p className="m-6 text-gray-600">
                              <i className="fa-solid fa-location-dot"></i>
                              99/1 Moo.6, Dankwian, Chokchai, Nakhonratchasima 30190
                          </p>
                          <p className="m-6 text-gray-600">
                              <i className="fa-solid fa-envelope"></i>
                              pattawut.ba@rmuti.ac.th
                          </p>
                          <p className="m-6 text-gray-600">
                              <i className="fa-solid fa-phone"></i>
                              081-879-1073
                          </p>
                          <p className="m-6 text-gray-600">
                              <i className="fa-brands fa-line"></i>
                              pattawut12
                          </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-xl transform transition duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-white text-center text-red bg-gray-600 -mt-3 p-3 rounded-md">
                      <i className="fa-solid fa-diagram-project  mr-2"></i>
                          Projects
                      </div>
                          <div className="text-xl font-bold text-gray-600 m-2">
                              <i className="fa-solid fa-star  mr-2"></i>
                              GetPass
                          </div>
                          <p className="text-gray-600 mb-6 mx-6">
                              Nov 2021 - Fab 2022 <br/>
                              - Online Course Website <br/>
                              - Using HTML, CSS, Javascript, Bootstrap, PHP, MySQL <br/>
                          </p>
                          <div div className="text-xl font-bold text-gray-600 m-2">
                              <i className="fa-solid fa-star  mr-2"></i>
                              NiceClean
                          </div>
                          <p className="text-gray-600 mb-6 mx-6">
                              July 2022 - October 2022 <br/>
                              - Online Find The Cleaner Website <br/>
                              - Using HTML, CSS, Javascript, TailwindCss, PHP, MySQL <br/>
                          </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-xl transform transition duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-white text-center text-red bg-gray-600 -mt-3 p-3 rounded-md">
                      <i className="fa-solid fa-graduation-cap  mr-2"></i>
                          Education
                      </div>
                          <p className="m-6 text-gray-600">
                              2013 - 2019 <br/>
                              Boonwattana School <br/>
                              Math-Science GPA: 2.85 <br/>
                          </p>
                          <p className="m-6 text-gray-600">
                              2019 - Present <br/>
                              Rajamangala University of Technology Isan <br/>
                              Information Systems GPA: 3.82 <br/>
                          </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-xl transform transition duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-white text-center text-red bg-gray-600 -mt-3 p-3 rounded-md">
                      <i className="fa-solid fa-certificate  mr-2"></i>
                          Certificate
                      </div>
                          <p className="m-6 text-gray-600">
                              ITPE : Information Technology Professional Examination Council 2020
                          </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-xl transform transition duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-white text-center text-red bg-gray-600 -mt-3 p-3 rounded-md">
                          <i className="fa-sharp fa-solid fa-clock  mr-2"></i>
                          Free Time
                      </div>
                          <p className="m-6 text-gray-600">
                              Watch some movie and play any games with friends
                          </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-xl transform transition duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-white text-center text-red bg-gray-600 -mt-3 p-3 rounded-md">
                      <i className="fa-solid fa-bookmark  mr-2"></i>
                          Favorite
                      </div>
                          <div div className="text-xl font-bold text-gray-600 m-2">
                              <i className="fa-solid fa-star  mr-2"></i>
                              Movies
                          </div>
                          <p className="text-gray-600 mb-6 mx-6">
                              Start Up <br/>
                              Game of Thrones <br/>
                              Forrest Gump <br/>
                          </p>
                          <div div className="text-xl font-bold text-gray-600 m-2">
                              <i className="fa-solid fa-star  mr-2"></i>
                              Songs
                          </div>
                          <p className="text-gray-600 mb-6 mx-6">
                              - Spring Day <br/>
                              - Last Christmas <br/>
                          </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
