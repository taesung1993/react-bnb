interface Props {
  width: string;
  height: string;
}

function PostIcon({ width, height }: Props) {
  return (
    <svg
      enable-background="new 0 0 1024 1024"
      viewBox="0 0 1024 1024"
      role="img"
      aria-hidden="false"
      focusable="false"
      style={{ height, width, display: "block" }}
    >
      <path
        d="m984 1024h-944c-22.1 0-40-17.9-40-40v-944c0-22.1 17.9-40 40-40h944c22.1 0 40 17.9 40 40v944c0 22.1-17.9 40-40 40z"
        fill="#fff"
      ></path>
      <g fill="#00c73c">
        <path d="m0 198h1024v7h-1024z"></path>
        <path d="m0 405h1024v7h-1024z"></path>
        <path d="m0 612h1024v7h-1024z"></path>
        <path d="m0 819h1024v7h-1024z"></path>
      </g>
      <path
        d="m307 537 188.2 324.1c7.5 12.9 26.1 12.9 33.6 0l188.2-324.1z"
        fill="#f4e49d"
      ></path>
      <path d="m307 0h410v537h-410z" fill="#00e831"></path>
      <path d="m392 0h240v537h-240z" fill="#00c73c"></path>
      <path
        d="m392 148.5v240h240v-240zm188 182h-47.8l-41.2-62.8v62.8h-47v-124h45.8l42.2 62.4v-62.4h48z"
        fill="#fff"
      ></path>
      <path d="m632 0h85v537h-85z" fill="#00a32a"></path>
      <path
        d="m528.8 861.1 188.2-324.1h-85l-119.5 333.7c6.3-.1 12.6-3.3 16.3-9.6z"
        fill="#e0c141"
      ></path>
      <path
        d="m448.8 781.2 46.4 79.9c7.5 12.9 26.1 12.9 33.6 0l46.4-79.9z"
        fill="#2d2d2d"
      ></path>
    </svg>
  );
}

export default PostIcon;
