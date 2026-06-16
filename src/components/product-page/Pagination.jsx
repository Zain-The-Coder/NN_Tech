export default function Pagination() {
  return (
    <div className="flex justify-center gap-2 mt-10">
      <button>{'<'}</button>
      <button className="bg-primary-fixed px-3">1</button>
      <button>2</button>
      <button>3</button>
      <button>{'>'}</button>
    </div>
  );
}