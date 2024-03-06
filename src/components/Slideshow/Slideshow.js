/** Here you can write the code for your slideshow component
 *  you can use the images placed in the slideshowData file
 */
import { useEffect, useState } from 'react'
import { slidesList } from './slideshowData'
import './Slideshow.scss'


function Slideshow (){

  const [sliderIndex, setSliderIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slidesList[0]);

  // async function fetchContent(fetchURL){
  //   const response = await fetch(fetchURL);
  //   const result = await response.json();
  //   console.log("FETCH API Result:", result);
  // }

  useEffect(() => {
    // do something on initial component mount
    // Here you can use fetch from API
    // const fetchURL = "https://swapi.dev/api/people/1"
    // fetchContent(fetchURL);
    console.log("This shall fire only once")

  }, []);

  useEffect(() => {

    console.log("SliderIndex State changed to=> ", sliderIndex);
    console.log("current slide", slidesList[sliderIndex]);
    setCurrentSlide(slidesList[sliderIndex])

    // do something on sliderIndex changes
  }, [sliderIndex]);

  return(
      <div className={'slideshow-wrapper'}>
        <h1>Slideshow</h1>
        <div className="img-wrapper">
          <button className={'prev'} onClick={()=>sliderIndex > 0 && setSliderIndex(sliderIndex - 1)}> ← </button>
          <img src={currentSlide.url} alt={currentSlide.alt}/>
          <button className={'next'} onClick={()=> sliderIndex < slidesList.length - 1  && setSliderIndex(sliderIndex + 1)}> → </button>
        </div>
        <div className={'ticks'}>
          {slidesList.map((item, index) =>
              <span className={index === sliderIndex && 'active'} onClick={() => setSliderIndex(index)}></span>
          )}
        </div>
      </div>
  )
}

export { Slideshow }
