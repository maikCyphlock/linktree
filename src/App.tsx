import Navbar from './components/Navbar'
import User from './components/User'
import SocialLink from './components/SocialLink'
const Links = [
  {
    urlSocial: 'https://www.linkedin.com/in/maikol-aguilar/', urlImage: 'https://media.licdn.com/dms/image/D5603AQEf7cil53iJRQ/profile-displayphoto-shrink_200_200/0/1670284991972?e=1677110400&v=beta&t=mbpS5fcIam_G88pC4T3Gp-9ZElL_o3qCD33DQ8jhxQw', subheading: 'Maikol Aguilar | Linkedin'
  },
  {
    urlSocial: 'https://www.instagram.com/__maikol_aguilar__/', urlImage: 'https://media.licdn.com/dms/image/D5603AQEf7cil53iJRQ/profile-displayphoto-shrink_200_200/0/1670284991972?e=1677110400&v=beta&t=mbpS5fcIam_G88pC4T3Gp-9ZElL_o3qCD33DQ8jhxQw', subheading: 'Maikol Aguilar | instagram'
  },
  {
    urlSocial: 'https://github.com/maikCyphlock', urlImage: 'https://avatars.githubusercontent.com/u/66704744?v=4', subheading: 'Maikol Aguilar | github'
  },
  {
    urlSocial: 'https://www.facebook.com/profile.php?id=100009187002467', urlImage: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/117353299_2632865200363021_6568939865008678567_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ClgSfyQa1RYAX_vsKY5&_nc_oc=AQnvRlRzjQ5cgCCyzqC6zGv0py3onMpVP78_2nLc3sX756xOI5C6yuLU4evmXpsP4Q8&_nc_ht=scontent-bog1-1.xx&oh=00_AfCMOIUGjTaWhulgY0nQrE2yGSRqLbDMV3Joei-bovIsxA&oe=63CA95A7', subheading: 'Maikol Aguilar | facebook'
  },

]


function App() {
  return (
    <div className='bg-gray-900 flex flex-col items-center min-h-screen gap-16 p-5 text-gray-50' >
      <Navbar title='hola' logo='linktree'  ></Navbar>
      <User user='Maikol aguilar' url='https://avatars.githubusercontent.com/u/66704744?s=400&u=515accd6c95d54980088b3980f09f858f33ad0ed&v=4' subheading='per aspera ad astra'></User>

      <div className='flex flex-col gap-4'>
        {
          Links.map(({ urlSocial, subheading, urlImage }) => (
            <SocialLink urlSocial={urlSocial} subheading={subheading} urlImage={urlImage}></SocialLink>
          ))
        }
      </div>
    </div>
  )
}

export default App