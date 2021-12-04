import React from 'react'
import share from '../../assets/images/share.svg'
import { TwitterIcon, 
         FacebookIcon, 
         WhatsappIcon,
         RedditIcon, 
         LinkedinIcon, 
         WhatsappShareButton,
         RedditShareButton,
         TwitterShareButton,
         LinkedinShareButton,
         FacebookShareButton } from 'react-share'

const ShareButton = ({link}) => {
    return (
           <div className="flex">
               <div className="mx-1 text-xs self-center futuraMedium" > Share it on </div>
                <FacebookShareButton className="ml-1"  url={link} >
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

               <WhatsappShareButton  className="ml-1" url={link}>
                <WhatsappIcon size={32} round={true} />
               </WhatsappShareButton>

               <RedditShareButton  className="ml-1" url={link}>
                 <RedditIcon size={32} round={true} />
               </RedditShareButton>

                <TwitterShareButton className="ml-1"  url={link}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>

                <LinkedinShareButton className="ml-1"  url={link}>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
           </div>
    )
}

export default ShareButton
