import jsmediatags from 'jsmediatags';

const getMetadata = (track) =>
  new Promise((res, rej) => {
    new jsmediatags.Reader(track).read({
      onSuccess({ tags }) {
        if (!tags.picture) {
          res({
            artist: tags.artist,
            genre: tags.genre,
            title: tags.title,
            year: tags.year
          });
        }
        const { data } = tags.picture;
        const base64String = new Uint8Array(data);
        const arrayString = String.fromCharCode.apply(null, base64String);
        const imageSrc = `data:image/jpg;base64,${btoa(arrayString)}`;
        res({
          artist: tags.artist,
          genre: tags.genre,
          title: tags.title,
          year: tags.year,
          image: imageSrc
        });
      },
      onError(error) {
        rej(error.message);
      }
    });
  });

export default getMetadata;
