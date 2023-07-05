import {SelectedPage} from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedbull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import { motion } from 'framer-motion';



type Props = {
  setSelectedPage: (value: SelectedPage) => void; 
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')

  return (
    <section
    id='inicio'
    className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
    >
      <motion.div 
        className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className='z-10 mt-32 md:basis-3/5'>
          <motion.div 
            className='md:-mt-20'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
              hidden: {opacity:0,x:-50},
              visible: {opacity:1,x:0},
            }}
          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <img src={HomePageText} alt="Home Page Text" />
              </div>
            </div>
            <p className='mt-8 text-sm'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ratione vitae fugiat, quae voluptates dolore at neque, dolor voluptate impedit, enim provident distinctio eaque animi laudantium ad? Et, voluptatibus vitae.
            </p>
          </motion.div>
          <motion.div 
          className='mt-8 flex items-center gap-8'
          initial='hidden'
          whileInView='visible'
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.2,duration:0.5}}
          variants={{
             hidden: {opacity:0,x:-50},
             visible: {opacity:1,x:0},
          }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Cadastre-se
              </ActionButton>
            <AnchorLink 
            className='text-sm font-bold text-primary-500 underline'
            onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
              <p>Saiba Mais</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className='flex basis-3/5 justify-center md:z-10
        md:ml-40 md:mt-16 md:justify-items-end
        '>
          <img src={HomePageGraphic} alt="Home Page Graphic" />
        </div>
      </motion.div>
      <div>
        {isAboveMediumScreens && 
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 items-center justify-between gap-8'>
              <img src={SponsorRedbull} alt="RedBull Sponsor" />
              <img src={SponsorForbes} alt="Forbes Sponsor" />
              <img src={SponsorFortune} alt="Fortune Sponsor" />
            </div>
          </div>
        </div>
        }
      </div>
    </section>
  )
}

export default Home