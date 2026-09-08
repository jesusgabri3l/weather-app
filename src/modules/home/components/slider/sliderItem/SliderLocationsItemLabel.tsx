interface Props {
  label: string;
  measure: number;
  unit: string;
  getColor?: boolean;
  hero?: boolean;
}
function SliderLocationsItemLabel({
  label,
  measure,
  unit,
  getColor = false,
  hero = false,
}: Props) {
  const getColorByTemperature = (temp: number) => {
    if (measure <= 10) return 'text-super-cold';
    if (measure > 10 && temp <= 20) return 'text-cold';
    if (measure > 20 && temp <= 30) return 'text-avg';
    if (measure > 30) return 'text-hot';
  };
  return (
    <div className={hero ? 'flex flex-col items-start md:items-end' : 'flex items-center'}>
      <p className="text-gray text-base font-medium">{label}{hero ? '' : ':'}</p>
      <p
        className={`ml-2 font-bold ${hero ? 'weather-temp ml-0' : 'text-lg md:text-xl'} ${
          getColor ? getColorByTemperature(measure) : 'text-white'
        }`}
      >
        {`${measure} ${unit}`}
      </p>
    </div>
  );
}

export default SliderLocationsItemLabel;
