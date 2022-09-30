import './header.css';

interface HeaderProps {
  titulo: string;
}

const Header: React.FC<HeaderProps> = ({ titulo }) => {
  return (
    <>
      <h1 className='titulo'>{ titulo }</h1>
      <hr />
    </>
  );
};

export default Header;
