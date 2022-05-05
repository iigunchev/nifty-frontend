import React from 'react';
import jsmediatags from 'jsmediatags';
import UploadWidget from '../../molecules/UploadWidget/UploadWidget';

function UploadTrackForm() {
  const handleChange = (e) => {
    const track = e.target.files[0];

    jsmediatags.read(track, {
      onSuccess(tag) {
        // let base64String = "";
        // for (let i = 0; i < data.length; i++) {
        //   base64String += String.fromCharCode(data[i]);
        // }
        console.log(tag.tags);
        if (!tag.tags.picture) {
          return tag.tags;
        }
        const { data } = tag.tags.picture;
        const base64String = new Uint8Array(data);
        const arrayString = String.fromCharCode.apply(null, base64String);
        const imageSrc = `data:image/jpg;base64,${btoa(arrayString)}`;

        console.log(imageSrc);
        return imageSrc;
      },
      onError(error) {
        console.log(':(', error.type, error.info);
      }
    });
  };
  console.log(handleChange);
  return (
    <div>
      <UploadWidget />
    </div>
  );
}

export default UploadTrackForm;
