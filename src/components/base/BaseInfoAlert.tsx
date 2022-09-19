function BaseInfoAlert({ title, description }: any) {
  return (
    <div
      className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 rounded-lg"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default BaseInfoAlert;
