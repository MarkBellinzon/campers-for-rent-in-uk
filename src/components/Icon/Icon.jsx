import sprite from '../../assets/image/sprite.svg'

const Icon = ({ size, name }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
};

export default Icon;
