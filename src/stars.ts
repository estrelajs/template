const createStars = (max: number) => {
  const stars: string[] = [];
  const random = () => Math.floor(Math.random() * 2000);
  for (let i = 0; i < max; i++) {
    stars.push(`${random()}px ${random()}px #fff`);
  }
  return stars.join(', ');
};

const createStarLayer = (layer: 1 | 2 | 3) => {
  return `
    #stars${layer} {
      width: ${layer}px;
      height: ${layer}px;
      background: transparent;
      box-shadow: ${createStars(400 / layer)};
      animation: animStar ${layer * 50}s linear infinite;

      &:after {
        content: ' ';
        position: absolute;
        top: 2000px;
        width: ${layer}px;
        height: ${layer}px;
        background: transparent;
        box-shadow: ${createStars(400 / layer)};
      }
  }
  `;
};

export const getStarStyle = () => {
  return `
    ${createStarLayer(1)}
    ${createStarLayer(2)}
    ${createStarLayer(3)}

    @keyframes animStar {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-2000px);
      }
    }
  `;
};
