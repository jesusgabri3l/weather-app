import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function SettingsView() {
  const { index } = useParams();
  const location = useSelector(
    (state: any) => state.location.yourLocations[parseInt(index as string)],
  );
  console.log(location);
  return (
    <div>
      <h1>{index}</h1>
    </div>
  );
}

export default SettingsView;
