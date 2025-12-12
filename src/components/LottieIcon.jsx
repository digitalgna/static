import Lottie from 'lottie-react';

const LottieIcon = ({ animationData, className = '', loop = true, autoplay = true }) => {
  return (
    <div className={`lottie-icon ${className}`}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieIcon;

