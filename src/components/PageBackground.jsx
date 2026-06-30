
export default function PageBackground() {
  return (
    <div className="-mb-62 absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Image using the index.css class to avoid style attribute */}
      <div className="absolute  inset-0 bg-cover bg-center opacity-[0.23] header-bg-image"></div>
      
      {/* Glow circles */}
      <div className="absolute rounded-full bg-teal-500/5 w-75 h-75 blur-[150px] -top-10 -left-10"></div>
      <div className="absolute rounded-full bg-blue-500/5 w-125 h-125 blur-[150px] top-10 right-10"></div>
      <div className="absolute rounded-full bg-purple-500/5 w-100 h-100 blur-[120px] top-[30%] left-1/3"></div>
    </div>
  );
}
