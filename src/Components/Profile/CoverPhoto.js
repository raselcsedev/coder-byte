import { useState } from "react";
import React from 'react'
import ImageUploading from 'react-images-uploading';



const CoverPhoto = () => {

  const [images, setImages] = useState([]);
//   const maxNumber = 69;//maximum image upload
  const onChange = (imageList) => {
    setImages(imageList)
  }


  return (
    <div style={{ width: '60%', margin: 'auto', marginTop: '5%' }}>
      <h3 style={{textAlign:"center",margin:"5%"}}>Upload Images</h3>
      <ImageUploading
        // multiple
        value={images}
        onChange={onChange}
        // maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (

          <div className="upload__image-wrapper">

            <div style={{ marginBottom: '5%' }}>
             
               
                <button onClick={onImageUpload} primary>Add Images</button>
            </div>

          

                {imageList.map((image, index) => (

                  <div>
                    <div style={{ margin: '5%' }} key={index} className="image-item">
                    <img bordered rounded style={{ marginBottom: '3%' }} src={image['data_url']} />
                    <div className="image-item__btn-wrapper">
                      <button negative basic onClick={() => onImageRemove(index)}>X</button>
                    </div>
                  </div>
                  </div>
                
                ))}
           

          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default CoverPhoto;