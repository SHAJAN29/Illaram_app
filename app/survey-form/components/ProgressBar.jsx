export default function ProgressBar({ step }) {
  return (
    <div className="flex justify-between mb-6">
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`flex-1 h-2 mx-1 rounded-full ${
            step >= s ? 'bg-green-500' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
