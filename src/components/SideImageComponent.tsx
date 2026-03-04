const SideImageComponent = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="col-span-5 flex flex-col justify-center items-center bg-slate-100">
      <img src={src} alt={alt} />
      <p className="font-semibold my-5 px-10">
        Connect Shortfox to the tools you use every day
      </p>
    </div>
  );
};

export default SideImageComponent;
