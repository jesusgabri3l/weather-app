interface Props {
  title: string;
  description: string;
}

function BaseInfoAlert({ title, description }: Props) {
  return (
    <div
      className="bg-sky-400/10 border border-sky-400/30 text-sky-200 px-6 py-5 rounded-2xl"
      role="alert"
    >
      <p className="font-bold" data-testid="title">
        {title}
      </p>
      <p className="text-sm text-slate-400 mt-1" data-testid="description">
        {description}
      </p>
    </div>
  );
}

export default BaseInfoAlert;
