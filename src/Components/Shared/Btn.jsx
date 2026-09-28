export default function Btn({ className = '', content, onClicK }) {
  return (
    <button
      type="button"
      aria-label={'click to get start'}
      className={`${className} cursor-pointer rounded-full p-[1rem_2rem] font-medium shadow-lg transition`}
      onClick={onClicK}
    >
      {content}
    </button>
  );
}
