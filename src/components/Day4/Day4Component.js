import { StateExampleComponent } from './StateExampleComponent'
import { HeaderComponent } from '../Day3/HeaderComponent'
import { MainComponent } from '../Day3/MainComponent'
import { FooterComponent } from '../Day3/FooterComponent'
import { articlesList } from './articlesData';
import { SidebarComponent } from '../Day3/SidebarComponent'
import { ArticleComponent } from '../Day3/ArticleComponent'


const menuItems = ["About", "Home", "Blog", "content"];


function Day4Component(){
  // START BUSINESS LOGIC


  // END BUSINESS LOGIC
  return(
    <div className={'day4-component'}>
      <hr/>
      <h3 style={{textAlign: 'center'}}>Day 4 Component</h3>
      <StateExampleComponent />
      <HeaderComponent menuItems={menuItems} />
      <MainComponent articles={articlesList} showButton={true} />
      {/*<SidebarComponent />*/}
      {/*<ArticleComponent description={props.article?.description} name={props.article?.name} />*/}
      <FooterComponent />
    </div>
  )
}

export { Day4Component }
