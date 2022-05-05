const createFormData = (event, preset) => {
  const form = event.currentTarget;
  const fileInput = Array.from(form.elements).find(
    ({ name }) => name === 'file'
  );
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);
  formData.append('upload_preset', preset);
  return formData;
};

export default createFormData;
