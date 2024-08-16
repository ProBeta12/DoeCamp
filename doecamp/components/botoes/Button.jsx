import Link from "next/link";

function Button({ url, classes, texto }) {
  return (
    <Link href={url} className={classes}>
      {texto}
    </Link>
  );
}

export default Button;
