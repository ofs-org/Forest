export function Climate() {
  return (
    <div className="container flex justify-center md:justify-start pt-4">
      <div className="bg-verde-900 inline-flex items-center rounded-md">
        <span className="-left-1 bg-verde-200 block relative rounded-full size-2"></span>
        <div className="divide-verde-800 divide-x-2 flex rounded-md text-verde-300">
          <div className="capitalize px-4 py-2">segunda</div>
          <div className="px-4 py-2">25°</div>
          <div className="px-4 py-2">⛅</div>
        </div>
      </div>
    </div>
  );
}
