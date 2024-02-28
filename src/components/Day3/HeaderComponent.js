import './HeaderComponent.scss'
function HeaderComponent(props){
  return (
    <nav className={'header-container'}>
      <ul className={'nav-list'}>
      {props.menuItems.map(item =>
        <li>{item}</li>
      )}
      </ul>
    </nav>
  )
}
export { HeaderComponent }
