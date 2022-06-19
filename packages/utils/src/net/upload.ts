export const uploadFile = async (file: File, url: string) => {
  const form = new FormData();
  form.append('file', file);
  return fetch(url, {
    method: 'POST',
    body: form,
  });
};
