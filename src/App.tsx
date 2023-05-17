import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function displayReview(totalReivew: number, name: string, primiumUser?: boolean) {
  return (
    <>
      Review totalReivew <strong>{totalReivew}</strong> | Last reviewed by {''}
      <strong>{name}</strong>
      {primiumUser ? 'ksà' : 'đsà'}
    </>
  );
}

//
const user: {
  firstname: string;
  lastname: string;
  isStudent: boolean;
  school: (string | number)[];
  number: number[];
} = {
  firstname: 'Le',
  lastname: 'Anh tuan',
  isStudent: false,
  school: ['haui', 'bka', 'neu'],
  number: [2, 45, 435, 53],
};
function App() {
  const [count, setCount] = useState(0);
  const reviews = [
    {
      name: 'reviewer',
      primiumUser: false,
    },
    {
      name: 'reviewer abc',
      primiumUser: true,
    },
  ];

  // Optional: Không bắt buộc
  // name? parameter không bắt buộc
  return (
    <div className="App">
      <div className="review">
        <div className="review-image">
          <img
            src="https://images.unsplash.com/photo-1684166251886-5c4fbb1d3c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="review-info">{displayReview(reviews.length, reviews[0].name, reviews[0].primiumUser)}</div>
      </div>
    </div>
  );
}

export default App;
