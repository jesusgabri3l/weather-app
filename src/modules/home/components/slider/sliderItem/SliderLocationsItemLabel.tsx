interface Props {
  label: string;
  measure: number;
  unit: string;
  getColor?: boolean;
}
function SliderLocationsItemLabel({ label, measure, unit, getColor = false }: Props) {
  const getColorByTemperature = (temp: number) => {
    if (measure <= 10) return 'text-super-cold';
    if (measure > 10 && temp <= 20) return 'text-cold';
    if (measure > 20 && temp <= 30) return 'text-avg';
    if (measure > 30) return 'text-hot';
  };
  return (
    <div className="flex items-center">
      <p className="text-gray text-base font-medium">{label}: </p>
      <p
        className={`text-lg ml-2 font-bold md:text-xl ${
          getColor ? getColorByTemperature(measure) : 'text-white'
        }`}
      >
        {`${measure} ${unit}`}
      </p>
    </div>
  );
}

export default SliderLocationsItemLabel;
