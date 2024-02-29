import './MainComponent.scss'
import { SidebarComponent } from './SidebarComponent'
import { ArticleComponent } from './ArticleComponent'

function MainComponent (props) {
  const description = props.description;
  return (
    <div className={'main-container'} >
      <SidebarComponent />
      <ArticleComponent content={description} />
    </div>
  )
}

export { MainComponent }
