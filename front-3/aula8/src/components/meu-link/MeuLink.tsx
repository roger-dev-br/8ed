import { Link } from "@mui/material";

interface MeuLinkProps {
    titulo: string;
    url: string;
}

const MeuLink: React.FC<MeuLinkProps> = ({ titulo, url }) => {
  return (
    <>
      <Link variant="body2" href={url} sx={{ p: 2 }}>
        { titulo }
      </Link>
      {/*
        <Link to={url}>{ titulo }</Link>
  */}
    </>
  );
};

export default MeuLink;
