import React from 'react'

const ImageGallery = () => {

    let imgGallery = [
        { src: './CategoryImages/cloth.jpg', title: 'Clothes' },
        { src: './CategoryImages/watches.jpg', title: 'Watches' },
        { src: './CategoryImages/electronics.jpg', title: 'Electronics' },
        { src: './CategoryImages/furniture.jpg', title: 'Furniture' },
    ]
    return 
    (<div className='container mx-auto md:flex m-2 shadow-lg rounded-md overflow-hidden 
    relative items-center justify-center gap-6 w-[100%]'>

            {imgGallery.map((index) =>
            (
            <div>
                    <div> 
                    <img src={index.src}  className="rounded-md"/>
                         <div className='font-bold text-center '>{index.title}</div>

                    </div>
                </div>
            )
            )}
        </div>
    )
}
export default ImageGallery