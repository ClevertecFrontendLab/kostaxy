import imgLarge from '../../assets/svg/logo/Cleverfit.svg';

type Props = { logoWidth: number }
const Logo = ({ logoWidth }: Props) => {

  return (
    <div className='logo-container'>
      <img style={{ width: logoWidth }} src={imgLarge} alt="logo" />
    </div>
  );
};
export default Logo