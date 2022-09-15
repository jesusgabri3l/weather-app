import Slider from 'react-slick';

import location from '../../assets/location.svg';
function HomeView() {
  const settings = {
    className: 'flex-center',
    centerMode: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 2,
    speed: 500,
  };
  return (
    <div className="h-screen p-12">
      <div>
        <h1 className="text-white text-3xl font-bold tracking-wider inline-block">
          <img
            src={location}
            alt="illustration"
            className="inline-block mr-4"
            width="30"
            height="30"
          />
          Your favourite locations
        </h1>
      </div>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div className="bg-element text-primary p-6" key={item}>
            <h3>{item}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeView;
