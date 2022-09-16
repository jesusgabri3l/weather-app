// Configuration for the slider
const getSliderSettings = (locations: any) => {
  return {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: locations.length < 3 ? 1 : 3,
    slidesToScroll: 1,
    centerPadding: '0px',
    centerMode: true,
    focusOnSelect: true,
    adapativeHeight: true,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: locations.length < 3 ? 1 : 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};
export default getSliderSettings;
