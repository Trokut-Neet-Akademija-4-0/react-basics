import { StateExampleComponent } from './StateExampleComponent'
import { HeaderComponent } from '../Day3/HeaderComponent'
import { MainComponent } from '../Day3/MainComponent'
import { FooterComponent } from '../Day3/FooterComponent'
const menuItems = ["About", "Home", "Blog", "content"];


function Day4Component(){
  return(
    <div className={'day4-component'}>
      <hr/>
      <h3 style={{textAlign: 'center'}}>Day 4 Component</h3>
      <StateExampleComponent />
      <HeaderComponent menuItems={menuItems} />
      <MainComponent />
      <FooterComponent />
    </div>
  )
}

export { Day4Component }
