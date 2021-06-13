import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {db , storage} from "./firebase";

function ImageUpload() {


    const [image,setImage] = useState(null);
    const [progress,setProgress] = useState(0);
    const [caption,setCaption] = useState('');

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
       const  uploadTask = storage.ref(`images/${image.name}`).put(image);


       uploadTask.on(
           "state_changed",
           (snapshot) => {
               //progress function..
               const progress = math.round(
                   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
               );
               setProgress(progress);
           }
       )
    }


    return (
        <div>

             {/*caption,file pick,post button */}


             <input type="text" placeholder="Enter a caption" onChange={event => setCaption(event.target.value)} value={caption}/>
             <input type="file" onChange={handleChange} />
                 <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload
 {/*caption,file pick,post button */}