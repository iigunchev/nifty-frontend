const createFormData = (file, preset) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', preset);
  return formData;
};

export default createFormData;
