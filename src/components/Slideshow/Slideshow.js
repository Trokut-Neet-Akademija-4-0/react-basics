/** Here you can write the code for your slideshow component
 *  you can use the images placed in the slideshowData file
 */
import { useEffect, useState } from 'react'
import { slidesList } from './slideshowData'


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
      <>
        <h1>Slideshow</h1>
        <img src={currentSlide.url} alt={currentSlide.alt}/>
        <button onClick={()=> setSliderIndex(sliderIndex - 1)}> Previous Slide</button>
        <button onClick={()=> sliderIndex < slidesList.length - 1  && setSliderIndex(sliderIndex + 1)}> Next Slide</button>
      </>
  )
}

export { Slideshow }
