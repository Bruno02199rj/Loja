import { TiSocialFacebook} from 'react-icons/ti';
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {TiSocialLinkedin} from 'react-icons/ti'


const Footer = () =>{

    return (
<div className="h-72 w-screen bg-black ">
<div className="h-48 w-full mt-12 bg-black inline-block"><p className="text-white bold text-xl mt-8">FASHION</p>
<p className="text-white mt-8">Complete your style with awesome clothes from us.</p>
<div className="flex mt-12">

<div className="h-8 w-8 mr-2 bg-yellow-400 rounded-md"><TiSocialFacebook size={30}/></div>
<div className="h-8 w-8 mx-2 bg-yellow-400  rounded-md"><AiOutlineInstagram size={30}/></div>
<div className="h-8 w-8 mx-2 bg-yellow-400  rounded-md"><BsTwitter size={30}/></div>
<div className="h-8 w-8 mx-2 bg-yellow-400  rounded-md"><TiSocialLinkedin size={30}/></div>
</div>

</div>

</div>
  )
}

export default Footer