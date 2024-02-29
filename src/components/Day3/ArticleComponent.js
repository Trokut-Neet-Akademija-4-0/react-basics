import './ArticleStyling.scss'
function ArticleComponent(props){
  let content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam architecto autem blanditiis corporis dignissimos ducimus ea facere fugiat harum in iusto, labore mollitia officia porro quo, repellat rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam architecto autem blanditiis corporis dignissimos ducimus ea facere fugiat harum in iusto, labore mollitia officia porro quo, repellat rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam architecto autem blanditiis corporis dignissimos ducimus ea facere fugiat harum in iusto, labore mollitia officia porro quo, repellat rerum?";
  if(props.article){
    content = props.article;
  }
  return(
  <div className={'article'}>
    <h2>Title</h2>
    <div className={'content'}>
      {content}
    </div>
  </div>
  )
}

export { ArticleComponent }
