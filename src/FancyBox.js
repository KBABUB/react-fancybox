import './FancyBox.css';
import { useEffect, useState } from "react";
import { clear } from '@testing-library/user-event/dist/clear';

function FancyBox({galleryImages, imgKey, imgHeight, imgWidth, interval}) {
    const [imageGallery, setImageGallery] = useState(galleryImages);
    const [imageKey, setImageKey] = useState(imgKey);
    const [imageWidth, setImageWidth] = useState(imgWidth);
    const [imageHeight, setImageHeight] = useState(imgHeight);
    const [isPlaying, setIsPlaying] = useState(false);
    const [animateImg, setAnimateImg] = useState(false);
    const [timeInterval, setTimeInterval] = useState(interval);
    const [isOpenImageOverlay, setIsOpenImageOverlay] = useState(false);
    const [currentImgIndx, setCurrentImgIndx] = useState();
    let playImg;

    function openImageOverlay(imgIndx) {
        setIsOpenImageOverlay(true);
        if(imgIndx) 
            setCurrentImgIndx(imgIndx);
    }

    function closeImageOverlay(){
        setIsOpenImageOverlay(false);
    }

    function nextImage(indx) {
        setAnimateImg(false);
        if(imageGallery.length > currentImgIndx) {
            setCurrentImgIndx(ind => ind + 1 );
            setAnimateImg(true);
        } 
    }

    function prevImage(indx) {
        setAnimateImg(false);
        if(currentImgIndx >= 1) {
            // let ind = currentImgIndx - 1;
            setCurrentImgIndx(ind => ind - 1);
            setAnimateImg(true);
        }
    }
    const onPlayImages = () => {
        setIsPlaying(true);
    }
    const pausePlayImages = () => {
        setIsPlaying(false);
        clearInterval(playImg);
      }
    
    const playImages = () => isPlaying ? pausePlayImages() : onPlayImages();


    useEffect(() => {
        if(isPlaying) {
            playImg = window.setInterval(() => {
            if(imageGallery.length >= currentImgIndx) {
               setCurrentImgIndx(preIndx=>preIndx + 1);
            }
            else {
                setCurrentImgIndx(1);
            }
            }, timeInterval ? timeInterval: 4000);
            return () => window.clearTimeout(playImg);
        }
      }, [isPlaying, currentImgIndx]);
    


    return (
        <>
            {
                imageGallery && imageGallery.length > 0 ? ( 
                    <div className="fb">
                        { imageGallery.map((item, index) => {
                            return(
                                <div className='fb__item img-fadeIn' width={imageHeight ? imageHeight+'px': '235px'} height={imageWidth ? imageWidth+'px': '235px'} key={'item-'+index} onClick={() => openImageOverlay(index+1) }>
                                    {
                                        imageKey ? (
                                            <img width={imageHeight ? imageHeight+'px': '235px'} height={imageWidth ? imageWidth+'px': '235px'} src={item[imageKey]} alt={'item-'+item[imageKey]} />
                                        ) : (
                                            <img width={imageHeight ? imageHeight+'px': '235px'} height={imageWidth ? imageWidth+'px': '235px'} src={item} alt={'item-'+item} />
                                        )
                                    }
                                </div>
                            )
                        })}
                    </div>
                ) : null
            }

            {
                isOpenImageOverlay && currentImgIndx ? (
                    <div className="fb-overlay">
                        <div className='fb-overlay__header'>
                            <span className='fb-overlay__header--item __text'>
                                <span> {currentImgIndx} / { imageGallery?.length }</span>    
                            </span>
                            <span className='fb-overlay__header--item __icon' >
                                <span onClick={() => playImages() }> 
                                    {isPlaying ? (
                                        <i className="bi bi-pause-fill"></i> 
                                    ) : (
                                        <i className="bi bi-play-fill"></i> 
                                    )} 
                                </span>
                            </span>
                            <span className='fb-overlay__header--item __icon' >
                                <span onClick={() => closeImageOverlay() }> 
                                    <i className="bi bi-x-lg"></i>
                                </span>
                            </span>
                        </div>
                        <div  className='fb-overlay__content'>
                            <div className='fb-overlay__content--icon'>
                                {
                                    currentImgIndx > 1 ? (
                                        <span onClick={() => prevImage(currentImgIndx)}> 
                                            <i className="bi bi-caret-left-fill"></i>
                                        </span>
                                    ) : null
                                }
                            </div>
                            <div className='fb-overlay__content--img'>
                                {
                                    currentImgIndx >= 0 && imageKey ? (
                                        <img className={animateImg ? 'img-fadeIn': ''} src={imageGallery[currentImgIndx-1][imageKey]} />
                                    ): (
                                        <img className={animateImg ? 'img-fadeIn': ''} src={imageGallery[currentImgIndx-1]} />
                                    )
                                }
                            </div>
                            <div className='fb-overlay__content--icon'>
                                {
                                    (imageGallery.length) > currentImgIndx ? (
                                        <span onClick={() => nextImage(currentImgIndx)}> 
                                            <i className="bi bi-caret-right-fill"></i>
                                        </span>
                                    ) : null
                                }

                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
       
    )
  }

  export default FancyBox;