export default function Custom500() {
  return (
    <section className="h-screen dark:bg-slate-300">
      {/* 
  <div
    className="absolute top-50 left-[200px] w-[700px] h-[700px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full 
          mix-blend-multiply filter blur-3xl opacity-30"
  ></div>
  <div
    className="absolute top-0 right-[300px] w-96 h-96 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full 
          mix-blend-multiply filter blur-3xl opacity-30"
  ></div> 
  <div className="absolute rounded-full bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 mix-blend-multiply filter blur-3xl opacity-30"></div>
  */}
      <div className="flex items-center justify-center w-full h-full divide-x-2 divide-slate-900/80">
        <span className="pr-2 text-3xl font-bold">500</span>
        <span className="pl-2 text-lg text-slate-500">
          Internal Server Error
        </span>
      </div>
    </section>
  );
}
