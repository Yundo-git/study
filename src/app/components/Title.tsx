interface TitleProps {
  pageName: string;
}

export const Title: React.FC<TitleProps> = ({ pageName }) => {
  return (
    <>
      <h1 className="text-title px-7 pb-7 max-lg:px-4 text-primary">
        {pageName}
      </h1>
      <div className="flex gap-4 px-7 max-lg:px-4">
        <div className="w-[50vw] h-[0.5vh] bg-primary" />
        <div className="w-[50vw] h-[0.5vh]  bg-primary" />
      </div>
    </>
  );
};
