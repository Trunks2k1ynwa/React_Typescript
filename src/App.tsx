import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Permissions } from './utils/enum';

function displayReview(totalReivew: number, name: string, primiumUser?: boolean) {
  return (
    <>
      Review totalReivew <strong>{totalReivew}</strong> | Last reviewed by {''}
      <strong>{name}</strong>
      {primiumUser ? 'ksà' : 'đsà'}
    </>
  );
}
// const obj:{}={}

// Optional: Không bắt buộc
// name? parameter không bắt buộc
// const travelItem:image,name,totalReview, rating, location,price,date,departture, features:wifi,parking, ofter
const travelItem: {
  image: string;
  name: string;
  totalReview: number;
  rating: number;
  location: number;
  price: number;
  date: string | number; //union
  departure: string;
  contact: [number, string];
  permission: Permissions;
  features: {
    wifi: boolean;
    parking: boolean;
    ofter: boolean;
  };
}[] = [
  {
    image: 'abc.jpg',
    name: 'Tour1',
    totalReview: 1,
    rating: 5,
    location: 10,
    price: 230,
    permission: Permissions.Admin,
    date: '12/2/2013',
    departure: 'ksạkkfjk',
    contact: [1124324, 'sfsđà'],
    features: {
      wifi: true,
      parking: true,
      ofter: true,
    },
  },
];

type Age = 18 | 30 | 40; //Literal type
const user: {
  firstname: string;
  lastname: string;
  isStudent: boolean;
  school: (string | number)[];
  number: number[];
  age: Age;
} = {
  firstname: 'Le',
  lastname: 'Anh tuan',
  isStudent: false,
  school: ['haui', 'bka', 'neu'],
  number: [2, 45, 435, 53],
  age: 18,
};
function App() {
  const [count, setCount] = useState(0);
  const reviews: {
    name: string;
    primiumUser: boolean;
  }[] = [
    {
      name: 'reviewer',
      primiumUser: false,
    },
    {
      name: 'reviewer abc',
      primiumUser: true,
    },
  ];

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
