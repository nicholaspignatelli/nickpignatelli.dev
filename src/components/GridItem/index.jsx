const GridItem = ({ children, gridArea, id, className }) => {
  return (
    <div className={className} gridArea={gridArea} id={id}>
      {children}
    </div>
  );
};

export default GridItem;
