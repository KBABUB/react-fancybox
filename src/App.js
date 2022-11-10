import './App.css';
import FancyBox from './FancyBox';

function App() {

  const images = [
      {   id: 1,
          image: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
      },
      {   id: 2,
          image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'
      },
      {   id: 3,
          image: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320'
      },
      {   id: 4,
          image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
  ];


  const imagesOO = [
    'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
     'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg',
    'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
    'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    
]

  return (
    <div className="App">
      <FancyBox galleryImages={images} imgKey='image' imgHeight='200' imgWidth='200' interval='3000' />

{/* <hr /> */}
      {/* <FancyBox galleryImages={imagesOO} imgHeight='200' imgWidth='200' /> */}
    </div>
  );
}

export default App;
