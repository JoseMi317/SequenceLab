import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUrl, setUrl } from '../../redux/urlSlice';

const UrlPreviewTab = () => {
  const dispatch = useDispatch();
  const url = useSelector(selectUrl); // Esto accede a state.url.url

  const handleChange = (e) => {
    dispatch(setUrl(e.target.value));
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm text-white">Ingresa una URL:</label>
      <input
        type="url"
        value={url}
        onChange={handleChange}
        placeholder="https://..."
        className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700 outline-none"
      />
    </div>
  );
};

export default UrlPreviewTab;
