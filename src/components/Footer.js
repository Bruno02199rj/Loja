import { TiSocialFacebook} from 'react-icons/ti';
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {TiSocialLinkedin} from 'react-icons/ti'


const Footer = () =>{

    return (
<div className="h-72 w-full bg-black ">
  
<div className="h-48  w-full mt-12  inline-block">
<div className='h-12 w-full  flex justify-center  '>


<p className="text-white mb-12 ">Complete your style with awesome clothes from us.</p>
</div>
<div className="flex justify-center mt-12">

<div className="h-10 w-10 mr-2 bg-yellow-400 rounded-md"><TiSocialFacebook size={40}/></div>
<div className="h-10 w-10 mx-2 bg-yellow-400  rounded-md"><AiOutlineInstagram size={40}/></div>
<div className="h-10 w-10 mx-2 bg-yellow-400  rounded-md"><BsTwitter size={40}/></div>
<div className="h-10 w-10 mx-2 bg-yellow-400  rounded-md"><TiSocialLinkedin size={40}/></div>
</div>

</div>

</div>
  )
}

export default Footer