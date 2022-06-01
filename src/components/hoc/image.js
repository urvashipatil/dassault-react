export function Image(props) {
  return <img {...props} />;
}

export function WithBorder(Component) {
  return (props) => {
    return <Component style={{ border: "2px solid red" }} {...props} />;
  };
}

export function WithTransparent(Component) {
  return (props) => {
    console.log(props);
    return <Component {...props} className="transparent" />;
  };
}
