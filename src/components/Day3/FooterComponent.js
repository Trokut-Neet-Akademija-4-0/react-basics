
function FooterComponent(){

  return(
    <nav className={'header-container'}>
      <ul className={'nav-list'}>
        <li>Copyright 2024</li>
        <li>Privacy</li>
        <li>Contact</li>
        {/*{props.menuItems.map(item =>*/}
        {/*  <li>{item}</li>*/}
        {/*)}*/}
      </ul>
    </nav>
  )
}

export { FooterComponent }
