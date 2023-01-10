const IconLink = ({ url, children, className, target }) => {
  return (
    <a className={className} href={url} target={target ? target : null}>
      {children}
    </a>
  );
};

export default IconLink;
