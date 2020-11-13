// import './style.scss'

import InnerCarousel from '../InnerCarousel'

function Carousel({title, albums}) {
  return (
    <div>
      <h2>{title}</h2>
      <InnerCarousel albums={albums} />
    </div>
  );
}

export default Carousel;