import './post.css'

const Post = () => {
  return (
    <div className='post'>
        <img src="https://media.istockphoto.com/photos/canadian-rockies-banff-national-park-dramatic-landscape-picture-id1342152935?b=1&k=20&m=1342152935&s=170667a&w=0&h=q9-vhO5MC7zwaxX8_zFUiqMnQJ5udMjEBf0npeCCAGs=" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Title Here</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDescription'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, minus. Ducimus expedita rem sint beatae porro praesentium laudantium, illo accusantium ab quia eaque asperiores culpa, aliquam est repellendus tenetur voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptate. Voluptas illo quis obcaecati, sit quae accusantium hic. Laudantium, veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nihil modi facilis, incidunt saepe sed, tenetur eum beatae, dolor fugiat maxime iure labore ab aliquid? Blanditiis labore eveniet distinctio aspernatur!
        </p>
    </div>
  )
}

export default Post