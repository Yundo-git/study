interface TitleProps {
  pageName: string;
}

export const Title: React.FC<TitleProps> = ({ pageName }) => {
  return (
    <>
      <h1 className="text-title mb-8 text-primary">{pageName}</h1>
      <div className="flex gap-4">
        <div className="w-[50vw] h-[1vh] bg-primary" />
        <div className="w-[50vw] h-[1vh]  bg-primary" />
      </div>
    </>
  );
};
