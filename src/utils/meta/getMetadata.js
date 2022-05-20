import jsmediatags from 'jsmediatags';

export function blobToBase64(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

const getMetadata = (track) =>
  new Promise((res, rej) => {
    new jsmediatags.Reader(track).read({
      async onSuccess({ tags }) {
        if (!tags.picture) {
          return res({
            file: track,
            artist: tags.artist,
            genre: tags.genre,
            title: tags.title,
            year: tags.year
          });
        }
        const { data, format } = tags.picture;
        const blob = new Blob([new Uint8Array(data)], { type: format });

        return res({
          file: track,
          artist: tags.artist,
          genre: tags.genre,
          title: tags.title,
          year: tags.year,
          image: blob
        });
      },
      onError(error) {
        rej(error.message);
      }
    });
  });

export default getMetadata;
