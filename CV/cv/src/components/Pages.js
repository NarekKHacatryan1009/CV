import React from 'react'
import '../components/Pages.scss'
import {FaUser, FaUserCircle, FaBriefcase, FaUserGraduate, FaSms} from 'react-icons/fa'
import { FaPhone, FaReadme, FaEarthEurope } from "react-icons/fa6";

export default function Pages() {
  return (
    <div className='page'>
      <div className='all'>

        <div className='part1'>

            <div className='about_me'>

              <div className='for_photo'>
                  <div className='photo'></div>
              </div>

              <div className='name'>
                <h1>NAREK KHACHATRYAN</h1>
              </div>

              <div className='my_skills'>
                <p>UI DEVELOPER | MARKUP SPECIALIST</p>
              </div>
            </div>

            <div className='for_contact'>
              <div className='contact'>
                <div className='section1'>
                 <FaUser/>
                </div>

                <div className='section2'>
                  <h1>CONTACT</h1>
                </div>
              </div>
              
              <div className='phone'>
                <div className='section1'>
                  <FaPhone/>
                </div>

                <div className='section2'>
                  <div className='block1'>
                    <p>Phone</p>
                  </div>

                  <div className='block2'>
                    <h1>
                      (+374) 77 19 02 02
                    </h1>
                  </div>
                </div>
              </div>

              <div className='email'>
                <div className='section1'>
                  <FaSms/>
                </div>

                <div className='section2'>
                <div className='block1'>
                    <p>Email</p>
                  </div>

                  <div className='block2'>
                    <p>
                      narekhayk10@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='for_skills'>

              <div className='skills'>
                <div className='section1'>
                  <FaReadme/>
                </div>

                <div className='section2'>
                  <h1>SKILLS</h1>
                </div>
              </div>

              <div className='html'>
                <div className='block1'>
                  <p>HTML/CSS</p>
                </div>

                <div className='block2'>
                  <div className='for_rating'>
                    <div className='rating'></div>
                  </div>
                </div>
              </div>

              <div className='flex'>
                <div className='block1'>
                  <p>FlexBox</p>
                </div>

                <div className='block2'>
                  <div className='for_rating'>
                    <div className='rating'></div>
                  </div>
                </div>
              </div>

              <div className='sass'>
                <div className='block1'>
                  <p>SASS/LESS</p>
                </div>

                <div className='block2'>
                  <div className='for_rating'>
                    <div className='rating'></div>
                  </div>
                </div>
              </div>

              <div className='react'>
                <div className='block1'>
                  <p>React</p>
                </div>

                <div className='block2'>
                  <div className='for_rating'>
                    <div className='rating'></div>
                  </div>
                </div>
              </div>

              <div className='js'>
                 <div className='block1'>
                  <p>JavaScript</p>
                </div>

                <div className='block2'>
                  <div className='for_rating'>
                    <div className='rating'></div>
                  </div>
                </div>
              </div>

              <div className='photoshop'>
                <div className='block1'>
                  <p>Photoshop</p>
                </div>

                <div className='block2'>
                  <div className='for_rating'>
                    <div className='rating'></div>
                  </div>
                </div>
              </div>

              <div className='illustrator'>
                <div className='block1'>
                  <p>Illustrator</p>
                </div>

                <div className='block2'>
                  <div className='for_rating'>
                    <div className='rating'></div>
                  </div>
                </div>
              </div>

              <div className='figma'>
                <div className='block1'>
                  <p>Figma</p>
                </div>

                <div className='block2'>
                  <div className='for_rating'>
                    <div className='rating'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='for_languages'>

              <div className='languages'>

                <div className='section1'>
                  <FaEarthEurope/>
                </div>

                <div className='section2'>
                  <h1>LANGUAGES</h1>
                </div>

              </div>

              <div className='for_armenian'>

                <div className='block1'>
                  <div className='armenian'><p>Armenian</p></div>
                </div>

                <div className='block2'>
                  <div className='for_rating'>
                    <div className='rating'></div>
                  </div>
                </div>

              </div>

              <div className='for_english'>

                <div className='block1'>
                  <div className='english'><p>English</p></div>
                </div>

                <div className='block2'>
                  <div className='for_rating'>
                    <div className='rating'></div>
                  </div>
                </div>

              </div>

              <div className='for_russian'>

                <div className='block1'>
                  <div className='russian'><p>Russian</p></div>
                </div>

                <div className='block2'>
                  <div className='for_rating'>
                    <div className='rating'></div>
                  </div>
                </div>

              </div>
            </div>
        </div>

        <div className='part2'>
          <div className='for_dev'>
              <div className='dev'>
                <div className='for_blocks'>
                  <div className='block1'>
                    <FaUserCircle/>
                  </div>
              
                  <div className='block2'>
                    <h2>UI DEVELOPER | MARKUP SPECIALIST</h2>
                  </div>
                </div>

                <div className='for_p'>
                  <p>UI Developer with European College experiance. I am punctual, detail-oriented and organized professional. Always curious and eager to learn, as well as sociable and able to build healthy working relationships with both customers and team members. My goal is become a professional Front-End Developer.</p>
                </div>
              </div>
          </div>

          <div className='for_work'>
            <div className='work'>
              <div className='for_blocks'>
                <div className='block1'>
                  <FaBriefcase/>
                </div>

                <div className='block2'>
                  <h2>WORK EXPERIENCE</h2>
                </div>
              </div>

              <div className='for_date'>
                <div className='for__blocks'>
                  <div className='block1'>
                    <h4>Internship</h4>
                  </div>

                  <div className='block2'>
                    <h4>2023-Present</h4>
                  </div>
                </div>
              </div>

                <div className='for_block3'>
                  <div className='block3'>
                    <p>Code Li</p>
                  </div>
                </div>

                <div className='for_block4'>
                  <div className='block4'>
                    <h4>Freelancer</h4>
                  </div>

                  <div className='block5'>
                    <h4>2023-present</h4>
                  </div>
                </div>

                <div className='for_block6'>
                  <div className='block6'>
                    <p>Kaput.am</p>
                  </div>
                </div>
            </div>
          </div>

          <div className='for_certificate'>
            <div className='certificate'>
              <div className='for_blocks'>
                  <div className='block1'>
                    <FaUserGraduate/>
                  </div>

                  <div className='block2'>
                    <h2>EDUCATION & CERTIFICATIONS</h2>
                  </div>
                </div>

            <div className='for_date'>
                <div className='for__blocks'>
                  <div className='block1'>
                    <h4>React/JavaScript Development</h4>
                  </div>

                  <div className='block2'>
                    <h4>2023</h4>
                  </div>
                </div>
              </div>

                <div className='for_block3'>
                  <div className='block3'>
                    <p>Code Li School</p>
                  </div>
                </div>

                <div className='for__blocks'>
                  <div className='block4'>
                    <h4>Front-End Web Development</h4>
                  </div>

                  <div className='block5'>
                    <h4>2022</h4>
                  </div>
                </div>

                <div className='for_block6'>
                  <div className='block6'>
                    <p>Private Lessons</p>
                  </div>
                </div>

                <div className='for__blocks'>
                  <div className='block7'>
                    <h4>IT Programming</h4>
                  </div>

                  <div className='block8'>
                    <h4>2019-2023</h4>
                  </div>
                </div>

                <div className='for_block9'>
                  <div className='block9'>
                    <p>European Collage in Armenia</p>
                  </div>
                </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}