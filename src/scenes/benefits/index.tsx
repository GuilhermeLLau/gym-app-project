import { SelectedPage,BenefitType } from '@/shared/types'
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Benefit from './Benefit';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import ActionButton from '@/shared/ActionButton';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6'/>,
    title:"Localização e Equipamento",
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laboriosam magnam ipsa sunt explicabo itaque reprehenderit nostrum'
  },
  {
    icon: <UserGroupIcon className='h-6 w-6'/>,
    title:"Diversas Aulas Diferentes",
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laboriosam magnam ipsa sunt explicabo itaque reprehenderit nostrum'
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6'/>,
    title:"Profissionais Capacitados",
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laboriosam magnam ipsa sunt explicabo itaque reprehenderit nostrum'
  }
]

const container = {
  hidden:{},
  visible:{
    transition: {staggerChildren:0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
    id='beneficios'
    className='mx-auto min-h-full w-5/6 py-20'
    >
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div 
          className='md:my-5 md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.2,duration:0.5}}
          variants={{
            hidden: {opacity:0,x:-50},
            visible: {opacity:1,x:0},
            }}
        >
          <HText>MAIS DO QUE UMA ACADEMIA.</HText>
          <p className='my-5 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laboriosam magnam ipsa sunt explicabo itaque reprehenderit nostrum esse quos tempore quae cum veniam maxime, reiciendis iste eaque doloribus facilis error?
          </p>
        </motion.div>
        <motion.div 
        className='md:flex items-center justify-between gap-8 mt-5'
        initial='hidden'
        whileInView={'visible'}
        viewport={{once:true,amount:0.5}}
        variants={container}
        >
          {benefits.map((benefit: BenefitType)=>(
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
            {/* Graphics */}
        <div className='md:flex basis-3/5 mt-16 items-center justify-between gap-20 md:mt-28'>

          {/* Graphic */}
          <img 
          className='mx-auto'
          src={BenefitsPageGraphic} 
          alt="benefits image graphic" 
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div className='relative'> 
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstract-waves'>
                <motion.div 
                initial='hidden'
                whileInView='visible'
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                  hidden: {opacity: 0, x: 50},
                  visible: {opacity:1, x: 0},
                  }}
                >
                  <HText>MILHARES DE ALUNOS ATINGINDO SUAS{"  "}
                  <span className='text-primary-500'>METAS.</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Description */}
              <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{once:true, amount:0.5}}
              transition={{delay:0.2,duration:0.5}}
              variants={{
                hidden: {opacity: 0, x: 50},
                visible: {opacity:1,x:0},
                }}
              >
                <p className='my-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quia at dicta est modi ratione culpa id iusto voluptate necessitatibus impedit fugiat facilis dolor saepe sequi, incidunt animi? Ipsa, reprehenderit!
                </p>
                <p className='mb-5'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nemo, non accusamus deleniti ratione labore ab provident consequatur harum, unde nesciunt ex suscipit libero, repudiandae veniam eaque sequi officiis est!
                </p>
              </motion.div>
            {/* Button */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Cadastre-se
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section >
  )
}

export default Benefits