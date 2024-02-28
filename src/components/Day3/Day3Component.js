import { HeaderComponent } from './HeaderComponent'

function Day3Component () {
  // CONTENT DEFINITIONS
  const articleObject = {
    title: "About",
    content: "Lorem ipsum",
  }

  const menuItems = ["About", "Home", "Blog", "content"];

  // END OF CONTENT DEFINITIONS
  return(
    <div className={'blog-container'} style={{width: "100%"}}>
      <h3 style={{textAlign: 'center'}}>Day 3 component</h3>
      <HeaderComponent menuItems={menuItems} />
      {/*<MainComponent />*/}
      {/*<FooterComponent />*/}
    </div>
  )
}

export { Day3Component };
