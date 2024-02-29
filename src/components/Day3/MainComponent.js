import './MainComponent.scss'
import { SidebarComponent } from './SidebarComponent'
import { ArticleComponent } from './ArticleComponent'

function MainComponent () {
  return (
    <div className={'main-container'} >
      <SidebarComponent />
      <ArticleComponent />
    </div>
  )
}

export { MainComponent }
