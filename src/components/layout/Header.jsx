import React, { useState, useRef } from 'react';
import { selectTicker, setProperty } from '../../redux/tickerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = () => {
const dispatch = useDispatch();
  const ticker = useSelector(selectTicker);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(ticker.TickerName);
  const inputRef = useRef(null);

  useEffect(() => {
    setTitle(ticker.TickerName);
  }, [ticker.TickerName]);

  const handleEditClick = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (title !== ticker.TickerName) {
      dispatch(setProperty({ key: ["TickerName"], value: title }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      inputRef.current.blur();
    }
  };

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            className="text-lg font-semibold border border-indigo-600 px-4 py-1 rounded-xl bg-gray-800 text-white outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <>
            <h1 className="text-lg font-semibold px-6 rounded-xl">{title}</h1>
            <button onClick={handleEditClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 hover:text-indigo-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="space-x-4">
        <button className="bg-indigo-900 px-6 py-1 rounded-2xl">Publish</button>
        <button className="bg-blue-500 px-6 py-1 rounded-2xl">Save Changes</button>
      </div>
    </header>
  );
};

export default Header;
