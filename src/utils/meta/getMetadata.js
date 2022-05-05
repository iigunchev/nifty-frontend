import jsmediatags from 'jsmediatags';

const getMetadata = (track) =>
  new Promise((res, rej) => {
    new jsmediatags.Reader(track).read({
      onSuccess({ tags }) {
        console.log(track);
        if (!tags.picture) {
          res({
            artist: tags.artist,
            genre: tags.genre,
            title: tags.title,
            year: tags.year
          });
        }
        const { data, format } = tags.picture;
        const blob = new Blob([new Uint8Array(data)], { type: format });
        const imageSrc = URL.createObjectURL(blob);
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
