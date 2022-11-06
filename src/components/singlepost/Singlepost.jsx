import './singlepost.css'

const Singlepost = () => {
    return (
        <div className='singlepost'>
            <div className="singlepostWrapper">
                <img src="https://media.istockphoto.com/photos/canadian-rockies-banff-national-park-dramatic-landscape-picture-id1342152935?b=1&k=20&m=1342152935&s=170667a&w=0&h=q9-vhO5MC7zwaxX8_zFUiqMnQJ5udMjEBf0npeCCAGs=" alt="" className="singlePostImg" />
                <h1 className="singlepostTitle">
                    Title Here
                    <div className="singlepostEdit">
                        <i class="singlepostIcon fa-regular fa-pen-to-square"></i>
                        <i class="singlepostIcon fa-regular fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlepostInfo">
                    <span className='singlepostAuthor'>Author: <b>Name</b></span>
                    <span className='singlepostDate'>1 hour ago</span>
                </div>
                <p className='singlepostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa voluptas minima ipsam illo, laboriosam rem assumenda, voluptate doloribus explicabo deserunt quas? Doloribus nisi minus quasi sed in amet odio quisquam voluptatibus porro voluptatem commodi omnis voluptatum velit at ipsam laboriosam aspernatur dolor cupiditate ut, distinctio quaerat totam cumque vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore harum et dolor quidem voluptatibus accusantium atque soluta vero laborum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam culpa veritatis voluptatum vitae? Perferendis ratione commodi laboriosam. Dolores cumque facilis libero delectus earum eveniet minus, rerum cupiditate molestias quam fuga unde exercitationem saepe pariatur perferendis facere non rem sed vero reiciendis iusto ipsa voluptate asperiores in? Nulla saepe sed adipisci?
                </p>
            </div>
        </div>
    )
}

export default Singlepost