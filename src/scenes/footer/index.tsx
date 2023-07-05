import Logo from '@/assets/Logo.png'

type Props = {
}

const Footer = ({}: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={Logo} alt="Logo" />
          <p className='my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim corrupti adipisci alias ratione optio, dolorum nesciunt provident quam, excepturi ut itaque laboriosam perferendis nulla repudiandae explicabo possimus debitis praesentium!
          </p>
          <p>Todos os Direitos Reservados</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='mt-5'>Massa orci askdusahd</p>
          <p className='mt-5'>Massa orci askdusahd</p>
          <p className='mt-5'>Massa orci askdusahd</p>
          <p className='mt-5'>Massa orci askdusahd</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contato</h4>
          <p className='mt-5'>dolorum nesciunt provident quam</p>
          <p>(33)1234-5678</p>
        </div>
        
      </div>
      
    </footer>
  )
}

export default Footer