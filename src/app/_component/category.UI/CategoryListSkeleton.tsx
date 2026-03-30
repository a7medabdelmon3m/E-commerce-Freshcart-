export default function CategoriesSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col p-4 rounded-lg justify-center items-center gap-3 shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] animate-pulse"
        >
          <div className="w-20 h-20 rounded-full bg-main-color-subtle"></div>
          
          <div className="h-4 w-16 bg-main-color-subtle rounded"></div>
        </div>
      ))}
    </div>
  );
}