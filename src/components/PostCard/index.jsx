import './styles.css'
export const PostCard = ({title, cover, body, id}) => (
    <div className='post'>
    <img src={cover} alt={title} />
      <div className="post-content">
        <h5>{id}</h5>
        <h1>{title}</h1>
        <h3>{body}</h3>
      </div>  
  </div> 
    )
